using System;


namespace SecondProgram{
    class Example{
        public void m1(){
            string s = "Hello" + " World";
            string template = $"User: {Environment.UserName}, Date: {DateTime.Today:d}";
            
            Console.WriteLine(s);
            Console.WriteLine(template);
        }
    }
}