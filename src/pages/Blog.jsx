import React from 'react'
import {useNavigate} from "react-router-dom"
import { useState } from 'react';
import axios from "axios";
import pin from "../images/pin.png"

const Blog = () => {

  const [blog,setBlog]=useState({
    username:"",
    desc:""
});

  const navigate=useNavigate()

  const handleChange=(e)=>{
      setBlog(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleClick=async (e)=>{
    e.preventDefault();
    try{
      await axios.post("http://localhost:8080/blogs",blog)
      navigate("/main")
    }catch(err){
      console.log(err.response.data)
      }
  }


  return (
    <div>
      <div className='navB'>
        <img src={pin} className="image"/>
        <h1 className='title'>Pin your thoughts!</h1>
      </div>
    <div className='container' style={{textAlign: 'center',backgroundColor: 'thistle',width:"100%",height:"100%"}}>
  <br />
  <div className='form-container'>
    <h1 style={{fontFamily: 'cursive'}}>Welcome to the Blog Page</h1>
    <input
      type="text"
      placeholder='username'
      onChange={handleChange}
      name="username"
      style={{
        width: '50%',
        margin: '0 auto',
        fontFamily: 'cursive',
        padding: '10px',
        fontSize: '20px'
      }}
    />
    <br />
    <br />
    <textarea
      placeholder='write your thoughts'
      onChange={handleChange}
      name="desc"
      style={{
        width: '50%',
        height: '200px',
        margin: '0 auto',
        fontFamily: 'cursive',
        padding: '10px',
        fontSize: '20px'
      }}
    />
    <br/>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />    
    <button
      onClick={handleClick}
      style={{
        margin: '20px 0',
        padding: '10px 20px',
        fontFamily: 'cursive'
      }}
    >
      Add
    </button>
  </div>
</div>
</div>

  )
}

export default Blog