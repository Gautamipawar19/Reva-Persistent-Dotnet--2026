public class Customer
{
    public int Id { get; set; }

    public string FirstName { get; set; } = string.Empty;
    
    public string LastName { get; set; } = string.Empty;
    
    public string Email { get; set; } = string.Empty;
    
    public string Source { get; set; } = string.Empty;
    
    public string Status { get; set; } = string.Empty;
    
    public decimal Budget { get; set; }
}