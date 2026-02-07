// See https://aka.ms/new-console-template for more information
using System;
namespace FirstProgram
{
    class Program{
        static void Main(string[] args)
        {
            //Primitive Data Types 
            int a = 42;
            long big = 3_000_000_000L;
            float f = 3.14f;
            double d = 2.71828;
            decimal money = 19.99m;
            bool ok = true;
            char letter = 'A';

            Console.WriteLine(a);
            Console.WriteLine(big);
            Console.WriteLine(f);
            Console.WriteLine(d);
            Console.WriteLine(money);
            Console.WriteLine(ok);
            Console.WriteLine(letter);
        }
    }
}