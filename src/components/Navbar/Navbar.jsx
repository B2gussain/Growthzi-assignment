import React, { useState } from 'react'
import "./Navbar.css"
import navbar_logo from "../../assets/navbar_logo.png"
import { Link } from 'react-router-dom'
import { FaChevronDown } from "react-icons/fa";
const Navbar = () => {
  
  const [pagelist, setpagelist] = useState(false)
  const pagelist_toggle=()=>{
    if(pagelist){
      setpagelist(false)
    }
    else{
      setpagelist(true)
    }
  }


    return (
    <div className='navbar'>
     <img src={navbar_logo} alt="" />
     <ul>
        <li><Link className='Link'  to='/404'> HOME</Link></li>
        <li><Link className='Link' to='/404'>ABOUT</Link> </li>
        <li><Link className='Link' to='/404'>SERVICE</Link> </li>
        <li><div className='Link page_text' onClick={ pagelist_toggle} >PAGES &nbsp;<FaChevronDown />
</div> </li>
        <li><Link className='Link' to='/'>CONTACT US </Link></li>
     </ul>
     {pagelist &&  <ol className='pagelist_div'>
        <li><Link className='Link' onClick={ pagelist_toggle}  to='/404'>ROOM</Link></li>
        <li><Link className='Link' onClick={ pagelist_toggle} to='/404'>SINGLE ROOM</Link> </li>
        <li><Link className='Link' onClick={ pagelist_toggle} to='/404'>BLOG</Link> </li>
        <li><Link className='Link' onClick={ pagelist_toggle} to='/404'>SINGLE BLOG</Link> </li>
        <li><Link className='Link' onClick={ pagelist_toggle} to='/404'>404 PAGE </Link></li>
     </ol> }
   
    </div>
  )
}

export default Navbar
