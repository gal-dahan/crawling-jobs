/*const axios = require("axios");
const cheerio = require("cheerio");
const cities = require("./cities.json");
const comeet = [
    "https://theator.io/careers/"
  ];
  
  const Jobs = [];


  comeet.forEach((url) => {
    axios.get(url).then((response) => {
        const html = response.data;
        const $ = cheerio.load(html);
  
        $(".comeet-outer-wrapper", html).each(function () {
          let location = $(this).children("comeet-position").text().trim();
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
                console.log(title, link, location, idJob,companyName)
        });
      })
      .catch((err) => console.log(err));
  });

 */