import React from "react";
import { getAuth } from "firebase/auth";

const SignOut = ({ setTheAuthUser }) => {
  // Signout function
  const logout = () => {
    // sign out the user at firebase
    getAuth().signOut();
    // set this user to null
    // user is not authenticated.
    setTheAuthUser(null);
  };
  return (
    <div className="App">
      <button onClick={logout}>Logout</button>
    </div>
  );
};
export default SignOut;
