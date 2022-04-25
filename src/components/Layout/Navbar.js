import React, { useState} from "react";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../../styles/Navbar.css";
import brnyr from '../../assets/Brnyr-logos_transparent.png'

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
      <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/"> <img src={brnyr} alt="brnyrlogo" /> </Link>
          <div className="hiddenLinks">
            <Link to="/menu"> Menu </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>
          </div>
        </div>
        <div className="rightSide">
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
          <button onClick={toggleNavbar}>
            <ReorderIcon />
          </button>
        </div>
      </div>
  );
}

export default Navbar;
