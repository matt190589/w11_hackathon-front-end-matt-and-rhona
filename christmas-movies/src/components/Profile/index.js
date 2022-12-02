import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>
          Ho, Ho, Ho, {user.given_name}. We have the perfect festive film for
          you!
        </h2>
      </div>
    )
  );
};

export default Profile;
