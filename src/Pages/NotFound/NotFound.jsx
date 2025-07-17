import React from 'react'
import "./NotFound.css"
import {Link} from "react-router-dom"
import { FaChevronRight } from "react-icons/fa";
const NotFound = () => {
  

  return (
    <div className='notfound'>
      <div className="right">
        <h1>404</h1>
        <p className='p1'>Oops!! Something Is Missing</p>
        <p className='p2'>Sorry But The Page You Are Looking For Does Not Exist, Have Been Removed,Name<br/>Changed Or Is Temporaily Unavaliable</p>
        <Link className='Link_button' to="/">Back To Contact&nbsp;<FaChevronRight /></Link>
      </div>
      





    </div>
  )
}

export default NotFound
