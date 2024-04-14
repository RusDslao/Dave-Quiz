// Define Science questions
const WST = [
  {
    question: "A responsive web design ensures that the website is accessible and visible no matter what device is used.",
    options: [
      "CSS Grid Layout",
      "CSS Grid",
      "Media Queries",
      "Breakpoint"
    ],
    answer: "CSS Grid Layout"
  },
  {
    question: "A modern solution for creating flexible layouts that work correctly on different screen sizes as it organizes content into two (2) dimensions: rows and columns.",
    options: [
      "CSS Grid",
      "Viewport",
      "Media Queries",
      "Breakpoint"
    ],
    answer: "CSS Grid"
  },
  {
    question: "The exact area of the screen that is rendering the website. In mobile devices, it is the full screen of a device, while it is the width and height of a browser window.",
    options: [
      "Viewport",
      "CSS Grid",
      "Media Queries",
      "Breakpoint"
    ],
    answer: "Viewport"
  },
  {
    question: "These are not just sets of properties and values but containers for other rulesets implemented based on the media query results.",
    options: [
      "CSS Grid Layout",
      "CSS Grid",
      "Media Queries",
      "Breakpoint"
    ],
    answer: "Media Queries"
  },
  {
    question: "It is set using the min-width, which makes the layouts more usable and does not break when viewed on any device.",
    options: [
      "CSS Grid Layout",
      "CSS Grid",
      "Media Queries",
      "Breakpoint"
    ],
    answer: "Breakpoint"
  },
  {
    question: "It is logics in a media query and is used to combine media types or features.",
    options: [
      "and",
      "not",
      "only",
      "main"
    ],
    answer: "and"
  },
  {
    question: "which is used if both conditions are true",
    options: [
      "and",
      "not",
      "only",
      "main"
    ],
    answer: "only"
  },
  {
    question: "which is used to revert the media query that will return false if the output is true.",
    options: [
      "and",
      "not",
      "only",
      "main"
    ],
    answer: "not"
  },
  {
    question: "In the HTML document, and it can enclose several sections/articles but should not contain any repeated content across the document.",
    options: [
      "and",
      "not",
      "only",
      "main"
    ],
    answer: "main"
  },
  {
    question: "A flexible one that can be viewed on small devices up to larger screens.",
    options: [
      "Responsive Image",
      "Responsive Video",
      "Responsive Canva",
      "Responsive Audio"
    ],
    answer: "Responsive Image"
  },
  {
    question: "A flexible one that can be viewed on small devices up to larger screens.",
    options: [
      "Responsive Image",
      "Responsive Video",
      "Responsive Canva",
      "Responsive Audio"
    ],
    answer: "Responsive Video"
  },
  {
    question: "What role does JavaScript play in web development according to the passage?",
    options: [
      "JavaScript is primarily responsible for defining the structure of the website.",
      "JavaScript focuses on styling the elements of the website.",
      "JavaScript enhances website interactivity and complexity by implementing features like content updates and user interactions.",
      "JavaScript ensures proper file organization and directory structure for web development."
    ],
    answer: "JavaScript enhances website interactivity and complexity by implementing features like content updates and user interactions."
  },
  {
    question: "How is internal or embedded JavaScript included in an HTML document?",
    options: [

      "Linking external JavaScript file in script tag in head.",
      "Embedding JavaScript code in script tags in head or body.",
      "Importing JavaScript functions with link tag.",
      "Including JavaScript inline with script tag."
    ],
    answer: "Embedding JavaScript code in script tags in head or body."
  },
  {
    question: "How is external JavaScript linked to an HTML document?",
    options: [
      "Linking external JavaScript file in script tag in head.",
      "Embedding JavaScript code in script tags in head or body.",
      "Importing JavaScript functions with link tag.",
      "Including JavaScript inline with script tag."
    ],
    answer: "Linking external JavaScript file in script tag in head."
  },
  {
    question: "How can you create a line comment in JavaScript?",
    options: [
      "By using /* and */ to enclose the comment",
      "By adding <!-- and --> around the comment",
      "By adding // before the comment",
      "By enclosing the comment in double quotes"
    ],
    answer: "By adding // before the comment"
  },
  {
    question: "How is a block comment indicated in JavaScript?",
    options: [
      "By adding two slashes ( // ) before the comment",
      "By enclosing the comment within /* and */",
      "By using a single slash ( / ) before the comment",
      "By adding a semicolon ( ; ) after the comment"
    ],
    answer: "By enclosing the comment within /* and */"
  },
  {
    question: "Which of the following represents the two available objects from which JavaScript objects can be created, aside from objects defined by programmers?",
    options: [
      "Document Object Model (DOM) and Display Object Model (DOM)",
      "Document Object Model (DOM) and Binary Object Model (BOM)",
      "Display Object Model (DOM) and Browser Object Model (BOM)",
      "Document Object Model (DOM) and Browser Object Model (BOM)"
    ],
    answer: "Document Object Model (DOM) and Browser Object Model (BOM)"
  },
  {
    question: "It is the line of code that browsers ignore and is used on a specific line or block of codes to add notes such as the program name and date or notes for future programmers that might modify the program. ",
    options: [
      "JavaScript Statement",
      "JavaScript Object",
      "Function definition",
      "JavaScript comment"
    ],
    answer: "JavaScript comment"
  },
  {
    question: "It is a programming code that can be treated as an individual unit or component.",
    options: [
      "JavaScript Statement",
      "JavaScript Object",
      "JavaScript Output Methods",
      "JavaScript comment"
    ],
    answer: "JavaScript Object"
  },
  {
    question: "It is an individual line of code that is enclosed within the <script> tags",
    options: [
      "JavaScript Statement",
      "JavaScript Object",
      "JavaScript Output Methods",
      "JavaScript comment"
    ],
    answer: "JavaScript Statement"
  },
  {
    question: "Any text, graphics, and other information displayed on the webpage is part of the Document object, which is one of the most commonly used objects in DOM.",
    options: [
      "JavaScript Statement",
      "JavaScript Object",
      "JavaScript Output Methods",
      "JavaScript comment"
    ],
    answer: "JavaScript Output Methods"
  },
  {
    question: "It is used to perform specific actions on arguments called operands, which can be both values and variables. ",
    options: [
      "JavaScript Operator",
      "JavaScript Variable",
      "JavaScript Output Methods",
      "JavaScript comment"
    ],
    answer: "JavaScript Operator"
  },
  {
    question: "It must be declared first so it can store data and objects or initialized, which assigns it an initial value. Variables are declared and initialized using the let or var keywords. ",
    options: [
      "JavaScript Operator",
      "JavaScript Variable",
      "JavaScript Output Methods",
      "Declaring and Initializing Variables"
    ],
    answer: "Declaring and Initializing Variables"
  },
  {
    question: "What is a JavaScript variable?",
    options: [
      "A value that the program stores in a computer's memory",
      "A statement used to create a function",
      "An element used to define the structure of a webpage",
      "A method used to manipulate text in JavaScript"
    ],
    answer: "A value that the program stores in a computer's memory"
  },
  {
    question: "Which method of the Document object is commonly used to write custom information, such as a username or address, in JavaScript?",
    options: [
      "insert()",
      "print()",
      "write()",
      "output()"
    ],
    answer: "write()"
  },
  {
    question: "In JavaScript, which type of data is required as an argument for the write() method of the Document object when writing custom information?",
    options: [
      "Numeric value",
      "Boolean value",
      "Text string",
      "Array"
    ],
    answer: "Text string"
  },
  {
    question: "What is the purpose of the console.log method in JavaScript?",
    options: [
      "To write text to the HTML/CSS environment",
      "To display messages visible to users",
      "To write text to the console, which is invisible to users and separate from the HTML/CSS environment",
      "To create interactive elements in web pages"
    ],
    answer: "To write text to the console, which is invisible to users and separate from the HTML/CSS environment"
  },
  {
    question: "What is the purpose of the alert() method in JavaScript?",
    options: [
      "To display a message in the console",
      "To create an interactive element in web pages",
      "To display an alert box with a message and an OK button",
      "To execute a function when a specific condition is met"
    ],
    answer: "To display an alert box with a message and an OK button"
  },
  {
    question: "What are parameters in the context of JavaScript functions?",
    options: [
      "The name of the function",
      "The parentheses used to define the function",
      "The variables used within the function",
      "The return value of the function"
    ],
    answer: "The variables used within the function"
  },
  {
    question: "How many primitive data types are there in JavaScript, and what are they?",
    options: [
      "3 - String, Boolean, Null",
      "4 - String, Boolean, Number, Undefined",
      "5 - String, Boolean, Number, Null, Undefined",
      "6 - String, Boolean, Number, Null, Undefined, Object"
    ],
    answer: "5 - String, Boolean, Number, Null, Undefined"
  },
  {
    question: "Which primitive data type in JavaScript represents textual data?",
    options: [
      "Boolean",
      "String",
      "Number",
      "Undefined"
    ],
    answer: "String"
  },
  {
    question: "What is the purpose of the Boolean primitive data type in JavaScript?",
    options: [
      "It represents textual data.",
      "It represents logical entities that return TRUE or FALSE.",
      "It represents any digit that is either an integer or a decimal.",
      "It represents an unknown or missing value."
    ],
    answer: "It represents logical entities that return TRUE or FALSE."
  },
  {
    question: "Which primitive data type in JavaScript can hold any digit, either an integer or a decimal?",
    options: [
      "String",
      "Boolean",
      "Number",
      "Null"
    ],
    answer: "Number"
  },
  {
    question: "What does the primitive data type 'Null' represent in JavaScript?",
    options: [
      "A logical entity that may return TRUE or FALSE.",
      "An unknown or missing value.",
      "Textual data.",
      "A variable with no value."
    ],
    answer: "An unknown or missing value."
  },
  {
    question: "When a variable in JavaScript is declared but not assigned any value, which primitive data type does it represent?",
    options: [
      "String",
      "Boolean",
      "Null",
      "Undefined"
    ],
    answer: "Undefined"
  },
  {
    question: "What is the purpose of using an array in JavaScript?",
    options: [
      "To declare a single value",
      "To declare a set of data represented by a single variable name",
      "To declare a condition",
      "To declare a function"
    ],
    answer: "To declare a set of data represented by a single variable name"
  },
  {
    question: "It is the simplest control flow instruction in JavaScript. It checks a given condition and, depending on its Boolean value, either executes a code block or skips it.",
    options: [
      "if statement",
      "if… else statement",
      "else if statement",
      "switch statement"
    ],
    answer: "if statement"
  },
  {
    question: "It adds a second code block to execute if the initial condition is not met.",
    options: [
      "if statement",
      "if… else statement",
      "else if statement",
      "switch statement"
    ],
    answer: "if… else statement"
  },
  {
    question: "It branches the code execution flow based on specific conditions.",
    options: [
      "if statement",
      "if… else statement",
      "else if statement",
      "switch statement"
    ],
    answer: "else if statement"
  },
  {
    question: "What distinguishes loops from other control flow statements in programming?",
    options: [
      "Loops allow code execution to change behavior based on conditions",
      "Loops are used to define the structure of a program",
      "Loops repeat code execution multiple times until a stopping condition is met",
      "Loops execute code once and exit immediately"
    ],
    answer: "Loops repeat code execution multiple times until a stopping condition is met"
  },
  {
    question: "What is the primary characteristic of a while loop in programming?",
    options: [
      "It executes a code block only once",
      "It executes a code block until a stopping condition is true",
      "It executes a code block indefinitely",
      "It executes a code block based on a counter variable"
    ],
    answer: "It executes a code block until a stopping condition is true"
  },
  {
    question: "What a code block is repeated, it is referred to as an a ______?",
    options: [
      "Condition",
      "Iteration",
      "Stopping point",
      "Counter"
    ],
    answer: "Iteration"
  },
  {
    question: "An ______ ____ is avoided by including at least one statement that eventually results in a false value for the condition. ",
    options: [
      "infinite loop",
      "while loop",
      "for loop",
      "do while"
    ],
    answer: "infinite loop"
  },
  {
    question: "It is used to loop the statement until it evaluates to false. It evaluates a condition after executing the command block at least once.",
    options: [
      "infinite loop",
      "while loop",
      "for loop",
      "do while"
    ],
    answer: "do while"
  },
  {
    question: "The first expression, initialization is used as a loop counter, the condition checks if the condition will return true or false, and the increment specifies the number of loops based on the condition. ",
    options: [
      "infinite loop",
      "while loop",
      "for loop",
      "do while"
    ],
    answer: "for loop"
  }
  ];
  export default WST;
