import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'

import "../css/Mypage.css"

import {getReplay} from '../apis/mypage/getmypagereplay_post';
import { getmypagewish } from '../apis/mypage/getmypagewish_post';
import { getmypagerating } from '../apis/mypage/getmypagerating_post';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ReactComponent as Next} from '../assets/slider-arrow-right.svg'
import {ReactComponent as Prev} from '../assets/slider-arrow-left.svg'
<<<<<<< HEAD
import { StyledSlider, Div, DivPre, ImgLabel, Poster, RatingBox, MypageTitle, MypageText, RatingTitle,
        SliderContainer} from '../css/StyledComponents';
=======
import { StyledSlider, Div, DivPre, ImgLabel, Poster, RatingBox, MypageTitle, MypageText, RatingTitle } from '../css/StyledComponents';
>>>>>>> cfcab4b (:lipstick: 마이페이지 css 수정)


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
      const result = await getReplay(subsr);
      setReplayData(result.data);
    };
    getreplay();
  }, []);
  
  //위시 GET
  useEffect(() => {
    const checkWishes = async () => {
      try {
        const response = await getmypagewish(subsr);
        const found = response.data.filter((item) => item.wish === 1);
        if (found) {
          setIsWished(true);
          setWishData(found);
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
        const response = await getmypagerating(subsr);
        if (response.data) {
        setIsRated(true);
        setRatingData(response.data);
        } else{
          setIsRated();
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkRatings();
  }, [subsr]);


  //arrow를 이렇게 설정하지 않으면 크롬 개발자 도구에서 warning이 뜸
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
    <DivPre><Prev /></DivPre>
    </button>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
    <Div><Next /></Div>
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
<<<<<<< HEAD
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
=======
    nextArrow: <Div><Next /></Div>,
    prevArrow: <DivPre><Prev /></DivPre>
>>>>>>> cfcab4b (:lipstick: 마이페이지 css 수정)
  };

  return (
    <>
      <div>
      <MypageTitle>회원정보</MypageTitle>

      <MypageText>
        셋탑박스 번호 : {subsr}
      </MypageText>
      </div>
<<<<<<< HEAD
 
      <MypageTitle>시청중인 컨텐츠</MypageTitle>
      <SliderContainer>
=======

      <div style={{height:'350px'}}>
      <MypageTitle>시청중인 컨텐츠</MypageTitle>
>>>>>>> cfcab4b (:lipstick: 마이페이지 css 수정)
        { replayData?
        <StyledSlider {...settings}>
        {(replayData.map((item, index) =>(
          <figure key={index} >
            <NavLink to={"/detail/"+item.content_id} className="LinkText">
              <ImgLabel>
                <Poster
                src={item.posterurl}
                alt={index}
                />
              </ImgLabel>
              <figcaption><progress value={item.user_preference} max={100} /><figcaption>{item.title}</figcaption></figcaption>
            </NavLink>
          </figure>
        )))}
        </StyledSlider>
        :(
          <MypageText>시청 중인 컨텐츠가 없습니다.</MypageText>
        )}
      </SliderContainer>

<<<<<<< HEAD
      
      <MypageTitle>찜 목록</MypageTitle>
      <SliderContainer>
=======
      <div style={{height:'350px'}}>
      <MypageTitle>찜 목록</MypageTitle>
>>>>>>> cfcab4b (:lipstick: 마이페이지 css 수정)
        { isWished ? 
        <StyledSlider {...settings}>
        {(wishData.map((item, index) => (
          <figure key={index}>
            <NavLink to={"/detail/"+item.content_id} className="LinkText">
              <ImgLabel>
                <Poster 
                  src={item.posterurl}
                  alt={index}
                />
              </ImgLabel>
              <figcaption>{item.title}</figcaption>
            </NavLink>
          </figure>
        )))} 
        </StyledSlider>
        : (
          <MypageText>찜 내역이 존재하지 않습니다.</MypageText>
        )}
      </SliderContainer>

      <div>
      <MypageTitle>리뷰 목록</MypageTitle> 
        { isRated ? 
<<<<<<< HEAD
          <div>
          {(ratingData.map((item, index) => (
            
              <RatingBox key={index}>
                <NavLink to={"/detail/"+item.content_id} className="LinkText">
=======
          
          (ratingData.map((item, index) => (
            <RatingBox>
              <div key={index}>
                <NavLink to={"/detail/"+item.content_id} style={{textDecoration:"none", textDecorationLine:"none"}}>
>>>>>>> cfcab4b (:lipstick: 마이페이지 css 수정)
                  <ImgLabel>
                    <Poster 
                      src={item.posterurl}
                      alt={index} width="120px" 
                      />
                  </ImgLabel>
                  <RatingTitle>{item.title}</RatingTitle>
                </NavLink>
                  <Rating
                    size="20"
                    initialValue={item.rating}
                    readonly="true"
<<<<<<< HEAD
                    className="Rating"
                  />
                  
                  {item.review}
                  {item.rating_date}
=======
                  />{item.rating_date}{item.review}
>>>>>>> cfcab4b (:lipstick: 마이페이지 css 수정)

                  {/* 평점 데이터에서 subsr과 content_id로 다시 리뷰 데이터 가져와서 매핑 
                  <text>리뷰: {reviewData.filter((reviewitem) => reviewitem.subsr === item.subsr
                  &&reviewitem.content_id === item.content_id)
                  .map((item2, index)=>(
                    <label key={index}>{item2.review}</label>
                  ))}</text>*/}
                
<<<<<<< HEAD
              </RatingBox>
              
          )))}
          </div> 
=======
              </div>
              </RatingBox>
          ))) 
>>>>>>> cfcab4b (:lipstick: 마이페이지 css 수정)
          : (
            <MypageText>평점 내역이 존재하지 않습니다.</MypageText>
          )}
      </div>
    </>
  )
  
}