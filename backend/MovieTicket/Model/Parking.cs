using System.ComponentModel.DataAnnotations;

namespace MovieTicket.Model
{
    public class Parking
    {
        [Key]
        public string TicketId { get; set; } = string.Empty;
        public string parkingSlot { get; set; } = string.Empty;
        public string CustomerName { get; set; } = string.Empty;
        public string VechicleNumber { get; set; } = string.Empty;
    }
}
