const axios = require("axios");
const cheerio = require("cheerio");
const cities = require("./cities.json");
const Jobs= require('../model/Jobs.mongo')
const companyGreenhouse = [
    "acronis",
    "similarweb",
    "pagaya",
    "snyk",
    "vimeo",
    "forter",
    "via",
    "pandologic",
    "bringg",
    "intelligo",
    "dynamicyield",
    "melio",
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
  ];
  
  //const Jobs = [];


  companyGreenhouse.forEach((companyName) => {
    let url = "https://boards.greenhouse.io/" + companyName;
  
    axios
      .get(url)
      .then((response) => {
        const html = response.data;
        const $ = cheerio.load(html);
  
        $(".opening", html).each(function () {
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
          if (isIsraelByLocation || isIsrelByCities)
            //Jobs.push({ title, link, location, idJob,companyName,date:new Date() });
                saveData(title, link, location, idJob,companyName)
        });
      })
      .catch((err) => console.log(err));
  });

 async function saveData(title, link, location, idJob,companyName){
    const job= new Jobs({
        title:title,
         link:link,
          location:location, 
          idJob:idJob,
          companyName:companyName
    })
    await job.save()
    console.log(job);
}

module.exports={
    
}