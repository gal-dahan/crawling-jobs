import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

// components
import JobDetails from "../components/JobDetails";


 const ByCompany = () => {
    const {company}=useParams();

    const { error, isPending, data: jobs } = useFetch(`http://localhost:8000/api/${company}`)

    return (
        <div className="home">
          <div className="workouts">
            <h1>Jobs from {company.charAt(0).toUpperCase()+company.slice(1)} </h1>
            <h4>{(jobs||0).count} Jobs </h4>
          { error && <div>{ error }</div> }
          { isPending && <div className="loader"></div> }

          {jobs && jobs.job.map((job) => (
                <JobDetails job={job} key={job._id} />
              ))}
              </div>
        </div>
      );
    };
export default ByCompany;