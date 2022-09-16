const express = require("express");
const app = express();
const cors=require('cors');
const jobsRouter = require('./routes/job');
const contactRouter = require('./routes/contact');
require("dotenv").config();

app.use(cors())
app.use(express.json());
app.get('/', (req, res) => {
    res.send('<h1>Jobs API</h1>');
  });
app.use('/api', jobsRouter);
app.use('/contact',contactRouter);
module.exports=app;