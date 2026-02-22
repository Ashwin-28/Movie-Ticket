using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MovieTicket.Data;
using MovieTicket.Model;

namespace MovieTicket.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private readonly AppDBContext dBContext;

        public MovieController(AppDBContext db)
        {
            dBContext = db;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Movie>>> getAllMovies()
        {
            return await dBContext.MoviesDB.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Movie>> createMovie(Movie movie)
        {
            dBContext.MoviesDB.Add(movie);
            await dBContext.SaveChangesAsync();
            return CreatedAtAction(nameof(getAllMovies), new { id = movie.TicketId }, movie);
        }
    }
}
