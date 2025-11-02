import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
const Admin = () => {
    const [name,setName]=useState('');
    const [title,setTitle]=useState('');
    const [url,setUrl]=useState('');
    const [desc,setDesc]=useState('');

    const data = {name,title,url,desc};

    
    
    const handlerSubmit=(e)=>{
      e.preventDefault()
      if(!name.trim() || !title.trim() || !url.trim() || !desc.trim()) return;
      try {
        axios.post('http://localhost:1000/blog',{data})
        toast.success('Blog added');
          
        setDesc('')
        setName('')
        setTitle('')
        setUrl('')
      } catch (error) {
        toast.error('invalid data')
        console.log(err);
      }
    
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
          Create / Edit Blog
        </h2>

        <form onSubmit={handlerSubmit}>
          <div className="mb-3">
            <label className="block font-medium mb-1">Author Name</label>
            <input
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              placeholder="Enter author name"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="mb-3">
            <label className="block font-medium mb-1">Blog Title</label>
            <input
              type="text"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
              placeholder="Enter blog title"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="mb-3">
            <label className="block font-medium mb-1">Image / URL</label>
            <input
              type="url"
                              value={url}
                onChange={(e)=>setUrl(e.target.value)}
              placeholder="Enter image or blog URL"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="mb-3">
            <label className="block font-medium mb-1">Description</label>
            <textarea
              placeholder="Write blog description..."
              rows="4"
                              value={desc}
                onChange={(e)=>setDesc(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Blog
          </button>
        </form>
      </div>
       <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Admin;
