import React from 'react'
import '../css/Navbar.css';
import { Link } from 'react-router-dom';
import DropDownSubsr from '../components/DropDownSubsr';
import DropDownGenres from '../components/DropDownGenres';
import logo from "../assets/logo.png"
import logo2 from "../assets/logo2.png"

export default function Navbar() {

  return (
    <div className='NavBar'>
        <div className='LinkContainer'>
          <Link to='/main' className='NavbarLink'>
              <img src={logo} className='Logo'></img>
              <img src={logo2} className='Logo2'></img>
          </Link>
        </div>
        
          {/* <Link to='/search'> */}
           <div className="GenreMenu"> 
            <DropDownGenres>
              
            </DropDownGenres>
              {/* </Link> */}
            </div>
        <div className="SubsrContainer"> 
          <DropDownSubsr>
            
          </DropDownSubsr>
        </div>
    </div>
  )
}
