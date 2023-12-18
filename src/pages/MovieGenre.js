import React,{useEffect, useState} from 'react'
import '../css/Genre.css';
import { useParams,NavLink, useNavigate } from 'react-router-dom';
import { movieGenreList } from '../apis/genres/getMovieGenreList';
import { ImgLabel, SearchTitle, Poster, BackButtonContainer, BackButton, BackImg} from '../css/StyledComponents'
import back from '../assets/back.png'
import altImg from '../assets/altImg2.png'

export default function Mood() {
    
     //url 파라미터("localhost:3000/vods/" 뒤에 붙는 파라미터)를 mood 변수로 저장
    let {genre2}=useParams();

    const [genreVods,setGenreVods]=useState();

   const navigate = useNavigate();

    //각 genre 별 검색 목록 불러오기
    useEffect(()=>{
      try {
            const getgenreList = async()=>{
              const result =await movieGenreList(genre2);
              setGenreVods(result.data)
              console.log(result)
            }
            getgenreList();
    }catch (error){
          console.log(error)
        }
    },[genre2]);

    return (
    <div className='GenreBackground'>
      <BackButtonContainer>
      <BackButton>
          <BackImg src={back} onClick={()=>{navigate(-1)}}/>
           </BackButton>
      </BackButtonContainer>

          <SearchTitle>{genre2.replace(':', '/')}</SearchTitle>
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
          </div> 
        </div>
    );

}