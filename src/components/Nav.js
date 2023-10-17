import React, {useState} from 'react'
import logo from '../assets/pizzaLogo.png';
import {Link} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';
//import './styles/Navbar';

function Nav() {
const [openLinks, setOpenLinks] = useState(false);

const toggleNavbar = () => {
      setOpenLinks(!openLinks);
};

  return (
    <ul>
    <div className='navbar'>
        <div className='leftside'id={openLinks ? "open" : "close"}>
          <div className='logo-image'>
            <img src={logo} alt='pizaa' width="50" height="50"/>
            <div className='hiddenLinks'>
            <Link to='/'>Home</Link>
           <Link to='/menu'>Menu</Link>
           <Link to='/about'>About</Link>
           <Link to='/contact'>Contact Us</Link>
            </div>
            </div>
        </div>
        <div className='rightside'>
           <Link to='/'>Home</Link>
           <Link to='/menu'>Menu</Link>
           <Link to='/about'>About</Link>
           <Link to='/contact'>Contact Us</Link>
            <button className='reorder' onClick={toggleNavbar}>
            <ReorderIcon/>
            </button>
        </div>
    </div>
    </ul>
  )
}

export default Nav
