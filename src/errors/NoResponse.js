import React from 'react'
import '../css/NoResponse.css'
import { useEffect } from 'react';

const NoResponse = () => {
  
  const subsr = localStorage.getItem('subsr');

  useEffect(()=>{
    localStorage.removeItem('subsr', subsr);
    sessionStorage.removeItem('persist:root');
  })

  return (
    <div >
        <div className='NoResponseText'>서버 연결에 문제가 있습니다. <br /> 잠시 후 다시 접속해 주세요.</div>

    </div>
  )
};

export default NoResponse;