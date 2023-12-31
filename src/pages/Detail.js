/* eslint-disable */
import React, { useState, useEffect } from "react";
import "../css/Detail.css";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import ReviewModal from "../components/ReviewModal";
import altImg from "../assets/altImg.png";
//상세페이지 동적 url 라우팅 위한 useParams
import { useParams } from "react-router-dom";

import { postwish } from "../apis/detail/postdetailwish";
import { Rating } from "react-simple-star-rating";
import { getVodData } from "../apis/detail/getVodData";
import { getwishdata } from "../apis/detail/getmywish_post";
import { getratingdata } from "../apis/detail/getdetailrating";
//import DelConfirmAlert from '../components/__DelConfirmAlert';
import { delReview } from "../apis/detail/deldetailrating";
import {
  DetailTitle,
  ImgLabel,
  Poster,
  MypageText,
  PageErrorText,
  BackButtonContainer,
  BackButton,
  BackImg,
  DetailSliderContainer,
  DetailSlider,
  DDivPre,
  DDiv,
  DImgLabel,
  DPoster,
} from "../css/StyledComponents";
import { useNavigate } from "react-router-dom";
import back from "../assets/back.png";
import { getTags } from "../apis/detail/gettags";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as Next } from "../assets/slider-arrow-right.svg";
import { ReactComponent as Prev } from "../assets/slider-arrow-left.svg";

