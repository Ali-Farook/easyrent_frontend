import React from "react";
import "./style.css";
import Navbar from "../../../Components/navbar/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import pic from "../../../assets/images/pic.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="main-body">
      <Navbar />
      <div class="hero">
        <Carousel
          labels={""}
          interval={2500}
          showStatus={false}
          autoPlay={true}
          swipeable={true}
          transitionTime={700}
          infiniteLoop={true}
          width={"100%"}
          ariaLabel=""
        >
          <div>
            <img src={pic} />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={pic} />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src={pic} />
            <p className="legend">Legend 1</p>
          </div>
        </Carousel>
        <div style={{ zIndex: 10, position: "absolute", top: 300, right: 430 }}>
          <h1>Find Your Perfect Home</h1>
          <p>Browse, book, and manage your rental properties with ease.</p>
          <Link to="/explore">
            <button>Explore Properties</button>
          </Link>
        </div>
      </div>
      <div class="featured-properties">
        <h2>Featured Properties</h2>
        <div class="property-grid">
          <div class="property-card">
            <a href="property1.html">
              <img src="https://via.placeholder.com/300x200" alt="Property 1" />
            </a>
            <div class="property-info">
              <h3>
                <a href="property1.html">Modern Apartment</a>
              </h3>
              <p>Located in the heart of the city.</p>
              <p class="price">15000/night</p>
              <a href="property1.html">
                <button>View Details</button>
              </a>
            </div>
          </div>
          <div class="property-card">
            <a href="property2.html">
              <img src="https://via.placeholder.com/300x200" alt="Property 2" />
            </a>
            <div class="property-info">
              <h3>
                <a href="property2.html">House</a>
              </h3>
              <p>Perfect for a weekend getaway.</p>
              <p class="price">10000/night</p>
              <a href="property2.html">
                <button>View Details</button>
              </a>
            </div>
          </div>
          <div class="property-card">
            <a href="property3.html">
              <img src="https://via.placeholder.com/300x200" alt="Property 3" />
            </a>
            <div class="property-info">
              <h3>
                <a href="property3.html">Luxury Villa</a>
              </h3>
              <p>Experience the ultimate comfort.</p>
              <p class="price">$30000/night</p>
              <a href="property3.html">
                <button>View Details</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="footer">
        <p>&copy; 2024 Smart Rental. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Home;
