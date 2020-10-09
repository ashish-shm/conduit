import React,{useState,useEffect} from "react";
import { useHistory} from "react-router-dom";
import Articles from "./Articles";
import AuthHeader from "./AuthHeader";
import TagsList from "./TagsList";

function DashBoard() {
  const [error, setError] = useState("")
  let history = useHistory();
  let url = "https://mighty-oasis-08080.herokuapp.com/api/user"
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("authToken", data.user.token)
      })
      .catch((err) => setError(err));
  }, []);
  if (localStorage.authToken) {
    return (
      <>
        <AuthHeader />
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
  else {
    return (
      <h1>Loading ...</h1>
    )
  }
}

export default DashBoard;
