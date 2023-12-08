import React from "react";

const SignUp= (props) => {

  return (
    <div>
       <h6>New User? Create your account here!</h6>
      <button onClick={props.handleSignUp}>Create a User</button>
    </div>
  );
};

export default SignUp;
