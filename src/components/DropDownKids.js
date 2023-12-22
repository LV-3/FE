/* eslint-disable */
import React, { useState, useEffect, useRef } from "react";
import "../css/DropDownKids.css";
import { NavLink } from "react-router-dom";
import { Category } from "./Category";

export default function DropDownGenres() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [category, setCategory] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setCategory(Category["키즈/기타"]);
  }, []);

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
    <div className="kidsdropdown" ref={dropdownRef}>
      <button className="kidsdropdownbutton" onClick={toggleDropdown}>
        <h2 className="KidsEtc">키즈/기타</h2>
      </button>
      {isOpen && (
        <div className="kidsdropdown-content">
          {category &&
            category.map((genre, index) => (
              <label key={index}>
                <NavLink
                  to={`../kids/${genre.replace("/", ":")}`}
                  className="kidsDropDownNav"
                >
                  {" "}
                  {/*{`../genre/${encodeURIComponent(genre)}`} */}
                  <p onClick={handleLogout}>{genre}</p>
                </NavLink>
              </label>
            ))}
        </div>
      )}
    </div>
  );
}
