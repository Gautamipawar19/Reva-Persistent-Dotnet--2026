using FleetManager.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FleetManager.Vehicles
{
    public abstract class Vehicle
    {
        public int Id { get; }
        public string Make { get; }
        public string Model { get; }

        private double _fuelLevel;
        public double FuelLevel
        {
            get => _fuelLevel;
            protected set
            {
                if (value < 0)
                    throw new ArgumentException("Fuel cannot be below zero.");
                _fuelLevel = value;
            }
        }

        protected Vehicle(string make, string model, double fuelLevel)
        {
            Id = IdGenerator.NextId();
            Make = make;
            Model = model;
            FuelLevel = fuelLevel;
        }

        public abstract void Start();

        public virtual void Stop() =>
            Console.WriteLine($"{Make} {Model} stopped.");
    }

}
