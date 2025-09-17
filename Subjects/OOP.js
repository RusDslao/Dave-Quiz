const OOP = [
  {
    question:
      'What will be the output of the following C# code?\n\nclass Base {\n    public virtual void Show() { Console.WriteLine("Base"); }\n}\nclass Derived : Base {\n    public override void Show() { Console.WriteLine("Derived"); }\n}\nBase obj = new Derived();\nobj.Show();',
    options: ["Base", "Derived", "Error: cannot override", "No output"],
    answer: "Derived",
  },
  {
    question:
      "Which keyword is required in the base class to allow a derived class to override a method?",
    options: ["abstract", "override", "virtual", "protected"],
    answer: "virtual",
  },
  {
    question:
      'What is the result of this C# code?\n\nclass Animal {\n    public void Speak() { Console.WriteLine("Animal speaks"); }\n}\nclass Dog : Animal {\n    public void Speak() { Console.WriteLine("Dog barks"); }\n}\nDog d = new Dog();\nd.Speak();',
    options: [
      "Animal speaks",
      "Dog barks",
      "Compiler error",
      "Both messages printed",
    ],
    answer: "Dog barks",
  },
  {
    question:
      'Given the following class, which statement is correct?\n\nclass Car {\n    protected string brand = "Ford";\n}\nclass Mustang : Car {\n    public void ShowBrand() {\n        Console.WriteLine(brand);\n    }\n}',
    options: [
      "brand cannot be accessed in Mustang",
      "brand is accessible because it’s protected",
      "brand is private by default",
      "Code won’t compile",
    ],
    answer: "brand is accessible because it’s protected",
  },
  {
    question:
      'What does this code demonstrate?\n\nabstract class Shape {\n    public abstract void Draw();\n}\nclass Circle : Shape {\n    public override void Draw() {\n        Console.WriteLine("Drawing Circle");\n    }\n}',
    options: [
      "Composition",
      "Polymorphism via abstraction",
      "Aggregation",
      "Data hiding",
    ],
    answer: "Polymorphism via abstraction",
  },
  {
    question: "Which of the following correctly declares a constructor in C#?",
    options: [
      "void Car() { }",
      "Car() { }",
      "public void Car() { }",
      "constructor Car() { }",
    ],
    answer: "Car() { }",
  },
  {
    question:
      "What will happen when deleting a parent object in a Composition relationship?",
    options: [
      "Child objects remain in memory",
      "Child objects are also destroyed",
      "Nothing happens",
      "Compilation error",
    ],
    answer: "Child objects are also destroyed",
  },
  {
    question:
      "Which of the following is NOT one of the four primary pillars of OOP in C#?",
    options: ["Encapsulation", "Inheritance", "Compilation", "Polymorphism"],
    answer: "Compilation",
  },
  {
    question: "What does Encapsulation mainly provide in C#?",
    options: [
      "Faster execution",
      "Data hiding and abstraction",
      "Only inheritance",
      "Automatic polymorphism",
    ],
    answer: "Data hiding and abstraction",
  },
  {
    question: "Abstraction in C# is achieved through:",
    options: [
      "Abstract classes and interfaces",
      "Only methods",
      "Constructors",
      "Properties",
    ],
    answer: "Abstract classes and interfaces",
  },
  {
    question:
      "Which OOP principle allows one class to reuse and extend another class’s behavior?",
    options: ["Abstraction", "Inheritance", "Polymorphism", "Aggregation"],
    answer: "Inheritance",
  },
  {
    question: "The protected keyword in C# means a member is accessible:",
    options: [
      "Only within the same assembly",
      "Anywhere in the solution",
      "Inside its class and derived classes",
      "Only from external projects",
    ],
    answer: "Inside its class and derived classes",
  },
  {
    question: "Polymorphism in OOP is best described as:",
    options: [
      "The ability to store data securely",
      "The ability of objects to take many forms",
      "The process of creating new classes",
      "The act of hiding implementation details",
    ],
    answer: "The ability of objects to take many forms",
  },
  {
    question: "Which of the following statements about overriding is TRUE?",
    options: [
      "Only private methods can be overridden",
      "A derived class can override a base class’s virtual method",
      "Constructors are always overridden",
      "Static methods are automatically virtual",
    ],
    answer: "A derived class can override a base class’s virtual method",
  },
  {
    question: "Object Composition means:",
    options: [
      "Grouping similar data types",
      "Creating child objects that depend on a parent object’s lifecycle",
      "Creating multiple base classes",
      "Using inheritance for behavior sharing",
    ],
    answer: "Creating child objects that depend on a parent object’s lifecycle",
  },
  {
    question:
      "Which of the following is a specialized form of Association that has ownership, but children can exist independently?",
    options: ["Inheritance", "Aggregation", "Composition", "Encapsulation"],
    answer: "Aggregation",
  },
  {
    question:
      "If a parent object is deleted and its child objects are also deleted, this is called:",
    options: ["Association", "Aggregation", "Composition", "Polymorphism"],
    answer: "Composition",
  },
  {
    question: "In OOP, an object is:",
    options: [
      "A single variable",
      "An instance of a class",
      "An abstract method",
      "A reference to an interface only",
    ],
    answer: "An instance of a class",
  },
  {
    question: "Which of these access modifiers hides data the most strictly?",
    options: ["Public", "Protected", "Private", "Internal"],
    answer: "Private",
  },
  {
    question: "The term “well-defined interfaces” in encapsulation refers to:",
    options: [
      "Complex inheritance chains",
      "Controlled ways for objects to communicate",
      "Direct field access",
      "Inline comments",
    ],
    answer: "Controlled ways for objects to communicate",
  },
];

export default OOP;
