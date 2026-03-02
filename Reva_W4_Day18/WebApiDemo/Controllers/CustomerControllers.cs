// using Microsoft.AspNetCore.Mvc;

// [ApiController]
// [Route("api/v1/[controller]")]
// public class CustomerController : ControllerBase
// {
//     ICustomerService customerService;
//     public CustomerController(ICustomerService customerService)
//     {
//         this.customerService = customerService;
//     }

//     [HttpGet]
//     public IActionResult Get()
//     {
//         return Ok(customerService.GetAllCustomers());
//     }
// }

using AutoMapper;
using FluentValidation;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/v1/[controller]")]
public class CustomerController : ControllerBase
{
    ICustomerService customerService;
    IMapper mapper;

    IValidator<CreateCustomerDTO> createCustomerDTOValidator;

    public CustomerController(ICustomerService customerService, IMapper mapper, IValidator<CreateCustomerDTO> createCustomerDTOValidator)
    {
        this.customerService = customerService;
        this.mapper = mapper;
        this.createCustomerDTOValidator = createCustomerDTOValidator;
    }

    [HttpGet]
    public IActionResult Get()
    {
        var customers = customerService.GetAllCustomers();

        // DRY -
        // Violation of Single Responsibility
        // Remove Manual mapping and replace with Automapper
        // var customerDTOs = customers.Select(c => new CustomerDTO
        // {
        //     FullName = c.Name
        // }).ToList();
        // Refactoring -

        // AutoMapper
        var customerDTOs = mapper.Map<List<CustomerDTO>>(customers);

        return Ok(customerDTOs);
    }

    [HttpPost]
    public IActionResult Post(CreateCustomerDTO createCustomerDTO)
    {

        var validationResult = createCustomerDTOValidator.Validate(createCustomerDTO);

        if(validationResult.IsValid == false)
        {
            return BadRequest(validationResult.Errors);
        }

        // if(ModelState.IsValid)
        // {
        //     // Map CreateCustomerDTO to Customer
        //     return BadRequest(ModelState);
        // }

        return Ok(createCustomerDTO);
    }
}
