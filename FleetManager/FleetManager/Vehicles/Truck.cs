using FleetManager.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FleetManager.Vehicles
{

    public class Truck : Vehicle, IMaintainable, ITrackable
    {
        public Truck(string make, string model, double fuel)
            : base(make, model, fuel) { }

        public override void Start() =>
            Console.WriteLine($"Truck {Make} {Model} started with heavy engine.");

        // Explicit Interface Implementation
        void IMaintainable.ScheduleMaintenance() =>
            Console.WriteLine($"Truck {Id} requires depot maintenance.");

        string ITrackable.GetLocation() => "Truck GPS: Mumbai";
    }
}
