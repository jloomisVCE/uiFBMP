import { fetchFBMP } from './apiFetchFBMC.js';

export async function chartTrend(htmlId='chart_div') {    

let container = d3.select(`#${htmlId}`);
container.selectAll("svg").remove();

}