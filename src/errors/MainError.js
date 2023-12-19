import React from 'react'
import '../css/NoResponse.css'
import { useNavigate } from 'react-router-dom';

const MainError = () => {
  const navigate = useNavigate();

  const backBtn = () => {
    navigate('/');
  }

  return (
    <div className='NoResBg'>
        <div className='NoResponseText'>서버 연결에 문제가 있습니다. <br /> 잠시 후 다시 접속해 주세요.</div>
        <div className='BtnContainer'>
          <button onClick={backBtn} className='BackBtn'>뒤로가기</button>
        </div>
    </div>
  )
};

export default MainError;