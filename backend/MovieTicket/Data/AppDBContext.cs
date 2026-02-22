using Microsoft.EntityFrameworkCore;
using MovieTicket.Model;

namespace MovieTicket.Data
{
    public class AppDBContext :DbContext
    {
        public AppDBContext (DbContextOptions<AppDBContext> options) : base(options)
        {

        }
        public DbSet<Movie> MoviesDB { get; set; }
        public DbSet<Parking> ParkingDB { get; set; }
    }
}
