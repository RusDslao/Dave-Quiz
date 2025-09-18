const AN = [
  {
    question: "What is the primary purpose of ADO.NET in .NET applications?",
    options: [
      "Rendering graphics",
      "Interacting with databases and performing CRUD operations",
      "Building desktop UI",
      "Handling file uploads",
    ],
    answer: "Interacting with databases and performing CRUD operations",
  },
  {
    question:
      "Which of these is a core component of ADO.NET for working with databases?",
    options: ["Data Providers", "ASP.NET MVC", "Visual Studio", "Razor Pages"],
    answer: "Data Providers",
  },
  {
    question:
      "Which class is part of System.Data.SqlClient and used to open a connection to SQL Server?",
    options: ["SqlAdapter", "SqlConnection", "SqlManager", "SqlEngine"],
    answer: "SqlConnection",
  },
  {
    question: "What is the role of SqlCommand in ADO.NET?",
    options: [
      "To represent an in-memory copy of tables",
      "To execute SQL queries or stored procedures",
      "To store connection strings",
      "To cache connection pools",
    ],
    answer: "To execute SQL queries or stored procedures",
  },
  {
    question: "Which statement about DataSet is correct?",
    options: [
      "It always requires an open connection to the database",
      "It stores data in memory and is disconnected from the data source",
      "It only works with SQL Server databases",
      "It cannot contain multiple tables",
    ],
    answer: "It stores data in memory and is disconnected from the data source",
  },
  {
    question: "What is the difference between a Data Provider and a DataSet?",
    options: [
      "Data Providers work with XML; DataSet works with databases",
      "Data Providers manage live connections, while DataSet stores data offline",
      "They are identical",
      "Data Providers only cache schema",
    ],
    answer:
      "Data Providers manage live connections, while DataSet stores data offline",
  },
  {
    question: "Which of the following is NOT a Data Provider in ADO.NET?",
    options: [
      "System.Data.SqlClient",
      "System.Data.OleDb",
      "System.Data.OracleClient",
      "System.Linq",
    ],
    answer: "System.Linq",
  },
  {
    question: "When would you prefer using a DataReader over a DataSet?",
    options: [
      "When you need disconnected editing",
      "When you require fast, forward-only, read-only access",
      "When you need XML serialization",
      "When you want to store multiple tables in memory",
    ],
    answer: "When you require fast, forward-only, read-only access",
  },
  {
    question: "Which of the following best describes a DataTable?",
    options: [
      "A provider for executing SQL",
      "A table of data inside a DataSet",
      "A database connection",
      "A log of database operations",
    ],
    answer: "A table of data inside a DataSet",
  },
  {
    question: "Which snippet correctly creates and opens a SQL connection?",
    options: [
      "SqlCommand, SqlCommand",
      "SqlConnection, SqlConnection",
      "SqlAdapter, SqlAdapter",
      "SqlServer, SqlServer",
    ],
    answer: "SqlConnection, SqlConnection",
  },
  {
    question:
      'Fill in the blanks to execute a query and retrieve results into a DataSet:\n\nSqlDataAdapter da = new SqlDataAdapter("SELECT * FROM Students", conn);\nDataSet ds = new DataSet();\nda.____(ds);',
    options: ["Load", "Fill", "Read", "Open"],
    answer: "Fill",
  },
  {
    question:
      "How do you access the value in the first column of the first row of a DataSet?\n\nDataSet ds = GetData();\nvar value = ds.Tables[0].Rows[0][0];",
    options: [
      "value contains the first column’s data",
      "value is always null",
      "value is a DataTable",
      "This code won’t compile",
    ],
    answer: "value contains the first column’s data",
  },
  {
    question:
      'Which code properly uses a SqlCommand to insert a record?\n\nstring sql = "INSERT INTO Courses(Name) VALUES(@Name)";\nusing (SqlCommand cmd = new SqlCommand(sql, conn))\n{\n    cmd.Parameters.AddWithValue("@Name", "Math");\n    cmd.ExecuteNonQuery();\n}',
    options: [
      "Correct",
      "Must replace ExecuteNonQuery() with ExecuteReader()",
      "AddWithValue cannot be used here",
      "SQL commands can’t run inside using blocks",
    ],
    answer: "Correct",
  },
  {
    question: "What does the SqlDataAdapter class do?",
    options: [
      "Opens and closes database connections automatically and fills/displays data",
      "Stores a connection string",
      "Logs queries to a file",
      "Creates a database schema",
    ],
    answer:
      "Opens and closes database connections automatically and fills/displays data",
  },
  {
    question:
      'Given the code below, what will be displayed?\n\nSqlDataAdapter da = new SqlDataAdapter("SELECT Name FROM Courses", conn);\nDataSet ds = new DataSet();\nda.Fill(ds);\nConsole.WriteLine(ds.Tables[0].Rows.Count);',
    options: [
      "The number of tables",
      "The number of rows returned by the query",
      "The connection string",
      "Always 0",
    ],
    answer: "The number of rows returned by the query",
  },
];

export default AN;
