import React from 'react'
import '../css/NoResponse.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ErrorReload = () => {

    const navigate = useNavigate();

    const VODs1 = useSelector(state=>state.Vods.vodData["description_data"]);
    const VODs2 = useSelector(state=>state.Vods.vodData["genre_data"]);
    const VODs3 = useSelector(state=>state.Vods.vodData["personal_data"]);
    const personal_words = useSelector(state=>state.Vods.vodData["personal_words"]);

  const reloadBtn = () => {
    if(VODs1&&VODs2&&VODs3&&personal_words){
      navigate('/main');
    }else{
      window.location.reload();
    }
  }

  return (
    <div className='NoResBg'>
        <div className='NoResponseText'>데이터를 불러오는 데 문제가 발생했습니다. <br /> 새고고침을 해주세요.</div>
        <div className='BtnContainer'>
          <button onClick={reloadBtn} className='BackBtn'>새로고침</button>
        </div>
    </div>
  )
};

export default ErrorReload;