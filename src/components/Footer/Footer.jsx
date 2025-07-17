import React from "react";
import "./Footer.css";
import navbar_logo from "../../assets/navbar_logo.png";
import { FaChevronRight } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="row1">
        <div className="block">
          <img className="navbar_logo" src={navbar_logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            quisquam, necessitatibus saepe, temporibus a quibusdam .
          </p>
        </div>
        <div className="block block_mid">
          <h3>USEFUL LINKS</h3>
          <ul>
            <li>
              <Link className="Link" to="/404"> HOME</Link>
            </li>
            <li>
              <Link className="Link"  to="/404"> ABOUT</Link>{" "}
            </li>
            <li>
              <Link className="Link"  to="/404">SERVICE</Link>{" "}
            </li>
            <li>
              <Link className="Link"  to="/404"> ROOM</Link>
            </li>
          </ul>
          <div className="icons">
            <IoLogoTwitter className="social_icon" />
            <BiLogoFacebook className="social_icon" />
            <FaInstagram className="social_icon" />
            <FaPinterestP className="social_icon" />
            <FaDribbble className="social_icon" />
          </div>
        </div>
        <div className="block">
          <h3>SUBSCRIBE</h3>
          <p>
            Don't miss to subscribe our news,
            <br />
            kindly fill the form bellow
          </p>
          <div className="input_field">
            <input type="email" placeholder="Your Email Here" />
            <button>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
      <div className="row2">
        <p>&copy; 2025 Imperical Grand Hotel.All Right Resetved.</p>
        <ul>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
