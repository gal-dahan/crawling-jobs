const axios = require("axios");
const cheerio = require("cheerio");
const cities = require("./cities.json");
const { saveData } = require= require('../controllers/jobs');

const wp = [
    "http://aeronautics-sys.com/careers",
    "https://ampliolearning.com/company/careers",
    "https://innoviz.tech/join-us",
    "https://getfabric.com/careers/fabric-open-positions",
    "https://www.fireblocks.com/careers/current-openings",
    "https://wsc-sports.com/careers",
    "https://www.travelbooster.com/careers",
    "https://codevalue.com/careers",
    "https://www.8fig.co/jobs",
    "https://gloat.com/careers",
    "https://cyolo.io/careers",
    "https://parametrixinsurance.com/careers",
    "https://bionic.ai/careers",
    "https://www.lsports.eu/careers/all",
    "https://www.hibob.com/careers",
    "https://cajarobotics.com/careers"
  ];
  const wpComeet = (url) =>{
    axios.get(url).then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      $(".comeet-position", html).each( function () {
        let companyName=url.split('//').pop().split('.')[0]
        let title = $(this).children(".comeet-position-name").text().trim();
        let link = $(this).first().attr("href")?.replace("//", "");
        let location=$(this).children(".comeet-position-meta").text().trim().split('·')[0];
        let idJob = `${companyName}-${title}`;
        let isIsraelByLocation = location.toUpperCase().includes("ISRAEL");
        let isIsrelByCities = cities.some(
          (x) =>
            x.english_name === location.toUpperCase() ||
            "TLV" == location.toUpperCase()
        );

        if (!/^(?:f|ht)tps?\:\/\//.test(link)) {
          link = "http://" + link;
      }
  
          if (!/^(?:f|ht)tps?\:\/\//.test(link)) {
          link = "http://" + link;
      }

        if (isIsraelByLocation || isIsrelByCities){
             saveData(title, link, location, idJob,companyName)
  
        }
      });
    })
    .catch((err) => console.log(err));
  }
  
  const startWpComeet=async()=>{
    const crawlCalls=wp.map(wpComeet);
    const crawlResults = await Promise.all(crawlCalls);
  }
  module.exports = startWpComeet
