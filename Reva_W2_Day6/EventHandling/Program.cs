// See https://aka.ms/new-console-template for more information
using System;

namespace EventHandling;

// 1. Publisher
class Publisher
{
    // 2. EventHandler + 3. Event
    public event EventHandler MyEvent;

    public void RaiseEvent()
    {
        MyEvent?.Invoke(this, EventArgs.Empty);
    }
}

// 4. Subscriber
class Subscriber
{
    public void HandleEvent(object sender, EventArgs e)
    {
        Console.WriteLine("Event handled by subscriber");
    }
}

class Program
{
    static void Main()
    {
        Publisher pub = new Publisher();
        Subscriber sub = new Subscriber();

        // Subscribe
        pub.MyEvent += sub.HandleEvent;

        // Raise event
        pub.RaiseEvent();
    }
}
