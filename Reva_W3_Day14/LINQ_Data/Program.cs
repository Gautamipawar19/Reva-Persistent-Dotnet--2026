using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;
using Microsoft.Data.SqlClient;
using System.ComponentModel.DataAnnotations.Schema;

using Microsoft.EntityFrameworkCore;

class Program
{
    static void Main(string[] args)
    {
        using var context = new CrmDbContext();

        Console.WriteLine("Database Connected: " + context.Database.CanConnect());

        // Get all customers (Soft delete filter applied automatically)
        var customers = context.Customers.ToList();

        Console.WriteLine("\n--- All Customers ---");
        foreach (var customer in customers)
        {
            Console.WriteLine($"Customer ID: {customer.CustomerId}, Name: {customer.Name}, Email: {customer.Email}");
        }

        // Customers having orders > 1000
        var customersWithOrderValueMoreThan1000 =
            context.Customers
                .Join(context.Orders,
                      c => c.CustomerId,
                      o => o.CustomerId,
                      (c, o) => new { Customer = c, Order = o })
                .Where(co => co.Order.TotalAmount > 1000)
                .OrderBy(co => co.Customer.Name)
                .Select(co => co.Customer)
                .Distinct()
                .ToList();

        Console.WriteLine("\n--- Customers With Order Amount > 1000 ---");
        foreach (var customer in customersWithOrderValueMoreThan1000)
        {
            Console.WriteLine($"Customer ID: {customer.CustomerId}, Name: {customer.Name}, Email: {customer.Email}");
        }
    }
}

public class CrmDbContext : DbContext
{
    public DbSet<Customer> Customers => Set<Customer>();
    public DbSet<Order> Orders => Set<Order>();
    public DbSet<CustomerType> CustomerTypes => Set<CustomerType>();

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(
            "Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=CrmDb;Integrated Security=True;TrustServerCertificate=True");
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Seed Data
        modelBuilder.Entity<CustomerType>().HasData(
            new CustomerType { Id = 1, TypeName = "Regular" },
            new CustomerType { Id = 2, TypeName = "Premium" }
        );

        // Soft Delete Filter
        modelBuilder.Entity<Customer>()
            .HasQueryFilter(c => !c.IsDeleted);

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

    public string? Name { get; set; }      // Nullable fixed
    public string? Email { get; set; }     // Nullable fixed

    public bool IsDeleted { get; set; } = false;

    public ICollection<Order>? Orders { get; set; }
}

public class CustomerType
{
    public int Id { get; set; }

    public string? TypeName { get; set; }  // Nullable fixed
}

public class Order
{
    public int OrderId { get; set; }

    public DateTime OrderDate { get; set; }

    public decimal TotalAmount { get; set; }

    public int CustomerId { get; set; }

    // Navigation Property (nullable fixed)
    public Customer? Customer { get; set; }
}