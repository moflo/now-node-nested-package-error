const url = require("url");
// import { moment_extern } from "./TimeManager";

const moment_extern = require("moment");

module.exports = async (req, res) => {
  const { query } = url.parse(req.url, true);
  const year = parseInt(query.year) || 2001;

  console.log("API query: ", moment_extern(year).format());

  const year_string = moment_extern(year).format();

  res.end(year_string);
};
