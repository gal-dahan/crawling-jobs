import { useEffect, useState } from "react";
import useFetch from "../useFetch";

// components
import JobDetails from "../components/JobDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const [visible,setVisible]=useState(4)
  const { error, isPending, data: jobs } = useFetch('http://localhost:8000/api')
  const showMore=()=>{
    setVisible(prevVale=>prevVale+4)
  }
  return (
    <div className="home">
      <div className="workouts">
        
      { error && <div>{ error }</div> }
      { isPending && <div className="loader"></div> }
      <h3>{(jobs||0).count} Jobs available</h3>
      {jobs && jobs.jobs.slice(0,visible).map((job) => (
            <JobDetails job={job} key={job._id} />
          ))}


          <button onClick={showMore} className="loadMore">Load More</button>
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
