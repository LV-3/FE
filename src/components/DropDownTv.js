/* eslint-disable */
import React, { useState, useEffect, useRef } from "react";
import "../css/DropDownTv.css";
import { Link,useLocation } from "react-router-dom";
import { Category } from "./Category";

export default function DropDownGenres() {
  const [isOpen, setIsOpen] = useState(false);
  //const [allGenres,setGenres] = useState();
  const dropdownRef = useRef(null);
  const [category, setCategory] = useState([]);

  const location =useLocation();

  useEffect(() => {
    setCategory(Category["TV"]);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      // 클릭된 요소가 드롭다운 외부에 있으면 드롭다운을 닫음
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // document에 클릭 이벤트 리스너 추가
    document.addEventListener("click", handleClickOutside);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="tvdropdown" ref={dropdownRef}>
      <button className="tvdropdownbutton" onClick={toggleDropdown}>
        <h2 className="tvtitle"  style={location.pathname.includes("/tv/")?{background: "#F5ADAD",color:"black",fontsize:"40px"}:null}>TV</h2>
      </button>
      {isOpen && (
        <div className="tvdropdown-content">
          {category &&
            category.map((genre, index) => (
              <label key={index}>
                <Link
                  to={`../tv/${genre.replace("/", ":")}`}
                  className="tvDropDownNav"
                >
                  <p onClick={handleLogout}>{genre}</p>
                </Link>
              </label>
            ))}
        </div>
      )}
    </div>
  );
}
