import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

// components
import JobDetails from "../components/JobDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const { jobs, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {jobs &&
          jobs.jobs.map((job) => (
            <JobDetails job={job} key={job._id} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
