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
import { StyledSlider, Div, DivPre, ImgLabel, Poster, RatingBox, MypageText, RatingTitle,
        SliderContainer, PageTitle} from '../css/StyledComponents';

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
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  return (
    <div className="Mypage">
      <div>
      <PageTitle>회원정보</PageTitle>

      <MypageText>
        셋탑박스 번호 : {subsr}
      </MypageText>
      </div>
 
      <PageTitle>시청중인 컨텐츠</PageTitle>
      <SliderContainer>
        { replayData?
        <StyledSlider {...settings}>
        {(replayData.map((item, index) =>(
          <div key={index} >
          <NavLink to={"/detail/"+item.content_id} className="LinkText">
            <ImgLabel>
              <Poster
              src={item.posterurl}
              alt={index}
              />
              <div><progress className='ProgressBar' value={item.user_preference} max={100} /></div>
            </ImgLabel>
            {/* <figcaption><progress className='ProgressBar' value={item.user_preference} max={100} /></figcaption> */}
          </NavLink>
        </div>
    )))}
    </StyledSlider>
    :(
      <MypageText>시청 중인 컨텐츠가 없습니다.</MypageText>
    )}
          </SliderContainer>

      
      <PageTitle>찜 목록</PageTitle>
      <SliderContainer>
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
      <PageTitle>리뷰 목록</PageTitle> 
        { isRated ? 
          <div>
          {(ratingData.map((item, index) => (
              <RatingBox key={index}>
                <NavLink to={"/detail/"+item.content_id} className="LinkText">
                  <label className='RatingImgContainer'>
                    <img
                      className="RatingImg" 
                      src={item.posterurl}
                      alt={index}
                      />
                  </label>
                </NavLink>
                  <div className="RatingDataContainer">
                    <div className="RatingTitleContainer">
                      <RatingTitle>{item.title}</RatingTitle>
                        <Rating
                          size="20"
                          initialValue={item.rating}
                          readonly="true"
                          fillColor="#a50034"
                          className="Rating"
                        />
                        <div className="RatingDate">
                          {item.rating_date}
                        </div>
                    </div>
                      <div className="Review">
                        {item.review}
                      </div>
                  </div>
                {/* 평점 데이터에서 subsr과 content_id로 다시 리뷰 데이터 가져와서 매핑 
                <text>리뷰: {reviewData.filter((reviewitem) => reviewitem.subsr === item.subsr
                &&reviewitem.content_id === item.content_id)
                .map((item2, index)=>(
                  <label key={index}>{item2.review}</label>
                ))}</text>*/}
              </RatingBox>
            )))}
          </div> 
        : (
          <MypageText>평점 내역이 존재하지 않습니다.</MypageText>
        )}
      </div>
    </div>
  )

}
