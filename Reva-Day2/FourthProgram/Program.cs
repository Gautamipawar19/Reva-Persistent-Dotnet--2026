// See https://aka.ms/new-console-template for more information
using System;

namespace FourthProgram
{
    class Program
    {
         static void Main(string[] args)
        {
            int? n = null;
            int value = n ?? -1; //coalsce 

            string s = null;
            int? length = s?.Length; //safe access

            Console.WriteLine($"Value: {value}");
            Console.WriteLine($"Length: {length}");
        }
    }
}