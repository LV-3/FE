import React from "react";
import "../css/Loading.css";
import robot from "../assets/robot.png";

export const Loading = () => {
  return (
    <div className="LoadingBg">
      <div className="LoadingText">
        반갑습니다! <br />
        당신의 위한 맞춤형 추천을 준비 중입니다. <br />
        잠시만 기다려주세요.
      </div>

      <img src={robot} className="LoadingRobot" alt="Robot" />
    </div>
  );
};
