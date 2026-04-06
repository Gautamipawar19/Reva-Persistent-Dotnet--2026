using System.ComponentModel.DataAnnotations;

namespace TaskManagerApi.DTOs
{
    public class CreateTaskDto
    {
        [Required]
        [MaxLength(100)]
        public string Title { get; set; } = string.Empty;

        [MaxLength(500)]
        public string? Description { get; set; }

        public DateTime? DueDate { get; set; }

        public string Priority { get; set; } = "Medium";
    }
}