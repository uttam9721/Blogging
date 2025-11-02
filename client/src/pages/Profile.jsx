import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="flex items-center gap-3">
        <img
          src={user.picture}
          alt={user.name}
          className="w-8 h-8 rounded-full border-2 border-blue-500"
        />
        <span className="text-sm font-medium">{user.name}</span>
      </div>
    )
  );
};

export default Profile;
