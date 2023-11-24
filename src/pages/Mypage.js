import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'

import "../css/Mypage.css"

import {getReplay} from '../apis/mypage/getmypagereplay_post';
import { getmypagewish } from '../apis/mypage/getmypagewish_post';
import { getmypagerating } from '../apis/mypage/getmypagerating_post';


export default function Mypage() {
  const subsr = localStorage.getItem('subsr');

  const [isWished, setIsWished] = useState(false);
  const [wishData, setWishData] = useState();

  const [isRated, setIsRated] = useState(false);
  const [ratingData, setRatingData] = useState();

  const [replayData, setReplayData] = useState();
  //const [reviewData, setReviewData] = useState();
  
  //replay GET
  useEffect(()=> {
    const getreplay = async () => {
      const result = await getReplay();
      setReplayData(result);
      console.log(result);
    };
    getreplay();
  }, []);
  
  //위시 GET
  useEffect(() => {
    const checkWishes = async () => {
      try {
        const response = await getmypagewish("http://localhost:30/mypagewish",{subsr});
        if (response.data.length > 0) {
          setIsWished(true);
          setWishData(response.data);
          console.log(response);
        } else{
          setIsWished();
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkWishes();
  }, [subsr]);

  //평점 GET
  useEffect(() => {
    const checkRatings = async () => {
      try {
        const response = await getmypagerating("http://localhost:30/mypagerating",{subsr});
        if (response.data.length > 0) {
        setIsRated(true);
        setRatingData(response.data);
        console.log(response);
        } else{
          setIsRated();
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkRatings();
  }, [subsr]);

  return (
    <>
      <div>
      <h2>회원정보</h2>

      <li>
        셋탑박스 번호 : {subsr}
      </li>
      </div>
      <br/>

      <div className='Div'>
      <br />
      <h2>시청중인 컨텐츠</h2>
        { replayData&&replayData.length > 0 ?
        (replayData.map((item, index) =>(
          <figure key={index} >
            <NavLink to={"/detail/"+item.content_id} className='ImageDiv'>
              <img 
              src={item.posterurl}
              alt={index}
              />
              <figcaption><progress value={item.user_preference} max={100} /><figcaption>{item.title}</figcaption></figcaption>
            </NavLink>
          </figure>
        ))):(
          '시청 중인 컨텐츠가 없습니다.'
        )}
      </div>

      <div className='Div'>
      <h2>찜목록</h2>
      
      { isWished ? 
      (wishData.map((item, index) => (
        <figure key={index}>
          <NavLink to={"/detail/"+item.content_id} className='ImageDiv' >
              <img 
              src={item.posterurl}
              alt={item.alt}
              /><figcaption>{item.title}</figcaption>
              
          </NavLink>
        </figure>
      ))) : (
        "찜 내역이 존재하지 않습니다."
      )}
      </div>

      <h2>리뷰목록</h2>
      <div >
      { isRated ? 
      (ratingData.map((item, index) => (
        <div key={index}>
          <NavLink to={"/detail/"+item.content_id}>
          <img 
              src={item.posterurl}
              alt={item.alt} width="50px" 
              />
          {item.title}
          <Rating
            size="20"
            initialValue={item.rating}
            readonly="true"
          />{item.rating_date}{item.review}

          {/* 평점 데이터에서 subsr과 content_id로 다시 리뷰 데이터 가져와서 매핑 
           <text>리뷰: {reviewData.filter((reviewitem) => reviewitem.subsr === item.subsr
          &&reviewitem.content_id === item.content_id)
          .map((item2, index)=>(
            <label key={index}>{item2.review}</label>
          ))}</text>*/}
          
        </NavLink>
          <hr />
        </div>
      
      ))) : (
        "평점 내역이 존재하지 않습니다."
      )}
      </div>
    </>
  )
  
}
