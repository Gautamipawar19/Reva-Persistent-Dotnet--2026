// See https://aka.ms/new-console-template for more information
using System;

namespace StringExtensionsExample
{
    static class StringExtensions
    {
        public static bool IsPalindrome(this string s)
        {
            if (string.IsNullOrEmpty(s)) return true;

            int left = 0;
            int right = s.Length - 1;

            while (left < right)
            {
                if (s[left] != s[right])
                    return false;
                left++;
                right--;
            }
            return true;
        }
    }

    class Program
    {
        static void Main()
        {
            string str1 = "racecar";
            string str2 = "hello";

            Console.WriteLine($"{str1} is palindrome? {str1.IsPalindrome()}");
            Console.WriteLine($"{str2} is palindrome? {str2.IsPalindrome()}");
        }
    }
}
