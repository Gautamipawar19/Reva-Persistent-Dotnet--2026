using FleetManager.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FleetManager.Vehicles
{
    public class Car : Vehicle, IMaintainable, ITrackable
    {
        public Car(string make, string model, double fuel)
            : base(make, model, fuel) { }

        public override void Start() =>
            Console.WriteLine($"Car {Make} {Model} started smoothly.");

        public void ScheduleMaintenance() =>
            Console.WriteLine($"Car {Id} maintenance scheduled.");

        public string GetLocation() => "Car GPS: Pune";
    }
}
