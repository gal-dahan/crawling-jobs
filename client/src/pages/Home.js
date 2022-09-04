import { useEffect, useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

// components
import JobDetails from "../components/JobDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const { jobs, dispatch } = useWorkoutsContext();
  const [visible,setVisible]=useState(4)
  const [isLoading, setIsLoading] = useState(true);

  const showMore=()=>{
    setVisible(prevVale=>prevVale+4)
  }
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api");
      const json = await response.json();
      
      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
        setIsLoading(false);
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
      {isLoading ? <div className="loader"></div>:
        jobs && jobs.jobs.slice(0,visible).map((job) => (
            <JobDetails job={job} key={job._id} />
          ))}
          <button onClick={showMore} className="loadMore">Load More</button>
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
