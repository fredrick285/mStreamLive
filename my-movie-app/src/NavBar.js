import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div
      style={{
        borderBottom: "2px solid black",
        paddingBottom: "10px",
        marginBottom: "12px",
        display:"flex",
        justifyItems:"center"
      }}
    >
      <NavLink style={{ marginRight: "10px" }} to="/About">
        About
      </NavLink>
      <NavLink style={{ marginRight: "10px" }} to="/movies">
        Movies
      </NavLink>
      <NavLink style={{ marginRight: "10px" }} to="/Contact">
        Contact us
      </NavLink>
    </div>
  );
}

export default NavBar;