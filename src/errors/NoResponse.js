import React from "react";
import "../css/NoResponse.css";
import { useNavigate } from "react-router-dom";
import dino from '../assets/dino.gif'

const NoResponse = () => {
  const navigate = useNavigate();

  const Click = () => {
    navigate("/");
  };
  return (
    <div className="NoResBg">
      <div className="container">
        <img src={dino} alt="dino" className='ErrorGif'/>
        <div className="NoResponseText">
          서버 연결에 문제가 발생했습니다. <br /> 잠시 후 다시 접속해 주세요.
        </div>
        <div className="BtnContainer">
          <a onClick={Click} className="BackBtn">
            다시 접속하기
          </a>
        </div>
      </div>
    </div>
  );
};

export default NoResponse;
