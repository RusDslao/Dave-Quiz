// Define Science questions
const IS = [
  [
    {
      question: "Which statement best describes a do…while loop?",
      options: [
        "A) Executes only if the condition is true initially.",
        "B) Executes its body at least once, then repeats while the condition is true.",
        "C) Repeats statements a fixed number of times.",
        "D) A conditional operator for two expressions.",
      ],
      answer:
        "B) Executes its body at least once, then repeats while the condition is true.",
    },
    {
      question: "Correct syntax for a do…while loop:",
      options: [
        "A)\ndo {\n    x++;\n    Console.WriteLine(x);\n} while (x <= 10);",
        "B) do (x++); while (x <= 10);",
        "C) while (x <= 10) { x++; Console.WriteLine(x); }",
        "D) do x++; Console.WriteLine(x); while (x <= 10);",
      ],
      answer:
        "A)\ndo {\n    x++;\n    Console.WriteLine(x);\n} while (x <= 10);",
    },
    {
      question: "Guaranteed execution behavior of a do…while loop:",
      options: [
        "A) It may skip its body if the condition is false.",
        "B) Its body executes at least once even if the condition is false.",
        "C) Executes only if the condition is true initially.",
        "D) Requires a break to execute.",
      ],
      answer:
        "B) Its body executes at least once even if the condition is false.",
    },
    {
      question:
        "How many times does this loop execute?\n\nint x = 0;\ndo { x++; } while (x < 3);",
      options: ["A) 2", "B) 3", "C) 4", "D) 0"],
      answer: "B) 3",
    },
    {
      question: "When should you prefer do…while over while?",
      options: [
        "A) When the loop body must run at least once.",
        "B) When the number of iterations is known.",
        "C) When the condition may never be true.",
        "D) When iterating through a collection by index.",
      ],
      answer: "A) When the loop body must run at least once.",
    },
    {
      question: "Which best describes a while loop?",
      options: [
        "A) Executes at least once.",
        "B) Executes while the Boolean expression is true.",
        "C) Repeats a fixed number of times.",
        "D) A jump statement.",
      ],
      answer: "B) Executes while the Boolean expression is true.",
    },
    {
      question: "Correct syntax for a while loop:",
      options: [
        "A)\nint x = 1;\nwhile (x <= 10) {\n    Console.WriteLine(x);\n    x++;\n}",
        "B) while x <= 10 { Console.WriteLine(x); x++; }",
        "C) while (x <= 10); { Console.WriteLine(x); x++; }",
        "D) while (x <= 10) Console.WriteLine(x); x++;",
      ],
      answer:
        "A)\nint x = 1;\nwhile (x <= 10) {\n    Console.WriteLine(x);\n    x++;\n}",
    },
    {
      question: "When does a while loop check its condition?",
      options: [
        "A) After the first iteration",
        "B) Before each iteration",
        "C) Only at the end",
        "D) After a fixed number of iterations",
      ],
      answer: "B) Before each iteration",
    },
    {
      question:
        "Output of:\n\nint x = 1;\nwhile (x <= 3) { Console.WriteLine(x); x++; }",
      options: ["A) 0 1 2", "B) 1 2 3", "C) 1 2", "D) 2 3 4"],
      answer: "B) 1 2 3",
    },
    {
      question: "When should you prefer while over do…while?",
      options: [
        "A) Loop must execute at least once",
        "B) Test the condition before running the body",
        "C) Number of iterations is known",
        "D) Iterating through a collection",
      ],
      answer: "B) Test the condition before running the body",
    },
    {
      question: "Which best describes a for loop?",
      options: [
        "A) Runs exactly 10 times",
        "B) Runs repeatedly while a condition is true",
        "C) Runs at least once",
        "D) A jump statement",
      ],
      answer: "B) Runs repeatedly while a condition is true",
    },
    {
      question: "Correct syntax for printing 1 to 10 using for:",
      options: [
        "A) for (int i = 1; i <= 10; i++) { Console.WriteLine(i); }",
        "B) for i = 1; i <= 10; i++ { Console.WriteLine(i); }",
        "C) for (int i = 1; i <= 10; i++); Console.WriteLine(i);",
        "D) int i = 1; for (i <= 10; i++) { Console.WriteLine(i); }",
      ],
      answer: "A) for (int i = 1; i <= 10; i++) { Console.WriteLine(i); }",
    },
    {
      question: "Main components of a for loop:",
      options: [
        "A) Initialization, condition, increment",
        "B) Declaration, body, termination",
        "C) Input, process, output",
        "D) Assignment, check, return",
      ],
      answer: "A) Initialization, condition, increment",
    },
    {
      question:
        "Output of:\n\nfor (int i = 1; i <= 3; i++) { Console.WriteLine(i); }",
      options: ["A) 0 1 2", "B) 1 2 3", "C) 1 2", "D) 2 3 4"],
      answer: "B) 1 2 3",
    },
    {
      question: "When is for preferred over while?",
      options: [
        "A) Unknown iterations",
        "B) Fixed number of iterations, often with an index",
        "C) Body must execute at least once",
        "D) Iterating through collection without index",
      ],
      answer: "B) Fixed number of iterations, often with an index",
    },
    {
      question: "Best description of foreach:",
      options: [
        "A) Runs while a Boolean is true",
        "B) Iterates through each element of a collection",
        "C) Must run at least once",
        "D) Only for numeric ranges",
      ],
      answer: "B) Iterates through each element of a collection",
    },
    {
      question: "Correct syntax for iterating an array:",
      options: [
        "A) foreach (int element in array) { Console.WriteLine(element); }",
        "B) for (int element in array) { Console.WriteLine(element); }",
        "C) foreach element in array { Console.WriteLine(element); }",
        "D) foreach (int element : array) { Console.WriteLine(element); }",
      ],
      answer:
        "A) foreach (int element in array) { Console.WriteLine(element); }",
    },
    {
      question: "When prefer foreach over for?",
      options: [
        "A) Modify collection while iterating",
        "B) Need an index for every element",
        "C) Simply read elements without indexes",
        "D) Known number of iterations",
      ],
      answer: "C) Simply read elements without indexes",
    },
    {
      question:
        'Output of:\n\nint[] nums = {1, 3, 5};\nforeach (int n in nums) { Console.Write(n + " "); }',
      options: ["A) 1 3 5", "B) 0 1 2", "C) 1 2 3", "D) 5 3 1"],
      answer: "A) 1 3 5",
    },
    {
      question: "Restriction in foreach:",
      options: [
        "A) Can modify array elements directly",
        "B) Cannot change the iteration variable inside the loop",
        "C) Cannot use on arrays",
        "D) Requires total number of elements",
      ],
      answer: "B) Cannot change the iteration variable inside the loop",
    },
    {
      question: "What does break do?",
      options: [
        "A) Exits only if block",
        "B) Terminates the closest enclosing loop or switch",
        "C) Skips current iteration",
        "D) Ends program",
      ],
      answer: "B) Terminates the closest enclosing loop or switch",
    },
    {
      question: "What does continue do?",
      options: [
        "A) Terminates program",
        "B) Passes control to next iteration of current loop",
        "C) Exits current loop entirely",
        "D) Repeats current iteration",
      ],
      answer: "B) Passes control to next iteration of current loop",
    },
    {
      question: "Why use break in a switch?",
      options: [
        "A) Skip to next case",
        "B) Exit switch after executing case",
        "C) Terminate program",
        "D) Pause execution",
      ],
      answer: "B) Exit switch after executing case",
    },
    {
      question:
        'Output using continue:\n\nfor (int i = 1; i <= 5; i++) {\n    if (i == 3) continue;\n    Console.Write(i + " ");\n}',
      options: ["A) 1 2 3 4 5", "B) 1 2 4 5", "C) 3 4 5", "D) 1 2"],
      answer: "B) 1 2 4 5",
    },
    {
      question:
        'Output using break:\n\nint i = 1;\nwhile (i <= 5) {\n    if (i == 4) break;\n    Console.Write(i + " ");\n    i++;\n}',
      options: ["A) 1 2 3", "B) 1 2 3 4 5", "C) 4 5", "D) No output"],
      answer: "A) 1 2 3",
    },
  ],
];
export default IS;
