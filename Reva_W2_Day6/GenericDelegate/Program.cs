// See https://aka.ms/new-console-template for more information
using System;

namespace GenericDelegate;
    class Program
    {
        static void Main(string[] args)
        {
            DelegatesDemoApp app = new DelegatesDemoApp();
            app.Run();
        }
    }

    //void Add(int a, int b)
    // delegate void MathOperation(int a, int b);
    //int Add(int a, int b)
    delegate int MathOperation(int a, int b);

    // Generic Delegate

    // delegate TResult GenericTwoParameterFunction<TFirst, TSecond, TResult>(TFirst a, TSecond b);

    delegate void GenericTwoParameterAtion<TFirst, TSecond>(TFirst a, TSecond b);

    class DelegatesDemoApp
    {
        public void LamdaExpressionDemo(){
            Func<int, int> f;
            f = (int x) => x * x; // Lambda expression for squaring a number

            var result = f(5);

            Console.WriteLine($"result: {result}");
        }

        public void AnonynomusMethodDemo()
        {
            MathOperation operation = delegate (int a, int b)
            {
                Console.WriteLine($"The sum of {a} and {b} is: {a + b}");
                return a + b;
            };
            operation(2,3);
        }
        void PrintMessage(string message)
        {
            Console.WriteLine(message);
        }

        bool IsEven(int number)
        {
            return number % 2 == 0;
        }

        public void Run()
        {
            // MathOperation operation = Add;
            // GenericTwoParameterFunction<int, int, int> genericOperation = Add;
            Func<int, int, int> genericOperation = Add;

            Action<string> action = PrintMessage;
            action("Hello from Action delegate!");

            Predicate<int> predicate = IsEven;
            int testNumber = 4;

            Console.WriteLine($"Is {testNumber} even? {predicate(testNumber)}");

            return;

            Func<string, string, string> stringOperation = Concatenate;

            var x = stringOperation("Hello, ", "World!");
            Console.WriteLine($"Concatenation result: {x}");

            // Multicast delegate: adding more methods to the invocation list
            genericOperation += Subtract;
            genericOperation += Multiply;
            genericOperation += Divide;

            genericOperation -= Subtract; // Removing the Subtract method from the invocation list

            var result = genericOperation(5, 3);
            Console.WriteLine($"Final result: {result}");
        }


        public string Concatenate(string a, string b)
        {
            string result = a + b;
            Console.WriteLine($"Concatenating '{a}' and '{b}' results in: '{result}'");
            return result;
        }

        public int Add(int a, int b)
        {
            Console.WriteLine($"The sum of {a} and {b} is: {a + b}");
            return a + b;
        }

        public int Subtract(int a, int b)
        {
            Console.WriteLine($"The difference between {a} and {b} is: {a - b}");
            return a - b;
        }

        public int Multiply(int a, int b)
        {
            Console.WriteLine($"The product of {a} and {b} is: {a * b}");
            return a * b;
        }

        public int Divide(int a, int b)
        {
            if (b != 0)
            {
                Console.WriteLine($"The quotient of {a} and {b} is: {a / b}");
                return a / b;
            }
            else
            {
                Console.WriteLine("Cannot divide by zero.");
            }
            return 0;
        }
    }