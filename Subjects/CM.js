const CM = [
  {
    question: "Which of the following is TRUE about abstract classes in C#?",
    options: [
      "They can be instantiated directly",
      "They may contain abstract or fully implemented members",
      "They cannot contain constructors",
      "They must contain only abstract members",
    ],
    answer: "They may contain abstract or fully implemented members",
  },
  {
    question: "What keyword is used to declare an abstract class in C#?",
    options: ["virtual", "interface", "abstract", "sealed"],
    answer: "abstract",
  },
  {
    question: "Which statement is correct about abstract methods?",
    options: [
      "They can have implementation inside the abstract class",
      "They must be declared only inside abstract classes",
      "They can be static",
      "They cannot be overridden",
    ],
    answer: "They must be declared only inside abstract classes",
  },
  {
    question: "An abstract method is implicitly:",
    options: ["private", "sealed", "virtual", "static"],
    answer: "virtual",
  },
  {
    question: "Which of the following is NOT allowed in an abstract class?",
    options: [
      "Abstract methods",
      "Fields and properties",
      "Instantiating it directly",
      "Declaring constructors",
    ],
    answer: "Instantiating it directly",
  },
  {
    question: "Which keyword is used to prevent inheritance of a class?",
    options: ["abstract", "sealed", "readonly", "const"],
    answer: "sealed",
  },
  {
    question: "What is TRUE about sealed methods in C#?",
    options: [
      "They cannot be called",
      "They prevent further overriding",
      "They can only exist in sealed classes",
      "They cannot be declared as virtual",
    ],
    answer: "They prevent further overriding",
  },
  {
    question:
      "Which of these is TRUE about structs in C# regarding inheritance?",
    options: [
      "They can inherit from other structs",
      "They can inherit from classes",
      "They are implicitly sealed",
      "They behave like abstract classes",
    ],
    answer: "They are implicitly sealed",
  },
  {
    question: "What is a partial class in C#?",
    options: [
      "A class with incomplete implementation",
      "A class whose definition is split across multiple files",
      "A sealed class",
      "An interface with partial methods",
    ],
    answer: "A class whose definition is split across multiple files",
  },
  {
    question: "Which of the following is TRUE about partial methods?",
    options: [
      "They must always have an implementation",
      "They allow a declaration and an optional implementation",
      "They can be public or protected",
      "They are automatically virtual",
    ],
    answer: "They allow a declaration and an optional implementation",
  },
  {
    question: "Can an abstract class contain non-abstract methods?",
    options: [
      "No, only abstract members are allowed",
      "Yes, it can contain both abstract and concrete methods",
      "Yes, but only if they are static",
      "Only if the class is sealed",
    ],
    answer: "Yes, it can contain both abstract and concrete methods",
  },
  {
    question: "Which access modifier is allowed for abstract methods?",
    options: ["private", "internal", "public or protected", "static"],
    answer: "public or protected",
  },
  {
    question:
      "What happens if a derived class doesn’t implement an abstract method?",
    options: [
      "Compilation error",
      "Runtime exception",
      "The method becomes sealed",
      "The method is ignored",
    ],
    answer: "Compilation error",
  },
  {
    question: "Why might you use a sealed class?",
    options: [
      "To allow inheritance freely",
      "To stop other classes from inheriting",
      "To allow partial declarations",
      "To enable abstract members",
    ],
    answer: "To stop other classes from inheriting",
  },
  {
    question:
      "Which of the following statements about partial classes is FALSE?",
    options: [
      "They allow a class to be split across files",
      "All parts must use the partial keyword",
      "They can be instantiated without combining all parts",
      "They must be combined by the compiler at build time",
    ],
    answer: "They can be instantiated without combining all parts",
  },
  {
    question:
      'What is the error in this code?\n\nabstract class Test\n{\n    public abstract void Show() { Console.WriteLine("Hi"); }\n}',
    options: [
      "No error",
      "Abstract methods cannot have a body",
      "Missing constructor",
      "Show() must be sealed",
    ],
    answer: "Abstract methods cannot have a body",
  },
  {
    question:
      'What is the output of this code?\n\nabstract class Base\n{\n    public abstract void Print();\n}\n\nclass Derived : Base\n{\n    public override void Print() { Console.WriteLine("Derived"); }\n}\n\nBase obj = new Derived();\nobj.Print();',
    options: ["Base", "Derived", "No output", "Compilation error"],
    answer: "Derived",
  },
  {
    question:
      "Which line correctly prevents further overriding of a method?\n\npublic class A\n{\n    public virtual void Run() { }\n}\npublic class B : A\n{\n    public sealed override void Run() { }\n}",
    options: [
      "public override void Run()",
      "public sealed override void Run()",
      "public sealed virtual void Run()",
      "sealed void Run()",
    ],
    answer: "public sealed override void Run()",
  },
  {
    question:
      "Given the following, which statement is valid?\n\npublic sealed class Alpha\n{\n    public void Show() { }\n}",
    options: [
      "class Beta : Alpha { } // valid",
      "Alpha obj = new Alpha();",
      "sealed Alpha obj = new Alpha();",
      "Alpha cannot be instantiated",
    ],
    answer: "Alpha obj = new Alpha();",
  },
  {
    question: "What will happen if you try to inherit from a sealed class?",
    options: [
      "It compiles successfully",
      "Compilation error",
      "Runtime warning",
      "Creates an abstract class automatically",
    ],
    answer: "Compilation error",
  },
  {
    question:
      "Which keyword must be included for the following to work across two files?\n\n// File1.cs\npartial class Person { void A() { } }\n\n// File2.cs\nclass Person { void B() { } }",
    options: ["abstract", "sealed", "partial", "static"],
    answer: "partial",
  },
  {
    question: "Which of these is a valid partial method declaration?",
    options: [
      "partial void Log();",
      "public partial void Log();",
      "partial static void Log()",
      "void partial Log();",
    ],
    answer: "partial void Log();",
  },
  {
    question:
      "What will the compiler do if a partial method is declared but not implemented?",
    options: [
      "Throw a runtime exception",
      "Remove the declaration",
      "Warn the user",
      "Automatically implement it as empty",
    ],
    answer: "Remove the declaration",
  },
  {
    question: "Which of the following is TRUE about partial methods?",
    options: [
      "They can be public or protected",
      "They are always compiled even if not implemented",
      "They must be private and return void",
      "They support access modifiers",
    ],
    answer: "They must be private and return void",
  },
  {
    question:
      'What is the output of this code?\n\nabstract class A\n{\n    public abstract void Show();\n    public void Display() { Console.WriteLine("Display"); }\n}\n\nclass B : A\n{\n    public override void Show() { Console.WriteLine("Show"); }\n}\n\nB obj = new B();\nobj.Display();\nobj.Show();',
    options: ["Display", "Show", "Display\nShow", "Compilation error"],
    answer: "Display\nShow",
  },
];
export default CM;
