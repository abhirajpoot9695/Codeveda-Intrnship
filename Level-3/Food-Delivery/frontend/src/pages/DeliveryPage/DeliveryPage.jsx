import React from 'react'
import './DeliveryPage.css'
import { assets } from '../../assets/frontend_assets/assets'

const DeliveryPage = () => {
  return (
    <div className='delivery-page'>
      {/* --- Hero Section --- */}
      <div className="delivery-hero">
        <div className="hero-content">
          <h1>Express Delivery 🚀</h1>
          <p>Hot and fresh food delivered to your doorstep in just 30 minutes!</p>
          <button className='check-btn'>Track Order</button>
        </div>
      </div>

      {/* --- Features Section --- */}
      <div className="delivery-features">
        <h2>Why Trust Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="icon">🛵</div>
            <h3>Super Fast</h3>
            <p>Our delivery partners are stationed in every corner of the city.</p>
          </div>
          <div className="feature-card">
            <div className="icon">🛡️</div>
            <h3>Safe & Hygienic</h3>
            <p>Ensuring no-contact delivery and regular temperature checks.</p>
          </div>
          <div className="feature-card">
            <div className="icon">📍</div>
            <h3>Live Tracking</h3>
            <p>Watch your food reach you in real-time on the map.</p>
          </div>
        </div>
      </div>

      {/* --- How it Works --- */}
      <div className="how-it-works">
        <h2>The Journey of Your Order</h2>
        <div className="steps">
          <div className="step"><span>1</span> <p>Place Your Order</p></div>
          <div className="step"><span>2</span> <p>Restaurant Prepares Food</p></div>
          <div className="step"><span>3</span> <p>Rider Picks Up Order</p></div>
          <div className="step"><span>4</span> <p>Happiness Delivered!</p></div>
        </div>
      </div>
    </div>
  )
}

export default DeliveryPage