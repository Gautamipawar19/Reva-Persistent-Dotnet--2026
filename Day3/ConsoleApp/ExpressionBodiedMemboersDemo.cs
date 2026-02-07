public class ExpressionBodiedMembersDemo
{
    public class ParamsDemo
    {
        public int Add(int a, int b)
        {
            return a + b;
        }
        
        public int Subtract(int a, int b) => a-b;

        public int  Multiply(int a, int b) => a * b;
    }
}