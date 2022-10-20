using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;

namespace FlightbookingApp.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class FlightdetailsController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public FlightdetailsController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet]
        public JsonResult Get(int FlightNo)
        {
            string query = @"select Id,FlightNo,FlightName,ArrivalTime,DepartureTime,Origin,Destination,
SeatsAvailable,Oneway,Roundtrip,Ticketcost from dbo.Flightdetails where flightno='"+ FlightNo +"' ";
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
