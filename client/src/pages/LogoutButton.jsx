import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
      className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition"
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
