public class PropertiesDemo
{
    readonly string name;

    public int Myproperty {get; set;}

    public int MyAge{get; private set;}

    public PropertiesDemo()
    {
        name = "Gautami";
        Myproperty = 20;
        MyAge = 22;
    }
    public void ModifyName()
    {
        //name = "New Name" ; //This will cause a complie- time error
        MyAge =20;
    }
}