import { Link } from "react-router-dom";
import * as React from "react";
import TextField from "@mui/material/TextField";
import "./Styles/Navbar.css";
// import Header from "./AllRoutes/Header";
function Navbar() {
  return (
    <div className="navbar-box">
      <div className="navbar-links" >
        <Link to="/" style={{color:"black",fontWeight:"600" }} >LYST</Link>
        <Link to="/productspage" style={{color:"black"}}>
          Products Page
        </Link>
        {/* <Link to="/login" style={{color:"black"}}>
          Login
        </Link> */}
      </div>
      <div className="navbar-searchbar" >
        <TextField
          fullWidth
          label="Search"
          id="fullWidth"
          placeholder="Eg: VALENTINA DRESSES"
        />
        {/* <Header/> */}
      </div>
    </div>
  );
}
export default Navbar;
