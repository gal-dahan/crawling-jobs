const axios = require("axios");
const cheerio = require("cheerio");
const cities = require("./cities.json");
const { saveData } = require= require('../controllers/jobs')

const urls = [
  "https://www.comeet.com/jobs/accessibe/D5.00B",
  "https://www.comeet.com/jobs/moonshot/87.005",
  "https://www.comeet.com/jobs/team8/61.003",
  "https://www.comeet.com/jobs/nexar/13.008",
  "https://www.comeet.com/jobs/landacorp/A4.000",
  "https://www.comeet.com/jobs/liveu/90.00C",
  "https://www.comeet.com/jobs/infinidat/D6.003",
  "https://www.comeet.com/jobs/global-e/62.002",
  "https://www.comeet.com/jobs/globalbit/D5.006",
  "https://www.comeet.com/jobs/razorlabs/A5.002",
  "https://www.comeet.com/jobs/buyme/B2.008",
  "https://www.comeet.com/jobs/scadafence/43.00E",
  "https://www.comeet.com/jobs/recruitingteam/F3.00B",
  "https://www.comeet.com/jobs/lili/A6.009",
  "https://www.comeet.com/jobs/p81/64.00C",
  "https://www.comeet.com/jobs/cynet/33.00D",
  "https://www.comeet.com/jobs/abra-web-mobile/D3.004",
  "https://www.comeet.com/jobs/aquasec/91.001",
  "https://www.comeet.com/jobs/scylladb/E4.006",
  "https://www.comeet.com/jobs/skyline/73.00D",
  "https://www.comeet.com/jobs/sciplay/D5.00A",
  "https://www.comeet.com/jobs/fundguard/37.002",
  "https://www.comeet.com/jobs/aeronautics/72.002",
  "https://www.comeet.com/jobs/snc/71.00D",
  "https://www.comeet.com/jobs/nanodimension/62.003",
  "https://www.comeet.com/jobs/aspectiva/35.000",
  "https://www.comeet.com/jobs/Tenengroup/93.00C",
  "https://www.comeet.com/jobs/lumenis/A1.00C",
  "https://www.comeet.com/jobs/kaltura/E2.00D",
  "https://www.comeet.com/jobs/maytronics/E3.008",
  "https://www.comeet.com/jobs/verintisrael/36.00B",
  "https://www.comeet.com/jobs/artmedical/35.00F",
  "https://www.comeet.com/jobs/zesty/06.000",
  "https://www.comeet.com/jobs/sqream/45.00B",
  "https://www.comeet.com/jobs/Datarails/53.005",
  "https://www.comeet.com/jobs/bigabid/A4.003",
  "https://www.comeet.com/jobs/onezerobank/36.00A",
  "https://www.comeet.com/jobs/granulate/56.000",
  "https://www.comeet.com/jobs/AutoLeadStar/54.002",
  "https://www.comeet.com/jobs/shieldfc/A5.00E",
  "https://www.comeet.com/jobs/hunters/67.007",
  "https://www.comeet.com/jobs/workiz/F6.006",
  "https://www.comeet.com/jobs/sodastream/40.008",
  "https://www.comeet.com/jobs/mitiga/26.00B",
  "https://www.comeet.com/jobs/comunix/86.006",
  "https://www.comeet.com/jobs/guesty/10.000",
  "https://www.comeet.com/jobs/devalore/15.007",
  "https://www.comeet.com/jobs/zoominsoftware/83.005",
  "https://www.comeet.com/jobs/automatit/26.003",
  "https://www.comeet.com/jobs/pixellot/24.009",
  "https://www.comeet.com/jobs/caja/E3.00D",
  "https://www.comeet.com/jobs/guardknox/55.008",
  "https://www.comeet.com/jobs/teridion/51.00D",
  "https://www.comeet.com/jobs/shopic/E6.002",
  "https://www.comeet.com/jobs/viber/04.002",
  "https://www.comeet.com/jobs/syte/74.002",
  "https://www.comeet.com/jobs/citadel/33.003",
  "https://www.comeet.com/jobs/upstream/E4.003",
  "https://www.comeet.com/jobs/easysend/D5.009",
  "https://www.comeet.com/jobs/biocatch/03.00E",
  "https://www.comeet.com/jobs/audiocodes/85.004",
  "https://www.comeet.com/jobs/zim/72.008",
  "https://www.comeet.com/jobs/silverfort/54.007",
  "https://www.comeet.com/jobs/cardinalops/66.005",
  "https://www.comeet.com/jobs/komodor/96.005",
  "https://www.comeet.com/jobs/deepinstinct/72.00A",
  "https://www.comeet.com/jobs/navina/E6.00C",
  "https://www.comeet.com/jobs/anyclip/91.00D",
  "https://www.comeet.com/jobs/incredibuild/66.00F",
  "https://www.comeet.com/jobs/justt/36.001",
  "https://www.comeet.com/jobs/groo/56.00E",
  "https://www.comeet.com/jobs/final/C0.009",
  "https://www.comeet.com/jobs/FrontStory/04.008",
  "https://www.comeet.com/jobs/Cyberbit/C3.00E",
  "https://www.comeet.com/jobs/optibus/D1.00C",
  "https://www.comeet.com/jobs/ilyon/42.00A",
  "https://www.comeet.com/jobs/pubplus/D4.008",
  "https://www.comeet.com/jobs/salt/12.00B",
  "https://www.comeet.com/jobs/sight/45.006",
  "https://www.comeet.com/jobs/pepperi/72.007",
  "https://www.comeet.com/jobs/ourcrowd/D3.00A",
  "https://www.comeet.com/jobs/vastdata/43.001",
  "https://www.comeet.com/jobs/roundforest/82.003",
  "https://www.comeet.com/jobs/foresightauto/13.000",
  "https://www.comeet.com/jobs/browzwear/03.000",
  "https://www.comeet.com/jobs/rekor/96.007",
  "https://www.comeet.com/jobs/nuvoton/51.00F",
  "https://www.comeet.com/jobs/immunai/37.009",
  "https://www.comeet.com/jobs/k2view/D5.000",
  "https://www.comeet.com/jobs/riverside-fm/66.009",
  "https://www.comeet.com/jobs/prospera/C5.00F",
  "https://www.comeet.com/jobs/ptc/32.005",
  "https://www.comeet.com/jobs/rapyd/73.00E",
  "https://www.comeet.com/jobs/safebreach/53.004",
  "https://www.comeet.com/jobs/jvp/35.00E",
  "https://www.comeet.com/jobs/Claroty/F2.004",
  "https://www.comeet.com/jobs/comeet/30.005",
  "https://www.comeet.com/jobs/attenti/C2.00D",
  "https://www.comeet.com/jobs/klips/37.007",
  "https://www.comeet.com/jobs/44ventures/18.001",
  "https://www.comeet.com/jobs/bagirasystems/47.006",
  "https://www.comeet.com/jobs/brix/D3.001",
  "https://www.comeet.com/jobs/autobrains/57.004",
  "https://www.comeet.com/jobs/coinmama/92.00E",
  "https://www.comeet.com/jobs/paragon/76.006",
  "https://www.comeet.com/jobs/aiola/77.002",
  "https://www.comeet.com/jobs/HiredScore/24.000",
  "https://www.comeet.com/jobs/365scores/B3.006",
  "https://www.comeet.com/jobs/jeeng/F5.003",
  "https://www.comeet.com/jobs/sparkion/F7.003",
  "https://www.comeet.com/jobs/paybox/18.004",
  "https://www.comeet.com/jobs/arpeely/57.001",
  "https://www.comeet.com/jobs/minutemedia/45.00A",
  "https://www.comeet.com/jobs/ctera/A0.003",
  "https://www.comeet.com/jobs/voyagerlabs/63.00A",
  "https://www.comeet.com/jobs/ai21/E6.001"
];

