import React from "react";
import Search from "../../assets/icons/Search.svg";
import User from "../../assets/icons/User.svg";
import Bag from "../../assets/icons/Bag.svg";
import Logo from "../../assets/icons/Logo.png";
import "./index.css";

export default function Header() {
  return (
    <header>
      <nav className="container">
        <div>
          <a href="">
            <img src={Logo} height={42}></img>
          </a>
        </div>

        <div>
          <a href="">
            <img src={Search} height={36}></img>
          </a>
        </div>

        <div>
          <a href="">
            <img src={User} height={70}></img>
          </a>
        </div>

        <div>
          <a href="">
            <img src={Bag} height={46}></img>
          </a>
        </div>
      </nav>
    </header>
  );
}
