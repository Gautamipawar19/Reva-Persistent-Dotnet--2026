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
    delegate int  MathOperation(int a, int b);
    public void Run(){
       MathOperation operation = Add; //Add or Subtract;
        
        //Multicas delegate : adding more methods to the inovation
       operation +=Substract;
       operation +=Multiply;
       operation +=Divide;

        operation -= Substract; //Removing a method from the invocation list

       var result = operation(5, 3);
       Console.WriteLine($"The final result is: {result}");

        
    }

    public int Add(int a, int b)
    {
        Console.WriteLine($"The Sum of {a} and {b} is: {a + b}");
        return a + b;
    }

    public int Substract(int a, int b)
    {
        Console.WriteLine($"The difference between {a} and {b} is: {a - b}");
        return a - b;
    }

    public int Multiply(int a, int b)
    {
        Console.WriteLine($"The product of {a} and {b} is: {a * b}");
        return a * b;
    }
    
    public int Divide(int a, int b){
        if(b != 0)
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