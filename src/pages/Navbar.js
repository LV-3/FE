/* eslint-disable */
import React from 'react'
import '../css/Navbar.css';
import { Link } from 'react-router-dom';
import DropDownSubsr from '../components/DropDownSubsr';
import DropDownMovies from '../components/DropDownMovies';
import logo from "../assets/logo2.png"
import { useState } from 'react';
import DropDownTv from '../components/DropDownTv';
import DropDownKids from '../components/DropDownKids';
import DropDownEtc from "../components/DropDownEtc"
import searchIcon from "../assets/search.png"


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

        
           <div className="DropDownMovies"> 
            <DropDownMovies/>
            </div>

          <div className="DropDownTv">
            <DropDownTv />
          </div>
            
          <div className="DropDownKids">  
            <DropDownKids />
          </div>

          <div className="DropDownEtc">  
            <DropDownEtc />
          </div>

    
          <input className="SearchInput" placeholder='' onChange={onChange} value={searchText}></input>
          <img src={searchIcon} className='searchIcon'></img>



        <div className="SubsrContainer"> 
          <DropDownSubsr/>

        </div>
    </div>
  )
}
