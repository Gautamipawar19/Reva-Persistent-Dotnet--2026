using System;

namespace Operator
{
    class Example
    {
        public void Test(int a, int b)
        {
            int sum = a + b;
            double ratio = (double) a/b;
            int r = 7 % 3 ;

            Console.WriteLine("Sum: " + sum);
            Console.WriteLine("Ratio: " + ratio);
            Console.WriteLine("Remainder: " + r);
        }
    }
}