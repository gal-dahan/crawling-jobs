
# Job Israel

Source code of [Jobs-Israel](https://jobs-israel.netlify.app)




![App Screenshot](https://i.postimg.cc/cC5dyJJg/screely-1663336455289.png)


## Tech Stack

**Client:** React

**Server:** Node(v14.17.1), Express, Cheerio, Nodemailer 

**Database:** MongoDB


## Run Locally

Install project with npm.

Server:
```bash
    cd server
    npm install
```
Client:
```bash
    cd client 
    npm install
```


Start the server and client

```bash
npm Start
```
To set up your environment variables, create a new file named `.env` in the `server` folder of the project and copy the contents of `.env.example` into it. Then, replace the placeholders with your own values:
```
MONGO=mongodb+srv://username:password@your-mongo-cluster.mongodb.net/your-db-name
MAIL_USERNAME=your-email@example.com
MAIL_PASSWORD=your-email-password
```

Debugging
If you would like to change the timing of the CronJob for debugging purposes,or startup the project locally in first time to Start scanning and filling the database. you can modify the cronTime value in the crawling-jobs/server/server.js file. By default, the CronJob is set to run every 6 hours in production, but for debugging purposes, you may want to set it to run more frequently.

To change the timing of the CronJob, find the following code in the crawling-jobs/server/server.js:
```
const job = new CronJob({
  // 0 */6 * * * every 6 hours --- in production
  cronTime: "0 */6 * * *",
  onTick: function () {
    console.log("start crawling", new Date());
    startComeet();
    startWpComeet();
    startGreenHouse();
  },
  start: true,
  timeZone: 'Europe/Berlin'
});

```
To change the timing for debugging purposes, you can modify the cronTime value to run more frequently. For example, if you want the CronJob to run every minute, you can change the cronTime value to "* * * * *":

```
const job = new CronJob({
  // * * * * * every minute --- for Debugging
  cronTime: "* * * * *",
  onTick: function () {
    console.log("start crawling", new Date());
    startComeet();
    startWpComeet();
    startGreenHouse();
  },
  start: true,
  timeZone: 'Europe/Berlin'
});
```
