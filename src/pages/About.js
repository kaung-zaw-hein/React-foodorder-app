import React from "react";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1485677959733-60c357f80d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80)` }}
      ></div>
      <div className="aboutBottom">
        <h1>Delicious Food, Delivered To You</h1>
        <p>
        Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.<br/><br/>
        All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!
        </p>
      </div>
    </div>
  );
}

export default About;
