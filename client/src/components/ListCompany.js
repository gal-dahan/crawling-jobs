import { useEffect, useState } from "react";
import image from '../job-search.png'
import { Link } from "react-router-dom";

const ListCompany = ({  company }) => {
  const url=`https://www.google.com/s2/favicons?domain=${company}.com&sz=128`


  return (
    <div className="workout-details">
      <h3>
      <img style={{
              width: 40,
              verticalAlign: "center",
              display: "inline-block",
              margin: "0 10px"

            }} 
      src={url}
      alt={company}
      />
      <Link to={`/company/${company}`}>
       {company.charAt(0).toUpperCase()+company.slice(1)}    
      </Link>
      </h3>

  
      <p><strong>All jobs from:  </strong>
      <Link to={`/company/${company}`}>
      {company.charAt(0).toUpperCase()+company.slice(1)}    
      </Link>
      </p>
      <p><strong>More details:  </strong>
      <a href={`https://finder.startupnationcentral.org/company_page/${company}`} target="_blank" >Click here</a>
      </p>
    </div>
  )
}

export default ListCompany;