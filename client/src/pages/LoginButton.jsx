import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() => loginWithRedirect()}
      className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
    >
      Log In
    </button>
  );
};

export default LoginButton;
