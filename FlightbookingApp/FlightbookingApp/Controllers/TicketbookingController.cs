using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;

namespace FlightbookingApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketbookingController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public TicketbookingController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        public JsonResult Get(int FlightNo)
        {
            string query = @"select Id,UserName,Email,FlightNo,PNR,Origin,Destination,ArrivalTime,DepartureTime,NoofSeatstobook,Passengerdetails,Meal,Seatno
                                from dbo.Ticketbooking where flightno='"+ FlightNo +"'";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("mycon");
            using (SqlConnection con = new SqlConnection(sqlDataSource))
            {
                con.Open();
                using (SqlCommand myCommand = new SqlCommand(query, con))
                {
                    SqlDataReader myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    con.Close();
                }
            }
            return new JsonResult(table);
        }
    }
}
