import { fetchFBMP } from './apiFetchFBMC.js';

export async function chartSiteAbundance(site=false, species=false, htmlId='chart_div') {    

let container = d3.select(`#${htmlId}`);
container.selectAll("svg").remove();

// Specify the chart’s dimensions.
var SA_element_info = document.getElementById(htmlId);
var SA_positionInfo = SA_element_info.getBoundingClientRect();

let searchTerm = site ? `relabunSite=${site}` : '';
searchTerm += searchTerm ? '&' : '';
searchTerm += species ? `relabunSpecies=${species}` : '';

fetchFBMP('relabun', searchTerm).then(res => {

    let site_data = res.rows;

    // Set up the SVG dimensions
    var sa_width = SA_positionInfo.width;
    var sa_height = SA_positionInfo.height;

    console.log('width = ' + sa_width)

    // Set up the margins
    var sa_margin = { top: sa_height*0.05,
                    bottom: sa_height*0.1,
                    right: sa_width*0.05,  
                    left: sa_width*0.15 };

    // Calculate the inner dimensions of the plot
    var sa_innerWidth = sa_width - (sa_margin.left + sa_margin.right);
    var sa_innerHeight = sa_height - (sa_margin.top + sa_margin.bottom);

    var marginTop = sa_margin.top;
    var marginRight = sa_margin.right;
    var marginBottom = sa_margin.bottom;
    var marginLeft = sa_margin.left;

    var voronoi = false;

    // Create the positional scales.
    var x = d3.scaleLinear()
    .domain(d3.extent(site_data, d => d.relabunYear)).nice()
    .range([marginLeft, sa_width - marginRight]);

    var y = d3.scaleLinear()
    .domain([0, d3.max(site_data, d => d.relabunRelativeAbundance)]).nice()
    .range([sa_height - marginBottom, marginTop]);

    // Create the SVG container.
    var svg = d3
        .select(`#${htmlId}`)
        .append('svg')
        .attr("width", sa_width)
        .attr("height", sa_height)
        .attr("viewBox", [0, 0, sa_width, sa_height])
        .attr("style", "max-width: 100%; height: auto; overflow: visible; font: 12px sans-serif;");

    // Add the horizontal axis.
    svg.append("g")
        .attr("transform", `translate(0,${sa_height - marginBottom})`)
        .call(d3.axisBottom(x).ticks(sa_width / 80).tickSizeOuter(0));

    // Add the vertical axis.
    svg.append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(d3.axisLeft(y))
        .call(g => g.select(".domain").remove())
        .call(voronoi ? () => {} : g => g.selectAll(".tick line").clone()
            .attr("x2", sa_width - marginLeft - marginRight)
            .attr("stroke-opacity", 0.1))
        .call(g => g.append("text")
            .attr("y", 0 - (sa_margin.left/2))
            .attr("x", 0 - (sa_innerHeight / 2) - (marginBottom + marginTop)  )  
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .style("font-size", "12pt")
            .style("font-weight","bold")
            .text("Relative Abundance")
            .attr("transform", "rotate(-90)"));


    // Compute the points in pixel space as [x, y, z], where z is the name of the series.
    var points = site_data.map((d) => [x(d.relabunYear), y(d.relabunRelativeAbundance), d.relabunSpecies]);

    // An optional Voronoi display (for fun).
    if (voronoi) svg.append("path")
        .attr("fill", "none")
        .attr("stroke", "#ccc")
        .attr("d", d3.Delaunay
        .from(points)
        .voronoi([0, 0, sa_width, sa_height])
        .render());

    // Group the points by series.
    var groups = d3.rollup(points, v => Object.assign(v, {z: v[0][2]}), d => d[2]);

    // Draw the lines.
    var line = d3.line();
    var path = svg.append("g")
        .attr("fill", "none")
        .attr("stroke", "gray")
        .attr("stroke-width", 1)
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
    .selectAll("path")
    .data(groups.values())
    .join("path")
        .style("mix-blend-mode", "multiply")
        .attr("d", line);

    // Add an invisible layer for the interactive tip.
    var dot = svg.append("g")
        .attr("display", "none");

    dot.append("circle")
        .attr("r", 0);

    dot.append("text")
        .attr("text-anchor", "middle")
        .attr("y", -8);

    svg
        .on("pointerenter", pointerentered)
        .on("pointermove", pointermoved)
        .on("pointerleave", pointerleft)
        .on("touchstart", event => event.preventDefault());

    // When the pointer moves, find the closest point, update the interactive tip, and highlight
    // the corresponding line. Note: we don't actually use Voronoi here, since an exhaustive search
    // is fast enough.
    function pointermoved(event) {
    var [xm, ym] = d3.pointer(event);
    var i = d3.leastIndex(points, ([x, y]) => Math.hypot(x - xm, y - ym));
    var [x, y, k] = points[i];
    path.style("stroke", ({z}) => z === k ? null : "#ddd")
        .style("stroke-width",({z}) => z === k ? 4 : 1)
        .filter(({z}) => z === k).raise();
    dot.attr("transform", `translate(${sa_width},${y})`)
        .select("text")
        .text(k)
        .style("font-size",20)
        .style("font-weight","bold")
        .style("r",0);
    svg.property("value", site_data[i]).dispatch("input", {bubbles: true});
    }

    function pointerentered() {
    path.style("mix-blend-mode", null)
        .style("stroke", "#ddd")
        .style("stroke-width",1)
    dot.attr("display", null);
    }

    function pointerleft() {
    path.style("mix-blend-mode", "multiply")
        .style("stroke", null)
        .style("stroke-width",1);
    dot.attr("display", "none");
    svg.node().value = null;
    svg.dispatch("input", {bubbles: true});
    }
})
}