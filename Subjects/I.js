const IS = [
  {
    question: "Which of the following best describes an interface in C#?",
    options: [
      "A complete implementation of functionality",
      "A contract defining related members",
      "A base class for inheritance only",
      "A data type for storing variables",
    ],
    answer: "A contract defining related members",
  },
  {
    question:
      "Can an interface in C# contain implementation code for its methods?",
    options: [
      "Yes, always",
      "No, interfaces only contain definitions",
      "Only if marked virtual",
      "Only in structs",
    ],
    answer: "No, interfaces only contain definitions",
  },
  {
    question:
      "Which of these is TRUE about classes implementing interfaces in C#?",
    options: [
      "A class must implement all members of an interface",
      "A class can skip optional methods",
      "Only abstract classes can implement interfaces",
      "A class can inherit only one interface",
    ],
    answer: "A class must implement all members of an interface",
  },
  {
    question: "What happens if you try to instantiate an interface directly?",
    options: [
      "It compiles but returns null",
      "It throws a runtime exception",
      "It is not allowed; interfaces cannot be instantiated",
      "It behaves like an abstract class",
    ],
    answer: "It is not allowed; interfaces cannot be instantiated",
  },
  {
    question: "Which of the following can an interface in C# contain?",
    options: [
      "Methods, events, indexers, and properties",
      "Fields and constructors",
      "Only constants",
      "Private member variables",
    ],
    answer: "Methods, events, indexers, and properties",
  },
  {
    question:
      "What is the correct syntax for a class implementing an interface?",
    options: [
      "class MyClass implements IMyInterface { }",
      "class MyClass : IMyInterface { }",
      "class MyClass inherits IMyInterface { }",
      "class MyClass -> IMyInterface { }",
    ],
    answer: "class MyClass : IMyInterface { }",
  },
  {
    question:
      "Consider the code below. What is required to make it compile successfully?\n\ninterface IPrinter\n{\n    void Print();\n}\n\nclass LaserPrinter : IPrinter\n{\n    // ??? \n}",
    options: [
      "Add a field named Print",
      "Declare Print() as virtual in IPrinter",
      "Implement the Print() method in LaserPrinter",
      "Nothing, it will compile as-is",
    ],
    answer: "Implement the Print() method in LaserPrinter",
  },
];

export default IS;
