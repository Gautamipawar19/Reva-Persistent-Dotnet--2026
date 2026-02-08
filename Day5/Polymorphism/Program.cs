// See https://aka.ms/new-console-template for more information
using System;

namespace Polymorphism
{
    class Program
    {
        static void Main(string[] args)
        {
            Calculator cal= new Calculator();
            Console.WriteLine(cal.Add(5, 10)); // int overload
            Console.WriteLine(cal.Add(5.5, 10.2)); // double overload
            Console.WriteLine(cal.Add(5, 10, 15)); // three param overload
            Console.WriteLine(cal.Add("Hello, ", "World!")); // string overload
        }
    }
}
