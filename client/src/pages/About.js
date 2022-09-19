

 const About = () => {
  return (
    <div style={{fontFamily: "Arial",  textAlign: "center"
}}> 
    <h1>About us</h1>
    <div className="about">
        <span> Our web application gathers job offers by scraping public websites using a Node script, every six hours and after two months automatically removes the data. We don't block content behind paywalls: you can browse all the jobs offer without any account and without signing-up.</span>
        <span> <strong>We're developing in the open source <a href={"https://github.com/gal-dahan/crawling-jobs"} target="_blank" rel="noopener"  >Available on GitHub. </a></strong></span>
    </div>
    </div>
  )
}
export default About;