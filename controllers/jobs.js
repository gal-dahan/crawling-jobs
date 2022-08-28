const Jobs = require("../model/Jobs.mongo");

const saveData = async (title, link, location, idJob, companyName) => {
  const found = Jobs.findOne(idJob)
    if (!found ){
   try {
    const job = new Jobs({
      title: title,
      link: link,
      location: location,
      _id: idJob,
      companyName: companyName,
    });
    await job.save();
    console.log(job);
  } catch (e) {
    console.log(e);
  } }
  else{
    console.log(`${title} -- is already in the data with id -- ${idJob}`);
  }
};

const getAllJobs = async (req, res) => {
  const jobs = await Jobs.find({}).sort({ createdAt: "desc" }).exec();
  res.status(200).json({ jobs, count: jobs.length });
};

const getJobByCompany = async (req, res) => {
  const {
    params: { companyName: companyName },
  } = req;

  const job = await Jobs.find({
    companyName: companyName,
  });
  if (!job) {
    res.status(404).json({});
  }
  res.status(200).json({ job, count: job.length });
};

module.exports = {
  saveData,
  getAllJobs,
  getJobByCompany,
};
