import * as d3 from "d3"

var A = [6, 2, 8, 8, 0, 0, 3, 9, 4, 4]
var B = [2, 8, 4, 5, 3, 1, 6, 0, 0, 4]
const intersection = d3.intersection(A, B)

export {intersection}