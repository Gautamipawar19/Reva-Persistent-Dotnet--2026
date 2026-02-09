// See https://aka.ms/new-console-template for more information
using System;

namespace LoggerExample
{
    class Program
    {
        static void Main()
        {
            Logger log = new Logger();

            log.Log("Simple message");
            log.Log("Message with level", 2);
            log.Log("Values", 1, 2, 3);

            // Ambiguity example with named args
            // log.Log(message: "Hello", level: 1, values: new int[] { 1, 2 }); 
            // Uncommenting above may cause ambiguity because params and named args conflict
        }
    }

    class Logger
    {
        public void Log(string message)
        {
            Console.WriteLine($"[INFO]: {message}");
        }

        public void Log(string message, int level)
        {
            Console.WriteLine($"[Level {level}]: {message}");
        }

        public void Log(string message, params int[] values)
        {
            Console.WriteLine($"{message}: {string.Join(", ", values)}");
        }
    }
}
