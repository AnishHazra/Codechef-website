import React from "react";
import "./Events.css";
import eventImg from "../../assets/event-img.png";

function Events() {
  return (
    <div className="event-bg">
      <div className="event-container ">
        <img src={eventImg} alt="IMAGE" />
        <h3>Hi, We are Psycho Dev</h3>
        <h1>Designer Agency Who Build in HTML & CSS</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor.
        </p>
      </div>
    </div>
  );
}

export default Events;
