
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class CustomerController : ControllerBase
{
    private static List<Customer> customers = new List<Customer>
    {
        new Customer { Id = 1, FirstName = "John", LastName = "Doe", Email = "John.Doe@gmail.com", Source = "Website", Status = "New", Budget = 1000 },
        new Customer { Id = 2, FirstName = "Jane", LastName = "Smith", Email = "Jame.Smith@gmail.com", Source = "Referral", Status = "Contacted", Budget = 2000 }
    };

    [HttpGet()]
    public ActionResult<List<Customer>> GetAllCustomers()
    {
        return Ok(customers);
        // return BadRequest();
    }

    public ActionResult<Customer> GetCustomerById(int id)
    {
        var customer = customers.FirstOrDefault(c => c.Id == id);
        if (customer == null)
        {
            return NotFound();
        }
        return Ok(customer);
    }
 }