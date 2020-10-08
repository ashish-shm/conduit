import React from "react";
import Articles from "./Articles";
import TagsList from "./TagsList";

function HomePage() {
  return (
    <div className="flex">
      <div className="articleDiv">
        <Articles />
      </div>
      <div className="tagsDiv">
        <TagsList />
      </div>
    </div>
  );
}

export default HomePage;
