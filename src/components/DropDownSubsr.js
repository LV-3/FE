import React, { useState, useEffect, useRef } from "react";
import "../css/DropDownSubsr.css";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { Rating } from "react-simple-star-rating";

export default function DropDownSubsr() {
  const subsr = localStorage.getItem("subsr");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

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
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <h1>로그아웃 확인</h1>
            <p>
              추천이 마음에 드셨다면 평가해주세요.
              <br />
              다음에 더 좋은 추천을 제공해드릴게요 :D
            </p>
            <div className="Review">
              {<Rating fillColor="#A50034" size="35" />}
            </div>
            <div className="ButtonSet">
              <button onClick={onClose}>닫기</button>
              <a
                className="LogoutBtn"
                href="../"
                onClick={() => {
                  localStorage.removeItem("subsr", subsr);
                  sessionStorage.removeItem("persist:root");
                  onClose();
                }}
              >
                로그아웃
              </a>
            </div>
          </div>
        );
      },
    });
  };
  const handleMyPageClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdownbutton" onClick={toggleDropdown}>
        <div className="UserContainer"></div>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <div className="DropDownHello">
            안녕하세요
            <div style={{ fontSize: "18px" }}>
              <b>{subsr}</b>님
            </div>
          </div>
          <div className="DropDownMenu">
            <Link
              to="../mypage"
              onClick={handleMyPageClick}
              className="DropDownLink"
            >
              <p className="DropDownMypage">
                <b>마이페이지</b>
              </p>
            </Link>
            <p onClick={handleLogout} className="DropDownLogout">
              <b>로그아웃</b>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
