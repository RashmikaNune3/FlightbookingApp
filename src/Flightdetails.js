import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Flightdetails.css';

function Flightdetails() {
    const [data, setData] = useState([]);
     useEffect(() => {
       debugger;
       axios.get("https://localhost:7177/api/Flightdetails").then((result) =>
         setData(result.data)
       );
       console.log(data);
       debugger;
     }, [data]);
const navigate=useNavigate();
  return (
    <div className = "container" >
        <div className = "navbar-Flight"><h1>FLIGHT BOOKING SYSTEM</h1>
        <p className="nav-link">
          <button  onClick={() => navigate("/Adminlogin")}>Admin Login</button>
          <button onClick={() => navigate("/UserRegistration")}> SignUp User </button>
          <button onClick={() => navigate("/Userlogin")}>User Login</button>
        </p >
        </div>

        <div className="row" style={{ margin: "10px" }}></div>
        <table className = "content-table">
            <thead >
               <tr>
                 <th scope="col">FlightNo</th>
                 <th scope="col">FlightName</th>
                 <th scope="col">Origin</th>
                <th scope="col">Destination</th>
                <th scope="col">ArrivalTime</th>
                <th scope="col">DepartureTime</th>          
               <th scope="col">Oneway</th>
               <th scope="col"> Roundtrip</th>
                 <th scope="col">Seatsavailable</th>
                 <th scope="col">Ticketcost</th>
               </tr>
             </thead>
             <tbody >

                 
             {data.map((item) => {
                 return(   
                 <tr key={item.FlightNo}>
                    <td>{item.FlightNo}</td>
                    <td>{item.FlightName}</td>
                    <td>{item.Origin}</td>
                    <td>{item.Destination}</td>
                    <td>{item.ArrivalTime}</td>
                    <td>{item.DepartureTime}</td>
                    <td>{item.Oneway}</td>
                    <td>{item.Roundtrip}</td>
                    <td>{item.Seatsavailable}</td>
                    <td>{item.Tickectcost}</td>
                  </tr>
                );
             })}
            </tbody>
          </table>
          </div>
  );
}
export default Flightdetails;