/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./home.css";
import { FaChartLine, FaBrain, FaSyncAlt } from "react-icons/fa";
import facebook from "../../images/facebook.png";
import tiktokSvg from "../../images/tiktok.png";
import googleAds from "../../images/google.png";
import outbrain from "../../images/outbrain.png";
import taboola from "../../images/taboola.png";
import amazon from "../../images/amazon.png";
import yahoo from "../../images/yahoo.png";

function Home({ onLoginPress, onSignupPress }) {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">AI AdTrack</div>
        <nav className="menu">
          <div
            className="login-btn"
            role="button"
            tabIndex={0}
            onClick={onLoginPress}
            onKeyDown={onLoginPress}
          >
            Login
          </div>
        </nav>
      </header>

      <section className="hero">
        <h1
          style={{ color: "white", fontWeight: "bold", marginBottom: "2rem" }}
        >
          AI-Driven Ad & Revenue Tracking
        </h1>
        <p style={{ color: "white" }}>
          Optimize your ad campaigns with AI-powered insights. Track performance
          across all major platforms!
        </p>
        <a className="cta-btn" href="contact.html">
          Get Started
        </a>
      </section>

      <section className="features">
        <h2 className="heading">Key Features</h2>
        <div className="features-container">
          <div className="feature-box">
            <FaChartLine className="icon" />
            <h3>Real-Time Tracking</h3>
            <p>Monitor ad performance in real-time with deep analytics.</p>
          </div>
          <div className="feature-box">
            <FaBrain className="icon" />
            <h3>AI Optimization</h3>
            <p>AI-driven insights to enhance ROI.</p>
          </div>
          <div className="feature-box">
            <FaSyncAlt className="icon" />
            <h3>Multi-Platform Support</h3>
            <p>Integrates with all major ad platforms.</p>
          </div>
        </div>
      </section>

      <section className="platforms">
        <h2 className="heading">Supported Platforms</h2>
        <div className="platform-logos">
          <img src={facebook} alt="Facebook Ads" />
          <img src={googleAds} alt="Google Ads" />
          <img src={outbrain} alt="Outbrain Ads" />
          <img src={taboola} alt="Taboola Ads" />
          <img src={tiktokSvg} alt="TikTok Ads" />
          <img src={amazon} alt="Amazon Ads" />
          <img src={yahoo} alt="Yahoo DSP Ads" />
        </div>
      </section>

      <section className="testimonials">
        <h2 className="heading">What Our Users Say</h2>
        <blockquote>
          "AI AdTrack has transformed how we optimize ad spend and revenue
          tracking!" - John D.
        </blockquote>
        <blockquote>
          "Seamless AI integration with Facebook and Google Ads. A
          game-changer!" - Sarah L.
        </blockquote>
      </section>

      <footer className="footer">
        <p style={{ color: "white", marginBottom: 8 }}>
          &copy; 2025 AI AdTrack. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="privacy.html">Privacy Policy</a>
          <a href="about.html">About Us</a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
