import React from "react";
import kebab from "../assets/images/service/happy-man.png";
import birthday from "../assets/images/service/birthday.png";
import freinds from "../assets/images/service/group-friends.png";
import caterings from "../assets/images/service/caterings.png";
const Service = () => {
  return (
    <>
      <div className="serviceSection">
        <h2>We offer unique services for your events</h2>
        <div className="serviceCards">
          <div className="serviceCard">
            <img src={birthday} alt="birthday" />
            <h3>Birthdays</h3>
            <p>
              In the new era of technology we look in the future with certainty
              for life.
            </p>
          </div>

          <div className="serviceCard">
            <img src={kebab} alt="birthday" />
            <h3>Weddings</h3>
            <p>
              In the new era of technology we look in the future with certainty
              for life.
            </p>
          </div>

          <div className="serviceCard">
            <img src={caterings} alt="birthday" />
            <h3>Caterings</h3>
            <p>
              In the new era of technology we look in the future with certainty
              for life.
            </p>
          </div>

          <div className="serviceCard">
            <img src={freinds} alt="birthday" />
            <h3>Events</h3>
            <p>
              In the new era of technology we look in the future with certainty
              for life.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
