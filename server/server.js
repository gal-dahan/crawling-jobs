const http = require("http");
const mongoose = require("mongoose");
const app = require("./app");
const PORT = process.env.PORT || 8000;
const MONGO_URL =
  "mongodb+srv://gal:gal963963@cluster0.bly5g4s.mongodb.net/?retryWrites=true&w=majority";
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
  start: true,
});

async function startServer() {
  await mongoose.connect(MONGO_URL);
  server.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
  });
  job.start();
}

startServer();
