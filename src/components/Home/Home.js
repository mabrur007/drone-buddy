import React from "react";
import './Home.css';

const Home = () => {
  return (
    <div>
      <div className="banner-area">
        <div className="content-area">
          <h1>
            Drone <span>Buddy</span>
          </h1>
          <p>
            Drone Buddy is the best online buy and sell market place for drone
            in Bangladesh. We have been in this field for last 10 years. Through
            out the time span we have successfully satisfied thousands of
            customers with our services. So what are you waiting for? Dive in to
            become a <span><b>Drone Buddy</b></span>!
          </p>
          <button className="content-btn">Learn More</button>
        </div>
        <div className="img-area">
            <img src="drone.jpg" alt="drone-img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
