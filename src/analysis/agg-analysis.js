import * as d3 from "d3";

const url =
  "https://raw.githubusercontent.com/swittuth/netflix-by-numbers/main/data/netflix_titles.csv";
d3.csv(url).then((data) => console.log(data));
