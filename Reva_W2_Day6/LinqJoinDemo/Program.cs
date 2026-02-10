// See https://aka.ms/new-console-template for more information
using LinqJoinDemo.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace LinqJoinDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            var customers = new List<Customer>
            {
                new Customer { CustomerId = 1, CustomerName = "Gauri" },
                new Customer { CustomerId = 2, CustomerName = "Gautami" },
                new Customer { CustomerId = 3, CustomerName = "Radha" }
            };

            var orders = new List<Order>
            {
                new Order { OrderId = 101, CustomerId = 1, OrderAmount = 1000 },
                new Order { OrderId = 102, CustomerId = 1, OrderAmount = 2000 },
                new Order { OrderId = 103, CustomerId = 2, OrderAmount = 2500 },
                new Order { OrderId = 104, CustomerId = 2, OrderAmount = 1500 }
            };

            var customerOrderSummary =
                from c in customers
                join o in orders
                on c.CustomerId equals o.CustomerId
                group o by new { c.CustomerId, c.CustomerName } into g
                select new
                {
                    CustomerId = g.Key.CustomerId,
                    CustomerName = g.Key.CustomerName,
                    OrderCount = g.Count(),
                    TotalOrderValue = g.Sum(x => x.OrderAmount),
                    Orders = g.Select(x => new
                    {
                        x.OrderId,
                        x.OrderAmount
                    }).ToList()
                };
            
                        foreach (var item in customerOrderSummary)
            {
                Console.WriteLine($"Customer: {item.CustomerName}");
                Console.WriteLine($"Total Orders: {item.OrderCount}");
                Console.WriteLine($"Total Value: {item.TotalOrderValue}");

                foreach (var order in item.Orders)
                {
                    Console.WriteLine($"  OrderId: {order.OrderId}, Amount: {order.OrderAmount}");
                }

                Console.WriteLine("----------------------");
            }
        }
    }
}

