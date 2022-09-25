import { data } from "../../data/data.js";
import * as d3 from "d3";
import moment from "moment";

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

// tv shows / movies added by the year
// check if there's a correlation between the stock price and the number of shows added
// can be misleading because there are missing data in 2021 -> hasn't been collected yet -> doesn't represent well
const showsAddedByYear = d3.rollup(
  data,
  (group) => group.length,
  (data) => moment(data.date_added).format("YYYY")
);
