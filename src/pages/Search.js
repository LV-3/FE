import React, { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { getSearch} from '../apis/search/getsearch';
import { ImgLabel, PageTitle, Poster} from '../css/StyledComponents'
import '../css/Search.css';

export default function Search() {

  const location = useLocation();

  const input = new URLSearchParams(location.search).get("input")

  const [search, setSearch] = useState();

  useEffect(()=> {
    const search = async () => {
      const result = await getSearch(input);
      setSearch(result.data);
    }
     search();
  }, [input]);

  return (
    <div className='SearchBackground'>
      <PageTitle className='SearchTitle'>"{input}"의 검색 결과</PageTitle>
      {search&&search.length !== 0?
      <div className='SearchVodContainer'>
        {search&&search.map((image,index) => (
          <ImgLabel key={index} className='SearchLabel'>
            <NavLink to={"/detail/"+image.content_id}>
              <Poster src={image.posterurl} alt={image.title}/>
            </NavLink>
          </ImgLabel>))} 
      </div>
      :<div className='NoResult'>검색결과가 없습니다. <br /> 맞춤법과 띄어쓰기를 확인해주세요.</div>
      }
    </div>
    
  )
}
