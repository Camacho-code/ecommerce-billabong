import React from "react";
import Search from "../../assets/icons/Search.svg";
import User from "../../assets/icons/User.svg";
import Bag from "../../assets/icons/Bag.svg";
import "./index.css";

export default function Header() {
  return (
    <header className="search-container">
      <nav>
        <ul>
          <li>
            <a href="">
              <img src="https://d3ugyf2ht6aenh.cloudfront.net/stores/987/679/themes/common/logo-134625903-1651507122-d9433efbae55018cfe47865a3f64c6801651507122-320-0.png?0"></img>
            </a>
          </li>

          <li>
            <a href="">
              <img src={Search} height={36}></img>
            </a>
          </li>
          <li>
            <a>
              <img src={User} height={52}></img>
            </a>
          </li>

          <li>
            <a>
              <img src={Bag} height={36}></img>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
