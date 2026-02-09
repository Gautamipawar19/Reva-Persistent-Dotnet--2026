namespace EmployeeDemo
{
    public class Employee
    {
        public int ID {get; set;}
        public string FirstName{get; set;}
        public string LastName{get; set;}
        public int Age {get; set;}

        public Employee(int ID,string FirstName,string LastName,int Age)
        {
            this.ID= ID;
            this.FirstName=FirstName;
            this.LastName=LastName;
            this.Age=Age;

        }
        public void Print()
        {
            Console.WriteLine($"ID: {this.ID},NAME:{this.FirstName}{this.LastName},Age:{this.Age}");

        }
    }
}

namespace ExtensionMethodDemo
{
    using EmployeeDemo;
    public static class EmployeeExtension
    {
        public static void DoubleTheAge(this Employee x)
        {
            x.Age = x.Age *2;
        }
    }
}