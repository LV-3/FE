import React,{useEffect, useState} from 'react'
import '../css/Genre.css';
import { useParams } from 'react-router-dom';
import { tvGenreList } from '../apis/genres/getTvGenreList';
import { NavLink, useNavigate } from 'react-router-dom';
import { ImgLabel, SearchTitle, Poster, BackButtonContainer, BackButton, BackImg} from '../css/StyledComponents'
// import { useSelector } from 'react-redux';
import back from '../assets/back.png'
import altImg from '../assets/altImg2.png'

export default function Mood() {
    
     //url 파라미터("localhost:3000/vods/" 뒤에 붙는 파라미터)를 mood 변수로 저장
    let {genre1}=useParams();

    const [genreVods,setGenreVods]=useState();

    const navigate=useNavigate();

    // const GenreVods = useSelector(state=>state.TvGenreLists.genreData)
    // const genreVods = GenreVods.genre1
    // console.log('GenreVods', GenreVods)

    //각 genre 별 검색 목록 불러오기
    useEffect(()=>{
      try {
            const getgenreList = async()=>{
              const result =await tvGenreList(genre1);
              setGenreVods(result.data)
              console.log(result)
            }
            getgenreList();
    }catch (error){
          console.log(error)
        }
    },[genre1]);

    return (
        <div className='GenreBackground'>

      <BackButtonContainer>
      <BackButton>
          <BackImg src={back} onClick={()=>{navigate(-1)}}/>
           </BackButton>
      </BackButtonContainer>

          <SearchTitle>{genre1.replace(':', '/')}</SearchTitle>
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