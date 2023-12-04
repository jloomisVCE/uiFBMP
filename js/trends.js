// Your data (replace this with your actual data)
var YearSurvey = [1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023]
var RelAbunEsts = [
    {"quantile":"50%", "species":"CAWA","year":1989,"RelativeAbundance":0.1803},
    {"quantile":"50%","species":"CAWA","year":1990,"RelativeAbundance":0.182},
    {"quantile":"50%","species":"CAWA","year":1991,"RelativeAbundance":0.0945},
    {"quantile":"50%","species":"CAWA","year":1992,"RelativeAbundance":0.1357},
    {"quantile":"50%","species":"CAWA","year":1993,"RelativeAbundance":0.116},
    {"quantile":"50%","species":"CAWA","year":1994,"RelativeAbundance":0.1012},
    {"quantile":"50%","species":"CAWA","year":1995,"RelativeAbundance":0.0738},
    {"quantile":"50%","species":"CAWA","year":1996,"RelativeAbundance":0.0985},
    {"quantile":"50%","species":"CAWA","year":1997,"RelativeAbundance":0.1263},
    {"quantile":"50%","species":"CAWA","year":1998,"RelativeAbundance":0.1096},
    {"quantile":"50%","species":"CAWA","year":1999,"RelativeAbundance":0.1206},
    {"quantile":"50%","species":"CAWA","year":2000,"RelativeAbundance":0.0802},
    {"quantile":"50%","species":"CAWA","year":2001,"RelativeAbundance":0.0895},
    {"quantile":"50%","species":"CAWA","year":2002,"RelativeAbundance":0.0699},
    {"quantile":"50%","species":"CAWA","year":2003,"RelativeAbundance":0.0567},
    {"quantile":"50%","species":"CAWA","year":2004,"RelativeAbundance":0.083},
    {"quantile":"50%","species":"CAWA","year":2005,"RelativeAbundance":0.0578},
    {"quantile":"50%","species":"CAWA","year":2006,"RelativeAbundance":0.0747},
    {"quantile":"50%","species":"CAWA","year":2007,"RelativeAbundance":0.0341},
    {"quantile":"50%","species":"CAWA","year":2008,"RelativeAbundance":0.0762},
    {"quantile":"50%","species":"CAWA","year":2009,"RelativeAbundance":0.0756},
    {"quantile":"50%","species":"CAWA","year":2010,"RelativeAbundance":0.0663},
    {"quantile":"50%","species":"CAWA","year":2011,"RelativeAbundance":0.1215},
    {"quantile":"50%","species":"CAWA","year":2012,"RelativeAbundance":0.1128},
    {"quantile":"50%","species":"CAWA","year":2013,"RelativeAbundance":0.1236},
    {"quantile":"50%","species":"CAWA","year":2014,"RelativeAbundance":0.0357},
    {"quantile":"50%","species":"CAWA","year":2015,"RelativeAbundance":0.0902},
    {"quantile":"50%","species":"CAWA","year":2016,"RelativeAbundance":0.0839},
    {"quantile":"50%","species":"CAWA","year":2017,"RelativeAbundance":0.0497},
    {"quantile":"50%","species":"CAWA","year":2018,"RelativeAbundance":0.0814},
    {"quantile":"50%","species":"CAWA","year":2019,"RelativeAbundance":0.0718},
    {"quantile":"50%","species":"CAWA","year":2020,"RelativeAbundance":0.0921},
    {"quantile":"50%","species":"CAWA","year":2021,"RelativeAbundance":0.0578},
    {"quantile":"50%","species":"CAWA","year":2022,"RelativeAbundance":0.0673},
    {"quantile":"50%","species":"CAWA","year":2023,"RelativeAbundance":0.0659}
    ] ;

  var RelAbunLCI = [
      {"quantile":"5%","species":"CAWA","year":1989,"RelativeAbundance":0.0069},
      {"quantile":"5%","species":"CAWA","year":1990,"RelativeAbundance":0.007},
      {"quantile":"5%","species":"CAWA","year":1991,"RelativeAbundance":0.0036},
      {"quantile":"5%","species":"CAWA","year":1992,"RelativeAbundance":0.0053},
      {"quantile":"5%","species":"CAWA","year":1993,"RelativeAbundance":0.0044},
      {"quantile":"5%","species":"CAWA","year":1994,"RelativeAbundance":0.0038},
      {"quantile":"5%","species":"CAWA","year":1995,"RelativeAbundance":0.0028},
      {"quantile":"5%","species":"CAWA","year":1996,"RelativeAbundance":0.0037},
      {"quantile":"5%","species":"CAWA","year":1997,"RelativeAbundance":0.0049},
      {"quantile":"5%","species":"CAWA","year":1998,"RelativeAbundance":0.0042},
      {"quantile":"5%","species":"CAWA","year":1999,"RelativeAbundance":0.0046},
      {"quantile":"5%","species":"CAWA","year":2000,"RelativeAbundance":0.0031},
      {"quantile":"5%","species":"CAWA","year":2001,"RelativeAbundance":0.0033},
      {"quantile":"5%","species":"CAWA","year":2002,"RelativeAbundance":0.0026},
      {"quantile":"5%","species":"CAWA","year":2003,"RelativeAbundance":0.0021},
      {"quantile":"5%","species":"CAWA","year":2004,"RelativeAbundance":0.0031},
      {"quantile":"5%","species":"CAWA","year":2005,"RelativeAbundance":0.0021},
      {"quantile":"5%","species":"CAWA","year":2006,"RelativeAbundance":0.0028},
      {"quantile":"5%","species":"CAWA","year":2007,"RelativeAbundance":0.0012},
      {"quantile":"5%","species":"CAWA","year":2008,"RelativeAbundance":0.0029},
      {"quantile":"5%","species":"CAWA","year":2009,"RelativeAbundance":0.0028},
      {"quantile":"5%","species":"CAWA","year":2010,"RelativeAbundance":0.0024},
      {"quantile":"5%","species":"CAWA","year":2011,"RelativeAbundance":0.0047},
      {"quantile":"5%","species":"CAWA","year":2012,"RelativeAbundance":0.0043},
      {"quantile":"5%","species":"CAWA","year":2013,"RelativeAbundance":0.0048},
      {"quantile":"5%","species":"CAWA","year":2014,"RelativeAbundance":0.0013},
      {"quantile":"5%","species":"CAWA","year":2015,"RelativeAbundance":0.0033},
      {"quantile":"5%","species":"CAWA","year":2016,"RelativeAbundance":0.003},
      {"quantile":"5%","species":"CAWA","year":2017,"RelativeAbundance":0.0018},
      {"quantile":"5%","species":"CAWA","year":2018,"RelativeAbundance":0.0031},
      {"quantile":"5%","species":"CAWA","year":2019,"RelativeAbundance":0.0027},
      {"quantile":"5%","species":"CAWA","year":2020,"RelativeAbundance":0.0034},
      {"quantile":"5%","species":"CAWA","year":2021,"RelativeAbundance":0.0022},
      {"quantile":"5%","species":"CAWA","year":2022,"RelativeAbundance":0.0025},
      {"quantile":"5%","species":"CAWA","year":2023,"RelativeAbundance":0.0023}
    ]; 

  var RelAbunUCI = [
      {"quantile":"95%","species":"CAWA","year":1989,"RelativeAbundance":4.462},
      {"quantile":"95%","species":"CAWA","year":1990,"RelativeAbundance":4.5096},
      {"quantile":"95%","species":"CAWA","year":1991,"RelativeAbundance":2.3694},
      {"quantile":"95%","species":"CAWA","year":1992,"RelativeAbundance":3.3701},
      {"quantile":"95%","species":"CAWA","year":1993,"RelativeAbundance":2.8831},
      {"quantile":"95%","species":"CAWA","year":1994,"RelativeAbundance":2.5334},
      {"quantile":"95%","species":"CAWA","year":1995,"RelativeAbundance":1.8505},
      {"quantile":"95%","species":"CAWA","year":1996,"RelativeAbundance":2.4384},
      {"quantile":"95%","species":"CAWA","year":1997,"RelativeAbundance":3.1026},
      {"quantile":"95%","species":"CAWA","year":1998,"RelativeAbundance":2.6613},
      {"quantile":"95%","species":"CAWA","year":1999,"RelativeAbundance":2.9472},
      {"quantile":"95%","species":"CAWA","year":2000,"RelativeAbundance":1.9552},
      {"quantile":"95%","species":"CAWA","year":2001,"RelativeAbundance":2.182},
      {"quantile":"95%","species":"CAWA","year":2002,"RelativeAbundance":1.7392},
      {"quantile":"95%","species":"CAWA","year":2003,"RelativeAbundance":1.4489},
      {"quantile":"95%","species":"CAWA","year":2004,"RelativeAbundance":2.0573},
      {"quantile":"95%","species":"CAWA","year":2005,"RelativeAbundance":1.462},
      {"quantile":"95%","species":"CAWA","year":2006,"RelativeAbundance":1.8773},
      {"quantile":"95%","species":"CAWA","year":2007,"RelativeAbundance":0.8684},
      {"quantile":"95%","species":"CAWA","year":2008,"RelativeAbundance":1.9096},
      {"quantile":"95%","species":"CAWA","year":2009,"RelativeAbundance":1.8922},
      {"quantile":"95%","species":"CAWA","year":2010,"RelativeAbundance":1.6648},
      {"quantile":"95%","species":"CAWA","year":2011,"RelativeAbundance":3.0165},
      {"quantile":"95%","species":"CAWA","year":2012,"RelativeAbundance":2.7759},
      {"quantile":"95%","species":"CAWA","year":2013,"RelativeAbundance":3.0415},
      {"quantile":"95%","species":"CAWA","year":2014,"RelativeAbundance":0.919},
      {"quantile":"95%","species":"CAWA","year":2015,"RelativeAbundance":2.239},
      {"quantile":"95%","species":"CAWA","year":2016,"RelativeAbundance":2.0666},
      {"quantile":"95%","species":"CAWA","year":2017,"RelativeAbundance":1.2393},
      {"quantile":"95%","species":"CAWA","year":2018,"RelativeAbundance":2.0388},
      {"quantile":"95%","species":"CAWA","year":2019,"RelativeAbundance":1.8212},
      {"quantile":"95%","species":"CAWA","year":2020,"RelativeAbundance":2.3433},
      {"quantile":"95%","species":"CAWA","year":2021,"RelativeAbundance":1.4513},
      {"quantile":"95%","species":"CAWA","year":2022,"RelativeAbundance":1.7198},
      {"quantile":"95%","species":"CAWA","year":2023,"RelativeAbundance":1.6183}
    ]; 

