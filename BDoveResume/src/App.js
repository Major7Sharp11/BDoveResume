import React from 'react';
import "./App.css";

import skills from "./data/skills.json";
import work from "./data/work.json";
import education from "./data/education.json";
import headerPhoto from "./res/bdovephoto.jpg";


function App() {
  return (
    <div className="App container">
      
      <div className="row">
        <div className="FixedSideBar">
          <Header />
        </div>
        <div className="col-md-11 offset-md-1 elementProps" id="skillsProps">
          <Skills skills={skills} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-11 offset-md-1 elementProps" id="educationProps">
          <Education education={education} />
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-11 offset-md-1 elementProps" id="experienceProps">
          <Experience work={work} />
        </div>
      </div>
    
    </div>
  );
}


function Header(props) {
  return (
    <header>
      <h1 id="headerName">Brandon Dove</h1>
      <img src={headerPhoto} id="imgProps" alt="Brandon, sporting a merely adolescent 'stache, holding a bass guitar" ></img>
      <h6 id="headerLinks">
        <a href="https://www.brandonmdove.com" 
           title="Brandon really should get around to registering this domain">www.brandonmdove.com</a>
      </h6>
      <h6>
          <a href="mailto:brandonmdove@gmail.com" 
             title="This is in fact Brandon's real email address... use it sparingly">brandonmdove@gmail.com</a>
      </h6>
    </header>
  );
}


function Skills(props) {

   //loop through every skill to make a new entry in the resume
  function Skill(s, i) {
    return (
      <div key={i}>
        <h6><strong>{s.title}</strong></h6>
          <p>{s.desc}</p>
      </div>
    );
  }

  let skillset = skills.map(Skill);


  return (
    <section>
      <h2>➣Skills</h2>
      {skillset}
    </section>
  );

  
}


function Education(props) {

 //loop through every school to make a new entry in the resume
  function School(s, i) {
    let end = s.end;
    if(end === -1) {
      end = <small>present</small>;
    }

    return (
      <div key={i}>
        <h5 className="d-flex justify-content-between">
          {s.school}
          <div>{s.start} - {end}</div>
        </h5>
        <h6>
          {s.location}
          <br />
          <a href={s.link}>{s.degree} in {s.major}</a>
        </h6>
        <p>{s.additional}</p>
      </div>
    );
  }

  let schools = education.map(School);

  return (
    <section>
    <h2>➣Education</h2>
      {schools}
    </section>
  );
}


function Experience(props) {

  // turn a single bullet point into a list item with <li> tag
  // the loop index (i) will be the unique key
  // b is just a string with the description of the job -- each individual bullet point (there are around 2-4 individual bullet points within the individual "desc" array of each job) will be passed through the Bullet function, via the map() array method.
  function Bullet(b, i) {
      return (<li key={i}>{b}</li>);
  }

  //loop through every job to make a new entry in the resume
  function Job(j, i) {
    let end = j.end;
    if(end === -1) {
      end = <small>present</small>;
    }


    // map the bullet points to an array of Bullet components
    // for each string in the array of strings "desc",
    // map that string to the function Bullet
    let bullets = j.desc.map(Bullet);

    return (
      <div key={i}>
        <h5 className="d-flex justify-content-between">
          {j.title} <div>{j.start} - {end}</div>
        </h5>
        <h6><a href={j.link}>{j.org}</a></h6>
        <h6><a href={j.deptlink}><em>{j.dept}</em></a></h6>
        <ul>
         {bullets}
        </ul>
      </div>
    );
  
  }

  let jobs = work.map(Job);
  
  return (
    <section>
      <h2>➣Experience</h2>
      {jobs}
    </section>
  );

}

export default App;