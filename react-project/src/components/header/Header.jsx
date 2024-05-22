import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png'

const Header = () => {

  const navigate = useNavigate() 

  const handleMain = () => {
    navigate('/main');
  }
  return (
    <div>
      <div className="div-header">
        <div className="header">
          <div className="header-section" onClick={handleMain}>
            <img src={logo} id="logo2"/>
          </div>
          <div className="header-section">

          </div>
        </div>
      </div>
      <hr className="hr" />
    </div>
  );
};

export default Header;
