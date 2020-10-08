import React from "react";
import Articles from "./Articles";
import TagsList from "./TagsList";
import AuthHeader from "./AuthHeader";
import NonAuthHeader from "./NonAuthHeader";

function HomePage() {
  return (
    <>
      <NonAuthHeader />
      <div className="flexA-T container">
        <div className="articleDiv">
          <Articles />
        </div>
        <div className="tagsDiv">
          <TagsList />
        </div>
      </div>
    </>
  );
}

export default HomePage;
