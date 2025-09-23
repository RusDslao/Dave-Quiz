const UT = [
  {
    question: "Which attribute marks a class as a test class in MSTest?",
    options: ["[UnitClass]", "[Test]", "[TestClass]", "[Class]"],
    answer: "[TestClass]",
  },
  {
    question: "Which attribute marks a method as a test method in MSTest?",
    options: ["[Run]", "[Test]", "[TestMethod]", "[UnitMethod]"],
    answer: "[TestMethod]",
  },
  {
    question: "Assertions in unit tests are used to:",
    options: [
      "Generate test data",
      "Verify expected vs actual results",
      "Configure the test runner",
      "Organize test classes",
    ],
    answer: "Verify expected vs actual results",
  },
  {
    question: "In the AAA pattern, which step sets up objects and inputs?",
    options: ["Arrange", "Act", "Assert", "Apply"],
    answer: "Arrange",
  },
  {
    question: "In the AAA pattern, which step verifies the expected result?",
    options: ["Arrange", "Act", "Assert", "Apply"],
    answer: "Assert",
  },
  {
    question: "What does code coverage measure?",
    options: [
      "Percentage of bugs fixed",
      "Percentage of code executed by tests",
      "Percentage of UI tested",
      "Percentage of code compiled",
    ],
    answer: "Percentage of code executed by tests",
  },
  {
    question: "In Visual Studio, how do you analyze code coverage?",
    options: [
      "Build > Coverage Report",
      "Test > Analyze Code Coverage",
      "Debug > Run Coverage",
      "View > Code Metrics",
    ],
    answer: "Test > Analyze Code Coverage",
  },
  {
    question: "A block in code coverage refers to:",
    options: [
      "A try-catch block",
      "A single unit of code with one entry and one exit",
      "A class with multiple methods",
      "A loop structure",
    ],
    answer: "A single unit of code with one entry and one exit",
  },
  {
    question: "Code analysis in Visual Studio helps identify:",
    options: [
      "Compiler errors",
      "Potential security, usage, and design issues",
      "Hardware problems",
      "Network errors",
    ],
    answer: "Potential security, usage, and design issues",
  },
  {
    question: "In Visual Studio, which menu runs code analysis?",
    options: [
      "Tools > Code Checker",
      "Debug > Run Analysis",
      "Analyze > Run Code Analysis",
      "Build > Diagnostics",
    ],
    answer: "Analyze > Run Code Analysis",
  },
  {
    question: "Code analysis rules are organized into:",
    options: ["Classes", "Rule sets", "Test attributes", "Assemblies"],
    answer: "Rule sets",
  },
  {
    question: "Which metric measures ease of maintaining code?",
    options: [
      "Cyclomatic Complexity",
      "Maintainability Index",
      "Depth of Inheritance",
      "Class Coupling",
    ],
    answer: "Maintainability Index",
  },
  {
    question: "Which metric measures structural complexity of the code?",
    options: [
      "Depth of Inheritance",
      "Cyclomatic Complexity",
      "Maintainability Index",
      "Class Coupling",
    ],
    answer: "Cyclomatic Complexity",
  },
  {
    question: "A high Depth of Inheritance value generally means:",
    options: [
      "Code is easier to test",
      "Code is more complex",
      "Code has fewer dependencies",
      "Code is faster",
    ],
    answer: "Code is more complex",
  },
  {
    question: "Which metric measures the number of classes referenced?",
    options: [
      "Class Coupling",
      "Cyclomatic Complexity",
      "Maintainability Index",
      "Depth of Inheritance",
    ],
    answer: "Class Coupling",
  },
  {
    question: "Lines of Executable Code refers to:",
    options: [
      "Total lines including comments and blanks",
      "Approximate number of operations/statements",
      "Number of methods per class",
      "Only lines in test methods",
    ],
    answer: "Approximate number of operations/statements",
  },
];

export default UT;
