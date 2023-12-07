import React from 'react'
import loading from '../assets/loadingrolling.gif'
import "../css/Loading.css"


export const Loading = () => {
  return (
    <div className='LoadingBg'>
        <div className='LoadingText'>추천 중입니다. <br /> 잠시만 기다려주세요</div>
        <img src={loading} alt="Loading" className='loadinggif'/>
    </div>
  )
};

