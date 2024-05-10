// Define Science questions
const PL = [
  {
    question: "A collection of data values and a set of predefined operations on those values.",
    options: [
      "data type",
      "primitive data type",
      "boolean data type",
      "character data type"
    ],
    answer: "data type"
  },
  {
    question: "These data types that are not defined in terms of other types.",
    options: [
      "data type",
      "primitive data type",
      "boolean data type",
      "character data type"
    ],
    answer: "primitive data type"
  },
  {
    question: "These type numeric that most common primitive numeric data type.",
    options: [
      "Integer",
      "Floating-point data types",
      "Decimal data types",
      "none"
    ],
    answer: "Integer"
  },
  {
    question: "These type numeric that model real numbers, but the representations are only approximations of many real numbers.",
    options: [
      "Integer",
      "Floating-point data types",
      "Decimal data types",
      "none"
    ],
    answer: "Floating-point data types"
  },
  {
    question: "These type numeric that store a fixed number of decimal digits, with the decimal point at a fixed position in value.",
    options: [
      "Integer",
      "Floating-point data types",
      "Decimal data types",
      "none"
    ],
    answer: "Decimal data types"
  },
  {
    question: "This are has range of values that has only two (2) elements, one for true and one for false.",
    options: [
      "data type",
      "primitive data type",
      "boolean data type",
      "character data type"
    ],
    answer: "boolean data type"
  },
  {
    question: "This is used to store only a single character.",
    options: [
      "data type",
      "primitive data type",
      "boolean data type",
      "character data type"
    ],
    answer: "character data type"
  },
  {
    question: "The most common string operations are:",
    options: [
      "Concatenation, splitting, iteration, transformation, and pattern matching",
      "Assignment, comparison, parsing, substitution, and validation",
      "Assignment, concatenation, substring reference, comparison, and pattern matching",
      "Encoding, decoding, encryption, decryption, and compression"
    ],
    answer: "Assignment, concatenation, substring reference, comparison, and pattern matching"
  },
  {
    question: "How are values represented in a character string (or string) type?",
    options: [
      "Values consist of single characters.",
      "Values consist of sequences of numbers.",
      "Values consist of sequences of characters.",
      "Values consist of sequences of special symbols."
    ],
    answer: "Values consist of sequences of characters."
  },
  {
    question: "The length of string values can be fixed and set when the string is created",
    options: [
      "Static length string",
      "Limited dynamic length string",
      "Dynamic length string",
      "none"
    ],
    answer: "Static length string"
  },
  {
    question: "The length of string values can have varying length up to a declared and fixed maximum set by the variable’s definition.",
    options: [
      "Static length string",
      "Limited dynamic length string",
      "Dynamic length string",
      "none"
    ],
    answer: "Limited dynamic length string"
  },
  {
    question: "The length of string values can have varying length with no maximum.",
    options: [
      "Static length string",
      "Limited dynamic length string",
      "Dynamic length string",
      "none"
    ],
    answer: "Dynamic length string"
  },
  {
    question: "What is the primary characteristic of an array according to the statement?",
    options: [
      "It stores values of multiple types.",
      "It dynamically adjusts its size.",
      "It contains a variable number of values.",
      "It stores a fixed number of values of a single type."
    ],
    answer: "It stores a fixed number of values of a single type."
  },
  {
    question: "How are individual elements of an array typically referenced?",
    options: [
      "Using a pointer",
      "Using a hash function",
      "Using a subscript or index",
      "Using a loop iterator"
    ],
    answer: "Using a subscript or index"
  },
  {
    question: "This is the 5 categories of array that has subscript ranges that are statically bound and its storage allocation is static",
    options: [
      "static array",
      "fixed stack-dynamic array",
      "stack-dynamic array",
      "fixed-heap dynamic array"
    ],
    answer: "static array"
  },
  {
    question: "This is the 5 categories of array that has subscript ranges that are statically bound, but its allocation is done at declaration elaboration time during execution.",
    options: [
      "static array",
      "fixed stack-dynamic array",
      "stack-dynamic array",
      "fixed-heap dynamic array"
    ],
    answer: "fixed stack-dynamic array"
  },
  {
    question: "This is the 5 categories of array that has subscript ranges and storage allocation that are both dynamically bound at elaboration time.",
    options: [
      "static array",
      "fixed stack-dynamic array",
      "stack-dynamic array",
      "fixed-heap dynamic array"
    ],
    answer: "stack-dynamic array"
  },
  {
    question: "This is the 5 categories of array that similar to a fixed-stack dynamic array, but the subscript ranges and the storage binding are both fixed after storage is allocated.",
    options: [
      "fixed stack-dynamic array",
      "stack-dynamic array",
      "fixed-heap dynamic array",
      "heap-dynamic array"
    ],
    answer: "fixed-heap dynamic array"
  },
  {
    question: "This is the 5 categories of array that has subscript ranges and storage allocation that are both dynamically bound and can change during the array’s lifetime multiple times.",
    options: [
      "fixed stack-dynamic array",
      "stack-dynamic array",
      "fixed-heap dynamic array",
      "heap-dynamic array"
    ],
    answer: "heap-dynamic array"
  },
  {
    question: "These are the pointer and reference types that represent memory addresses and a special value called nil.",
    options: [
      "pointer type",
      "nil",
      "heap",
      "reference type"
    ],
    answer: "pointer type"
  },
  {
    question: "These are the pointer and reference types that represent a non-valid address, indicating that a pointer cannot currently be used to reference a memory cell.",
    options: [
      "pointer type",
      "nil",
      "heap",
      "reference type"
    ],
    answer: "nil"
  },
  {
    question: "These are the pointer and reference types that can be used to access a location in an area where storage is dynamically allocated.",
    options: [
      "pointer type",
      "nil",
      "heap",
      "reference type"
    ],
    answer: "heap"
  },
  {
    question: "These are the pointer and reference types where a variable refers to an object or a value in memory.",
    options: [
      "pointer type",
      "nil",
      "heap",
      "reference type"
    ],
    answer: "reference type"
  },
  {
    question: "Variables that are dynamically allocated form the heap.",
    options: [
      "heap-dynamic variables",
      "heap-static variables",
      "heap variables",
      "heap-static"
    ],
    answer: "heap-dynamic variables"
  },
  {
    question: "Variables without names are called _____.",
    options: [
      "anonymous variables",
      "public variables",
      "static variables",
      "private variables"
    ],
    answer: "anonymous variables"
  },
  {
    question: "These are the two fundamental pointer operations that set a pointer variable’s value to some useful address.",
    options: [
      "Assignment",
      "Dereferencing",
      "Referencing",
      "Assessment"
    ],
    answer: "Assignment"
  },
  {
    question: "These are the two fundamental pointer operations that take a reference through one level of indirection.",
    options: [
      "Assignment",
      "Dereferencing",
      "Referencing",
      "Assessment"
    ],
    answer: "Dereferencing"
  },
  {
    question: "The best description of Type Checking is:",
    options: [
      "The activity of ensuring that the operands of an operator are of compatible types",
      "The process automatically converting an operator",
      "The application of an operator to an operand of an inappropriate type",
      "Type checking at runtime"
    ],
    answer: "The activity of ensuring that the operands of an operator are of compatible types"
  },
  {
    question: "The best description of coercion is:",
    options: [
      "The activity of ensuring that the operands of an operator are of compatible types",
      "The process automatically converting an operator",
      "The application of an operator to an operand of an inappropriate type",
      "Type checking at runtime"
    ],
    answer: "The process automatically converting an operator"
  },
  {
    question: "The best description of a type error is:",
    options: [
      "The activity of ensuring that the operands of an operator are of compatible types",
      "The process automatically converting an operator",
      "The application of an operator to an operand of an inappropriate type",
      "Type checking at runtime"
    ],
    answer: "The application of an operator to an operand of an inappropriate type"
  },
  {
    question: "The best description of dynamic type checking is:",
    options: [
      "The activity of ensuring that the operands of an operator are of compatible types",
      "The process automatically converting an operator",
      "The application of an operator to an operand of an inappropriate type",
      "Type checking at runtime"
    ],
    answer: "Type checking at runtime"
  },
  {
    question: "A programming language is _____ _____ if type errors are always detected.",
    options: [
      "strong typed",
      "coercion",
      "Type equivalence",
      "Type checking"
    ],
    answer: "strong typed"
  },
  {
    question: "These two types are equivalent if an operand of one type in an expression is substituted for one of the other type, without coercion.",
    options: [
      "strong typed",
      "coercion",
      "Type equivalence",
      "Type checking"
    ],
    answer: "Type equivalence"
  },
  {
    question: "The two approaches to defining type equivalence are:",
    options: [
      "name type equivalence and structure type equivalence",
      "type and value equivalence",
      "name and value equivalence",
      "name and structure equivalence"
    ],
    answer: "name type equivalence and structure type equivalence"
  }// 05 Handout 1 2 left handouts
];
export default PL;