using FlightbookingApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using System.Data;

namespace FlightbookingApp.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserRegistrationController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public UserRegistrationController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        [HttpPost]
        public JsonResult PostUserDetails(UserRegistration ur)
        {
            string query = @"insert into dbo.UserRegistration (Id,FirstName,LastName,PhoneNumber,UserName,Email,Password,ConfirmPassword) values
('"+ @ur.Id + "','"+ @ur.FirstName + "','"+@ur.LastName + "','"+ @ur.PhoneNumber+ "','"+ @ur.Username + "','"+ @ur.Email + "','"+ @ur.Password + "','"+ @ur.ConfirmPassword + "')";



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
            return new JsonResult("user Registration successful");
        }
    }

}
