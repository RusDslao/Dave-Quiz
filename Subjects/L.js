const L = [
  {
    question: "What is the main purpose of LINQ in C#?",
    options: [
      "To enable database creation from C# code",
      "To extend query capabilities directly into C# syntax",
      "To replace SQL entirely",
      "To improve compilation speed",
    ],
    answer: "To extend query capabilities directly into C# syntax",
  },
  {
    question: "Which of the following is NOT true about LINQ?",
    options: [
      "It standardizes data querying patterns",
      "It can be used with any type of data source",
      "It only works with SQL Server databases",
      "Queries can be executed on collections or databases",
    ],
    answer: "It only works with SQL Server databases",
  },
  {
    question: "What are the three main steps of any LINQ query?",
    options: [
      "Connect, Update, Delete",
      "Open, Query, Close",
      "Obtain data source, Create query, Execute query",
      "Define, Sort, Select",
    ],
    answer: "Obtain data source, Create query, Execute query",
  },
  {
    question:
      "Which LINQ technology is used to query in-memory DataSet objects?",
    options: [
      "LINQ to SQL",
      "LINQ to Entities",
      "LINQ to DataSet",
      "LINQ to Objects",
    ],
    answer: "LINQ to DataSet",
  },
  {
    question:
      "Which LINQ technology allows querying SQL Server databases using .NET classes?",
    options: [
      "LINQ to SQL",
      "LINQ to Entities",
      "LINQ to XML",
      "LINQ to DataSet",
    ],
    answer: "LINQ to SQL",
  },
  {
    question: "LINQ to Entities is primarily associated with which framework?",
    options: ["ADO.NET", "Entity Framework", "Windows Forms", "ASP.NET MVC"],
    answer: "Entity Framework",
  },
  {
    question: "In LINQ, when is the query actually executed?",
    options: [
      "When it is defined",
      "When iterated or converted to a collection",
      "At compile time",
      "When the database is created",
    ],
    answer: "When iterated or converted to a collection",
  },
  {
    question:
      "What is the correct sequence of actions in a LINQ query workflow?",
    options: [
      "Execute query → Obtain data → Create query",
      "Create query → Execute query → Obtain data",
      "Obtain data → Create query → Execute query",
      "None of the above",
    ],
    answer: "Obtain data → Create query → Execute query",
  },
  {
    question: "Which of these can serve as a LINQ data source?",
    options: [
      "SQL database",
      "XML document",
      "List<T> collection",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question: "Which syntax is SQL-like and high-level?",
    options: [
      "Method-based syntax",
      "Query expression syntax",
      "Lambda syntax",
      "Procedural syntax",
    ],
    answer: "Query expression syntax",
  },
  {
    question:
      "Identify the correct method-based syntax for querying customers from Manila:",
    options: [
      'from c in Customers where c.City=="Manila" select c;',
      'Customers.Where(c => c.City == "Manila").Select(c => c);',
      'Select(c => c).Where(c.City=="Manila");',
      'Query(Customers).Where(c.City=="Manila");',
    ],
    answer: 'Customers.Where(c => c.City == "Manila").Select(c => c);',
  },
  {
    question: "Which statement is true about query execution?",
    options: [
      "Queries execute as soon as they are declared",
      "Queries execute when iterated or converted to a collection",
      "Queries execute automatically on program start",
      "Queries execute only in SQL Server",
    ],
    answer: "Queries execute when iterated or converted to a collection",
  },
  {
    question: "What does the from keyword do in LINQ?",
    options: [
      "Filters elements based on a condition",
      "Specifies the data source and introduces a range variable",
      "Sorts the result set",
      "Selects the final shape of data",
    ],
    answer: "Specifies the data source and introduces a range variable",
  },
  {
    question: "Which keyword is used to sort query results?",
    options: ["orderby", "select", "where", "join"],
    answer: "orderby",
  },
  {
    question: "In LINQ, how do you sort a query descending?",
    options: [
      "orderby ascending",
      "orderby descending",
      "select descending",
      "where descending",
    ],
    answer: "orderby descending",
  },
  {
    question: "The select clause determines:",
    options: [
      "The filtering condition",
      "The data source",
      "The type and shape of the returned elements",
      "How the query is executed",
    ],
    answer: "The type and shape of the returned elements",
  },
];

export default L;
