// See https://aka.ms/new-console-template for more information
using System;

namespace Operator
{
    class Program
    {
        static void Main(string[] args)
        {
            int x = 50;
            bool isReady = true;
            bool hasData = false;

            if (x > 0 && x < 100)
            {
                Console.WriteLine("x is in the range");
            }

            if (!(isReady || hasData)) return;
            Console.WriteLine("Processing data...");

            Example ex = new Example();
            ex.Test(10, 5); //pass arguments
        }
    }

}