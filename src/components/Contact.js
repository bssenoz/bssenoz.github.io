import React from 'react'
import { FaGithub,FaInstagram,FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

const Contact = () => {
  return (
    <div className='App-header' id="contact" style={{backgroundColor: "rgb(29,29,29)"}}>
      <h1 style={{color: "white"}}>Do you want to cooperate ?</h1><br></br><br></br>
      <h3 style={{color: "white"}}>Contact Me !</h3><br></br>
      <div>
        <button><a href="https://github.com/bssenoz" style={{margin: "10px"}}><FaGithub /></a></button>
        <button><a href="https://www.linkedin.com/in/buse-senoz/" style={{margin: "10px"}}><FaLinkedinIn /></a></button>
        <button><a href="mailto:bsenoz@hotmail.com" style={{margin: "10px"}}><AiOutlineMail /></a></button>
        <button><a href="https://www.instagram.com/bssenoz/" style={{margin: "10px"}}><FaInstagram /></a></button>
        <button><a href="https://twitter.com/bssenoz" style={{margin: "10px"}}><FiTwitter /></a></button>
      </div>
    </div>
  )
}

export default Contact