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
    <div
      className="min-h-screen py-12 px-6"
      style={{
        background:
          "linear-gradient(135deg, rgba(59,130,246,0.25), rgba(168,85,247,0.25), rgba(236,72,153,0.2))",
      }}
    >
      <h1 className="text-5xl font-extrabold text-center mb-12 tracking-wide text-gray-800 drop-shadow-md">
        ✨ Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Blogs</span>
      </h1>

      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(240,240,255,0.9), rgba(255,255,255,0.95))",
              boxShadow:
                "0 10px 25px rgba(0,0,0,0.1), inset 0 0 20px rgba(59,130,246,0.05)",
              border: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src={item.data.url}
                alt={item.title}
                className="w-full h-56 object-cover rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-4">
                <button
                  className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{
                    backdropFilter: "blur(6px)",
                  }}
                >
                  Read More
                </button>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2 line-clamp-1">
                {item.data.title}
              </h2>
              <p className="text-gray-500 text-sm mb-3">
                ✍️{" "}
                <span className="font-medium text-gray-700">
                  {item.data.name}
                </span>
              </p>
              <p
                className="text-gray-700 text-base leading-relaxed line-clamp-3"
                style={{
                  color: "rgba(55,65,81,0.9)",
                }}
              >
                {item.data.desc}
              </p>
            </div>

            {/* Footer Date */}
            <div
              className="text-sm text-gray-500 px-6 pb-4"
              style={{
                borderTop: "1px solid rgba(0,0,0,0.05)",
                background:
                  "linear-gradient(to right, rgba(59,130,246,0.05), rgba(147,51,234,0.05), rgba(236,72,153,0.05))",
              }}
            >
              🗓️ {new Date().toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
