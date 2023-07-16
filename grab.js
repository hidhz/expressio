const axios = require("axios");
const cheerio = require("cheerio");

async function getData(link) {
  try {
    const req = await axios.get(link);
    const data = await req.data;
    const $ = cheerio.load(data);
    const html = $("body #zeus-root #main-pdp-container .css-9aug0c").html();
    return html;
  } catch (err) {
    console.log("scrapp gagal...", err);
  }
}
module.exports = getData;
