import * as d3 from 'd3';

function add({ a, b }) {
    return a + b;
}
function add2(a, b) {
    return a + b;
}

var A = [6, 2, 8, 8, 0, 0, 3, 9, 4, 4];
var B = [2, 8, 4, 5, 3, 1, 6, 0, 0, 4];
d3.intersection(A, B);
function drawLineChart(data, divId) {
    const svgWidth = 400;
    const svgHeight = 200;
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = svgWidth - margin.left - margin.right;
    const height = svgHeight - margin.top - margin.bottom;
    const svg = d3.select(`#${divId}`)
        .append("svg")
        .attr("width", svgWidth)
        .attr("height", svgHeight);
    const g = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
    const x = d3.scaleLinear().domain([0, data.length - 1]).range([0, width]);
    const y = d3.scaleLinear().domain([0, d3.max(data)]).range([height, 0]); // Ensure d3.max(data) is not undefined
    const line = d3.line()
        .x((d, i) => x(i))
        .y((d) => y(d));
    g.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", line);
}

export { add, add2, drawLineChart };
