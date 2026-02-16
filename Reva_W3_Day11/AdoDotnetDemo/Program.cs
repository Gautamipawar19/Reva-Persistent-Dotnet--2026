// // See https://aka.ms/new-console-template for more information
using System.Data;
using Microsoft.Data.SqlClient;
// using Microsoft.Extension.Configuration;

var connectionString =@"Server=DESKTOP-5D2667V\SQLEXPRESS;
                        Database=CrmDb;
                        Trusted_Connection=True;
                        TrustServerCertificate=True;";

using var con= new SqlConnection(connectionString);

try{
    con.Open();
    Console.WriteLine("Connection opened successfully.");

    // Execute Reader
    // ExecuteReader(con);

    // Execute NonQuery
    // ExecuteNonQuery(con);

    // Execute Scalar
    // ExecuteScalar(con);

    // SQL Data Adapater
    // SqlDataAdapeterDemo(con);

    // Insert Customer Demo
    // InsertCustomerDemo(con);

    // SQL Injection Demo
    // SqlInjectionDemo(con);

    // Parameterized Query Demo
    ParameterizedQueryDemo(con);

    // SqlCommand command = new SqlCommand("Select EmpID,Empname,Age from Employee where Age > 20", con);
    // SqlDataReader reader = command.ExecuteReader();

    // while(reader.Read())
    // {
    //     int EmpId =reader.GetInt32(0);
    //     string EmpName = reader.GetString(1);
    //     int Age =reader.GetInt32(2);
    //     string Department = reader.GetString(1);
    //     Console.WriteLine(
    //         $"{EmpId}\t{EmpName}\t{Age}\t{Department}");
    // }    
}
catch (Exception ex)
{
    Console.WriteLine(ex.Message);
    return;
}
finally
{
     con.Close();
}

void ParameterizedQueryDemo(SqlConnection con)
{
    using (SqlCommand command = new SqlCommand(
        "SELECT * FROM Employee WHERE EmpName LIKE @EmpName", con))
    {
        var UserInput = "Gauri";

        // Add % for partial matching
        command.Parameters.AddWithValue("@EmpName", "%" + UserInput + "%");

        using (SqlDataReader reader = command.ExecuteReader())
        {
            if (reader.Read())
            {
                Console.WriteLine($"Id: {reader["EmpId"]}, Name: {reader["EmpName"]}, Age: {reader["Age"]}");
            }
            else
            {
                Console.WriteLine("No Employee Found with the specified Name.");
            }
        }
    }
}

void SqlInjectionDemo(SqlConnection con)
{
   var UserInput = "1 or 1 = 1";

   var query = $"Select * From Employee Where EmpId = {UserInput}";

   using var command = new SqlCommand(query, con);
   try{
         using var reader = command.ExecuteReader();
    while(reader.Read())   
    {
        Console.WriteLine($"Id: {reader["EmpId"]}, Name: {reader["EmpName"]}, Age: {reader["Age"]}");
    }
   }
   catch(Exception ex)
   {
       Console.WriteLine($"Error Executing Query: {ex.Message}");   
   }
}

void InsertCustomerDemo(SqlConnection con)
{
    var dataSet = new DataSet();
    var selectQuery = "SELECT * FROM Employee";
    using var selectCommand = new SqlCommand(selectQuery, con);
    using var adapter = new SqlDataAdapter(selectQuery, con);
    adapter.Fill(dataSet, "Employee");

    var dataTable = dataSet.Tables["Employee"];

    var newRow = dataTable.NewRow();
    // newRow["EmpId"]=1;
    newRow["EmpName"]="New Employee";
    newRow["Age"] =22;

    dataTable.Rows.Add(newRow);

    adapter.InsertCommand = new SqlCommand(
        "INSERT INTO Employee (EmpName, Age) VALUES (@EmpName, @Age)", con);
        {
            adapter.InsertCommand.CommandType = CommandType.Text;

        };

        adapter.InsertCommand.Parameters.Add("@EmpName", SqlDbType.NVarChar, 50 , "EmpName");
        adapter.InsertCommand.Parameters.Add("@Age", SqlDbType.Int, 0, "Age");
    
        adapter.Update(dataSet, "Employee");

        dataSet.AcceptChanges();

        Console.WriteLine("Record Inserted Successfully.");

}


void SqlDataAdapeterDemo(SqlConnection con)
{
    var query = "SELECT * FROM Employee";
    SqlCommand sqlCommand = new(query, con);

    using var selectAllCustomersCommand = sqlCommand;
    using var adapter = new SqlDataAdapter(selectAllCustomersCommand);

    var customersDataTable = new DataTable();

    adapter.Fill(customersDataTable);

    foreach(DataRow row in customersDataTable.Rows)
    {
        Console.WriteLine($"Id: {row["EmpId"]}, Name: {row["EmpName"]}, Age: {row["Age"]}");
    }
}


void ExecuteScalar(SqlConnection con)
{
    var query = "SELECT COUNT(*) FROM Employee";
    using var command = new SqlCommand(query, con);
    var count = (int)command.ExecuteScalar();
    Console.WriteLine($"Total Employee : {count}");
}


void ExecuteReader(SqlConnection con)
{
    var query = "SELECT * FROM Employee WHERE Age > 20";
    using var command = new SqlCommand(query, con);
    using var reader = command.ExecuteReader();

    while (reader.Read())
    {
        Console.WriteLine($"Id: {reader["EmpId"]}, Name: {reader["EmpName"]}, Age: {reader["Age"]}");
    }
}


void ExecuteNonQuery(SqlConnection con)
{
    var query = "INSERT INTO Employee (EmpName, Age) VALUES ('Gautami', 22)";
    using var command = new SqlCommand(query, con);
    var rowsAffected = command.ExecuteNonQuery();
    Console.WriteLine($"Rows Affected: {rowsAffected}");
}