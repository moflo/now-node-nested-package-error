const url = require("url");

const moment = require("moment");

module.exports = async (req, res) => {
  const { query } = url.parse(req.url, true);
  const year = parseInt(query.year) || 2001;

  console.log("API query: ", moment(year).format());

  const year_string = moment(year).format();

  res.end(year_string);
};
