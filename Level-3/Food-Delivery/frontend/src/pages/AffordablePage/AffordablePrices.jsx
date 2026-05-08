import React from 'react'
import './AffordablePrices.css'

const AffordablePrices = () => {
  return (
    <div className='prices-container'>
      {/* --- Hero Section --- */}
      <section className="prices-hero">
        <div className="hero-overlay">
          <h1>Pocket-Friendly Feasts 💰</h1>
          <p>Indulge in your favorite meals without worrying about the bill.</p>
          <div className="deal-badge">Deals starting at ₹99</div>
        </div>
      </section>

      {/* --- Why Choose Us Section --- */}
      <section className="benefits-section">
        <div className="benefit-card">
          <div className="benefit-icon">🏷️</div>
          <h3>Flat Discounts</h3>
          <p>Get up to 50% off on top-rated restaurants every single day.</p>
        </div>
        <div className="benefit-card">
          <div className="benefit-icon">🚚</div>
          <h3>Zero Delivery Fee</h3>
          <p>Enjoy free delivery on all orders above ₹199 from nearby spots.</p>
        </div>
        <div className="benefit-card">
          <div className="benefit-icon">💳</div>
          <h3>Cashback Offers</h3>
          <p>Earn reward points and instant cashbacks on every digital payment.</p>
        </div>
      </section>

      {/* --- Promo Banner --- */}
      <section className="promo-banner">
        <h2>Save More, Eat More!</h2>
        <p>Use Code: <b>FIRST50</b> for a special discount on your first order.</p>
        <button className="order-now-btn">Explore Budget Menu</button>
      </section>
    </div>
  )
}

export default AffordablePrices