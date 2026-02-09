// See https://aka.ms/new-console-template for more information
using System;

namespace LocalFunctionExample
{
    class Program
    {
        static void Main()
        {
            int[] numbers = { 2, 4, 6, 8 };
            int factor = 3;

            // Local function captures 'factor'
            int MultiplyAll()
            {
                int result = 1;
                foreach (var n in numbers)
                {
                    result *= n * factor; // 'factor' captured
                }
                return result;
            }

            Console.WriteLine($"Result: {MultiplyAll()}");
        }
    }
}
