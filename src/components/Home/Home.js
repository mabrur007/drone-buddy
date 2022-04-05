import React from "react";
import { Link } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";
import Reviews from "../Reviews/Reviews";
import './Home.css';

const Home = () => {
  const [reviews] = useReviews();
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
            become a{" "}
            <span>
              <b>Drone Buddy</b>
            </span>
            !
          </p>
          <Link to='/about'>
            <button className="content-btn">Learn More</button>
          </Link>
        </div>
        <div className="img-area">
          <img src="drone.jpg" alt="drone-img" />
        </div>
      </div>

      {/* Customer Review area */}
      <div className="home-review-section">
        <h2 className="review-title">
          Customer <span>Reviews</span>
        </h2>

        <div className="review-section">
          {reviews.slice(0, 3).map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </div>
        <div>
          <Link to="/reviews">
            <button className="review-btn">See All Reviews</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
