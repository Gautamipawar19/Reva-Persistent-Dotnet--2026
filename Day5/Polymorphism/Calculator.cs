using System;

namespace Polymorphism
{
    public class Calculator{
        public int Add(int a, int b){ 
            return a + b;
        }
        public double Add(double a, double b) {
            return a + b;
        }
        public int  Add(int a, int  b, int c){
            return a + b + c;
        }
        public string Add(string a, string b)
        {
            return a + b;
        } 
                
    }
}