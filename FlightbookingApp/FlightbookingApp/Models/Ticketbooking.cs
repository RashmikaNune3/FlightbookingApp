using System;
using System.Collections.Generic;

#nullable disable

namespace FlightbookingApp.Models
{
    public partial class Ticketbooking
    {
        public int? Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public int FlightNo { get; set; }
        public int Pnr { get; set; }
        public string Origin { get; set; }
        public string Destination { get; set; }
        public DateTime ArrivalTime { get; set; }
        public DateTime DepartureTime { get; set; }
        public int NoofSeatstobook { get; set; }
        public string Passengerdetails { get; set; }
        public string Meal { get; set; }
        public int Seatno { get; set; }
    }
}
