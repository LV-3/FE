import React, { useState, useEffect, useNavigate} from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { getSearch} from '../apis/search/getsearch';
import { ImgLabel, PageTitle, Poster, BackButtonContainer, BackButton, BackImg} from '../css/StyledComponents'
import '../css/Search.css';
import back from '../assets/back.png'
import altImg from '../assets/altImg2.png'


export default function Search() {

  const location = useLocation();

  const input = new URLSearchParams(location.search).get("input")

  const [search, setSearch] = useState();

  const navigate = useNavigate;

  useEffect(()=> {
    const search = async () => {
      const result = await getSearch(input);
      setSearch(result.data);
    }
     search();
  }, [input]);

  return (
    <div className='SearchBackground'>
      
      <BackButtonContainer>
      <BackButton>
          <BackImg src={back} onClick={()=>{navigate("/mypage")}}/>
           </BackButton>
      </BackButtonContainer>

      <PageTitle className='SearchTitle'>"{input}"의 검색 결과</PageTitle>
      {search&&search.length !== 0?
      <div className='SearchVodContainer'>
        {search&&search.map((image,index) => (
    
          <ImgLabel key={index} className='SearchLabel'>
            <NavLink to={"/detail/"+image.content_id}>
              <Poster src={image.posterurl?image.posterurl:altImg} alt={image.title}/>
              </NavLink>
          </ImgLabel>))} 
      </div>
      :<div className='NoResult'>검색결과가 없습니다. <br /> 맞춤법과 띄어쓰기를 확인해주세요.</div>
      }
    </div>
    
  )
}
