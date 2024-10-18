import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom';
function Github() {
    const[data, setData]=useState([]);
    // const data=useLoaderData()
    useEffect(()=>{
fetch("https://api.github.com/users/shivam8112005").then(resp=>resp.json())
.then(data =>{console.log(data)
    setData(data);
})
    }, [])
  return (
    <div className='text-center m-4 bg-gray-800 text-white p-4 text-3xl'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Github Picture"  width={300}/></div>
  )
}

export default Github

export const githubLoader=async ()=>{
   const response= await fetch("https://api.github.com/users/shivam8112005")
    return response.json();
}