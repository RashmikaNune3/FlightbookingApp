using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;
using System.Diagnostics;
using FlightbookingApp.Models;
using System.Security.Cryptography.X509Certificates;

namespace FlightbookingApp.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AdminloginController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public AdminloginController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpGet()]
        public JsonResult Get(string Adminname)
        {
            string query = @"select Adminname, Password from dbo.Adminlogin where adminname='"+ Adminname +"'";
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


        [HttpPost()]
        public JsonResult Post(Flightdetails fl, int FlightNo)
        {
            string Insertquery = @"
                    insert into dbo.Flightdetails (Id,FlightNo,FlightName,ArrivalTime,DepartureTime,Origin,Destination,Seatsavailable,Oneway,Roundtrip,Ticketcost)values
('"+ @fl.Id + "','" + @fl.FlightNo + "','" + @fl.FlightName + "','" + @fl.ArrivalTime + "','" + @fl.DepartureTime + "','" + @fl.Origin + "','" +
                     @fl.Destination + "','" + @fl.Seatsavailable + "','" + @fl.Oneway +"','" + @fl.Roundtrip + "','"+ @fl.Ticketcost +"') ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("mycon");
            using (SqlConnection con = new SqlConnection(sqlDataSource))
            {
                con.Open();
                using (SqlCommand myCommand = new SqlCommand(Insertquery, con))
                {
                    SqlDataReader myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    con.Close();
                }
            }
            return new JsonResult(table);
        }

        [HttpDelete()]
        [ActionName("flightsinformation")]
        public JsonResult GetflightInformation(int FlightNo)
        {
            string query = @"select Id,FlightNo,FlightName,ArrivalTime,DepartureTime,Origin,Destination,Seatsavailable,Oneway,Roundtrip,Ticketcost from dbo.Flightdetails where flightno='"+ FlightNo +"'";
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

        [HttpDelete("{id}")]
        public JsonResult Deleteflight(int id)
        {
            string query = @"
                              delete from dbo.Flightdetails
                              where FlightNo = " + id + @"
                              ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("mycon");
            SqlDataReader myReader;
            using (SqlConnection con = new SqlConnection(sqlDataSource))
            {
                con.Open();
                using (SqlCommand myCommand = new SqlCommand(query, con))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    con.Close();
                }
            }
            return new JsonResult("Deleted Successfully");
        }

        [HttpPut()]
        public JsonResult PutFlight(Flightdetails fl, int FlightNO)
        {
            string query = @"
             update dbo.Flightdetails set FlightNo = '" + @fl.FlightNo + "', FlightName='" + @fl.FlightName + "',ArrivalTime = '" + @fl.ArrivalTime + "', DepartureTime= '" + @fl.DepartureTime + "',  Origin = '" + @fl.Origin + "',Destination = '" + @fl.Destination + "',Seatsavailable = '" + @fl.Seatsavailable + "',Oneway = '" + @fl.Oneway + "', Roundtrip= '" + @fl.Roundtrip + "', Ticketcost= '" + @fl.Ticketcost + "' where FlightNo ='" + @fl.FlightNo + "'";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("mycon");
            SqlDataReader myReader;
            using (SqlConnection con = new SqlConnection(sqlDataSource))
            {
                con.Open();
                using (SqlCommand myCommand = new SqlCommand(query, con))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    con.Close();
                }
            }
            return new JsonResult("Flights updated");
        }

    }
}
