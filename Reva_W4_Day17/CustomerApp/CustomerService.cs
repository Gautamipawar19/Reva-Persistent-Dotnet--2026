public class CustomerDTO
{
    public int Id { get; set; }
    public string Name { get; set; }

    public string Email { get; set; }

}

public interface ICustomerService
{
    Task<List<CustomerDTO>> GetAllCustomersAsync();
    Task<CustomerDTO> GetCustomerByIdAsync(int id);
    // Task CreateCustomerAsync(CreateCustomerDTO dto);
}

// Services/CustomerService.cs
public class CustomerService : ICustomerService
{
    private readonly ILogger<CustomerService> _logger;

    public CustomerService(ILogger<CustomerService> logger)
    {
        _logger = logger;
    }

    public async Task<List<CustomerDTO>> GetAllCustomersAsync()
    {
        _logger.LogInformation("Fetching all customers");
        // Simulated data
        return new List<CustomerDTO>
        {
            new CustomerDTO { Id = 1, Name = "Acme Corp", Email = "contact@acme.com" },
            new CustomerDTO { Id = 2, Name = "TechStart Inc", Email = "info@techstart.com" }
        };
    }

    public async Task<CustomerDTO> GetCustomerByIdAsync(int id)
    {
        _logger.LogInformation($"Fetching customer {id}");
        return new CustomerDTO { Id = id, Name = "Sample Company", Email = "company@email.com" };
    }

    // public async Task CreateCustomerAsync(CreateCustomerDTO dto)
    // {
    //     _logger.LogInformation($"Creating customer {dto.Name}");
    //     // Save to database
    // }
}