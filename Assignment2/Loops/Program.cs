// See https://aka.ms/new-console-template for more information
using System;   

namespace Loops
{
    class Program
    {
        static void Main(string[] args){
         //Inline Comment
            /* block Comment */
            /// <summary> Gets the name. </summary>
            // public string Name { get; set;}


            // Array declaration
            int[] arr = { 10, 20, 30, 40, 50 };

            // for loop
            for (int i = 0; i < arr.Length; i++)
            {
                Console.WriteLine(arr[i]);
            }

            // foreach loop
            foreach (var item in arr)
            {
                Console.WriteLine(item);
            }

            // while loop (use different variable name)
            int j = 0;
            while (j++ < 5)
            {
                Console.WriteLine(j);
            }

        }

    }
}