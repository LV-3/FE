import React from 'react'
import loadingInfinity from '../assets/loadingInfinity.gif'
import "../css/Loading.css"


export const Loading = () => {
  return (
    <div className='LoadingBg'>
        <div className='LoadingText'>잠시만 기다려주세요</div>
        <img src={loadingInfinity} alt="Loading" className='loadinggif'/>
    </div>
  )
};

