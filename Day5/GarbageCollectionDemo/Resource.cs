namespace GarbageCollectionDemo
{
    public class Resource
    {
        public string Name{get; set;}

        public Resource(string name)
        {
            Name = name;
            Console.WriteLine($"{Name} Created");
        }
        ~Resource()
        {
            Console.WriteLine($"{Name} destroyed by GC");
        }
    }
}