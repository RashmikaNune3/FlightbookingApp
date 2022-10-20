using System;
using System.Collections.Generic;

#nullable disable

namespace FlightbookingApp.Models
{
    public partial class Flightdetail
    {
        public int Id { get; set; }
        public int FlightNo { get; set; }
        public string FlightName { get; set; }
        public DateTime ArrivalTime { get; set; }
        public DateTime DepartureTime { get; set; }
        public string Origin { get; set; }
        public string Destination { get; set; }
        public string Seatsavailable { get; set; }
        public string Oneway { get; set; }
        public string Roundtrip { get; set; }
        public int Ticketcost { get; set; }
    }
}
