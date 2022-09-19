const axios = require("axios");
const cheerio = require("cheerio");
const cities = require("./cities.json");
const Jobs= require('../model/Jobs.mongo')
const { saveData } = require= require('../controllers/jobs')

const companyGreenhouse = [
    "acronis",
    "cb4",
    "similarweb",
    "meshpayments",
    "pagaya",
    "snyk",
    "techstars57",
    "vimeo",
    "forter",
    "via",
    "pandologic",
    "bringg",
    "intelligo",
    "dynamicyield",
    "pecanai",
    "amwell",
    "melio",
    "ziprecruiter",
    "diagnosticrobotics",
    "khealth",
    "bluevine",
    "globalityinc",
    "onedigital",
    "singular",
    "pendo",
    "Torq",
    "apiiro",
    "doubleverify",
    "BigID",
    "doitintl",
    "tremorinternational",
    "rhinohealth",
    "canonical",
    "clickup",
    "leddartech",
    "lunasolutions",
    "cowen",
    "vonage",
    "binah",
    "atbayjobs",
    "innovid",
    "mixtiles",
    "itamarmedicalltd",
    "upsolver",
    "outbraininc",
    "ermetic",
    "obligo",
    "walnut"
  ];
  


  const greenHouse = (companyName) =>{
    console.log(companyName);
    let url = "https://boards.greenhouse.io/" + companyName;
      
    axios
      .get(url)
      .then((response) => {
        const html = response.data;
        const $ = cheerio.load(html);
  
        $(".opening", html).each( function () {
          let location = $(this).children(".location").text().trim();
          let title = $(this).children("a").first().text().trim();
          let link = $(this).children("a").first().attr("href");
          let isIsraelByLocation = location.toUpperCase().includes("ISRAEL");
          let isIsrelByCities = cities.some(
            (x) =>
              x.english_name === location.toUpperCase() ||
              "TLV" == location.toUpperCase()
          );
          const hasRelativeLink = link.indexOf("https://") === -1;
          link = hasRelativeLink ? `https://boards.greenhouse.io${link}` : link;
          let idJob = `${companyName}-${link.split("/").pop()}`;
          //if Location job is Israel push
          if (isIsraelByLocation || isIsrelByCities){
             saveData(title, link, location, idJob,companyName)

          }
            //Jobs.push({ title, link, location, idJob,companyName,date:new Date() });
              });
            })
            .catch((err) => console.log(err));
        }

const startGreenHouse=async()=>{
  const crawlCalls=companyGreenhouse.map(greenHouse);
  const crawlResults = await Promise.all(crawlCalls);
}
module.exports = startGreenHouse