const EF = [
  {
    question: "Which layer simplifies access to persistent storage?",
    options: [
      "Business Logic Layer",
      "Data Storage",
      "Data Access Layer",
      "Presentation Layer",
    ],
    answer: "Data Access Layer",
  },
  {
    question: "What is Object Relational Mapping (ORM)?",
    options: [
      "Storing data in JSON files",
      "Mapping database data into objects in an OOP language",
      "Writing SQL queries manually",
      "Encrypting data before saving",
    ],
    answer: "Mapping database data into objects in an OOP language",
  },
  {
    question: "Which statement best describes ADO.NET Entity Framework?",
    options: [
      "A manual SQL tool for C#",
      "A GUI for designing tables",
      "An ORM that auto-generates a data access layer",
      "A replacement for all databases",
    ],
    answer: "An ORM that auto-generates a data access layer",
  },
  {
    question: "The Business Domain refers to:",
    options: [
      "Database tables only",
      "The set of classes representing entities in a problem area",
      "The presentation layer of an app",
      "Code that validates user input",
    ],
    answer: "The set of classes representing entities in a problem area",
  },
  {
    question: "Business Rules are:",
    options: [
      "Stored procedures in SQL",
      "Requirements from business experts about how the software must behave",
      "Database connection strings",
      "C# interfaces",
    ],
    answer:
      "Requirements from business experts about how the software must behave",
  },
  {
    question: "Which layer contains the code implementing business rules?",
    options: [
      "Data Storage",
      "Business Logic Layer",
      "Data Access Layer",
      "User Interface",
    ],
    answer: "Business Logic Layer",
  },
  {
    question:
      "Which EF approach starts from domain classes and lets EF create the DB schema?",
    options: [
      "Database-First",
      "Code-First",
      "Model-First only",
      "Table-First",
    ],
    answer: "Code-First",
  },
  {
    question: "The Database-First approach means:",
    options: [
      "Create tables manually and write DAL yourself",
      "Use EF to generate entity classes from an existing DB",
      "Generate database from C# classes",
      "Avoid using EF at all",
    ],
    answer: "Use EF to generate entity classes from an existing DB",
  },
  {
    question: "Which Data Annotation marks a property as a primary key?",
    options: ["Required", "Key", "Range", "StringLength"],
    answer: "Key",
  },
  {
    question: "To enforce that a field is mandatory, which annotation is used?",
    options: ["Range", "MinLength", "Required", "MaxLength"],
    answer: "Required",
  },
  {
    question:
      "If you need to set min and max characters allowed in a field, which attribute fits best?",
    options: ["MaxLength", "Range", "StringLength", "Key"],
    answer: "StringLength",
  },
  {
    question: "To limit a numeric value between 1 and 100, you use:",
    options: [
      "Range(1,100)",
      "MaxLength(100)",
      "StringLength(1,100)",
      "MinLength(1)",
    ],
    answer: "Range(1,100)",
  },
  {
    question: "In EF architecture, which layer holds the physical tables?",
    options: [
      "Business Logic Layer",
      "Data Access Layer",
      "Storage Layer",
      "Service Layer",
    ],
    answer: "Storage Layer",
  },
  {
    question: "Which is NOT a benefit of using Entity Framework?",
    options: [
      "Automatic object mapping",
      "Less boilerplate data-access code",
      "Database independence",
      "Compiling apps without .NET installed",
    ],
    answer: "Compiling apps without .NET installed",
  },
  {
    question: "What is the primary goal of EF as an ORM?",
    options: [
      "Replace Visual Studio",
      "Reduce code & maintenance for data-driven apps",
      "Act as a reporting engine",
      "Secure the network",
    ],
    answer: "Reduce code & maintenance for data-driven apps",
  },
];
export default EF;
