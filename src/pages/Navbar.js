/* eslint-disable */
import { React, useState } from "react";
import "../css/Navbar.css";
import { Link, useNavigate} from "react-router-dom";
import DropDownSubsr from "../components/DropDownSubsr";
import DropDownMovie from "../components/DropDownMovie";
import DropDownTv from "../components/DropDownTv";
import DropDownKids from "../components/DropDownKids";
import searchIcon from "../assets/search.png";
import logo from "../assets/logo2.png";
import robot from "../assets/robot.png";


export default function Navbar() {
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");

  const onChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  const buttonClick = () => {
    if (!searchText) {
      alert("검색어를 입력해주세요!");
    } else {
      navigate(`../search/?input=${searchText}`);
      setSearchText("");
    }
  };

  const keyPress = (e) => {
    if (e.key === "Enter"&&e.nativeEvent.isComposing === false) {
      buttonClick();
    }
  };

  return (
    <div className="NavBar">
    
      <div className="NavContainer">

        <Link to="/main" className="NavbarLink">
          <img src={logo} className="Logo" alt="logo" />
          <img src={robot} className="Robot" alt="Robot" />
        </Link>


        <div className="DropDownMovie">
          <DropDownMovie />
        </div>

        <div className="DropDownTv">
          <DropDownTv />
        </div>

        <div className="DropDownKids">
          <DropDownKids />
        </div>

        <div className="SearchContainer">
          <input
            className="SearchInput"
            placeholder="제목, 출연진을 검색해보세요."
            onChange={onChange}
            value={searchText}
            onKeyDown={keyPress}
          ></input>
          <button className="SearchButton" onClick={buttonClick} onKeyUp={keyPress}>
            <img src={searchIcon} className="searchIcon" alt="search" />
          </button>
        </div>

        <div className="SubsrContainer">
          <DropDownSubsr />
        </div>
      </div>
    </div>
  );
}
