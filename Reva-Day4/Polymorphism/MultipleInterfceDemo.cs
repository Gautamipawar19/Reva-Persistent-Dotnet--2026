interface IElectricityProvider
{
    void SupplyService();
}

interface IInternetProvider
{
    void SupplyService();
}

public class ServiceProvider : IElectricityProvider, IInternetProvider
{
    void IElectricityProvider.SupplyService()
    {
        Console.WriteLine("Supplying Electricity Service.");
    }

    void IInternetProvider.SupplyService()
    {
        Console.WriteLine("Supplying Internet Service.");
    }
}

public class ElectricityProvider : IElectricityProvider
{
    public void SupplyService()
    {
        Console.WriteLine("Supplying Electricity Service.");
    }
}