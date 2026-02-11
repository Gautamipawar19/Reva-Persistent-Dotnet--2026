using FleetManager.Vehicles;
using FleetManager.Interfaces;



namespace FleetManager
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var fleet = new List<Vehicle>
{
                new Car("Honda", "City", 50),
                new Truck("Tata", "Ultra", 120)
};

            foreach (var vehicle in fleet)
            {
                vehicle.Start();
                vehicle.Stop();

                if (vehicle is IMaintainable m)
                    m.ScheduleMaintenance();

                if (vehicle is ITrackable t)
                    Console.WriteLine(t.GetLocation());

                Console.WriteLine();
            }
        }
    }
}