export default function Detail() {
  //url 파라미터("localhost:3000/detail/" 뒤에 붙는 상세 페이지 파라미터)를 content_id 변수로 저장
  let { content_id } = useParams();
  //유저아이디
  const subsr = localStorage.getItem("subsr");

  //VOD 데이터
  const [vodData, setVodData] = useState({});

  //my rating 데이터
  const [ratingData, setRatingData] = useState();

  //all rating 데이터
  const [allRatingData, setAllRatingData] = useState([]);

  const [tags, setTags] = useState([]);
  const [tagsData1, setTagsData1] = useState([]);
  const [tagsData2, setTagsData2] = useState([]);
  const [tagsData3, setTagsData3] = useState([]);
  const tagsData = [...tagsData1, ...tagsData2, ...tagsData3];
  const navigate = useNavigate();

  //찜하기
  const [wish, setWish] = useState();

  // VOD GET 요청
  useEffect(() => {
    const getvoddata = async () => {
      try {
        const response = await getVodData(content_id);
        setVodData(response.data);
      } catch (error) {
        if (Object.keys(error).includes("response")) {
          //navigate("/noResponse");
        } else {
          setVodData(-1);
          console.log("getVodData", error);
        }
      }
    };
    getvoddata();
  }, []);

  //wish get요청
  useEffect(() => {
    const getWishData = async () => {
      try {
        const response = await getwishdata(content_id);
        if (response.data) {
          setWish(response.data);
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    getWishData();
  }, []);

  const postWish = async () => {
    await postwish(subsr, content_id, Number(!wish));
  };

  //wish 변경
  const handleWishButton = async () => {
    if (!wish) {
      setWish(1);
    } else {
      setWish(0);
    }
  };

  const deleletereview = async () => {
    await delReview(subsr, content_id);
    window.location.reload();
  };

  //rating get요청
  useEffect(() => {
    const getRatingData = async () => {
      try {
        const response = await getratingdata(content_id);
        const found = response.data.filter((item) => item.subsr === subsr);
        const allfound = response.data.filter((item) => item.subsr !== subsr);
      } catch (error) {
        console.log("error", error);
      }
    };
    getRatingData();
  }, [ratingData]);

  useEffect(() => {
    const gettags = async () => {
      try {
        const result = await getTags(content_id);
        const response = result.data;
        setTags(response["tags"]);
        setTagsData1(response["tag1"]);
        setTagsData2(response["tag2"]);
        setTagsData3(response["tag3"]);
      } catch (error) {
        console.log("tag error : ", error);
      }
    };
    gettags();
  }, []);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <DDivPre>
        <Prev />
      </DDivPre>
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
      <DDiv>
        <Next />
      </DDiv>
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
    <div className="Detaildivbg">
      <div className="DetailConatiner">
        <BackButtonContainer>
          <BackButton>
            <BackImg
              src={back}
              onClick={() => {
                navigate(-1);
              }}
            />
          </BackButton>
        </BackButtonContainer>
        {vodData ? (
          vodData === -1 ? (
            <PageErrorText>
              VOD정보를 불러올 수 없습니다. <br />
              잠시 후 다시 시도해주세요.
            </PageErrorText>
          ) : (
            <>
              <div className="VodDataContainer">
                <ImgLabel>
                  <Poster
                    src={vodData.posterurl ? vodData.posterurl : altImg}
                    alt={vodData?.title}
                    referrerPolicy="no-referrer"
                  />
                </ImgLabel>
                <div className="VodData">
                  <div className="DetailTitleContainer">
                    <h1 className="VodTitle">{vodData?.title}</h1>
                    <button
                      className="WishButton"
                      onClick={() => {
                        handleWishButton();
                        postWish();
                      }}
                    >
                      {wish ? (
                        <HeartFilled
                          style={{
                            color: "red",
                            fontSize: "35px",
                            height: "60%",
                          }}
                        />
                      ) : (
                        <HeartOutlined
                          style={{ fontSize: "35px", height: "60%" }}
                        />
                      )}
                    </button>
                    <br />
                  </div>
                  <div className="Vodtextbox">
                    <p className="VodInfo1">
                      <b>카테고리</b>&nbsp;&nbsp;
                      {vodData.release_year?.release_year}
                      {vodData?.category}·{vodData?.genre}·{vodData?.country}
                    </p>
                    <p>
                      <b>재생시간</b> &nbsp;&nbsp;{vodData?.disp_rtm}
                    </p>
                    {/* <div><b>감독</b> &nbsp;&nbsp;{vodData?.director}</div> */}
                    <div>
                      <b>출연진</b> &nbsp;&nbsp;{vodData?.actors}
                    </div>
                    <div>
                      <b>줄거리</b> &nbsp;&nbsp;
                      <div className="Vodsumrybox">{vodData?.description}</div>
                    </div>
                  </div>
                </div>
              </div>

              <br />
              <DetailTitle>연관 컨텐츠</DetailTitle>
              {!tagsData.length ? (
                <div className="TagText">연관 컨텐츠를 불러올 수 없습니다.</div>
              ) : (
                <div>
                  <div className="Tags">
                    {tags &&
                      tags.map((tag, index) => (
                        <div key={index} className="TagBox">
                          <p className="Tag">#{tag}&nbsp;&nbsp;</p>
                        </div>
                      ))}
                  </div>
                  <DetailSliderContainer>
                    <DetailSlider {...settings}>
                      {/* <button onClick={getVOD2}>새로고침</button> */}
                      {tagsData &&
                        tagsData.map((image, index) => (
                          <div key={index}>
                            <DImgLabel>
                              <a href={"/detail/" + image.content_id}>
                                <DPoster
                                  src={
                                    image.posterurl ? image.posterurl : altImg
                                  }
                                  alt={image.title}
                                  referrerPolicy="no-referrer"
                                />
                              </a>
                            </DImgLabel>
                          </div>
                        ))}
                    </DetailSlider>
                  </DetailSliderContainer>
                </div>
              )}

              {ratingData ? (
                <div>
                  <DetailTitle>나의 리뷰</DetailTitle>
                  {/*{
              (ratingData&&ratingData.filter((ratingData)=>ratingData.subsr === subsr).map((item, index)=>(*/}
                  <div className="ReviewBox">
                    {/* {item.subsr} */}
                    <div className='ReviewSort'>
                      <div className='ReviewContent'>
                        <Rating
                          fillColor="#A50034"
                          size="15"
                          initialValue={ratingData.rating}
                          readonly="true"
                        />
                        &emsp;
                        <p className='ReviewTime'>{ratingData.rating_date}</p>
                        &emsp;
                        <ReviewModal />
                        <button className="ReviewButton" onClick={deleletereview}>
                          리뷰 삭제
                        </button>
                        {/* <DelConfirmAlert/>*/}
                        <br />
                      </div>
                      <div className="RatingText">{ratingData.review}</div>
                    </div>
                  </div>
                  {/* ))) */}
                  {/* } */}
                </div>
              ) : (
                <>
                  <DetailTitle>나의 리뷰</DetailTitle>
                  <div className="ReviewBox">
                    리뷰가 없습니다.
                    <div className="firstReviewButton">
                      <ReviewModal />
                    </div>
                  </div>
                </>
              )}
              <>
                <br />
                <br />
              </>
              {allRatingData.length > 0 ? (
                <div>
                  <DetailTitle>모든 리뷰</DetailTitle>
                  {allRatingData &&
                    allRatingData
                      .filter((allRatingData) => allRatingData.subsr !== subsr)
                      .map((item, index) => (
                        <div key={index} className="ReviewBox">
                          <div className='ReviewSort'>
                            <div className='ReviewContent'>
                              ID: {item.subsr}&emsp;
                              <Rating
                                fillColor="#A50034"
                                size="15"
                                initialValue={item.rating}
                                readonly="true"
                              />
                              &emsp;
                              <p className='ReviewTime'>{item.rating_date}</p>
                              <br />
                            </div>
                            <div className="RatingText">{item.review}</div>
                          </div>
                        </div>
                      ))}
                </div>
              ) : (
                <div className="AllReviewConatiner">
                  <DetailTitle>모든 리뷰</DetailTitle>
                  <div className="ReviewBox">
                    다른 이용자의 리뷰가 없습니다.
                  </div>
                </div>
              )}
            </>
          )
        ) : (
          <MypageText>VOD정보가 없습니다.</MypageText>
        )}
      </div>
    </div>
  );
}
