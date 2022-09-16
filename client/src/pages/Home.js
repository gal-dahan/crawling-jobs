import { useEffect, useState } from "react";
import useFetch from "../useFetch";

// components
import JobDetails from "../components/JobDetails";
import ContactForm  from "../components/ContactForm";

const Home = () => {
  const [visible, setVisible] = useState(4);
  const {
    error,
    isPending,
    data: jobs,
  } = useFetch("http://localhost:8000/api");
  const [searchTerm, setSearchTerm] = useState("");

  const showMore = () => {
    setVisible((prevVale) => prevVale + 4);
  };
  return (
    <div className="home">
      <div className="workouts">
        {error && <div>{error}</div>}
        {isPending && <div className="loader"></div>}
        {<input
        type="text"
        placeholder=" search....."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />}
        <h3>{(jobs || 0).count} Jobs available</h3>
        {(jobs &&jobs.jobs.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (
          val.title
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase().trim())
        )      
        {
          return val;
        }
        else if (
          val.companyName
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase().trim())
        )      
        {
          return val;
        }
      }).slice(0, visible).map((job) => <JobDetails job={job} key={job._id} />))}

        <button onClick={showMore} className="loadMore">
          Load More
        </button>
      </div>
      <ContactForm  />
    </div>
  );
};

export default Home;