var element_info = document.getElementById('relative_abundance_div');
var positionInfo = element_info.getBoundingClientRect();

  // Set up the SVG dimensions
  var width = positionInfo.width;
  var height = positionInfo.height;
  
  console.log('width = ' + width)

  // Set up the margins
  var margin = { top: height*0.05,
                   bottom: height*0.1,
                   right: width*0.05,  
                   left: width*0.15 };
  
  // Calculate the inner dimensions of the plot
  var innerWidth = width - margin.left - margin.right;
  var innerHeight = height - margin.top - margin.bottom;


  // Create the SVG container
 var svg = d3.select("#" + 'RelativeAbundance_State')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  // Create scales for x and y axes
  var xScale = d3.scaleLinear()
    .domain([d3.min(RelAbunEsts.map(d => d.year))-1, d3.max(RelAbunEsts.map(d => d.year))+1])
    .range([margin.left, innerWidth])

    console.log(xScale(2020));

  var yScale = d3.scaleLinear()
    .domain([d3.min(RelAbunLCI.map(d => d.RelativeAbundance)), d3.max(RelAbunUCI.map(d => d.RelativeAbundance))])
    .range([innerHeight, margin.top]);

  // Draw the confidence interval polygon
  var confidenceInterval = svg.append('polygon')
    .attr('points', () => {
      var points = RelAbunLCI.map(d => `${xScale(d.year)},${yScale(d.RelativeAbundance)}`).join(' ');
      return `${points} ${RelAbunUCI.slice().reverse().map(d => `${xScale(d.year)},${yScale(d.RelativeAbundance)}`).join(' ')}`;
    })
    .attr('fill', 'lightgray')
    .attr('stroke', 'lightgray');

  // Draw the line
  svg.append('path')
    .datum(RelAbunEsts)
    .attr('fill', 'none')
    .attr('stroke', 'black')
    .attr('stroke-width', 2)
    .attr("d", d3.line()
              .x(function(d) { return xScale(d.year) })
              .y(function(d) { return yScale(d.RelativeAbundance) })
              );

    // This allows to find the closest X index of the mouse:
            var bisect = d3.bisector(function(d) { return d.x; }).left;

            // Create the circle that travels along the curve of chart
            var focus = svg
              .append('g')
              .append('circle')
                .style("fill", "none")
                .attr("stroke", "black")
                .attr('r', 8.5)
                .style("opacity", 0)

            // Create the text that travels along the curve of chart
            var focusText = svg
              .append('g')
              .append('text')
                .style("opacity", 0)
                .style("font-size", "20px")
                .style("white-space","pre-line")
                .attr("text-anchor", "left")
                .attr("alignment-baseline", "middle")

            var focusDrop = svg
                  .append('line')
                  .attr("x1", xScale(0))
                  .attr("x2", xScale(0))
                  .attr("y1", yScale(0))
                  .attr("y2", yScale(0))
                  .attr("stroke",'gray')
                  .style("opacity",0)

  // Draw the data points
  svg.selectAll('circle')
    .data(RelAbunEsts)
    .enter().append('circle')
    .attr('cx', d => xScale(d.year))
    .attr('cy', d => yScale(d.RelativeAbundance))
    .attr('r', 4)
    .attr('fill', 'black')
    .on('mouseover', mouseover)
    .on('mousemove', mousemove)
    .on('mouseout', mouseout);

