/* eslint-disable */
import React from 'react'
import '../css/Navbar.css';
import { Link } from 'react-router-dom';
import DropDownSubsr from '../components/DropDownSubsr';
import DropDownMovie from '../components/DropDownMovie';
import DropDownTv from '../components/DropDownTv';
import DropDownKids from '../components/DropDownKids';
import searchIcon from "../assets/search.png"
import logo from "../assets/logo2.png"
import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getMovies } from '../reducer/MovieReducer';
// import { getTvs } from '../reducer/TvReducer';
// import { getKids } from '../reducer/KidsReducer';

export default function Navbar() {

  const [searchText, setSearchText] = useState("");

  const onChange = (e) => {
    setSearchText(e.target.value);
  }

  return (
    <div className='NavBar'>
        <div className='LinkContainer'>
          <Link to='/main' className='NavbarLink'>
              <img src={logo} className='Logo' alt='logo' />
          </Link>
        </div>

        
           <div className="DropDownMovie"> 
            <DropDownMovie/>
            </div>

          <div className="DropDownTv">
            <DropDownTv />
          </div>
            
          <div className="DropDownKids">  
            <DropDownKids />
          </div>

          {/* <div className="DropDownEtc">  
            <DropDownEtc />
          </div> */}

        <div className='SearchContainer'>
          <input className="SearchInput" placeholder='VOD, 배우를 검색해보세요.' onChange={onChange} value={searchText}></input>
          <button className='SearchButton'>
            <img src={searchIcon} className='searchIcon' alt ='search'/>
          </button>
        </div>


        <div className="SubsrContainer"> 
          <DropDownSubsr/>

        </div>
    </div>
  )
}
