import React from "react";
import "./style.css";
import Navbar from "../../Components/navbar/Navbar";
import Card from "../../Components/card/Card";

function Explore() {
  return (
    <>
      <Navbar />
      <div style={{ paddingRight: 20, paddingLeft: 20, marginTop: "1rem" }}>
        <form className="seacrh-form">
          <input placeholder="Search" className="seacrh" />
        </form>

        <Card />
      </div>
    </>
  );
}

export default Explore;
