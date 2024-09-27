import React from "react";
import pic from "../../assets/images/pic.jpg";

const Card = (item) => {
  const onMouseEnter = (e) => {
    e.currentTarget.style.transform = "scale(1.001)";
    e.currentTarget.style.boxShadow = "0px 2px 4px 0px rgba(0, 0, 0, 0.30)";
  };

  const onMouseLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0px 1.5px 2px 0px rgba(0, 0, 0, 0.20)";
  };

  return (
    <>
      <div
        className="card-div"
        style={{
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          overflow: "hidden",
          width: "55%",
          height: "17rem",
          borderRadius: "0.75rem",
          display: "flex",
          boxShadow: "0px 1.5px 2px 0px rgba(0, 0, 0, 0.20)",
          cursor: "pointer",
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div style={{ width: "40%", height: "100%", overflow: "hidden" }}>
          <img
            src={pic}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div style={{ marginLeft: 20 }}>
          <h2 style={{ fontFamily: "sans-serif" }}>PKR: 30000</h2>
        </div>
      </div>
    </>
  );
};

export default Card;
