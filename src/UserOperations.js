import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function UserOps() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    debugger;
    axios
      .get("https://localhost:7177/api/Adminlogin/flightsinformation")
      .then((result) => setData(result.data));
    console.log(data);
    debugger;
  }, [data]);
  const setFlightNumber=(fl)=>{
    localStorage.setItem("FlightNo",fl)
  }
  const del=(dl)=>{
    axios.delete(`https://localhost:7177/api/Adminlogin/Deleteflight/{id}${dl}`).then(function(response){
      console.log(response)
    }).catch(function(error){
      console.log(error)
    })

  }
  return (
    <>
    <div className="admin-ops">

    
      <div >
        <h1>User Main Page</h1>
      </div>
      <div>
        <div>
          <div className="row" style={{ margin: "10px" }}/>
          <table class="content-table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">FlightNumber</th>
                <th scope="col">FlightName</th>
                <th scope="col">Origin</th>
                <th scope="col">Destination</th>
                <th scope="col">Arrival Time</th>
                <th scope="col">Departure Time</th>
                <th scope="col">   Oneway</th>
                <th scope="col">  Roundtrip</th>
                <th scope="col">Available Seats</th>
                <th scope="col">Ticket Cost</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr key={item.FlightNo}>
                    <td><b>{item.FlightNo}</b></td>
                    <td><b>{item.FlightName}</b></td>
                    <td>{item.Origin}</td>
                    <td>{item.Destination}</td>
                    <td>{item.ArrivalTime}</td>
                    <td>{item.DepartureTime}</td>
                    <td>{item.Oneway}</td>
                    <td>{item.Roundtrip}</td>
                    <td>{item.Seatsavailable}</td>
                    <td>{item.Tickectcost}</td>
                    <Link to='/TicketInfo'>
                    <button className="admin-action" onClick={() => setFlightNumber(item.FlightNo)}>Book Flight</button>
                    </Link>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </>
  );
}

export default UserOps;