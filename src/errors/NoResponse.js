import React from 'react'
import '../css/NoResponse.css'
import { useEffect } from 'react';

const NoResponse = () => {

  useEffect(()=>{
    sessionStorage.removeItem('persist:root');
  },[])

  return (
    <div className='NoResBg'>
        <div className='container'>
          <div className='NoResponseText'>서버 연결에 문제가 있습니다. <br /> 잠시 후 다시 접속해 주세요.</div>
          <div className='BtnContainer'>
            <a href="javascript:window.history.back();" className='BackBtn'>뒤로가기</a>
          </div>
        </div>
    </div>
  )
};

export default NoResponse;