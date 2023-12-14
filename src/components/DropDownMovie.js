import React, { useState, useEffect, useRef } from 'react'
import '../css/DropDownMovie.css'
import { NavLink } from 'react-router-dom';
//import { genres } from '../apis/genres/getGenres';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../reducer/MovieReducer';


export default function DropDownMovies() {
    const [isOpen, setIsOpen] = useState(false);
    //const [allGenres,setGenres] = useState();
    const dropdownRef = useRef(null);

    const moviegenre = useSelector(state=>state.MovieGenres.genreData)
    // const status = useSelector(state=>state.MovieGenres.status)
    
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const dispatch = useDispatch();

    useEffect(()=>{
      if(!moviegenre.length){
        dispatch(getMovies());
      }
    }, [])

    //확인용 status
    // console.log('afterstatus', status);

    // 기존 코드
    // useEffect(()=>{
    //   const getgenres = async () => {
    //     const result = await genres();
    //     setGenres(result.data);
    //     console.log(result)
    //   }
    //   getgenres()
      
    // },[]);

  
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // 클릭된 요소가 드롭다운 외부에 있으면 드롭다운을 닫음
        setIsOpen(false);
      }
    };
  
    useEffect(() => {
      // document에 클릭 이벤트 리스너 추가
      document.addEventListener('click', handleClickOutside);
  
      // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);

    const handleLogout = () => {
      setIsOpen(!isOpen);}

    return (
    <div className="moviedropdown" ref={dropdownRef}>
      <button
      className='moviedropdownbutton'
      onClick={toggleDropdown}>
        {/* <img src={MenuIcon} className='DropDownHamburg'/> */}
        <h2>영화</h2>
      </button>
      {isOpen && (
        <div className="moviedropdown-content">
          {moviegenre&&moviegenre.map((genre,index)=>(
            <label key={index}>
              <NavLink to={`../genres/${genre}`} className="movieDropDownNav"> {/*{`../genre/${encodeURIComponent(genre)}`} */}
                <p onClick={handleLogout}>{genre}</p>
              </NavLink></label>
          ))}
            
        </div>
      )}
    </div>
  )
}
