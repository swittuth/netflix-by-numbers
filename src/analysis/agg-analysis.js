import { data } from "../../data/data.js";
import * as d3 from "d3";

// latest and earliest added for movies and tv shows
const latestTime = d3.rollup(
  data,
  (data) => {
    return d3.extent(data, (d) => d.date_added);
  },
  (data) => data.type
);

// number of countries that the show/movie was produced in
const countries = new Set();
for (let d of data) {
  const list = d.country.split(",");
  for (let c of list) {
    if (c.length > 0) countries.add(c.trim());
  }
}
console.log(countries.size);

// tv shows / movies added by the year 
const showsByYear = 