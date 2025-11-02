import React, { useEffect, useState } from "react";
import axios from "axios";

const Blog = () => {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const res = await axios.get("http://localhost:1000/blog");
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-12 px-6">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10 tracking-wide">
        📰 Latest <span className="text-blue-600">Blogs</span>
      </h1>

      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative">
              <img
                src={item.data.url}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-4">
                <button className="bg-blue-600 text-white px-4 py-2 text-sm font-semibold rounded-full hover:bg-blue-700 transition">
                  Read More
                </button>
              </div>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2 line-clamp-1">
                {item.data.title}
              </h2>
              <p className="text-gray-500 text-sm mb-3">
                ✍️ By{" "}
                <span className="font-medium text-gray-700">{item.data.name}</span>
              </p>
              <p className="text-gray-700 text-base leading-relaxed line-clamp-3">
                {item.data.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
