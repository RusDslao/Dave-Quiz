const TC = [
  {
    question: "What is an implicit conversion in C#?",
    options: [
      "A conversion requiring a cast operator",
      "A type-safe conversion with no data loss",
      "A conversion that always loses data",
      "A runtime-only conversion",
    ],
    answer: "A type-safe conversion with no data loss",
  },
  {
    question: "Which of the following is an example of an implicit conversion?",
    options: [
      "double d = (double)5;",
      "int i = 5; long l = i;",
      "float f = (float)l;",
      "Derived d = (Derived)baseObj;",
    ],
    answer: "int i = 5; long l = i;",
  },
  {
    question: "When is an explicit conversion required?",
    options: [
      "When converting from smaller to larger integral types",
      "When converting from a derived type to a base type",
      "When information might be lost or the conversion might fail",
      "When assigning a constant",
    ],
    answer: "When information might be lost or the conversion might fail",
  },
  {
    question: "Which operator performs explicit type casting in C#?",
    options: ["as", "is", "( )", "->"],
    answer: "( )",
  },
  {
    question: "What does the as operator return if a conversion fails?",
    options: ["Throws an exception", "null", "false", "Zero"],
    answer: "null",
  },
  {
    question: "Which statement about the as operator is TRUE?",
    options: [
      "It works with value types directly",
      "It returns null for incompatible reference conversions",
      "It always throws an exception",
      "It only works with string",
    ],
    answer: "It returns null for incompatible reference conversions",
  },
  {
    question: "What does the is operator do?",
    options: [
      "Converts one type into another",
      "Checks type compatibility at runtime",
      "Casts values implicitly",
      "Boxes a value type",
    ],
    answer: "Checks type compatibility at runtime",
  },
  {
    question: "Which of the following about boxing is TRUE?",
    options: [
      "It’s an explicit conversion",
      "It converts a value type to object",
      "It converts an object to a value type",
      "It works only with reference types",
    ],
    answer: "It converts a value type to object",
  },
  {
    question: "Unboxing in C# is:",
    options: [
      "An implicit conversion from object to value type",
      "An explicit conversion from object to value type",
      "A cast between two value types",
      "A reference type conversion",
    ],
    answer: "An explicit conversion from object to value type",
  },
  {
    question: "Which operation may throw an InvalidCastException?",
    options: [
      "Boxing",
      "Implicit conversion",
      "Unboxing when the object isn’t the correct value type",
      "Using as with a reference type",
    ],
    answer: "Unboxing when the object isn’t the correct value type",
  },
  {
    question: "What happens if you use as with a value type?",
    options: [
      "It works like is",
      "It’s not allowed",
      "It returns zero",
      "It throws an exception at runtime",
    ],
    answer: "It’s not allowed",
  },
  {
    question: "What does boxing actually store on the heap?",
    options: [
      "A copy of the value type",
      "A reference to the stack",
      "A pointer to a method",
      "Nothing",
    ],
    answer: "A copy of the value type",
  },
  {
    question:
      "What is the output of this code?\n\nint x = 42;\nobject obj = x;    // boxing\nint y = (int)obj;  // unboxing\nConsole.WriteLine(y);",
    options: ["0", "42", "Error at runtime", "Null"],
    answer: "42",
  },
  {
    question: "Which of these conversions requires explicit casting?",
    options: [
      "int -> long",
      "float -> double",
      "double -> int",
      "byte -> short",
    ],
    answer: "double -> int",
  },
  {
    question:
      "What is the result of the following?\n\nBaseClass b = new BaseClass();\nDerived d = b as Derived;\nConsole.WriteLine(d == null);",
    options: ["True", "False", "Throws exception", "Prints nothing"],
    answer: "True",
  },
  {
    question:
      "Which line safely checks compatibility before casting?\n\nif (obj ____ Derived)\n{\n    Derived d = (Derived)obj;\n}",
    options: ["as", "==", "is", "typeof"],
    answer: "is",
  },
  {
    question: 'What happens here?\n\nobject o = "Hello";\nint i = (int)o;',
    options: [
      "Prints 0",
      "Throws InvalidCastException",
      "Converts to int value",
      "Returns null",
    ],
    answer: "Throws InvalidCastException",
  },
  {
    question: "Identify the implicit conversion:\n\nbyte b = 10;\nint i = b;",
    options: ["Implicit", "Explicit", "Boxing", "Unboxing"],
    answer: "Implicit",
  },
  {
    question:
      "What is the output of this code?\n\nobject obj = 123; // boxing\nConsole.WriteLine(obj.GetType());",
    options: ["System.Object", "System.Int32", "System.ValueType", "int"],
    answer: "System.Int32",
  },
  {
    question: "Which statement about boxing and unboxing is correct?",
    options: [
      "Unboxing is implicit",
      "Boxing is explicit",
      "Boxing is implicit and unboxing is explicit",
      "Both require a cast",
    ],
    answer: "Boxing is implicit and unboxing is explicit",
  },
];

export default TC;
