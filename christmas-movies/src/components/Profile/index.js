import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <h2>
          Ho, Ho, Ho, {user.given_name}. Unique_id: {user.sub}. We have the
          perfect festive film for you!
        </h2>
      </div>
    )
  );
};

export default Profile;
