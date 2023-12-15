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
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Navbar() {

  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");
  
  const onChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  }

  const buttonClick = (()=>{
    navigate(`../search/?input=${searchText}`)
    setSearchText('');
  })

  const keyPress=e=>{
    if (e.key==='Enter'){
      buttonClick();
    }
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
          <input className="SearchInput" placeholder='VOD, 배우를 검색해보세요.' onChange={onChange} value={searchText} onKeyDown={keyPress}></input>
          <button className='SearchButton' onClick={buttonClick}>
            <img src={searchIcon} className='searchIcon' alt ='search'/>
          </button>
        </div>


        <div className="SubsrContainer"> 
          <DropDownSubsr/>

        </div>
    </div>
  )
}
