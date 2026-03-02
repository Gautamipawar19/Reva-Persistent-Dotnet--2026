// var builder = WebApplication.CreateBuilder(args);

// // Add services to the container.
// // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
// builder.Services.AddOpenApi();

// var app = builder.Build();

// // Configure the HTTP request pipeline.
// if (app.Environment.IsDevelopment())
// {
//     app.MapOpenApi();
// }

// app.UseHttpsRedirection();

// var summaries = new[]
// {
//     "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
// };

// app.MapGet("/weatherforecast", () =>
// {
//     var forecast =  Enumerable.Range(1, 5).Select(index =>
//         new WeatherForecast
//         (
//             DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
//             Random.Shared.Next(-20, 55),
//             summaries[Random.Shared.Next(summaries.Length)]
//         ))
//         .ToArray();
//     return forecast;
// })
// .WithName("GetWeatherForecast");

// app.Run();

// record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
// {
//     public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
// }


// Program.cs
// Top Level

// using Microsoft.EntityFrameworkCore;

// var builder = WebApplication.CreateBuilder(args);

// // add appsettings.json
// builder.Configuration.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);

// builder.Services.AddControllers();

// // register DbContext and CustomerService
// builder.Services.AddScoped<CrmDbContext>();
// builder.Services.AddScoped<ICustomerService, CustomerService>();

// // Add Sql Server
// // builder.Services.AddDbContext<CrmDbContext>(options =>
// //     options.UseSqlServer(builder.Configuration.GetConnectionString("CrmDbConnection")));

// builder.Services.AddDbContext<CrmDbContext>(options =>
//     options.UseSqlServer(
//         builder.Configuration.GetConnectionString("CrmDbConnection")));

// var app = builder.Build();

// app.UseRouting();

// app.MapControllers();

// app.Run();


// Auto Mapper & Fluent Validation



using FluentValidation;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// add appsettings.json
builder.Configuration.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);

builder.Services.AddControllers();

// register DbContext and CustomerService
builder.Services.AddScoped<CrmDbContext>();
builder.Services.AddScoped<ICustomerService, CustomerService>();

// AutoMapper
builder.Services.AddAutoMapper(config =>
{
    config.AddProfile<CustomerProfile>();
});

// Fluent Validation
builder.Services.AddScoped<IValidator<CreateCustomerDTO>, CreateCustomerDTOValidator>();
builder.Services.AddScoped<IValidator<CreateCustomerDTO>, UKNameCreateCustomerDTOValidator>();

// Add Sql Server
builder.Services.AddDbContext<CrmDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("CrmDbConnection")));

var app = builder.Build();

app.UseRouting();

app.MapControllers();

app.Run();