import React,{useState,useEffect} from "react";
import { useHistory} from "react-router-dom";
import Articles from "./Articles";
import AuthHeader from "./AuthHeader";

function DashBoard() {
  const [error, setError] = useState("")
  let history = useHistory();
  let url = "https://mighty-oasis-08080.herokuapp.com/api/user"
  useEffect(() => {
    fetch(url, {
      headers: {
        authorization: `Token ${localStorage.authToken}`,
      }})
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
          
            <Articles />
         
          
        </div>
      </>
    );
  }
  else {
    history.push('/login')
  }
}

export default DashBoard;
