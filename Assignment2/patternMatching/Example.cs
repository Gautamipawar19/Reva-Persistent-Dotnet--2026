using System;

namespace patternMatching
{
    class Example
    {
        public void Test()
        {
            Person person = new Person
            {
                Age = 20,
                Name = "Gautami"
            };

            // Property pattern
            if (person is { Age: >= 18, Name: var n })
                Console.WriteLine(n);      
        }
    }
}