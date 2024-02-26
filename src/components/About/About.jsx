import React from "react";
import "./About.css";
import about1 from "../../assets/about1.png"
import about2 from "../../assets/about2.png"
import about3 from "../../assets/about3.png"


function About() {
  return (
    <>
      <div className="bg-wpr" ></div>
      <div className="about">
        <div className="about-wpr">
          <div>
            <h2>How we work ?</h2>
            <img src={about1} alt="about1" />
            <p>
              Codechef ADGITM chapter organises regular contests , hackathons ,
              weekly and monthly meets , sessions with mentors and seniors , all
              to bring out the best in us and motivate us to aspire high in the
              future.
            </p>
          </div>
          <div>
            <h2>Our Goal</h2>
            <img src={about2} alt="about2" />
            <p>
              To provide students with all the mentorship, resources, and
              opportunities they need to develop top-notch programming skills
              and compete on a global scale.
            </p>
          </div>
          <div>
            <h2>Why Should you Join Us?</h2>
            <img src={about3} alt="about3" />
            <p>
              You learn many things, like how to work with a team, how to manage
              the schedule along with your studies. So you learn how to talk to
              people, approach companies, how to talk to guests, how to deal
              with your college management.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
