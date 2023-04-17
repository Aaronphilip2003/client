import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import pin from "../images/pin.png"


const Main = () => {

    const [blog,setBlog]=useState([]);
    
    useEffect(()=>{
        const fetchAllBlogs=async ()=>{
            try{
                const res= await axios.get("http://localhost:8080/blogs")
                setBlog(res.data)

            }catch(err){
                console.log(err)
            }
        }
        fetchAllBlogs()
        console.log(blog)
    },[])

    const handleDelete=async(id)=>{
        try{
            await axios.delete("http://localhost:8080/blogs/"+id)
            window.location.reload()
        }catch(err)
        {
            console.log(err)
        }
    }

  return (
    <div>
        <div className='navB'>
            <img src={pin} alt="" className="image"/>
            <h1 className='title'>Pin your thoughts!</h1>
        </div>
        <div className='blogs'>
            {blog.map(blog=>(
                <div className="" key={blog.id}>
                    <div className='card'>
                        <h2 className='username'>{blog.username}</h2>
                        <p className='blog-section'>{blog.desc}</p>
                        <button className='card-button' onClick={()=>handleDelete(blog.id)}>delete</button>
                    </div>
                </div>
            ))}
            <button className='button'><Link to="/blogs">Add new Blog</Link></button>
        </div>  
  
    </div>
  )
}

export default Main