// See https://aka.ms/new-console-template for more information
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

var _context = new CrmDbContext();

// Fetch all customers
var customers = _context.Customers.ToList();

foreach (var customer in customers)
{
    Console.WriteLine($"Customer ID: {customer.CustomerId}, Name: {customer.Name}, Email: {customer.Email}");
}

class CrmDbContext : DbContext
{
    public DbSet<Customer> Customers { get; set; }
    public DbSet<Order> Orders { get; set; }
    public DbSet<CustomerType> CustomerTypes { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(
            @"Server=DESKTOP-5D2667V\SQLEXPRESS;
              Database=Employee_DB;
              Trusted_Connection=True;
              TrustServerCertificate=True;");
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Seed Data
        modelBuilder.Entity<CustomerType>()
            .HasData(
                new CustomerType { Id = 1, TypeName = "Regular" },
                new CustomerType { Id = 2, TypeName = "Premium" }
            );

        // Primary Key
        modelBuilder.Entity<Order>()
            .HasKey(o => o.OrderId);

        // Relationship
        modelBuilder.Entity<Order>()
            .HasOne(o => o.Customer)
            .WithMany()
            .HasForeignKey(o => o.CustomerId);
    }
}

public class Customer
{
    public int CustomerId { get; set; }
    public string? Name { get; set; }
    public string? Email { get; set; }
}

public class CustomerType
{
    public int Id { get; set; }
    public string? TypeName { get; set; }
}

public class Order
{
    public int OrderId { get; set; }
    public DateTime OrderDate { get; set; }
    public decimal TotalAmount { get; set; }

    public int CustomerId { get; set; }

    [ForeignKey("CustomerId")]
    public Customer? Customer { get; set; }
}
