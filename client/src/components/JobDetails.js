import TimeAgo from "react-timeago";

const JobDetails = ({  job }) => {

  return (
    <div className="workout-details">
      <h4>{job.title}</h4>
      <p><strong>Location:  </strong>{job.location.charAt(0).toUpperCase()+job.location.slice(1)}</p>
      <p><strong>company:  </strong>{job.companyName.charAt(0).toUpperCase()+job.companyName.slice(1)}</p>
      <p><strong>Link:  </strong><a href={job.link} target="_blank" >Click here</a>
</p>

      <p><strong>Scanned:  </strong>
      <TimeAgo date={job.createdAt}/>
      { //(job.createdAt instanceof Date) ? job.createdAt.toLocaleDateString() : new Date(job.createdAt).toLocaleDateString() 
      }
      </p>
    </div>
  )
}

export default JobDetails