/* eslint-disable */
import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating'

import "../css/Mypage.css"

// import {getReplay} from '../apis/mypage/getmypagereplay_post';
import { getmypagewish } from '../apis/mypage/getmypagewish_post';
import { getmypagerating } from '../apis/mypage/getmypagerating_post';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ReactComponent as Next} from '../assets/slider-arrow-right.svg'
import {ReactComponent as Prev} from '../assets/slider-arrow-left.svg'
import { StyledSlider, Div, DivPre, ImgLabel, Poster, RatingBox, MypageText, RatingTitle,
        SliderContainer, PageTitle} from '../css/StyledComponents';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getReplays } from '../reducer/ReplayReducer';
import altImg from '../assets/altImg.png'


export default function Mypage() {
  const subsr = localStorage.getItem('subsr');

  const [wishData, setWishData] = useState();
  const [ratingData, setRatingData] = useState();
  // const dispatch = useDispatch();

  const replayData = useSelector(state=>state.Replays.vodData);
  const replayError = useSelector(state=>state.Replays.error);
  console.log('replayError : ', replayError)

  const dispatch = useDispatch();
  
  //replayData 리덕스 적용
  useEffect(()=>{
    if(replayError){
      dispatch(getReplays(subsr));
    }
  },[]);

  //위시 GET
  useEffect(() => {
    const checkWishes = async () => {
      try {
        const response = await getmypagewish(subsr);
        console.log("getmypagerwish_get_response",response);
        if (response.data){
          const found = response.data.filter((item) => item.wish);
          console.log("getmypagerwish_get_found",found);
          setWishData(found);
      
        }
        else{
          setWishData();
        }
        
      }catch(error) {
        console.log("getmypagerwish_get_error",error);
        setWishData(-1);
      };
    };
    checkWishes();
  }, []);
  

  //평점 GET
  useEffect(() => {
    const checkRatings = async () => {
      try {
        const response = await getmypagerating(subsr);
        if (response.data) {
        setRatingData(response.data);
        } 
      } catch (error) {
        console.log("getmypagereplay_post",error)
        setRatingData(-1);
      }
    };
    checkRatings();
  }, []);


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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };

  return (
    <div className='Mypagebg'>
      {/* <div ><PageTitle>회원정보</PageTitle>

      <MypageText>
        셋탑박스 번호 : {subsr}
      </MypageText> </div>*/}
      <div className='MyPageContainer'>
      <div className='MyPageTitle'>
        <PageTitle>시청중인 컨텐츠 👀</PageTitle>
      </div>
      
        {replayData?
        (replayError>=500? 
        <MypageText>시청 중인 컨텐츠를 불러올 수 없습니다 잠시 후 다시 시도해 주세요.</MypageText>
         :<SliderContainer><StyledSlider {...settings}>
        {(replayData&&replayData.map((item, index) =>(
          <figure key={index} className='fig'>
          <NavLink to={"/detail/"+item.content_id} className="LinkText">
            <ImgLabel>
              <Poster
              src={item.posterurl?item.posterurl:altImg}
              alt={item.title}
              />
              {/* <div><progress className='ProgressBar' value={item.user_preference} max={100} /></div> */}
              </ImgLabel>
            <figcaption><progress className='ProgressBar' value={item.user_preference} max={100} /></figcaption>
          </NavLink>
        </figure>
        )))}
        </StyledSlider></SliderContainer>
        ):(<MypageText>시청 중인 컨텐츠가 없습니다.</MypageText>)}
      

      <div className='MyPageTitle'>
        <PageTitle>찜 목록 ❤️</PageTitle>
      </div>
      
        {wishData&&wishData.length>0 ? 
        (wishData===-1? 
          <MypageText>찜 목록을 불러올 수 없습니다. 잠시 후 다시 시도해 주세요.</MypageText>
         :
         <SliderContainer><StyledSlider {...settings}>
        {(wishData.map((item, index) => (
          <figure key={index}>
          <NavLink to={"/detail/"+item.content_id} className="LinkText">
          <ImgLabel>
            <Poster 
              src={item.posterurl?item.posterurl:altImg}
              alt={item.title}
            />
          </ImgLabel>
          <figcaption>{item.title}</figcaption>
        </NavLink>
      </figure>
        )))} 
        </StyledSlider></SliderContainer>
        ): (
          <MypageText>찜 내역이 존재하지 않습니다.</MypageText>
        )}
     

        <div className='MyPageTitle'>
          <PageTitle>리뷰 목록 ✏️ </PageTitle> 
        </div>
          
            { ratingData ? 
            (ratingData===-1? 
              <div className='RatingError'>리뷰 목록을 불러올 수 없습니다. 잠시 후 다시 시도해 주세요.</div>
              :
              <div className="RatingContainer"><div className='ReviewContainer'>
              {(ratingData.map((item, index) => (
                  <RatingBox key={index}>
                    <NavLink to={"/detail/"+item.content_id} className="LinkText">
                      <label className='RatingImgContainer'>
                        <img
                          className="RatingImg"
                          src={item.posterurl?item.posterurl:altImg}
                          alt={item.title}
                          />
                      </label>
                    </NavLink>
                      <div className="RatingDataContainer">
                        <div className="RatingTitleContainer">
                          <RatingTitle>{item.title}</RatingTitle><br/><br/>
                            <Rating
                              size="30"
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
              </div> </div>
            ): (
              <MypageText>평점 내역이 존재하지 않습니다.</MypageText>
            )}
          
      </div>
    </div>
  )

}
