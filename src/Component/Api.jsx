import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Api = () => {
    const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data.slice(0, 21));
        
    };

    fetchPosts();
  }, []);
  return (
    <div className='container mx-auto p-2'>
     <div className='flex flex-col items-center'>
        {posts.map((item ,index)=>(
         <div key={index} className='bg-slate-200 mb-4 shadow-lg w-[800px] p-5 text-center'>
            <h5 className='font-bold '>{item.id}</h5>
           <h1 className='font-semibold text-[20px] mb-2'>{item.title}</h1>
           <p className='font-normal text-4'>{item.body}</p>
         </div>
        ))}
     </div>
    </div>
  )
}

export default Api