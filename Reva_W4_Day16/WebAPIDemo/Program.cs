// Program.cs
// Top Level

var builder = WebApplication.CreateBuilder(args);

// builder.AddScoped<IMessageReader, ConsoleMessageReader>();
builder.Services.AddControllers();

var app = builder.Build();

// No HTTPS redirection — deliberate, so telnet works on plain HTTP
// No Swagger for now — we are not here to use tools, we are here to see the wire
// http://localhost:5024/api/customer
app.MapControllers();

app.Run();