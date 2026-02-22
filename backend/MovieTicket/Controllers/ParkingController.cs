using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MovieTicket.Data;
using MovieTicket.Model;

namespace MovieTicket.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ParkingController : ControllerBase
    {
        private readonly AppDBContext dBContext;

        public ParkingController(AppDBContext dB)
        {
            dBContext = dB;
        }
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Parking>>> getAllParking()
        {
            return dBContext.ParkingDB.ToList();
        }

        [HttpPost]
        public async Task<ActionResult<Parking>> createParking(Parking parking)
        {
            dBContext.ParkingDB.Add(parking);
            await dBContext.SaveChangesAsync();
            return CreatedAtAction(nameof(getAllParking), new {id=parking.TicketId},parking);
        }

    }
}
