const SS = [
  {
    question:
      "Which of the following is the correct syntax for an if…else statement in C#?",
    options: [
      "A) if (condition)\n    then-statement;\nelse\n    else-statement;",
      "B) if condition then\n    statement;\nelse\n    statement;",
      "C) if (condition)\n{\n    then-statement;\n}\nelse\n{\n    else-statement;\n}",
      "D) Both A and C are correct.",
    ],
    answer: "D) Both A and C are correct.",
  },
  {
    question:
      "Which of the following shows the correct way to write a switch statement in C#?",
    options: [
      'A) int caseSwitch = 1;\nswitch (caseSwitch)\n{\n    case 1:\n        Console.WriteLine("Case 1");\n        break;\n    case 2:\n        Console.WriteLine("Case 2");\n        break;\n    default:\n        Console.WriteLine("Default case");\n        break;\n}',
      'B) int caseSwitch = 1;\nswitch caseSwitch\n{\n    case 1:\n        Console.WriteLine("Case 1");\n        break;\n    case 2:\n        Console.WriteLine("Case 2");\n        break;\n    default:\n        Console.WriteLine("Default case");\n        break;\n}',
      'C) int caseSwitch = 1;\nswitch (caseSwitch)\n    case 1: Console.WriteLine("Case 1");\n    break;\n    case 2: Console.WriteLine("Case 2");\n    break;\n    default: Console.WriteLine("Default case");\n    break;',
      "D) Both A and C are correct.",
    ],
    answer:
      'A) int caseSwitch = 1;\nswitch (caseSwitch)\n{\n    case 1:\n        Console.WriteLine("Case 1");\n        break;\n    case 2:\n        Console.WriteLine("Case 2");\n        break;\n    default:\n        Console.WriteLine("Default case");\n        break;\n}',
  },
  {
    question:
      "Which of the following correctly uses the ternary conditional operator in C#?",
    options: [
      'A) int age = 18;\nstring result = age >= 18 ? "Adult" : "Minor";',
      'B) int age = 18;\nstring result = age >= 18 : "Adult" ? "Minor";',
      'C) int age = 18;\nstring result = ? age >= 18 "Adult" : "Minor";',
      "D) Both A and B are correct.",
    ],
    answer: 'A) int age = 18;\nstring result = age >= 18 ? "Adult" : "Minor";',
  },
  {
    question: "Which of the following best defines an if statement in C#?",
    options: [
      "A) A loop that repeats code while a condition is true.",
      "B) A statement that decides which code block to execute based on a Boolean condition.",
      "C) A keyword used to declare a variable.",
      "D) A jump statement that ends program execution.",
    ],
    answer:
      "B) A statement that decides which code block to execute based on a Boolean condition.",
  },
  {
    question: "What is the purpose of an if…else if…else chain?",
    options: [
      "A) To execute multiple code blocks in parallel.",
      "B) To choose exactly one block to execute from several conditions.",
      "C) To repeatedly execute a statement until a condition becomes false.",
      "D) To declare several variables of the same type.",
    ],
    answer:
      "B) To choose exactly one block to execute from several conditions.",
  },
  {
    question: "Which statement correctly describes a switch in C#?",
    options: [
      "A) A selection statement that chooses one block of code to run based on the value of an expression.",
      "B) A command used only for Boolean values.",
      "C) A loop that continues while the case value is true.",
      "D) A keyword for exiting a method.",
    ],
    answer:
      "A) A selection statement that chooses one block of code to run based on the value of an expression.",
  },
  {
    question: "What does the default label in a C# switch statement represent?",
    options: [
      "A) The first case to execute.",
      "B) A section that runs if no case matches the expression.",
      "C) A command for declaring a new variable.",
      "D) A statement that repeats all previous cases.",
    ],
    answer: "B) A section that runs if no case matches the expression.",
  },
  {
    question:
      "Which of the following defines the ternary conditional operator in C#?",
    options: [
      "A) A special syntax for looping through collections.",
      "B) A compact selection operator that evaluates a Boolean expression and returns one of two values.",
      "C) A statement used to declare constant values.",
      "D) A reserved word for handling errors.",
    ],
    answer:
      "B) A compact selection operator that evaluates a Boolean expression and returns one of two values.",
  },
];
export default SS;
