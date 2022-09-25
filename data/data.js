import * as d3 from "d3";

const url =
  "https://raw.githubusercontent.com/swittuth/netflix-by-numbers/main/data/netflix_titles.csv";

const data = await d3.csv(url);
console.log(data);

export default data;