// What happens when the mouse move -> show the annotations at the right positions.
function mouseover() {
    focus.style("opacity", 1)
    focusText.style("opacity",1).style("font-size","18px").style("white-space","pre-line")
    focusDrop.style("opacity",0.75)
  }

  function mousemove() {
    // recover coordinate we need
    var x0 = xScale.invert(d3.mouse(this)[0]);
    var i = d3.bisectRight(YearSurvey,x0);

    var selectedData = RelAbunEsts[i]

    focus
      .attr("cx", xScale(selectedData.year))
      .attr("cy", yScale(selectedData.RelativeAbundance))
    focusText
      .html("Year: " + selectedData.year + " Abundance: " + selectedData.RelativeAbundance)
      .style("font-size","18px")
      .attr("x", xScale(2000))
      .attr("y", yScale(d3.max(RelAbunUCI.map(d => d.RelativeAbundance))*0.9))
    focusDrop
      .attr("x1", xScale(selectedData.year))
      .attr("x2", xScale(selectedData.year))
      .attr("y1", yScale(0))
      .attr("y2", yScale(selectedData.RelativeAbundance))

    }
  function mouseout() {
    focus.style("opacity", 0)
    focusText.style("opacity", 0)
    focusDrop.style("opacity",0)
  }
// add x axis label
svg.append("text")
.attr("class", "x label")
.attr("text-anchor", "middle")
.attr("x", xScale(2005))
.attr("y", innerHeight + 50)
.text('Year');

svg.append("text")
.attr("class", "y label")
.attr("text-anchor", "middle")
// this is a little weird because it's rotated 90 degrees
// the x here is actually where on the y axis that I want it
// The y axis here is actually where I want it on the x axis
.attr("y", xScale(1989)-(margin.left/2))
.attr("x", 0-((margin.right+margin.left)))
.attr("transform", "rotate(-90)")
.text('Relative Abundance');

  // Draw x-axis
  svg.append('g')
    .attr('transform', `translate(0, ${innerHeight})`)
    .call(d3.axisBottom(xScale));

  // Draw y-axis
  svg.append('g')
    .attr('transform', `translate(${margin.left})`)
    .call(d3.axisLeft(yScale));
  