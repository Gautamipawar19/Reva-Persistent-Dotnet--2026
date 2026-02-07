// See https://aka.ms/new-console-template for more information
using System;

namespace HelloApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");

            int a=5;
             
            a = IncrementValue(a);

            Console.WriteLine(a);

            First f = new First();
            f.Show();

        }
        private static int IncrementValue(int a)
        {
            a++; 
            return a;
        }   
    }
}
