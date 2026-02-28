using MyApp;

namespace MyApp.Tests;
// Req -> Analysis/Design -> Development -> Testing -> Deployment
// Req -> Analysis/Design -> Testing -> Development -> Deployment

// Fast
// Isolated, and -> ????
// Deterministic -> Idempotent

// Unit Test


// Fullstack
// Frontend    Backend   Database            Infra
// React        .NET       SQL           Azure/Docker/kubernetes

// SOLID
// p   t    s

public class CalculatorTests : IDisposable
{
    
    // Setup
    // [Setup]
    // public void SetupProject()
    // {}
    // [TearDown]
    // public void TearDownProject()
    // {}
    Calculator calculator;

    public CalculatorTests()
    {
        calculator = new Calculator();
    }

    // Teardown
    public void Dispose()
    {
        // Clean up resources if needed
        // calculator.Dispose();
    }


    [Theory]
    [InlineData(2, 3, 5)]     // 2 + 3 = 5
    [InlineData(0, 0, 0)]     // 0 + 0 = 0
    [InlineData(-1, 1, 0)]    // -1 + 1 = 0
    public void Add_TwoNumbers_GivesCorrectResult(int x, int y, int expectedResult)
    {
        // Arrange

        var calculator = new Calculator();
        
        // system under test
        // var sut = new Calculator();

        // manual calculation
        // var x = 5;
        // var y = 10;
        // var expectedResult = 15;

        // Act
        var actualResult = calculator.Add(x, y);

        // Assert
        Assert.Equal(expected: expectedResult, actual: actualResult);
    }

    [Theory]
    [InlineData(2, 3, -1)]
    [InlineData(0, 0, 0)]
    [InlineData(-1, 1, -2)]
    public void Subtract_TwoNumbers_GiveCorrectResult(int x, int y, int expectedResult)
    {
        // Arrange
        var calculator = new Calculator();
        // var x = 10;
        // var y = 5;
        // var expectedResult = 5;

        // Act
        var actualResult = calculator.Subtract(x, y);

        // Assert
        Assert.Equal(expected: expectedResult, actual: actualResult);
    }

    [Theory]
    [InlineData(10, 5, 50)]
    [InlineData(2, 3, 6)]
    [InlineData(3, 6, 18)]
    public void Multiply_TwoNumbers_GivesCorrectResult(int x, int y, int expectedResult)
    {
        var calculator = new Calculator();
        var actualResult =calculator.Multiply(x, y);
        Assert.Equal(expectedResult, actualResult);
    }

    [Theory]
    [InlineData(10, 2, 5)]
    [InlineData(20, 5, 4)]
    [InlineData(-10, 2, -5)]
    public void Divide_TwoNumbers_GivesCorrectResult(int x, int y, int expectedResult)
    {
        var calculator = new Calculator();
        var actualResult = calculator.Divide(x, y);
        Assert.Equal(expectedResult, actualResult);
    }

    //Divide By Zero Test 
    [Fact]
    public void Divide_ByZero_ShouldThrowException()
    {
        var calculator = new Calculator();
        Assert.Throws<DivideByZeroException>(() => calculator.Divide(10, 0));
    } 
}