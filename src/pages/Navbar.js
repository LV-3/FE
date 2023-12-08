import React from 'react'
import '../css/Navbar.css';
import { Link } from 'react-router-dom';
import DropDownSubsr from '../components/DropDownSubsr';
import DropDownGenres from '../components/DropDownGenres';
import logo from "../assets/logo2.png"
import { useState } from 'react';
import DropDownTv from '../components/DropDownTv';
import DropDownKids from '../components/DropDownKids';


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
        
        <input className="SearchInput" placeholder='     VOD제목이나 출연 배우를 검색해주세요.' onChange={onChange} value={searchText}></input>

          

          {/* <Link to='/search'> */}
           <div className="GenreMenu"> 
            <DropDownGenres>
              
            </DropDownGenres>
              {/* </Link> */}
            </div>
          <div className="DropDownTv">
            <DropDownTv />
          </div>
            
          <div className="DropDownKids">  
            <DropDownKids />
          </div>

        <div className="SubsrContainer"> 
          <DropDownSubsr>
            
          </DropDownSubsr>
        </div>
    </div>
  )
}
