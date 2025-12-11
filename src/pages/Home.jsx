import { useEffect, useState } from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import axios from 'axios'

function Home(){
  const [blogs,setBlogs] = useState([])
    const fetchBlogs = async ()=>{
      const response = await  axios.get("http://localhost:3000/blog/")
      //console.log(response.data.data)
      setBlogs(response.data.data)


    }
    useEffect(()=>{
        fetchBlogs()
    },[])
    console.log(blogs)

    return(
    <>
    <Navbar/>
    <div className='flex flex-wrap'>
      {
        // group gariraxhau
        blogs.map((blog,index)=>(
          <Card key={index} blog={blog}/>
        ))

          

        }
      
    
    </div>
    </>


    
)}

export default Home