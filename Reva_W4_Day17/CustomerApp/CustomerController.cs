using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/v1/[controller]")]
public class CustomerController : ControllerBase
{
    [HttpGet]
    public IActionResult GetAllCustomers()
    {
        return Ok(new List<string> { "Alice", "Bob", "Charlie" });
    }

    [HttpGet("{id:int}")]
    public IActionResult GetCustomerById(int id)
    {
        return Ok("Alice");
    }
}