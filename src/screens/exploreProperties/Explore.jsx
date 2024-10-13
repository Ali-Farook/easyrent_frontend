import React, { useEffect, useState } from "react";
import "./style.css";
import Navbar from "../../Components/navbar/Navbar";
import { getListing } from "../../services/ApiList";

function Explore() {

  const [adds, setAdds] = useState([]);
  const [location, setLocation] = useState('');

  const getAdds = async () => {
    const response = await getListing();
    // console.log('getListing====', response.data.data)
    if (response.data.success) {
      setAdds(response.data.data);
    }
  };

  useEffect(() => {
    getAdds()
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ paddingRight: 20, paddingLeft: 20, marginTop: "1rem", marginBottom: '30px' }}>
        <div className="search-bar-container">
          <form onSubmit={() => { }}>
            <input
              type="text"
              placeholder="Search properties by location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
          </form>
        </div>

        <div className="property-grid">
          {adds.map(item => (
            <div className="property-card" key={item._id}>
              <img src={item.heroImage} alt="Property 1" />
              <div className="property-info">
                <h3>
                  {item.title}
                </h3>
                <p>{item.address}</p>
                <p className="price">{item.price}  RS</p>
                <button>{item.saleType}/{item.propertyType}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Explore;
