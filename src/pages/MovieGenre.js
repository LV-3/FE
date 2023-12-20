/* eslint-disable */
import React,{useEffect, useState} from 'react'
import '../css/Genre.css';
import { useParams,NavLink, useNavigate } from 'react-router-dom';
import { movieGenreList } from '../apis/genres/getMovieGenreList';
import { ImgLabel, SearchTitle, Poster, BackButtonContainer, BackButton, BackImg} from '../css/StyledComponents'

import back from '../assets/back.png'
import altImg from '../assets/altImg.png'


export default function Mood() {
    
     //url 파라미터("localhost:3000/vods/" 뒤에 붙는 파라미터)를 mood 변수로 저장
    let {genre2}=useParams();

    const [genreVods,setGenreVods]=useState();

   const navigate = useNavigate();

   const [loading, setLoading] = useState(true);

    //각 genre 별 검색 목록 불러오기
    useEffect(()=>{
      try {
        setLoading(true);
            const getgenreList = async()=>{
              const result =await movieGenreList(genre2);
              setGenreVods(result.data)
              console.log(result)
              setLoading(false);
            }
            getgenreList();
    }catch (error){
        
        console.log("getMovieGenreList error: ",error);

        if (Object.keys(error).includes("response")){
        setGenreVods(-1)
        }else{
          navigate("/noResponse");
        }
        }
    },[genre2]);

    return (
    <div className='GenreBackground'>
      <div className='SearchCategoryContainer'>
        <BackButtonContainer>
          <BackButton>
            <BackImg src={back} onClick={()=>{navigate(-1)}}/>
            </BackButton>
        </BackButtonContainer>

            <SearchTitle>영화 &gt;  {genre2.replace(':', '/')}</SearchTitle>
            {loading? <text className='GenreText'>VOD 목록을 불러오는 중입니다. 잠시만 기다려 주세요.</text>:<div>
            {genreVods ? 
            (genreVods===-1? 
            <text className='GenreText'>VOD 목록을 불러올 수 없습니다. 잠시 후 다시 시도해 주세요.</text>
          :
            <div className='GenreVodContainer'>
            {genreVods&&genreVods.map((image,index) => (
                <ImgLabel key={index} className='GenreLabel'>
                  <div className='GenreVodBox'>
                    <NavLink to={"/detail/"+image.content_id} className='GenreLink'>
                      <Poster src={image.posterurl?image.posterurl:altImg} alt={image.title}/>
                      <div className='GenreVodTitle'>{image.title}</div>
                    </NavLink>
                  </div>
                </ImgLabel>))} 
            </div>)
            :<text className='GenreText'>VOD 목록이 없습니다.</text>}</div>}
          </div>
        </div>
    );

}