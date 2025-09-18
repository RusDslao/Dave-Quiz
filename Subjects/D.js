const D = [
  {
    question: "What is a delegate in C#?",
    options: [
      "A variable storing integers",
      "A type representing references to methods with a specific signature",
      "A class for database access",
      "A keyword for anonymous types",
    ],
    answer:
      "A type representing references to methods with a specific signature",
  },
  {
    question: "Which of the following is valid delegate declaration?",
    options: [
      "delegate void MyDelegate(int a, int b);",
      "delegate MyDelegate(int a, int b);",
      "delegate void MyDelegate();",
      "The A and C is Correct",
    ],
    answer: "The A and C is Correct",
  },
  {
    question: "What is multicast delegate?",
    options: [
      "Delegate pointing to a single method only",
      "Delegate that can invoke multiple methods in order",
      "Delegate with no return type",
      "Delegate used only in LINQ",
    ],
    answer: "Delegate that can invoke multiple methods in order",
  },
  {
    question: "Which operator is used to combine delegates?",
    options: ["*", "+", "+=", "->"],
    answer: "+=",
  },
  {
    question: "What is a lambda expression in C#?",
    options: [
      "A way to create a delegate inline with concise syntax",
      "A database query tool",
      "A type of array",
      "A class constructor",
    ],
    answer: "A way to create a delegate inline with concise syntax",
  },
  {
    question:
      "Assign a method to a delegate:\ndelegate int MyDelegate(int x, int y);\npublic static int Multiply(int x, int y) => x * y;\n\nMyDelegate d = ???; Which line correctly assigns the method Multiply to the delegate?",
    options: [
      "MyDelegate d = Multiply();",
      "MyDelegate d = new MyDelegate(Multiply);",
      "MyDelegate d = delegate Multiply;",
      "MyDelegate d = (x, y) => Multiply;",
    ],
    answer: "MyDelegate d = new MyDelegate(Multiply);",
  },
  {
    question:
      "Invoke a delegate:\nMyDelegate d = new MyDelegate(Multiply);\nint result = ???; Which is correct?",
    options: [
      "result = d(5, 3);",
      "result = d.Invoke(5, 3);",
      "Both A and B",
      "None",
    ],
    answer: "Both A and B",
  },
  {
    question:
      "Create a lambda expression equivalent to Add:\ndelegate int MyDelegate(int a, int b); Which is correct?",
    options: [
      "MyDelegate d = (a, b) => a + b;",
      "MyDelegate d = (a, b) -> a + b;",
      "MyDelegate d = a + b;",
      "MyDelegate d = { return a + b; }",
    ],
    answer: "MyDelegate d = (a, b) => a + b;",
  },
  {
    question:
      "Combine two methods into a multicast delegate:\nMyDelegate d = new MyDelegate(Add);\n??? Which line will combine Subtract with the existing delegate?",
    options: [
      "d + Subtract;",
      "d += Subtract;",
      "d = Subtract;",
      "d.Invoke(Subtract);",
    ],
    answer: "d += Subtract;",
  },
  {
    question:
      "What does this code output?\nMyDelegate d = (a, b) => a + b;\nd += (a, b) => a - b;\nConsole.WriteLine(d(5, 2));",
    options: ["3", "7", "Error", "2"],
    answer: "7",
  },
  {
    question:
      "Multicast Delegate Return Value:\ndelegate int MyDelegate(int x, int y);\nstatic int Add(int a, int b) => a + b;\nstatic int Subtract(int a, int b) => a - b;\n\nMyDelegate d = Add;\nd += Subtract;\nint result = d(10, 5);\nConsole.WriteLine(result); What will be printed?",
    options: ["15", "5", "10", "Compilation error"],
    answer: "5",
  },
  {
    question:
      "Delegate Signature Mismatch:\ndelegate int MyDelegate(int x, int y);\nstatic void PrintSum(int a, int b) => Console.WriteLine(a + b);\nMyDelegate d = PrintSum; What happens here?",
    options: [
      "Compiles and runs correctly",
      "Runtime error",
      "Compile-time error",
      "Output is 0",
    ],
    answer: "Compile-time error",
  },
  {
    question:
      "Lambda with Statement Body:\nMyDelegate d = (a, b) => { a + b; };\nint result = d(3, 4); What is the result?",
    options: ["7", "0", "Compile-time error", "3"],
    answer: "Compile-time error",
  },
  {
    question:
      "Removing a Method from Multicast:\nMyDelegate d = Add;\nd += Subtract;\nd -= Add;\nint result = d(8, 3); What will result be?",
    options: ["11", "5", "8", "Compile-time error"],
    answer: "5",
  },
  {
    question:
      "Null Delegate Invocation:\nMyDelegate d = null;\nint result = d(2, 3); What happens?",
    options: [
      "Returns 5",
      "Returns 0",
      "Runtime exception",
      "Nothing, safely ignored",
    ],
    answer: "Runtime exception",
  },
];

export default D;
