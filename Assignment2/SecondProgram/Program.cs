// See https://aka.ms/new-console-template for more information
using System;
using System.Text;

namespace SecondProgram
{
    class StringExample
    {
        //String and StringBuilder
        static void Main(string[] args)
        {
            var sb = new StringBuilder();
            sb.Append("Line1").AppendLine();
            sb.AppendFormat("{0} items", 5);
            
            string result = sb.ToString();
            Console.WriteLine(result);

            Example ex = new Example();
            ex.m1();

        }
    }
}