import React, { useState, useEffect, useRef } from 'react'
import '../css/DropDownNavs.css'
import { NavLink } from 'react-router-dom';
//import { genres } from '../apis/genres/getGenres';
import { getTvs } from '../reducer/TvReducer';
import { useDispatch, useSelector } from 'react-redux';


export default function DropDownGenres() {
    const [isOpen, setIsOpen] = useState(false);
    //const [allGenres,setGenres] = useState();
    const dropdownRef = useRef(null);
    
    const dispatch = useDispatch();
    const tvgenre = useSelector(state=>state.TvGenres.genreData)
    
    useEffect(()=>{
      if(!tvgenre.length) {
        dispatch(getTvs());
        console.log('tvgenre', tvgenre);
      }
    }, [])

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

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
    <div className="grdropdown" ref={dropdownRef}>
      <button
      className='grdropdownbutton'
      onClick={toggleDropdown}>
        <h2>TV</h2>
      </button>
      {isOpen && (
        <div className="grdropdown-content">
          {tvgenre&&tvgenre.map((genre,index)=>(
            <label key={index}>
              <NavLink to={`../genres/${genre}`} className="DropDownNav"> {/*{`../genre/${encodeURIComponent(genre)}`} */}
                <p onClick={handleLogout}>{genre}</p>
              </NavLink></label>
          ))}
            
        </div>
      )}
    </div>
  )
}
