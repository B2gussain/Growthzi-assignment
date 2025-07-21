import React, { useState } from "react";
import "./Contact.css";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { ImLocation2 } from "react-icons/im";
import { GrMap } from "react-icons/gr";
import { TfiEmail } from "react-icons/tfi";
import { GiRotaryPhone } from "react-icons/gi";
import { FaAngleRight } from "react-icons/fa6";
import { BiEdit } from "react-icons/bi";
import { LuMessageCircle } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { CiEdit } from "react-icons/ci";

const Contact = () => {
  const [button_edit, setbutton_edit] = useState(false)
  const [p_edit, setp_edit] = useState(false)

  const [url, seturl] = useState("")
  const [buttontext, setbuttontext] = useState("+ Add Button")
  const [paragraph, setparagraph] = useState("We’d love to hear from you! Whether you have a question, need assistance, or want to make a reservation, the team at Imperical Grand Hotel is here to help make your experience truly memorable.")

  const button_form_toggle=()=>{
    if(!button_edit){
      setbutton_edit(true)
    }
  }
   const cross_form_toggle=()=>{
    if(button_edit){
      setbuttontext("+ Add Button")
      setbutton_edit(false)
    }if(p_edit){
      setp_edit(false)
    }
  }

const button_form=(e)=>{
  e.preventDefault()
  setbutton_edit(false)
}
const delete_button_form=()=>{
  seturl("")
  setbuttontext("+ Add Button")
  setbutton_edit(false)

}

const p_form_toggle=()=>{
    if(!p_edit){
      setp_edit(true)
    }
  }


const p_form= async(e)=>{
  e.preventDefault()
  setp_edit(false)
   try {
    const response = await fetch("https://growthzi-assignment-backend.onrender.com/update-section", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        component: "ParagraphSection", 
        field: "paragraphText",         
        value: paragraph,                
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Successful:", data.message);
    } else {
      console.error("Error:", data.error);
    }
  } catch (errorr) {
    console.error("Fetching error:", errorr);
  }
}

console.log(url)

  return (
    <div className="contact">
      <div className="page page1">
        {button_edit &&  <form onSubmit={button_form}  className="button_edit_form">
          <RxCross2 onClick={cross_form_toggle} className="cross_icon" />
          <h2>Link Button to page or URL</h2>
          <p>You can select any specific page or paste URL</p>
          <label htmlFor="url">Enter the URL</label>
          <input type="url" placeholder="Enter the URL" name="url" value={url} onChange={(e)=>seturl(e.target.value)} required />
          <label htmlFor="name">Enter the Button Name</label>

          <input type="text" name="name" placeholder="Enter the Button Text" value={buttontext}  onChange={(e)=>setbuttontext(e.target.value)} required  />
          <button className="save_btn btn">Save Button</button>
          <button onClick={delete_button_form} className="delete_btn btn">Delete</button>
        </form> }
        {p_edit && <form onSubmit={p_form} className="p_edit_form">
           <RxCross2 onClick={cross_form_toggle}  className="cross_icon_edit_p" />
          <h2>Edit the Paragraph</h2>
          <textarea type="text " onChange={(e)=>setparagraph(e.target.value)} value={paragraph} rows={7} />
          <button className="p_edit_btn">save</button>
        </form> }
        
       
        
        <h3>CONTACT US</h3>
        <h1>
          Get In Touch
          <br />
          With Us
        </h1>
        {url ? <a  href={url} className="url_button" target="_blank">{buttontext}</a>: <button  className="edit_button" onClick={button_form_toggle}>{buttontext}</button>}
        <p className="edit_p">{paragraph}<CiEdit  onClick={p_form_toggle}  className="edit_p_icon" /></p>
       
        <form className="form_ui" action="">
          <label htmlFor="name">Name</label>
          <BiEdit   className="extra_form_icons" />
          <input type="text" name="name" placeholder="Your Name Here" />
         
           <label htmlFor="email" >Email</label>
            <TfiEmail  className="extra_form_icons" />
          <input type="email" placeholder="Your Email Here" name="name" />
           <label htmlFor="message">Message</label>
           <LuMessageCircle  className="extra_form_icons" />
          <textarea type="text" placeholder="Your Message Here" rows={6} name="name" />
          <button>Check Availability<FaAngleRight /></button>
        </form>

      </div>
      <div className="page page2">
        <div className="map">
          <ImLocation2 className="location" />
          <div className="card">
            <h3>Imperical Grand Hotel</h3>
            <p>
              1250 West 6th Ave,New York,NY 10036,
              <br />
              United States
            </p>

            <div className="rating">
              <p>4.8</p>
              <IoIosStar className="star" />
              <p>208,443 Reviewers</p>
            </div>
          </div>
          <div className="square"></div>
          <div className="max_min">
            <FaPlus className="max_min_icon" />
            <hr />
            <FaMinus className="max_min_icon" />
          </div>
        </div>
        <div className="info">
          <h3>CONTACT INFO</h3>
          <h1>Contact Us</h1>
          <div className="detail"><TfiEmail className="email_icon" />
          <div className="info_text">
            <h2>Email Address</h2>
            <h3>info@8pxlstudio</h3>
          </div>
          </div>
          <div className="detail"><GrMap className="map_icon" /> <div className="info_text">
            <h2>Hotel Location</h2>
            <h3>1250 West 6th Ave,New York,NY 10036,United States</h3>
          </div></div>
          <div className="detail"><GiRotaryPhone className="phone_icon" /> <div className="info_text">
            <h2>Phone Number</h2>
            <h3>+0123456789</h3>
          </div></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
