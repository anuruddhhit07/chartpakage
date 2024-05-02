import * as d3 from 'd3';

function add({ a, b }) {
    return a + b;
}
function add2(a, b) {
    return a + b;
}

var A = [6, 2, 8, 8, 0, 0, 3, 9, 4, 4];
var B = [2, 8, 4, 5, 3, 1, 6, 0, 0, 4];
const intersection = d3.intersection(A, B);

export { add, add2, intersection };
