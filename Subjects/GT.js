const GT = [
  {
    question: "What is the main purpose of Generics in C#?",
    options: [
      "To store only integers",
      "To allow type parameters for classes, methods, and interfaces",
      "To speed up compilation",
      "To automatically implement interfaces",
    ],
    answer: "To allow type parameters for classes, methods, and interfaces",
  },
  {
    question:
      "Which of the following correctly declares a generic class in C#?",
    options: [
      "class GenericClass { }",
      "class GenericClass<T> { }",
      "generic class GenericClass { }",
      "class<T> GenericClass { }",
    ],
    answer: "class GenericClass<T> { }",
  },
  {
    question:
      "How do you instantiate a generic class GenericClass<T> with an int type?",
    options: [
      "GenericClass generic = new GenericClass<int>();",
      "GenericClass<int> generic = new GenericClass<int>();",
      "GenericClass<int> generic = new GenericClass();",
      "GenericClass generic = new GenericClass();",
    ],
    answer: "GenericClass<int> generic = new GenericClass<int>();",
  },
  {
    question: "Which statement is TRUE about generic methods in C#?",
    options: [
      "They can only return void",
      "They can use a type parameter as the return type",
      "They must be declared inside a generic class",
      "They cannot take parameters",
    ],
    answer: "They can use a type parameter as the return type",
  },
  {
    question:
      'What is the output of this code?\n\nclass GenericClass<T>\n{\n    public T Value;\n}\n\nvar obj = new GenericClass<string>();\nobj.Value = "Hello";\nConsole.WriteLine(obj.Value);',
    options: ["T", "string", "Hello", "Compilation error"],
    answer: "Hello",
  },
];

export default GT;
