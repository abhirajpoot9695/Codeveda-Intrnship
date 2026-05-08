import React from 'react';
import './About.css';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {

  const navigate = useNavigate();


  return (
    <div className="about-container">
      {/* Header Section */}
      <header className="about-header animate-popIn">
        <h1>Welcome to <span className="brand-name">FoodieHub</span></h1>
        <p>A delicious cure for your hunger—just a click away!</p>
      </header>

      {/* Main Content Section */}
      <section className="about-content">
        <div className="content-left animate-slideInLeft">
          <h2>Humaari Kahaani</h2>
          <p>FoodieHub began in 2023 with a simple mission: to deliver the city's 
             finest food right to people's doorsteps. We believe that good food is not just...
          </p>
          <p>Today, partnering with thousands of restaurants, we are delivering fresh and 
            delicious food to millions of people—and a smile with every delivery!ery ke saath ek muskaan!
          </p>
        </div>
        <div className="content-right animate-slideInRight">
          <img src="https://via.placeholder.com/500x300.png?text=Delivering+Happiness" alt="Delivery bike and food" className="about-image" />
        </div>
      </section>

      {/* Features/Values Section */}
      <section className="about-values">
        <h2>Why should you trust us ?</h2>
        <div className="values-grid" >
          <div className="value-card animate-fadeIn" onClick={() => navigate('/deliverypage')}>
            <div className="icon">🚀</div>
            <h3>Tez Delivery</h3>
            <p>Our delivery team ensures that you receive your food hot, fresh, and on time..</p>
          </div>
          <div className="value-card animate-fadeIn delay-1" onClick={() => navigate('/QualityRestaurants')}>
            <div className="icon">🥗</div>
            <h3>Quality Restaurants</h3>
            <p>We only collaborate with the city's best-rated restaurants.</p>
          </div>
          <div className="value-card animate-fadeIn delay-2" onClick={() => navigate('/Affordable')} >
            <div className="icon">💰</div>
            <h3>Affordable Prices</h3>
            <p>Pocket-friendly deals and offers are always our priority.</p>
          </div>
        </div>
      </section>
      
      {/* Additional Stats Section with Progress Bars (Optional) */}
        <section className="about-stats">
          <div className="stat-item">
            <div className="circular-progress-bar active" data-progress="95">
                <div className="progress-circle">95%</div>
            </div>
            <p>Happy Customers</p>
          </div>
          <div className="stat-item">
            <div className="circular-progress-bar active" data-progress="98">
                <div className="progress-circle">98%</div>
            </div>
            <p>On-Time Delivery</p>
          </div>
        {/* </div> */}
        </section>
    </div>
  );
};

export default AboutPage;