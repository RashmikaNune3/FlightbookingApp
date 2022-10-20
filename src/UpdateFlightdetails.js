import { React, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./UpdateFlightdetails.css";

export default function UpdateFlightdetails() {
  const [Out, setOut] = useState([]);
  const [FlightNo, setFlightNo] = useState("");
  const [FlightName, setFlightName] = useState("");
  const [Origin, setOrigin] = useState("");
  const [Destination, setDestination] = useState("");
  const [DepartureTime, setDepartureTime] = useState("");
  const [ArrivalTime, setArrivalTime] = useState("");
  const [Oneway, setOneway] = useState("");
  const [Roundtrip, setRoundtrip] = useState("");
  const [Seatsavailable, setSeatsavailable] = useState("");
  const [Tickectcost, setTicketcost] = useState("");

  const navigate = new useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://localhost:7177/api/Flightdetails/${localStorage.getItem(
          "FlightNo"
        )}`
      )

      .then(function (response) {
        setOut(response.data[0]);

        setFlightNo(response.data[0].FlightNo);
        setFlightName(response.data[0].FlightName);
        setOrigin(response.data[0].Origin);
        setDestination(response.data[0].Destination);
        setDepartureTime(response.data[0].DepartureTime);
        setArrivalTime(response.data[0].ArrivalTime);
        setOneway(response.data[0].Oneway);
        setRoundtrip(response.data[0].Roundtrip);
        setSeatsavailable(response.data[0].Seatsavailable);
        setTicketcost(response.data[0].Tickectcost);
        console.log(response.data);
      });
  }, []);

  function handleSubmit(e) {
    const Data = {
      FlightNo: localStorage.getItem("FlightNo"),
      FlightName: FlightName,
      Origin: Origin,
      Destination: Destination,
      DepartureTime: DepartureTime,
      ArrivalTime: ArrivalTime,
      Oneway : Oneway,
      Roundtrip : Roundtrip,
      Seatsavailable: Seatsavailable,
    };

    console.log(Data);

    axios
      .put(
        `https://localhost:7177/api/Adminlogin/Putflightdetail/${localStorage.getItem(
          "FlightNo"
        )}`,
        Data
      )

      .then(function (response) {
        console.log(response.data);

        alert("Updated Successfully..");

        navigate("/AdminOperations");
      })
      .catch(function (error) {
        console.log(error);
      });

    e.preventDefault();
  }

  return (
    <div className="Login">
      <form className="Userform">
        <h1>UPDATE FLIGHTDETAIL</h1>
       <br />
        <label id="fn"> FlightNumber</label>
        <input required type="number" readOnly  value={localStorage.getItem("FlightNo")}></input>
         <label>FlightName</label>
         <input required type="text" defaultValue={Out.FlightName} onChange={(event) => setFlightName(event.target.value)}></input>
        <label>Origin</label>
        <input  required  type="text" defaultValue={Out.Origin} onChange={(event) => setOrigin(event.target.value)}></input>
         <label>Destination</label>
        <input required type="text" defaultValue={Out.Destination} onChange={(event) => setDestination(event.target.value)}></input>
         <label>Departure Time</label>
        <input required type="datetime-local" defaultValue={Out.DepartureTime}  onChange={(event) => setDepartureTime(event.target.value)}></input>
       <label>Arrival Time</label>
        <input  required  type="datetime-local"  min={DepartureTime}  disabled={DepartureTime.length ? false : true} defaultValue={Out.ArrivalTime} onChange={(event) => setArrivalTime(event.target.value)} ></input>
        <label>Oneway</label>
        <input required  type="number" defaultValue={Out.Oneway} onChange={(event) => setOneway(event.target.value)}></input>
        <label>Roundtrip</label>
        <input required type="number" defaultValue={Out.Roundtrip} onChange={(event) => setRoundtrip(event.target.value)}></input>
         <label>Seatsavailable </label>
        <input required type="number"
          defaultValue={Out.Seatsavailable} onChange={(event) => setSeatsavailable(event.target.value)}></input>
        <label>Ticketcost</label>
        <input required type="number" defaultValue={Out.Ticketcost} onChange={(event) => setTicketcost(event.target.value)}></input>
         <button onClick={(e) => handleSubmit(e)}>Update</button>
     
      </form>
      <br />
      <br />
    </div>
  );
}