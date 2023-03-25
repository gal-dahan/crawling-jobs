
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

