/* eslint-disable */
import {React, useState,useEffect} from 'react' 
//import imageData from "../components/imgdata";
import "react-multi-carousel/lib/styles.css";
import {NavLink} from "react-router-dom";
import { Loading } from '../components/Loading';

//처음 추천 결과 요청
import { allVods } from '../apis/main/getmain_post';
//각 모델 새로고침 결과 요청
import { VOD_model1 } from '../apis/main/getreload1_post';
import { VOD_model2 } from '../apis/main/getreload2_post';
import { VOD_model3 } from '../apis/main/getreload3_post';
import { MainStyledSlider, Div, DivPre, ImgLabel, Poster,
  MainSliderContainer, PageTitle} from '../css/StyledComponents';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ReactComponent as Next} from '../assets/slider-arrow-right.svg'
import {ReactComponent as Prev} from '../assets/slider-arrow-left.svg'
import '../css/Main.css';

export default function Main() {

  //모델별 결과 받을 리스트
  const [VODs1, setVODs1] = useState([]);
  const [VODs2, setVODs2] = useState([]);
  const [VODs3, setVODs3] = useState([]);

  //subsr 변수
  const subsr=localStorage.getItem('subsr')

  //로딩 페이지 변수
  const [loading, setLoading] = useState(true);
  
  // 전체 모델 결과
  useEffect(()=>{
    const getAllVODs = async () => {
      
      setLoading(true);
      try {
        const result = await allVods(subsr);
        setVODs1(result.data["description_data"]);
        setVODs2(result.data["genre_data"]);
        setVODs3(result.data["personal_data"]);
        setLoading(false);
        console.log(result)
      }catch(error){
        console.log(error);
      }
    };
    getAllVODs();
  },[]);

  //모델 1 새로고침 결과
  const getVOD1 = async () => {
    try {
      const result = await VOD_model1(subsr);
      setVODs1(result.data);
      console.log(result)
    }catch(error){
      console.log(error);
    }
    
  };

  //모델 2 새로고침 결과
    const getVOD2 = async () => {
      try{
        const result = await VOD_model2(subsr);
        setVODs2(result.data);
        console.log(result)
      }catch(error){
        console.log(error);
      }
      
    };

  //모델 3 새로고침 결과
    const getVOD3 = async () => {
      try{
        const result = await VOD_model3(subsr);
        setVODs3(result.data)
        console.log(result)
      }catch(error){
        console.log(error);
      }
    };

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
      slidesToShow: 7,
      slidesToScroll: 7,
      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,
    };

    return (
      <div>
        {loading ? <Loading /> :null}
        <div>
        <PageTitle>분위기 기반 추천</PageTitle>
        {/* <button onClick={getVOD1}>새로고침</button> */}
        <MainSliderContainer>
          <MainStyledSlider {...settings}>
              {VODs1&&VODs1.map((image,index) => (
                <div>  
                  <ImgLabel key={index}> 
                    <NavLink to={"/detail/"+image.content_id}>
                    <Poster src={image.posterurl} alt={image.title}/>
                    </NavLink>
                  </ImgLabel><div className="Tagbox">
                    {image.mood&&image.mood.map((mood,index)=>(
                      <label key={index}>
                      <NavLink to={"/main/"+mood} className='MainLink'>
                        #{mood}
                      </NavLink>
                      </label>
                    ))}
                    <br/>
                    {image.gpt_genres&&image.gpt_genres.map((gpt,index)=>(
                      <label key={index} className='TextColor'>
                      #{gpt}
                      </label>
                    ))}
                    <br/>
                    {image.gpt_subjects&&image.gpt_subjects.map((gpt,index)=>(
                      <label key={index} className='TextColor'>
                      #{gpt}
                      </label>
                    ))}</div>
                  </div>
                ))
              }
          </MainStyledSlider>  
        </MainSliderContainer>
        
        <PageTitle>장르 기반 추천</PageTitle>
        <MainSliderContainer>
          <MainStyledSlider {...settings}>
        {/* <button onClick={getVOD2}>새로고침</button> */}
          {VODs2&&VODs2.map((image,index) => (
            <div>
              <ImgLabel key={index}>
                <NavLink to={"/detail/"+image.content_id}>
                <Poster src={image.posterurl} alt={image.title}/>
                </NavLink>
              </ImgLabel>  <div className="Tagbox">
                {image.mood&&image.mood.map(mood=>(
                  <label key={mood}>
                  <NavLink to={"/main/"+mood} className='MainLink'>
                    #{mood}
                  </NavLink>
                  </label>
                ))}
                <br />
                {image.gpt_genres&&image.gpt_genres.map((gpt,index)=>(
                  <label key={index} className='TextColor'>
                  #{gpt}
                  </label>
                ))}
                <br />
                {image.gpt_subjects&&image.gpt_subjects.map((gpt,index)=>(
                  <label key={index} className='TextColor'>
                  #{gpt}
                  </label>
                ))}</div>
              </div>
            ))
          }
          </MainStyledSlider>
        </MainSliderContainer>

        <PageTitle>줄거리 기반 추천</PageTitle>
        {/* <button onClick={getVOD3}>새로고침</button> */}
        <MainSliderContainer>
          <MainStyledSlider {...settings}>
          {VODs3&&VODs3.map((image,index) => (
            <div>  
              <ImgLabel key={index}>
                <NavLink to={"/detail/"+image.content_id}>
                <Poster src={image.posterurl} alt={image.title}/>
                </NavLink>
              </ImgLabel><div className="Tagbox">
                {image.mood&&image.mood.map(mood=>(
                  <label key={mood}>
                  <NavLink to={"/main/"+mood} className='MainLink'>
                    #{mood}
                  </NavLink>
                  </label>
                ))}
                <br />
                {image.gpt_genres&&image.gpt_genres.map((gpt,index)=>(
                  <label key={index} className='TextColor'>
                    #{gpt}
                  </label>
                ))}
                <br />
                {image.gpt_subjects&&image.gpt_subjects.map((gpt,index)=>(
                  <label key={index} className='TextColor'>
                  #{gpt}
                  </label>
                ))}</div>
              </div>
            ))
          }
          </MainStyledSlider>
        </MainSliderContainer>
        </div>
      </div>
  );
};