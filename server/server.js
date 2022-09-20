const http = require("http");
const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);
const CronJob = require("cron").CronJob;
const startGreenHouse = require("./crawling/greenhouse");
const startComeet = require("./crawling/comeet");
const startWpComeet = require("./crawling/wpCommet");

mongoose.connection.once("open", () => {
  console.log("MongoDB connectin ready!");
});
mongoose.connection.on("error", (err) => {
  console.error(err);
});

const job = new CronJob({
  //* * * * * every minute --- for Debugging
  //0 */6 * * * every 6 hours --- in production
  cronTime: "0 */6 * * *",
  onTick: function () {
    console.log("start crawling", new Date());
    startComeet();
    startWpComeet();
   startGreenHouse();
  },
  start: true,  timeZone: 'Europe/Berlin'
});

async function startServer() {
  await mongoose.connect(process.env.MONGO);
  server.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
  });
  job.start();
}

startServer();
