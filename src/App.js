import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Flightdetails from './Flightdetails';
import Userlogin from './Userlogin';
import UserRegistration from './UserRegistration';
import Adminlogin from './Adminlogin';
import AdminOperations from './AdminOperations';
import UpdateFlightdetails from './UpdateFlightdetails';
import UserOperations from './UserOperations';
import TicketInfo from './TicketInfo';


const App = () => {
    
    return (
        <div >
            <div  className="App">
                <Router>
                    <Routes>
                        <Route path="/Flightdetails" exact element={<Flightdetails/>} />
                        <Route path="/Userlogin" exact element={<Userlogin/> } />
                        <Route path="/userRegistration" exact element={<UserRegistration/>} />
                        <Route path="/Adminlogin" exact element={<Adminlogin/>} />
                        <Route path="/AdminOperations" exact element={<AdminOperations/>} />
                        <Route path="/UpdateFlightdetails" exact element={<UpdateFlightdetails/>} />
                        <Route path="/UserOperations" exact element={<UserOperations/>} />
                        <Route path="/TicketInfo" exact element={<TicketInfo/>} />
                    </Routes>
                </Router>
            </div>
        </div>
    );

}
export default App;