import * as d3 from "d3";
import moment from "moment/moment.js";

const url =
  "https://raw.githubusercontent.com/swittuth/netflix-by-numbers/main/data/netflix_titles.csv";

export const data = await d3.csv(url, (data) => ({
  show_id: data.show_id,
  type: data.type,
  title: data.title,
  director: data.director,
  cast: data.cast,
  country: data.country,
  date_added: moment(data.date_added, "MMMM DD YYYY").toDate(),
  release_year: data.release_year,
  rating: data.rating,
  duration:
    data.duration.indexOf("min") >= 0
      ? Number(data.duration.split(" ")[0])
      : data.duration,
  listed_in: data.listed_in,
  description: data.description,
}));
