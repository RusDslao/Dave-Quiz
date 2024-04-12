// Define Science questions
const PL = [
  {
    question: "These is the form of the expressions, statements, and program units of a programming language.",
    options: [
      "Syntax",
      "Semantics",
      "Lexemes",
      "Token"
    ],
    answer: "Syntax"
  },
  {
    question: "These is the meaning of the expressions, statements, and program units of a programming.",
    options: [
      "Syntax",
      "Semantics",
      "Lexemes",
      "Token"
    ],
    answer: "Semantics"
  },
  {
    question: "These is include the numeric literals, operators, and special words of a programming language.",
    options: [
      "Syntax",
      "Semantics",
      "Lexemes",
      "Token"
    ],
    answer: "Lexemes"
  },
  {
    question: "A category of the lexemes of a language.",
    options: [
      "Syntax",
      "Semantics",
      "Lexemes",
      "Token"
    ],
    answer: "Token"
  },
  {
    question: "These can reads input strings of the language and decides whether the strings belong to the language.",
    options: [
      "Language Recognizer",
      "Language Recognizing",
      "Language Recognized",
      "Language Generator"
    ],
    answer: "Language Recognizer"
  },
  {
    question: "These creates sentences of a language.",
    options: [
      "Language Recognizer",
      "Language Recognizing",
      "Language Recognized",
      "Language Generator"
    ],
    answer: "Language Generator"
  },
  {
    question: "This method involves describing the syntax of programming languages through a collection of rules.",
    options: [
      "Grammar",
      "Noam Chomsky",
      "Regular Grammars",
      "Context-Free Grammars"
    ],
    answer: "Grammar"
  },
  {
    question: "This linguist described four classes of generative devices or grammars, which in turn define four classes of language. Regular and context-free grammars are two of these classes.",
    options: [
      "Grammar",
      "Noam Chomsky",
      "Regular Grammars",
      "Context-Free Grammars"
    ],
    answer: "Noam Chomsky"
  },
  {
    question: "These grammars specifically describe the forms of tokens within programming languages.",
    options: [
      "Grammar",
      "Noam Chomsky",
      "Regular Grammars",
      "Context-Free Grammars"
    ],
    answer: "Regular Grammars"
  },
  {
    question: "These grammars describe the syntax of entire programming languages.",
    options: [
      "Grammar",
      "Noam Chomsky",
      "Regular Grammars",
      "Context-Free Grammars"
    ],
    answer: "Context-Free Grammars"
  },
  {
    question: "Question: Who developed Backus-Naur Form (BNF) as a natural notation for describing syntax?",
    options: [
      "Alan Turing",
      "John Backus and Peter Naur",
      "Noam Chomsky",
      "Donald Knuth"
    ],
    answer: "John Backus and Peter Naur"
  },
  {
    question: "What term refers to a natural notation for describing syntax, developed by John Backus and Peter Naur in the mid-1950s?",
    options: [
      "Backus-Naur Language (BNL)",
      "Backus-Naur Form (BNF)",
      "Metalanguage",
      "Left-hand Side (LHS)"
    ],
    answer: "Backus-Naur Form (BNF)"
  },
  {
    question: "What term describes a language used to describe another language?",
    options: [
      "Syntax",
      "Metalanguage",
      "Abstraction",
      "Expression"
    ],
    answer: "Metalanguage"
  },
  {
    question: "What does the abbreviation 'LHS' stand for?",
    options: [
      "Left-hand Sign",
      "Left-hand Script",
      "Left-hand Side",
      "Left-hand Structure"
    ],
    answer: "Left-hand Side"
  },
  {
    question: "What does the abbreviation 'RHS' stand for?",
    options: [
      "Right-hand Sign",
      "Right-hand Script",
      "Right-hand Side",
      "Right-hand Structure"
    ],
    answer: "Right-hand Side"
  },
  {
    question: "How does BNF represent syntactic structures?",
    options: [
      "Through concrete examples",
      "Through abstraction",
      "Through variables",
      "Through expressions"
    ],
    answer: "Through abstraction"
  },
  {
    question: "What does 'BNF' stand for in the context of describing syntax?",
    options: [
      "Backus-Natural Form",
      "Basic Notation Framework",
      "Backus-Naur Form",
      "Binary Numerical Format"
    ],
    answer: "Backus-Naur Form"
  },
  {
    question: "What are the lexemes and tokens of the rules called?",
    options: [
      "Mixtures",
      "Abstractions",
      "Nonterminal symbols",
      "Terminal symbols"
    ],
    answer: "Terminal symbols"
  },
  {
    question: "What is used to describe a list of syntactic elements in programming languages, and a rule is considered recursive if its left-hand side (LHS) appears in its right-hand side (RHS)?",
    options: [
      "Lexemes",
      "Nonterminal symbols",
      "Terminals",
      "Recursion"
    ],
    answer: "Recursion"
  },
  {
    question: "What term is used to refer to the abstractions in a Backus-Naur Form (BNF) description or grammar?",
    options: [
      "Mixtures",
      "Nonterminal symbols",
      "Terminals",
      "Lexemes"
    ],
    answer: "Nonterminal symbols"
  },
  {
    question: "What term is used to describe a mixture of tokens, lexemes, and references to other abstractions in Backus-Naur Form (BNF)?",
    options: [
      "Lexemes",
      "Terminals",
      "Nonterminal symbols",
      "Rules"
    ],
    answer: "Rules"
  },
  {
    question: "What is the sequence of applications of rules, beginning with a special nonterminal symbol called?",
    options: [
      "Rule sequence",
      "Lexical generation",
      "Derivation",
      "Syntax evolution"
    ],
    answer: "Derivation"
  },
  {
    question: "What term is used to describe the hierarchical syntactic structures of the sentences of the languages?",
    options: [
      "Lexical trees",
      "Syntax trees",
      "Rule trees",
      "Parsing trees"
    ],
    answer: "Syntax trees"
  },
  {
    question: "What term is used to describe the replaced nonterminal in a leftmost derivation, which is always the leftmost nonterminal in the sentential form?",
    options: [
      "Leftmost nonterminal",
      "Rightmost nonterminal",
      "Leading nonterminal",
      "Trailing nonterminal"
    ],
    answer: "Leftmost nonterminal"
  },
  {
    question: "What term is used to refer to each of the strings in the derivation process of a grammar?",
    options: [
      "Sentential form",
      "Rule sequence",
      "Production form",
      "Nonterminal form"
    ],
    answer: "Sentential form"
  },
  {
    question: "What term is used to describe the situation when a sentence can be derived from more than one leftmost or rightmost derivation?",
    options: [
      "Overlapping derivation",
      "Ambiguous",
      "Divergent derivation",
      "Inconsistent derivation"
    ],
    answer: "Ambiguous"
  },
  {
    question: "When an expression includes two operators that have the same precedence, what is employed to specify which should have precedence?",
    options: [
      "Precedence",
      "Priority",
      "Associativity",
      "Hierarchy"
    ],
    answer: "Associativity"
  },
  {
    question: "In grammar, how is right associativity indicated?",
    options: [
      "Left recursion",
      "Left associativity",
      "Right recursion",
      "Right associativity"
    ],
    answer: "Right recursion"
  },
  {
    question: "When a grammar rule has its left-hand side (LHS) appearing at the beginning of its right-hand side (RHS), what term is used to describe this property?",
    options: [
      "Left associativity",
      "Right associativity",
      "Left recursion",
      "Right recursion"
    ],
    answer: "Left recursion"
  },
  {
    question: "What does the term 'EBNF' stand for, which is an extended version of BNF designed to enhance readability and writability?",
    options: [
      "Enhanced Backus-Naur Form",
      "Expanded Backus-Naur Form",
      "Extended Binary Notation Form",
      "Extended Backus-Naur Framework"
    ],
    answer: "Expanded Backus-Naur Form"
  },
  {
    question: "What formalism, serving as an extension to context-free grammars, encompasses a grammar, a set of attributes, computation functions, and predicates to describe both syntax and static semantics of a language?",
    options: [
      "Syntax Analyzer",
      "Contextual Analyzer",
      "Attribute Grammar",
      "Semantic Analyzer"
    ],
    answer: "Attribute Grammar"
  },
  {
    question: "What term consists of semantic rules that can be checked during program compilation?",
    options: [
      "Static semantics",
      "Atrribute Grammar",
      "Attribute computation functions",
      "Predicate funcitons"
    ],
    answer: "Static semantics"
  },
  {
    question: "A descriptive formalism that can describe both the syntax and static semantics of a language.",
    options: [
      "Static semantics",
      "Atrribute Grammar",
      "Attribute computation functions",
      "Predicate funcitons"
    ],
    answer: "Atrribute Grammar"
  },
  {
    question: "These specify how attribute values are computed.",
    options: [
      "Static semantics",
      "Atrribute Grammar",
      "Attribute computation functions",
      "Predicate funcitons"
    ],
    answer: "Attribute computation functions"
  },
  {
    question: "This is state the semantic rules of the language.",
    options: [
      "Static semantics",
      "Atrribute Grammar",
      "Attribute computation functions",
      "Predicate funcitons"
    ],
    answer: "Predicate funcitons"
  },
  {
    question: "Which classes of attributes in attribute grammars pass semantic information down and across a parse tree?",
    options: [
      "Synthesized attributes",
      "Inherited attributes",
      "Terminal attributes",
      "External attributes"
    ],
    answer: "Inherited attributes"
  },
  {
    question: "Which classes of pass semantic information up a parse tree, meaning from the attributes attached to the children of its nonterminal?",
    options: [
      "Synthesized attributes",
      "Inherited attributes",
      "Terminal attributes",
      "External attributes"
    ],
    answer: "Synthesized attributes"
  },
  {
    question: "What is the best describe 'Dynamic semantics'?",
    options: [
      "It consists of semantic rules that can be checked during program execution",
      "Its method of describing the meaning of language constructs in terms of their effects on an ideal machine",
      "Its formalizes the meanings of programming languages by constructing mathematical objects and describe the meanings of language constructs",
      "Its a tool for proving the correctness of a program"
    ],
    answer: "It consists of semantic rules that can be checked during program execution"
  },
  {
    question: "What is the best describe 'Operational semantics'?",
    options: [
      "It consists of semantic rules that can be checked during program execution",
      "Its method of describing the meaning of language constructs in terms of their effects on an ideal machine",
      "Its formalizes the meanings of programming languages by constructing mathematical objects and describe the meanings of language constructs",
      "Its a tool for proving the correctness of a program"
    ],
    answer: "Its method of describing the meaning of language constructs in terms of their effects on an ideal machine"
  },
  {
    question: "What is the best describe 'Axiomantic semantics'?",
    options: [
      "It consists of semantic rules that can be checked during program execution",
      "Its method of describing the meaning of language constructs in terms of their effects on an ideal machine",
      "Its formalizes the meanings of programming languages by constructing mathematical objects",
      "Its a tool for proving the correctness of a program"
    ],
    answer: "Its a tool for proving the correctness of a program"
  },
  {
    question: "What formalizes the meanings of programming languages by constructing mathematical objects and describe the meanings of language constructs?",
    options: [
      "Denotational semantics",
      "Axiomantic semantics",
      "Operational semantics",
      "Dynamic semantics"
    ],
    answer: "Denotational semantics"
  },
  {
    question: "What term is used for logical expressions used in axiomatic semantics?",
    options: [
      "Assertions",
      "Precondition",
      "Postcondition",
      "None"
    ],
    answer: "Assertions"
  },
  {
    question: "What is an assertion before a statement?",
    options: [
      "Assertions",
      "Precondition",
      "Postcondition",
      "Weakest precondition"
    ],
    answer: "Precondition"
  },
  {
    question: "What is an assertion that follows a statement?",
    options: [
      "Assertions",
      "Precondition",
      "Postcondition",
      "Weakest precondition"
    ],
    answer: "Postcondition"
  },
  {
    question: "What is the least restrictive precondition that will guarantee the validity of the associated postcondition?",
    options: [
      "Assertions",
      "Precondition",
      "Postcondition",
      "Weakest precondition"
    ],
    answer: "Weakest precondition"
  },
  {
    question: "What is a method of inferring the truth of one assertion based on the values of other assertions?",
    options: [
      "Inference rule",
      "Axiom",
      "Dynamic",
      "Static"
    ],
    answer: "Inference rule"
  },
  {
    question: "What is a logical statement that is assumed to be true and is an inference rule without an antecedent?",
    options: [
      "Inference rule",
      "Axiom",
      "Dynamic",
      "Static"
    ],
    answer: "Inference rule"
  },
  {
    question: "What term refers to a word of a programming language that is special only in certain contexts?",
    options: [
      "Reserved word",
      "Identifier",
      "Keyword",
      "Symbol"
    ],
    answer: "Keyword"
  },
  {
    question: "What is the primary design issue related to names in programming languages?",
    options: [
      "Readability and writability",
      "Case sensitivity",
      "Efficiency",
      "Portability"
    ],
    answer: "Readability and writability"
  },
  {
    question: "What is a string of characters used to identify some entity in a program?",
    options: [
      "Reserved word",
      "Identifier",
      "Special Words",
      "Name"
    ],
    answer: "Name"
  },
  {
    question: "In programming languages, what are used to make programs more readable by naming actions to be performed?",
    options: [
      "Reserved word",
      "Identifier",
      "Special Words",
      "Name"
    ],
    answer: "Special Words"
  },
  {
    question: "What is a special word of a programming language that cannot be used as a name?",
    options: [
      "Reserved word",
      "Identifier",
      "Special Words",
      "Name"
    ],
    answer: "Reserved word"
  },
  {
    question: "An abstraction of a computer memory cell or collection of cells.",
    options: [
      "Program variable",
      "Address",
      "Special Words",
      "Name"
    ],
    answer: "Program variable"
  },
  {
    question: "What are the six attributes associated with a variable?",
    options: [
      "Name, address, value, type, lifespan, and scope",
      "Title, location, content, classification, duration, and reach.",
      "Identifier, memory location, content, data type, lifespan, and visibility scope.",
      "Label, position, data content, variable type, duration, and accessibility."
    ],
    answer: "Name, address, value, type, lifespan, and scope"
  },
  {
    question: "The address of a variable is where the program looks at when it has to read the data stored in that variable. It is also known as ____.",
    options: [
      "R-value",
      "Identifier",
      "L-value",
      "Operand"
    ],
    answer: "L-value"
  },
  {
    question: "What term describes variable name can be used to access the same memory location?",
    options: [
      "Duplicates",
      "Identifiers",
      "Aliases",
      "Clones"
    ],
    answer: "Aliases"
  },
  {
    question: "What does aliasing allow a variable to do?",
    options: [
      "Determines the range of values the variable can store and the set of operations",
      "Access different memory locations",
      "Have its value changed by an assignment to a different variable.",
      "A variable is the contents of the memory cell or cells associated with the variable."
    ],
    answer: "Have its value changed by an assignment to a different variable."
  },
  {
    question: "What is the best definition for 'type'?",
    options: [
      "Determines the range of values the variable can store and the set of operations that are defined for values of the type.",
      "Access different memory locations",
      "Have its value changed by an assignment to a different variable.",
      "A variable is the contents of the memory cell or cells associated with the variable."
    ],
    answer: "Determines the range of values the variable can store and the set of operations that are defined for values of the type."
  },
  {
    question: "What is the best definition for 'value'?",
    options: [
      "Determines the range of values the variable can store and the set of operations that are defined for values of the type.",
      "Access different memory locations",
      "Have its value changed by an assignment to a different variable.",
      "A variable is the contents of the memory cell or cells associated with the variable."
    ],
    answer: "A variable is the contents of the memory cell or cells associated with the variable."
  },
  {
    question: "A ______ is an association between an attribute and an entity such as between a variable and its type or value, or between an operation and a symbol.",
    options: [
      "Binding",
      "Static",
      "Binding",
      "Dynamic"
    ],
    answer: "Binding"
  },
  {
    question: "At which of the following stages can binding take place?",
    options: [
      "Compile time, load time, and run time",
      "Language design time and compile time",
      "Language implementation time and link time",
      "Compile time, load time, link time, and run time"
    ],
    answer: "Compile time, load time, link time, and run time"
  },
  {
    question: "It occurs before run time begins and remains unchanged throughout program execution.",
    options: [
      "static",
      "dynamic",
      "explicit declaration",
      "implicit declaration"
    ],
    answer: "static"
  },
  {
    question: "it occurs during run time or can change in the course of program execution.",
    options: [
      "static",
      "dynamic",
      "explicit declaration",
      "implicit declaration"
    ],
    answer: "dynamic"
  },
  {
    question: "A statement in a program that lists variable names and specifies that they are a particular type.",
    options: [
      "static",
      "dynamic",
      "explicit declaration",
      "implicit declaration"
    ],
    answer: "explicit declaration"
  },
  {
    question: "A means of associating variables with types through default conventions, rather than declaration statements.",
    options: [
      "static",
      "dynamic",
      "explicit declaration",
      "implicit declaration"
    ],
    answer: "implicit declaration"
  },
  {
    question: "The variable is bound to the type of the value of the expression on the right side of the statement.",
    options: [
      "Dynamic type binding",
      "Allocation",
      "Deallocation",
      "Lifetime"
    ],
    answer: "Dynamic type binding"
  },
  {
    question: "The process of taking the memory cell to which a variable is bound from a pool of available memory.",
    options: [
      "Dynamic type binding",
      "Allocation",
      "Deallocation",
      "Lifetime"
    ],
    answer: "Allocation"
  },
  {
    question: "The process of placing a memory cell that has been unbound from a variable back into the pool of available memory",
    options: [
      "Dynamic type binding",
      "Allocation",
      "Deallocation",
      "Lifetime"
    ],
    answer: "Deallocation"
  },
  {
    question: "A variable is the time during which the variable is bound to a specific memory location",
    options: [
      "Dynamic type binding",
      "Allocation",
      "Deallocation",
      "Lifetime"
    ],
    answer: "Lifetime"
  },
  {
    question: "Which category of variables is bound to memory cells before program execution begins and remains bound to those same memory cells until program execution terminates?",
    options: [
      "Stack-dynamic variables",
      "Explicit heap-dynamic variables",
      "Implicit heap-dynamic variables",
      "Static variables"
    ],
    answer: "Static variables"
  },
  {
    question: "Which category of variables are those whose storage bindings are created when their declaration statements are elaborated, but whose types are statically bound?",
    options: [
      "Stack-dynamic variables",
      "Explicit heap-dynamic variables",
      "Implicit heap-dynamic variables",
      "Static variables"
    ],
    answer: "Stack-dynamic variables"
  },
  {
    question: "What does 'elaboration' of a declaration refer to?",
    options: [
      "The process of interpreting the declaration syntax",
      "The compilation of the declaration into machine code",
      "The storage allocation and binding process indicated by the declaration",
      "The execution of the code associated with the declaration"
    ],
    answer: "The storage allocation and binding process indicated by the declaration"
  },
  {
    question: "Which category of variables are nameless (abstract) memory cells that are allocated and deallocated by explicit run time instructions written by the programmer?",
    options: [
      "Stack-dynamic variables",
      "Explicit heap-dynamic variables",
      "Implicit heap-dynamic variables",
      "Static variables"
    ],
    answer: "Explicit heap-dynamic variables"
  },
  {
    question: "Which category of variables are bound to heap storage only when they are assigned values. All their attributes are bound every time they are assigned.",
    options: [
      "Stack-dynamic variables",
      "Explicit heap-dynamic variables",
      "Implicit heap-dynamic variables",
      "Static variables"
    ],
    answer: "Implicit heap-dynamic variables"
  },
  {
    question: "The ____ of a variable is a range of statements in which the variable is visible.",
    options: [
      "visible",
      "scope",
      "named constant",
      "referencing environment"
    ],
    answer: "scope"
  },
  {
    question: "A variable is _____ in a statement if it can be referenced in that statement.",
    options: [
      "visible",
      "scope",
      "named constant",
      "referencing environment"
    ],
    answer: "visible"
  },
  {
    question: "The _________ ___________of statement is the collection of all variables that are visible in the statement.",
    options: [
      "visible",
      "scope",
      "named constant",
      "referencing environment"
    ],
    answer: "referencing environment"
  },
  {
    question: "A  _____ ________ is a variable that is bound to a value only once; its value cannot be changed by an assignment or by an input statement.",
    options: [
      "visible",
      "scope",
      "named constant",
      "referencing environment"
    ],
    answer: "named constant"
  },
  {
    question: "___________ is the binding of a variable to a value at the time it is bound to a storage",
    options: [
      "Initialization",
      "scope",
      "named constant",
      "referencing environment"
    ],
    answer: "Initialization"
  },
  {
    question: "What are two scoping rules for names described in the given examples?",
    options: [
      "Static scoping and Dynamic scoping",
      "Static scoping and Variable scoping",
      "Lexical scoping and Call scoping",
      "Static scoping and Dynamic scoping"
    ],
    answer: "Static scoping and Dynamic scoping"
  },
  {
    question: "What method of binding names to nonlocal variables is known as static scoping?",
    options: [
      "Dynamic scoping",
      "Static scoping",
      "Sequential scoping",
      "Functional scoping"
    ],
    answer: "Static scoping"
  },
  {
    question: "What is based on the calling sequence of subprograms, not on their spatial relationship to each other. Thus, the scope can be determined only at run time.",
    options: [
      "Dynamic scoping",
      "Static scoping",
      "Sequential scoping",
      "Functional scoping"
    ],
    answer: "Dynamic scoping"
  }
];
export default PL;