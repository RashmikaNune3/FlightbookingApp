import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Adminlogin(props) {
  
  const handleSubmit = (e) => {
    axios.get("https://localhost:7177/api/Adminlogin/Get", {
        params: {
          UserName: UserName, 
          Password: Password
        },
      })
      .then((response) => {
        console.log(response.data[0]);
        if (response.data[0].matches === 0) {
          setNotfound(true);
        } else {
          navigate("/AdminOperations");
        }
      });
    e.preventDefault();
  };

  const navigate = useNavigate();
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [Notfound, setNotfound] = useState(false);

  return (
    <div className="Login" >
      <form className="Userform"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h1>ADMINISTRATOR</h1>
        <br />
        <label>Username</label>
        <input required name="Username" type="text" onChange={(event) => setUserName(event.target.value)}/>
        <label>Password</label>
        <input name="Password" type="password" onChange={(event) => setPassword(event.target.value)}/>
        <br/>
        <button className="submitButton" type="submit"> Login </button>
        {Notfound ? <p>Invalid Credentials</p> : ""}
      </form>
      </div>
  );
}

export default Adminlogin;