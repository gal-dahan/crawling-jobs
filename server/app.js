const express = require("express");
const app = express();
const jobs= require('./crawling/greenhouse')
const cors=require('cors');
const jobsRouter = require('./routes/job');

app.use(cors())
app.use(express.json());
app.get('/', (req, res) => {
    res.send('<h1>Jobs API</h1>');
  });
app.use('/api', jobsRouter);

module.exports=app;