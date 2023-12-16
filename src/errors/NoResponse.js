import React from 'react'
import '../css/NoResponse.css'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NoResponse = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    sessionStorage.removeItem('persist:root');
  },[])

  const backBtn = () => {
    navigate(-1);
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

export default NoResponse;