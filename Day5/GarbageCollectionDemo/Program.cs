// See https://aka.ms/new-console-template for more information
// See https://aka.ms/new-console-template for more information
using System;
using System.Collections;

namespace GarbageCollectionDemo
{
    class Program{
        public static void Main()
        {
            //GC Demonstration
            var res1 = new Resource("Res1"); // allocted on heap
            var res2 = new Resource("Res2");
            
            res1 =null; // res1 is now eligible for garbage collection
            
            GC.Collect(); // force garbage collection (normally automatic)
            GC.WaitForPendingFinalizers(); // wait for finalizers to complete
            
            Console.WriteLine("GC implemented");
            RecordDemo();
            // ArrayCollectionDemo();
            CollectionClassesDemo();
            CollectionClassesDemo2();
         }

         private static void ResourceDemo(){
           using (var manager = new FileManager("DisposableRes"))
            {
                manager.OpenFile(@"C:\temp\test.txt");
            }
            using var manager2 = new FileManager("DisposableRes");
         }
            private static void RecordDemo(){
                var temp1  = new Temp{ Id = 1, Name = "Temp1"};
                var temp2 = new Temp{Id = 1, Name = "Temp1"};

                Console.WriteLine(temp1);
                Console.WriteLine(temp2);
                Console.WriteLine(temp1 == temp2);

                //temp Id =3;

                var temp3 = temp1 with { Id = 2};
                Console.WriteLine(temp3);
            }

        public static void ArrayCollectionDemo(){
            ArrayList list = new ArrayList();
            list.Add(1);
            list.Add(2);
            list.Add(3);
            list.Add("Hello");
            list.Add(3.14);
            // foreach(var item in list)
            // {
            //     // Console.WriteLine(item);
            // }
            int sum =0;
            foreach(var item in list)
            {
                Console.WriteLine($"item: {item}, type: {item.GetType()}");
                sum +=(int)item;
                Console.WriteLine($"Sum: {sum}"); 
            }
        }
        public static void CollectionClassesDemo()
        {
            List<string> list = new List<string>();
            list.Add("1");
            list.Add("2");
            list.Add("3");
            list.Add("4");

            foreach(var item in list){
                Console.WriteLine(item);
            }
        }

        public static void CollectionClassesDemo2()
        {
            List<int> marks = new List<int>(10);
            marks.Add(1);
            marks.Add(1);
            Console.WriteLine($"Count: {marks.Count}, Capacity: {marks.Capacity}");

            marks.AddRange(new int[] {1,2,3});
            Console.WriteLine($"Count: {marks.Count}, Capacity: {marks.Capacity}");

            marks.AddRange(new List<int> {4,5,6});
            Console.WriteLine($"Count: {marks.Count}, Capacity: {marks.Capacity}");

            marks.AddRange(new List<int> {4,5,6});
            Console.WriteLine($"Count: {marks.Count}, Capacity: {marks.Capacity}");

            Console.WriteLine($"Marks Avg: {marks.Average()}");
        }
    }

}