// See https://aka.ms/new-console-template for more information
using System;

namespace DemoApp
{
    class Program
    {
        static void Main(String[] args)
        {
            Console.WriteLine(args.Length > 0 ? args[0] : "No args");
            Example ex = new Example();
            ex.Main().GetAwaiter().GetResult();
            
        }
    }
}