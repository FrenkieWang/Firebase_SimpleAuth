import SignIn from "./SignIn";
import SignOut from "./SignOut";
import PalletDashboard from "./PalletDashboard";

import React, { useState } from "react";

function App() {
  // create an authenticated user object
  // initially this is null (user not authenticated)
  const [theAuthUser, setTheAuthUser] = useState(null);
  return (
    <div className="container">
      <h1>The CS385 Shipping Company</h1>
      <hr />
      <div className="App">
        {/* if theAuthUser object is not null */}
        {theAuthUser && (
          <>
            <PalletDashboard currentUser={theAuthUser} />
            <SignOut setTheAuthUser={setTheAuthUser} />
          </>
        )}
        {/* if theAuthUser object is null */}
        {!theAuthUser && <SignIn setTheAuthUser={setTheAuthUser} />}
      </div>
    </div>
  );
}
export default App;
