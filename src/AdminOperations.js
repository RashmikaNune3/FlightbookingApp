import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './AdminOperations.css';

function AdminOps() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    debugger;
    axios
      .get("https://localhost:7177/api/Adminlogin/flightsinformation/")
      .then((result) => setData(result.data));
    console.log(data);
    debugger;
  }, [data]);
  const setFlightNumber=(fn)=>{
    localStorage.setItem("FlightNo",fn)
  }
  const del=(dl)=>{
    axios.delete("https://localhost:7177/api/Adminlogin/Deleteflightdetail/"+dl).then(function(response){
      console.log(response)
    }).catch(function(error){
      console.log(error)
    })

  }
  return (
    <>
    <div className="admin-ops">
      <div >
        <h1>ADMIN DASHBOARD</h1>
        <br />
        <br />
      </div>
      <div>
        <div>
          <div className="row" style={{ margin: "10px" }}/>
          <table class="content-table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Flight Number</th>
                <th scope="col">Flight Name</th>
                <th scope="col">Origin</th>
                <th scope="col">Destination</th>
                <th scope="col">Arrival Time</th>
                <th scope="col">Departure Time</th>
                <th scope="col">Oneway</th>
                <th scope="col">Roundtrip</th>
                <th scope="col">Seatsavailable</th>
                <th scope="col">Ticketcost</th>
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
                    <td>{item.Ticketcost}</td>
                    <Link to='/UpdateFlightdetail'>
                    <button className="admin-action" onClick={() => setFlightNumber(item.FlightNo)}>Update Flightdetail</button>
                    </Link>
                    <Link to='/AdminOperations'>
                    <button className="admin-flightdetail" onClick={() => del(item.FlightNo)}>Delete</button>
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

export default AdminOps;