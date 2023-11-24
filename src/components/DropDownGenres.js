import React, { useState, useEffect, useRef } from 'react'
import '../css/DropDownGenres.css'
import { NavLink } from 'react-router-dom';
import SearchIcon from "@mui/icons-material/Search"
import { genres } from '../apis/genres/getGenres';


export default function DropDownGenres() {
    const [isOpen, setIsOpen] = useState(false);
    const [allGenres,setGenres] = useState();
    const dropdownRef = useRef(null);
    

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    useEffect(()=>{
      const getgenres = async () => {
        const result = await genres();
        setGenres(result.data);
        console.log(result)
      }
      getgenres()
      
    },[]);

  
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
    <div className="dropdown" ref={dropdownRef}>
      <button
      className='dropdownbutton'
      onClick={toggleDropdown}>
        <SearchIcon className='NavBarSearchIcon' color="white"></SearchIcon>
      </button>
      {isOpen && (
        <div className="dropdown-content">
          카테고리 검색
          <br />{allGenres&&allGenres.map((genre)=>(
            <label key={genre}>
              <NavLink to={`../genre/${encodeURIComponent(genre)}`} >
              <p onClick={handleLogout}>{genre}</p>
          </NavLink></label>
          ))}
            
        </div>
      )}
    </div>
  )
}
