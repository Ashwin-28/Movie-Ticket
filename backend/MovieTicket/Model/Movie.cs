using System.ComponentModel.DataAnnotations;

namespace MovieTicket.Model
{
    public class Movie
    {
        [Key]
        public int TicketId { get; set; }
        public string MovieName { get; set; } = string.Empty;
        public string SeatNumber { get; set; } = string.Empty;
        public string ShowTime { get; set; } = string.Empty;
    }
}