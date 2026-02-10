// See https://aka.ms/new-console-template for more information
using System;

namespace DelegateDemo
{
    class Program
    {
         static void Main(String[] args)
        {
            DelegatesDemo app = new DelegatesDemo();
            app.Run();
           
        }
    }
}

class DelegatesDemo
{
    //void Add(int a, int b)
    delegate void MathOperation(int a, int b);
    public void Run(){
       MathOperation operation = Subtract; //Add or Subtract;
       operation(5, 3);   
    }

    public void Add(int a, int b)
    {
        Console.WriteLine($"The Sum of {a} and {b} is: {a + b}");
    }

    public void Subtract(int a, int b)
    {
        Console.WriteLine($"The difference between {a} and {b} is: {a - b}");
    }
}