import useFetch from "../useFetch";
import {  useState } from "react";
import ListCompany from '../components/ListCompany'
// components


 const CompaniesList = () => {
    const { error, isPending, data: jobs } = useFetch(`${process.env.REACT_APP_PROXY}/api/`)
    const [visible,setVisible]=useState(8)
    const showMore=()=>{
      setVisible(prevVale=>prevVale+4)
    }
    const company = jobs && jobs.jobs.map(job => job.companyName);

    let setOfCompany = [...new Set(company)];
    
    return (
      <div className="home">
      <div className="workouts">
        
      { error && <div>{ error }</div> }
      { isPending && <div className="loader"></div> }
      <h3>{(setOfCompany||0).length} Companies</h3>
      {setOfCompany.slice(0,visible).map((company) => (
                <ListCompany  company={company} key={company._id} />
              ))}


          <button onClick={showMore} className="loadMore">Load More</button>
      </div>
    </div>
  );
};
export default CompaniesList;