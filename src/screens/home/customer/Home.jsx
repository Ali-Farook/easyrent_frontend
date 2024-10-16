import React, { useEffect, useState } from "react";
import "./style.css";
import Navbar from "../../../Components/navbar/Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { getListing } from "../../../services/ApiList";


function Home() {
  const [adds, setAdds] = useState([]);
  const Images = [
    'https://imagebuc.s3.eu-north-1.amazonaws.com/easy_rent_Hero/pexels-falling4utah-2724749.jpg',
    'https://imagebuc.s3.eu-north-1.amazonaws.com/easy_rent_Hero/pexels-karolina-grabowska-4397843.jpg',
    'https://imagebuc.s3.eu-north-1.amazonaws.com/easy_rent_Hero/pexels-pixabay-534228.jpg'
  ];

  const getAdds = async () => {
    const response = await getListing();
    // console.log('getListing====', response.data.data[0])
    if (response.data.success) {
      setAdds(response.data.data);
    }
  };

  useEffect(() => {
    getAdds()
  }, []);

  return (
    <div className="main-body">
      <Navbar />
      <div className="carousel-wrapper">
        <div className="carousel-content">
          <h2 style={{ color: 'white' }}>Welcome to Our Property Showcase</h2>
          <p>Find your dream home today!</p>
          <Link to="/explore">
            <button className="carousel-btn">Explore Listings</button>
          </Link>
        </div>

        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          interval={4000}
        >
          {Images.map((image, index) => (
            <div
              key={index}
              className="carousel-slide"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '500px',
              }}
            >
            </div>
          ))}
        </Carousel>
      </div>
      <div className="featured-properties">
        <h2>Featured Properties</h2>
        <div className="property-grid">
          {adds.map(item => (
            <div className="property-card" key={item._id}>
              <img src={item.heroImage} alt="Property 1" />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className="property-info">
                  <h3>
                    {item.title}
                  </h3>
                  <p>{item.address}</p>
                  <p className="price">{item.price}  RS</p>
                  <button>{item.saleType}/{item.propertyType}</button>
                </div>

                <div style={{ marginTop: 10, marginRight: 15 }}>
                  <h3>{item.userId.firstName} {item.userId.lastName}</h3>
                  <p style={{ color: '#666' }}>Call: {item.phoneNumber}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      <div className="footer">
        <p>&copy; 2024 Smart Rental. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Home;
