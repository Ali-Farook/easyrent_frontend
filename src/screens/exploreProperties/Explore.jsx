import React, { useEffect, useState } from "react";
import "./style.css";
import Navbar from "../../Components/navbar/Navbar";
import { getListing } from "../../services/ApiList";

function Explore() {

  const [adds, setAdds] = useState([]);
  const [location, setLocation] = useState('');

  const getAdds = async (searchText = '') => {
    const data = {}

    if (searchText.trim() != '') {
      data.location = searchText;
    }

    const response = await getListing(data);
    console.log('getListing====', response.data.data)
    if (response.data.success) {
      setAdds(response.data.data);
    }
  };

  const onSearch = (e) => {
    e.preventDefault();
    getAdds(location);
  };

  useEffect(() => {
    getAdds()
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ paddingRight: 20, paddingLeft: 20, marginTop: "1rem", marginBottom: '30px' }}>
        <div className="search-bar-container">
          <form onSubmit={onSearch}>
            <input
              type="text"
              placeholder="Search properties by location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="search-input"
            />
            <button type="submit" onClick={onSearch} className="search-button">Search</button>
          </form>
        </div>

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
    </>
  );
}

export default Explore;
