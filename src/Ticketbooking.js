import { React, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import "./UpdateTrain.css";
//import "./Login.css";

export default function Ticketbooking() {
  const [Out, setOut] = useState([]);
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [FlightNo, setFlightNo] = useState("");
  const [PNR, setPNR] = useState("");
  const [Origin, setOrigin] = useState("");
  const [Destination, setDestination] = useState("");
  const [NoofSeatstobook, setNoofSeatstobook] = useState("");
  const [ArrivalTime, setArrivalTime] = useState("");
  const [DepartureTime, setDepartureTime] = useState("");
  const [Passengerdetails, setPassengerdetails] = useState("");
  const [Meal, setMeal] = useState("");
  const [SeatNo, setSeatNo] = useState("");
  const navigate = new useNavigate();
    useEffect(() => {
        axios.get(`https://localhost:7177/api/Flightdetails/${localStorage.getItem("FlightNo" )}`)

      .then(function (response) {
        setOut(response.data[0]);

        setUsername(response.data[0].Username);
        setEmail(response.data[0].Email);
        setFlightNo(response.data[0].FlightNo);
        setPNR(response.data[0].PNR);
        setOrigin(response.data[0].Origin);
        setDestination(response.data[0].Destination);
        setArrivalTime(response.data[0].ArrivalTime);
        setDepartureTime(response.data[0].DepartureTime);
        setNoofSeatstobook(response.data[0].NoofSeatstobook);
        setPassengerdetails(response.data[0].Passengerdetails);
        setMeal(response.data[0].Meal);
        setSeatNo(response.data[0].SeatNo);
        console.log(response.data);
      });
  }, []);

  function handleSubmit(e) {
    const Data = {
      Username: Username,
      Email: Email,
      FlightNo: localStorage.getItem("FlightNo"),
      PNR: PNR,
      Origin: Origin,
      Destination: Destination,
      ArrivalTime: ArrivalTime,
      DepartureTime: DepartureTime,
      NoofSeatstobook: NoofSeatstobook,
      Passengerdetails: Passengerdetails,
      Meal: Meal,
      SeatNo: SeatNo,
    };

    console.log(Data);

    axios.put(`https://localhost:7177/api/Adminlogin/Putflightdetail/${localStorage.getItem("FlightNo")}`,Data)

      .then(function (response) {
        console.log(response.data);

        alert("Submitted Successfully..");

        navigate("/TicketInfo");
      })
      .catch(function (error) {
        console.log(error);
      });

    e.preventDefault();
  }

  return (
    <div className="Login">
      <form className="Userform">
        <h1>TICKET RESERVATION</h1>
       <br />
        <label id="fn">User name</label>
        <input required type="text" readOnly  value={localStorage.getItem("FlightNo")} ></input>
        <label> Email</label>
        <input required type="text" defaultValue={Out.Email} onChange={(event) => setEmail(event.target.value)}></input>
        <label>FlightNo</label>
         <input required type="number" defaultValue={Out.FlightNo} onChange={(event) => setFlightNo(event.target.value)}></input>
        <label>PNR</label>
        <input required type="number" defaultValue={Out.PNR}  onChange={(event) => setPNR(event.target.value)}></input>
        <label>Origin</label>
        <input required type="text" defaultValue={Out.Origin} onChange={(event) => setOrigin(event.target.value)}></input>
        <label>Destination</label>
        <input required type="text" defaultValue={Out.Destination} onChange={(event) => setDestination(event.target.value)}></input>
        <label>Arrival Time</label>
        <input required type="datetime-local" min={DepartureTime} disabled={DepartureTime.length ? false : true}
         defaultValue={Out.ArrivalTime} onChange={(event) => setArrivalTime(event.target.value)}></input>
        <label>Departure Time</label>
        <input  required  type="datetime-local" defaultValue={Out.DepartureTime} onChange={(event) => setDepartureTime(event.target.value)}></input>
        <label>NoofSeatstobook</label>
        <input required type="number" defaultValue={Out.NoofSeatstobook} onChange={(event) => setNoofSeatstobook(event.target.value)} ></input>
        <label> Passengerdetails</label>
        <input required type="text" defaultValue={Out.Passengerdetails} onChange={(event) => setPassengerdetails(event.target.value)}></input>
        <label>Meal</label>
        <input required type="text" defaultValue={Out.Meal} onChange={(event) => setMeal(event.target.value)} ></input>
         <label>SeatNo</label>
        <input required type="number" defaultValue={Out.SeatNo} onChange={(event) => setSeatNo(event.target.value)}></input>
         <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
      <br />
      <br />
    </div>
  );
} 