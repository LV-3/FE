/* eslint-disable */
import {React, useState, useEffect, useRef} from 'react' 
//import imageData from "../components/imgdata";
import "react-multi-carousel/lib/styles.css";
import {NavLink, useNavigate} from "react-router-dom";
import { Loading } from '../components/Loading';
import altImg from '../assets/altImg.png'
//추천 결과 요청
// import { allVods } from '../apis/main/getmain_post';
import { MainStyledSlider, Div, DivPre, ImgLabel, Poster,
  MainSliderContainer, PageTitle, MypageText, BannerSlider, BannerSliderContainer} from '../css/StyledComponents';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {ReactComponent as Next} from '../assets/slider-arrow-right.svg'
import {ReactComponent as Prev} from '../assets/slider-arrow-left.svg'
import '../css/Main.css';
import { useSelector } from 'react-redux';

import {banner} from '../components/Banner';

// import { getWeather } from '../apis/main/getweather';



export default function Main() {

  //모델별 결과 받을 리스트
  // const [VODs1, setVODs1] = useState([]);
  // const [VODs2, setVODs2] = useState([]);
  // const [VODs3, setVODs3] = useState([]);


  const [time, setTime] = useState("");
  const isMounted = useRef(false);


  const navigate = useNavigate();
 
  //subsr 변수
  const subsr=localStorage.getItem('subsr')

  //리덕스 사용   
  const status = useSelector(state=>state.Vods.status);
  const VODs1 = useSelector(state=>state.Vods.vodData["description_data"]);
  const VODs2 = useSelector(state=>state.Vods.vodData["genre_data"]);
  const VODs3 = useSelector(state=>state.Vods.vodData["personal_data"]);
  const personal_words = useSelector(state=>state.Vods.vodData["personal_words"]);
  const popular = useSelector(state=>state.Populars.vodData);
  const weather = useSelector(state=>state.Weathers.vodData['weather']);
  const weathervods = useSelector(state=>state.Weathers.vodData['vodsList']);
  const weatherImg = useSelector(state=>state.Weathers.vodData['weatherImg']);
  const voderror = useSelector(state=>state.Vods.error);
  
  console.log('voderror : ', voderror);
  console.log('VODs1 : ', VODs1);


  const lgimg = [lgevent, lginternet, lgmarket, lgmobile, lgrental]
  //로딩 페이지 변수
  // const [loading, setLoading] = useState(true);
  
  // 전체 모델 결과
  // useEffect(()=>{
  //   const getAllVODs = async () => {
      
  //     setLoading(true);
  //     try {
  //       const result = await allVods(subsr);
  //       setVODs1(result.data["description_data"]);
  //       setVODs2(result.data["genre_data"]);
  //       setVODs3(result.data["personal_data"]);
  //       setLoading(false);
  //       console.log(result)
  //       console.log(VODs1);
  //       console.log(VODs2);
  //       console.log(VODs3);
  //     }catch(error){
  //       console.log(error);
  //     }
  //   };
  //   getAllVODs();
  // },[]);
  useEffect(()=>{
      if(voderror===500){
        navigate('/mainError')
  
    }else if(!voderror&&!status&&!VODs1&&!VODs2&&!VODs3&&!personal_words){
        navigate('/errorReload')
      }
  }, [status]);

  useEffect(()=>{
    if(popular[0]?.timeGroup){
      if(popular[0]?.timeGroup==='am'){
        setTime('오전')
      }else if(popular[0]?.timeGroup==='pm'){
        setTime('오후')
      }else if(popular[0]?.timeGroup==='night'){
        setTime('저녁')
      }else if(popular[0]?.timeGroup==='dawn'){
        setTime('새벽')
      }
    }
  }, [popular])


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

    const settingspopular = {
      dots: false,
      infinite: true,
      speed: 200,
      slidesToShow: 6,
      slidesToScroll: 2,
      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,
    };

    const settingsbanner = {
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    return (
      <div>
        {status ? <Loading /> :null}
          <BannerSliderContainer>
            <BannerSlider {...settingsbanner}>

              {banner&&banner.map((img, index) => (
                <div key={index}>
                  <label className='BannerContainer'>
                    <NavLink to={img.bannerurl} target="_blank">
                      <img src={img.bannerimg} alt={img.bannerimg} className='BannerImg' />
                    </NavLink>

                  </label>
                </div>
              ))}
            </BannerSlider>
          </BannerSliderContainer>
        <div>
          <PageTitle>"{time}" 시간대에 많이 시청하는 컨텐츠를 추천해드릴게요</PageTitle>
        </div>
        {!popular.length?
        <MypageText className='PopularText'>인기작을 불러올 수 없습니다.</MypageText>
        :
        <MainSliderContainer>
          <MainStyledSlider {...settingspopular}>
        {/* <button onClick={getVOD2}>새로고침</button> */}
          {popular&&popular.map((image,index) => (
            <div key={index}>
              <ImgLabel>
                <NavLink to={"/detail/"+image.content_id}>
                  <Poster src={image.posterurl?image.posterurl:altImg} alt={image.title}/>
                </NavLink>
              </ImgLabel>
            </div>
            ))
          }
          </MainStyledSlider>
        </MainSliderContainer>
        }

        <div>
          <PageTitle>"{weather}" 날씨와 잘 어울리는 컨텐츠를 추천해드려요</PageTitle>
        </div>
        {!weather?
        <MypageText className='PopularText'>추천 결과를 불러올 수 없습니다.</MypageText>
        :
        <MainSliderContainer>
          <MainStyledSlider {...settings}>
        {/* <button onClick={getVOD2}>새로고침</button> */}
          {weathervods&&weathervods.map((image,index) => (
            <div key={index}>
              <ImgLabel>
                <NavLink to={"/detail/"+image.content_id}>
                  <Poster src={image.posterurl?image.posterurl:altImg} alt={image.title}/>
                </NavLink>
              </ImgLabel>
            </div>
            ))
          }
          </MainStyledSlider>
        </MainSliderContainer>
        } 

        <div>
        <PageTitle>줄거리 기반 추천</PageTitle>
        {/* <button onClick={getVOD1}>새로고침</button> */}
        <MainSliderContainer>
          <MainStyledSlider {...settings}>
              {VODs1&&VODs1.map((image,index) => (
                <div key={index}>  
                  <ImgLabel> 
                    <NavLink to={"/detail/"+image.content_id}>
                    <Poster src={image.posterurl?image.posterurl:altImg} alt={image.title}/>
                    </NavLink>
                  </ImgLabel>
                  {/* <div className="Tagbox">
                    {image.tags&&image.tags.map((mood,index)=>(
                      <label key={index}>
                      <NavLink to={"/main/"+mood} className='MainLink'>
                        #{mood}
                      </NavLink>&nbsp;
                      </label>
                    ))}
                    </div> */}
                  </div>
                ))
              }
          </MainStyledSlider>  
        </MainSliderContainer>
        
        <PageTitle>{personal_words} 분위기 기반 추천</PageTitle>
        <MainSliderContainer>
          <MainStyledSlider {...settings}>
        {/* <button onClick={getVOD2}>새로고침</button> */}
          {VODs2&&VODs2.map((image,index) => (
            <div key={index}>
              <ImgLabel>
                <NavLink to={"/detail/"+image.content_id}>
                <Poster src={image.posterurl?image.posterurl:altImg} alt={image.title}/>
                </NavLink>
              </ImgLabel>  
              {/* <div className="Tagbox">
                {image.tags&&image.tags.map(mood=>(
                  <label key={mood}>
                  <NavLink to={"/main/"+mood} className='MainLink'>
                    #{mood}
                  </NavLink>&nbsp;
                  </label>
                ))}
                </div> */}
              </div>
            ))
          }
          </MainStyledSlider>
        </MainSliderContainer>

        <PageTitle>개인화 추천</PageTitle>
        {/* <button onClick={getVOD3}>새로고침</button> */}
        <MainSliderContainer>
          <MainStyledSlider {...settings}>
          {VODs3&&VODs3.map((image,index) => (
            <div key={index}>  
              <ImgLabel>
                <NavLink to={"/detail/"+image.content_id}>
                <Poster src={image.posterurl?image.posterurl:altImg} alt={image.title}/>
                </NavLink>
              </ImgLabel>
                {/* <div className="Tagbox">
                {image.tags&&image.tags.map(mood=>(
                  <label key={mood}>
                  <NavLink to={"/main/"+mood} className='MainLink'>
                    #{mood}
                  </NavLink>&nbsp;
                  </label>
                ))}
                </div> */}
              </div>
            ))
          }
          </MainStyledSlider>
        </MainSliderContainer>
        </div>
      </div>
  );
};
