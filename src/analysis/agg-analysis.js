import * as d3 from "d3";

const url = "./netflix_titles.csv";
const data = d3.csv(url);

console.log(data);