const crawling =  job => {
  let title = job?.name;
  let location = job?.location?.name;
  let locationCountry = job?.location?.country;
  let locationCity = job?.location?.city;
  let companyName = job?.company_name;
  let idJob = `${companyName}-${job.uid}`;
  let link = job?.url_comeet_hosted_page;
  let isIsraelByLocation =
    locationCountry?.toUpperCase().includes("ISRAEL") ||
    locationCountry?.toUpperCase().includes("IL");
  let isIsrelByCities = cities.some(
    (x) =>
      x.english_name === locationCity?.toUpperCase() ||
      "TLV" == locationCity?.toUpperCase()
  );
  if (isIsraelByLocation || isIsrelByCities){
     saveData(title, link, location, idJob,companyName)
  }};

const extractCompanyPositions = url =>
  axios.get(url).then(({data}) => {
    const $ = cheerio.load(data);
     [...$("script:not([src])")].map(e => {
      const reg = /^ *COMPANY_POSITIONS_DATA *= *(.*)$/m;
      const match = $(e).text().match(reg);
     const results=  match && JSON.parse(match[1].replace(/;+$/, ""));
     results?.forEach(crawling);
    })
  });

  const startComeet=async()=>{
    const crawlCalls=urls.map(extractCompanyPositions);
    const crawlResults = await Promise.all(crawlCalls);

  }
module.exports = startComeet;