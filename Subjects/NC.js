const NC = [
  {
    question: "What is the purpose of the null-forgiving operator (!) in C#?",
    options: [
      "To throw an exception when a value is null",
      "To suppress nullable warnings at compile time",
      "To replace null with a default value",
      "To remove null values at runtime",
    ],
    answer: "To suppress nullable warnings at compile time",
  },
  {
    question: "Which statement about the null-forgiving operator is TRUE?",
    options: [
      "It changes runtime behavior",
      "It affects only the compiler’s static flow analysis",
      "It prevents NullReferenceException at runtime",
      "It can only be applied to value types",
    ],
    answer: "It affects only the compiler’s static flow analysis",
  },
  {
    question: "How do you check if a variable is null using pattern matching?",
    options: [
      "if (value == null)",
      "if (value is null)",
      "if (value equals null)",
      "if (null in value)",
    ],
    answer: "if (value is null)",
  },
  {
    question:
      "Which operator returns the left-hand operand if it isn’t null, otherwise the right-hand operand?",
    options: ["?:", "??", "?.", "??="],
    answer: "??",
  },
  {
    question: "What is the difference between ?? and ??= operators?",
    options: [
      "?? assigns a value if null, ??= throws an exception",
      "?? returns a value, ??= assigns a value if null",
      "?? is for strings only, ??= is for numbers",
      "They are interchangeable",
    ],
    answer: "?? returns a value, ??= assigns a value if null",
  },
  {
    question:
      "Which of the following correctly uses the null-conditional operator (?.)?",
    options: [
      "if (value.Property = null)",
      "if (value?.Property == null)",
      "if (value:Property == null)",
      "if value?Property == null",
    ],
    answer: "if (value?.Property == null)",
  },
  {
    question:
      'What will this code print?\n\nstring? name = null;\nConsole.WriteLine(name ?? "Unknown");',
    options: ["null", "Unknown", "Throws exception", "Empty string"],
    answer: "Unknown",
  },
  {
    question:
      "What is the effect of the null-forgiving operator in this code?\n\nstring? message = GetMessage();\nConsole.WriteLine(message!.Length);",
    options: [
      "It guarantees message isn’t null at runtime",
      "It suppresses warnings, but a NullReferenceException may occur",
      "It converts message to a non-nullable string at runtime",
      "It replaces null with string.Empty",
    ],
    answer: "It suppresses warnings, but a NullReferenceException may occur",
  },
  {
    question:
      "What will happen here?\n\nint? num = null;\nnum ??= 50;\nConsole.WriteLine(num);",
    options: ["null", "0", "50", "Throws exception"],
    answer: "50",
  },
  {
    question:
      "Which statement correctly handles a possible null reference?\n\nPerson? p = GetPerson();\nif (p?.Name != null)\n{\n    Console.WriteLine(p.Name);\n}",
    options: [
      "Uses the null-forgiving operator",
      "Uses a null-conditional operator to safely access Name",
      "Incorrect syntax",
      "Will throw NullReferenceException always",
    ],
    answer: "Uses a null-conditional operator to safely access Name",
  },
];

export default NC;
