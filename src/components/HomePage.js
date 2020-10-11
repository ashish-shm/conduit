import React from "react";
import Articles from "./Articles";
import AuthHeader from "./AuthHeader";
import NonAuthHeader from "./NonAuthHeader";

function HomePage() {
  return (
    <>
      {localStorage.authToken ? <AuthHeader /> : <NonAuthHeader />}
      <div className="flexA-T container">
      
          <Articles />
      
      </div>
    </>
  );
}

export default HomePage;
