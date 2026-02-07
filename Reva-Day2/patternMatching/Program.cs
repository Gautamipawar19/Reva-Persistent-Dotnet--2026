// See https://aka.ms/new-console-template for more information
using System;

namespace patternMatching
{
    class Program
    {
        static void Main(string[] args)
        {
            object o =3;

            if (o is int i )
                Console.WriteLine(i + 1);

            Example ex = new Example();
            ex.Test();
        }
    }
}
