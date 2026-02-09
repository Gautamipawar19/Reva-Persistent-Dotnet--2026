// See https://aka.ms/new-console-template for more information
using System;

namespace TryFindMaxExample
{
    class Program
    {
        static void Main()
        {
            int[] numbers = { 5, 10, 3, 20, 7 };

            // Using out parameter
            if (TryFindMax(numbers, out int maxValue))
            {
                Console.WriteLine($"Max using out: {maxValue}");
            }

            // Using tuple return
            var (found, maxTuple) = TryFindMaxTuple(numbers);
            if (found)
            {
                Console.WriteLine($"Max using tuple: {maxTuple}");
            }
        }

        // Traditional Try pattern
        static bool TryFindMax(int[] numbers, out int max)
        {
            if (numbers == null || numbers.Length == 0)
            {
                max = 0;
                return false;
            }

            max = numbers[0];
            foreach (var n in numbers)
            {
                if (n > max)
                    max = n;
            }
            return true;
        }

        // Tuple-returning variant
        static (bool success, int max) TryFindMaxTuple(int[] numbers)
        {
            if (numbers == null || numbers.Length == 0)
                return (false, 0);

            int max = numbers[0];
            foreach (var n in numbers)
            {
                if (n > max)
                    max = n;
            }

            return (true, max);
        }
    }
}
