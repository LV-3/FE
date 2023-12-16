import React,{useEffect, useState} from 'react'
import '../css/Genre.css';
import { useParams, useNavigate} from 'react-router-dom';
import { kidGenreList } from '../apis/genres/getKidGenreList';
import { NavLink } from 'react-router-dom';
import { ImgLabel, PageTitle, Poster, BackButtonContainer, BackButton, BackImg} from '../css/StyledComponents'
// import back from '../assets/back.png'
import altImg from '../assets/altImg2.png'

export default function Mood() {
    
     //url 파라미터("localhost:3000/vods/" 뒤에 붙는 파라미터)를 mood 변수로 저장
    let {genre3}=useParams();

    const [genreVods,setGenreVods]=useState();

    // const navigate=useNavigate;

    // const navigatetoMain=navigate("/main");

    //각 genre 별 검색 목록 불러오기
    useEffect(()=>{
      try {
            const getgenreList = async()=>{
              const result =await kidGenreList(genre3);
              setGenreVods(result.data)
              console.log(result)
            }
            getgenreList();
    }catch (error){
          console.log(error)
        }
    },[genre3]);

    return (
        <div className='GenreBackground'>
      {/* <BackButtonContainer>
      <BackButton>
          <BackImg src={back} onClick={navigatetoMain}/>
           </BackButton>
      </BackButtonContainer> */}

          <PageTitle>{genre3.replace(':', '/')}</PageTitle>
          <div className='GenreVodContainer'>
          {genreVods&&genreVods.map((image,index) => (
              <ImgLabel key={index} className='GenreLabel'>
                <NavLink to={"/detail/"+image.content_id}>
                  <Poster src={image.posterurl?image.posterurl:altImg} alt={image.title}/>
                </NavLink>
              </ImgLabel>))} 
          </div> 
        </div>
    );

}