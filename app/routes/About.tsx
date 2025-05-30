import React from 'react';
import bgImg from '../assets/images/about-hero.png';
import { Link } from 'react-router';
import '../styles/routes/about.css';

export default function About() {
  return (
    <div className="about__page">
      <img src={bgImg} className="about__hero-image" />
      <div className="container about__page-body">
        <div className="about__page-content">
          <h2 className="heading">
            Don’t squeeze in a sedan when you could relax in a van.
          </h2>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>

        <div className="about__page-cta">
          <h2 className="sub-heading">
            Your destination is waiting.
            <br />
            Your van is ready.
          </h2>
          <Link className="btn btn--secondary" to="/vans">
            Explore our vans
          </Link>
        </div>
      </div>
    </div>
  );
}
