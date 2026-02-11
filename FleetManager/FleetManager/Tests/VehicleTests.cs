using Xunit;
using FleetManager.Vehicles;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FleetManager.Tests
{
    public class VehicleTests
    {
        [Fact]
        public void FuelLevel_CannotBeNegative()
        {
            Assert.Throws<ArgumentException>(() =>
                new Car("Test", "Car", -5));
        }

        [Fact] 
        public void Vehicle_Id_ShouldBeUnique()
        {
            var car1 = new Car("A", "B", 10);
            var car2 = new Car("C", "D", 20);

            Assert.NotEqual(car1.Id, car2.Id);
        }

        [Fact]
        public void Truck_Start_ShouldNotThrow()
        {
            var truck = new Truck("Tata", "Truck", 100);
            truck.Start(); // should execute safely
        }
    }
}
