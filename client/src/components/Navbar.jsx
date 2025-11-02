import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../pages/LoginButton";
import LogoutButton from "../pages/LogoutButton";
import Profile from "../pages/Profile";

const Navbar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <h1 className="text-2xl font-bold tracking-wide cursor-pointer">
        My<span className="text-blue-500">Blog</span>
      </h1>

      {/* Links */}
      <div className="hidden md:flex space-x-6 text-sm font-medium">
        <a href="/" className="hover:text-blue-400 transition">
          Home
        </a>
        <a href="/about" className="hover:text-blue-400 transition">
          About
        </a>
        <a href="/blog" className="hover:text-blue-400 transition">
          Blogs
        </a>
        <a href="/contact" className="hover:text-blue-400 transition">
          Contact
        </a>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
