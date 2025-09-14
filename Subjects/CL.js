const CL = [
  {
    question: "There are two ways to group objects in programming:",
    options: [
      "A) by creating arrays and objects.",
      "B) by creating collections of objects.",
      "C) be done with individual variables",
      "D) Both A and B",
    ],
    answer: "D) Both A and B",
  },
  {
    question:
      "Which of the following is the correct way to declare an integer array in C#?",
    options: [
      "A) int[] numbers;",
      "B) int numbers[];",
      "C) []int numbers;",
      "D) int[5] numbers;",
    ],
    answer: "A) int[] numbers;",
  },
  {
    question:
      "In C#, arrays are objects and must be instantiated before use. Which of the following statements is correct?",
    options: [
      "A) int[] numbers; numbers = new int[5];",
      "B) int[] numbers = new int[5];",
      "C) int[] numbers; numbers[0] = 1;",
      "D) int numbers[5];",
    ],
    answer: "B) int[] numbers = new int[5];",
  },
  {
    question:
      "In C#, which of the following correctly sets a value at a specified position in an array?",
    options: [
      "A) int[] numbers = new int[3];\nnumbers.SetValue(10, 0);",
      "B) int[] numbers = new int[3];\nnumbers[0] = 10;",
      "C) int[] numbers = new int[3];\nSetValue(numbers, 0, 10);",
      "D) Both A and B are correct.",
    ],
    answer: "D) Both A and B are correct.",
  },
  {
    question:
      "In C#, which of the following correctly gets the value at a specified position in an array?",
    options: [
      "A) int[] numbers = { 5, 10, 15 };\nvar value = numbers.GetValue(1);",
      "B) int[] numbers = { 5, 10, 15 };\nvar value = numbers[1];",
      "C) int[] numbers = { 5, 10, 15 };\nGetValue(numbers, 1);",
      "D) Both A and B are correct.",
    ],
    answer: "D) Both A and B are correct.",
  },
  {
    question: "Which statement about ArrayList in C# is correct?",
    options: [
      "A) It stores only int values.",
      "B) It stores elements as objects and can grow in size dynamically.",
      "C) Its size is fixed at declaration.",
      "D) It is a generic list for type safety.",
    ],
    answer:
      "B) It stores elements as objects and can grow in size dynamically.",
  },
  {
    question: "What does a Hashtable in C# represent?",
    options: [
      "A) A collection of values stored sequentially by index.",
      "B) A key/value collection organized by the hash code of the key.",
      "C) A FIFO queue of objects.",
      "D) A last in, first out collection.",
    ],
    answer: "B) A key/value collection organized by the hash code of the key.",
  },
  {
    question: "Which of the following best describes a Queue in C#?",
    options: [
      "A) A collection where the last element added is the first one removed.",
      "B) A fixed-size array of objects.",
      "C) A first in, first out (FIFO) collection of objects.",
      "D) A key/value collection organized by hash codes.",
    ],
    answer: "C) A first in, first out (FIFO) collection of objects.",
  },
  {
    question: "What is the behavior of a Stack in C#?",
    options: [
      "A) First in, first out (FIFO).",
      "B) Last in, first out (LIFO).",
      "C) Random access by key.",
      "D) Automatically sorted by value.",
    ],
    answer: "B) Last in, first out (LIFO).",
  },
  {
    question:
      "Which of the following best describes a Dictionary<TKey, TValue> in C#?",
    options: [
      "A) A list of objects that can be accessed by index.",
      "B) A collection of key/value pairs organized by the key.",
      "C) A queue that processes elements in FIFO order.",
      "D) A collection of items sorted automatically by value.",
    ],
    answer: "B) A collection of key/value pairs organized by the key.",
  },
  {
    question: "What is the main purpose of a List<T> in C#?",
    options: [
      "A) To store key/value pairs sorted by key.",
      "B) To store a collection of objects that can be accessed by index, with methods to search, sort, and modify.",
      "C) To process objects in LIFO order.",
      "D) To store a set of unique items without duplicates.",
    ],
    answer:
      "B) To store a collection of objects that can be accessed by index, with methods to search, sort, and modify.",
  },
  {
    question: "Which of the following correctly describes a Queue<T> in C#?",
    options: [
      "A) A first in, first out (FIFO) collection of objects.",
      "B) A collection that stores elements in no particular order.",
      "C) A last in, first out (LIFO) collection.",
      "D) A key/value collection sorted by an IComparer.",
    ],
    answer: "A) A first in, first out (FIFO) collection of objects.",
  },
  {
    question:
      "What is the defining characteristic of a SortedList<TKey, TValue> in C#?",
    options: [
      "A) Items are stored in the order they are inserted.",
      "B) It represents a FIFO collection of key/value pairs.",
      "C) Items are sorted by key according to an IComparer<TKey> implementation.",
      "D) Values are automatically sorted instead of keys.",
    ],
    answer:
      "C) Items are sorted by key according to an IComparer<TKey> implementation.",
  },
  {
    question: "Which statement accurately describes a Stack<T> in C#?",
    options: [
      "A) A key/value collection sorted by key.",
      "B) A collection of items with first in, first out (FIFO) access.",
      "C) A collection where the last item added is the first one removed (LIFO).",
      "D) A dynamically sized array of mixed types.",
    ],
    answer:
      "C) A collection where the last item added is the first one removed (LIFO).",
  },
  {
    question:
      "Which of the following correctly declares a Dictionary that maps int to string?",
    options: [
      "A) Dictionary<int, string> dict = new Dictionary<int, string>();",
      "B) Dictionary<int, string> dict;",
      "C) var dict = new Dictionary();",
      "D) Dictionary dict<int, string> = new Dictionary();",
    ],
    answer: "A) Dictionary<int, string> dict = new Dictionary<int, string>();",
  },
  {
    question: "Which statement correctly declares a List of integers?",
    options: [
      "A) List<int> numbers = new List<int>();",
      "B) List numbers = new List();",
      "C) List<int> numbers;",
      "D) List<int> numbers = List<int>();",
    ],
    answer: "A) List<int> numbers = new List<int>();",
  },
  {
    question: "How do you correctly declare a Queue of strings?",
    options: [
      "A) Queue<string> queue = new Queue<string>();",
      "B) Queue queue = new Queue<string>();",
      "C) Queue<string> queue;",
      "D) Queue<string> = new Queue();",
    ],
    answer: "A) Queue<string> queue = new Queue<string>();",
  },
  {
    question:
      "Which of the following is the correct declaration for a SortedList where the key is int and the value is string?",
    options: [
      "A) SortedList<int, string> list = new SortedList<int, string>();",
      "B) SortedList<int, string> list;",
      "C) SortedList list<int, string> = new SortedList();",
      "D) SortedList<int> list = new SortedList<int>();",
    ],
    answer: "A) SortedList<int, string> list = new SortedList<int, string>();",
  },
  {
    question: "How would you correctly declare a Stack of doubles?",
    options: [
      "A) Stack<double> stack = new Stack<double>();",
      "B) Stack stack = new Stack<double>();",
      "C) Stack<double> stack;",
      "D) Stack<double> = new Stack();",
    ],
    answer: "A) Stack<double> stack = new Stack<double>();",
  },
];

export default CL;
