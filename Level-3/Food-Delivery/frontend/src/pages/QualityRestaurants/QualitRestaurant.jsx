import React from 'react'
import './QualityRestaurant.css'

const QualityRestaurants = () => {
  return (
    <div className='quality-container'>
      {/* --- Header Section --- */}
      <header className="quality-header">
        <h1>Quality & Hygiene First 🥗</h1>
        <p>We partner with restaurants that meet our 25-point safety and taste audit.</p>
      </header>

      {/* --- Standards Section --- */}
      <section className="quality-standards">
        <div className="standard-item">
          <div className="status-badge">Certified</div>
          <h2>Fresh Ingredients</h2>
          <p>Daily sourcing of farm-fresh vegetables and premium meats to ensure the best taste in every bite.</p>
        </div>

        <div className="standard-item">
          <div className="status-badge">Certified</div>
          <h2>Hygiene Audits</h2>
          <p>Regular kitchen inspections and real-time temperature monitoring of cooking staff.</p>
        </div>

        <div className="standard-item">
          <div className="status-badge">Certified</div>
          <h2>Eco-Friendly Packaging</h2>
          <p>Food-grade, sustainable packaging that keeps your meal hot and the planet safe.</p>
        </div>
      </section>

      {/* --- Best Rated Section --- */}
      <section className="top-rated-banner">
        <h2>Our Top-Rated Partners</h2>
        <p>Explore curated selections of the most loved dining spots in your city.</p>
        <div className="rating-circles">
          <div className="circle">⭐ 4.9</div>
          <div className="circle">⭐ 4.8</div>
          <div className="circle">⭐ 4.5</div>
        </div>
      </section>
    </div>
  )
}

export default QualityRestaurants