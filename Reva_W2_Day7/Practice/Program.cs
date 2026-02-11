// See https://aka.ms/new-console-template for more information
using System;

namespace Practice
{
    class Program
    {
        static void Main(string[] args)
        {
            //System.IndexOutOfRangeException
            // int[] arr = new int[] {1,2,3,4};
            // int array = arr[5];

            //System.NullReferenceException
            // string message = null; 

            // System.Console.WriteLine(message.ToLower());

            //DivideByZeroException
            // int num1 = 10;
            // int num2 = 0;
            // int result = num1/num2;

            // System.Console.WriteLine($"The exception result is:{result}" );

            //FileNotFoundException
            // var allText = System.IO.File.ReadAllText("This file is not exit.txt");
            // System.Console.WriteLine(allText);

            try
            {
                var num = 5;
                var deno =0;
                var result = num/deno;
                System.Console.WriteLine($"The exception result is:{result}" );
            }
            catch(DivideByZeroException ex)
            {
                System.Console.WriteLine("This is catch block");
                System.Console.WriteLine($"Exception caught: {ex.Message}");
                System.Console.WriteLine($"Stck Tracee: {ex.StackTrace}");
                System.Console.WriteLine($"Inner Exception: {ex.InnerException}");
                // throw ex;
            }
            finally
            {
                System.Console.WriteLine("Finally");
            }
            System.Console.WriteLine("This is the end of the Exception");
        }
    }
}