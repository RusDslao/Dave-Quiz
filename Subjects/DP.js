const D = [
  {
    question: "What happens in tight coupling?",
    options: [
      "Classes operate independently",
      "Change in one class may affect another",
      "Classes never interact",
      "Classes are completely isolated",
    ],
    answer: "Change in one class may affect another",
  },
  {
    question: "Which of the following promotes flexibility and testability?",
    options: [
      "Tight Coupling",
      "Loose Coupling",
      "Static Binding",
      "Code Duplication",
    ],
    answer: "Loose Coupling",
  },
  {
    question: "What are design principles?",
    options: [
      "Fixed coding rules",
      "Guidelines to improve class structure",
      "Specific algorithms for performance",
      "Database schema designs",
    ],
    answer: "Guidelines to improve class structure",
  },
  {
    question: "Which principle means “keep code simple and clear”?",
    options: ["DRY", "YAGNI", "KISS", "SOLID"],
    answer: "KISS",
  },
  {
    question: "Which principle advises against writing duplicate code?",
    options: ["DRY", "KISS", "YAGNI", "ISP"],
    answer: "DRY",
  },
  {
    question: "Which principle warns against adding features until necessary?",
    options: ["DRY", "KISS", "YAGNI", "DIP"],
    answer: "YAGNI",
  },
  {
    question:
      "Which principle states “a class should only have one reason to change”?",
    options: ["SRP", "OCP", "LSP", "DIP"],
    answer: "SRP",
  },
  {
    question:
      "Which principle requires classes to be open for extension but closed for modification?",
    options: ["SRP", "OCP", "LSP", "ISP"],
    answer: "OCP",
  },
  {
    question:
      "Which principle ensures subclasses can replace their base classes without breaking functionality?",
    options: ["ISP", "LSP", "SRP", "DIP"],
    answer: "LSP",
  },
  {
    question:
      "Which principle says classes should not implement unused methods?",
    options: ["ISP", "DIP", "OCP", "LSP"],
    answer: "ISP",
  },
  {
    question:
      "Which principle emphasizes depending on abstractions, not concrete classes?",
    options: ["DIP", "OCP", "SRP", "ISP"],
    answer: "DIP",
  },
  {
    question: "What is the main goal of IoC?",
    options: [
      "To increase coupling",
      "To make classes depend on concrete types",
      "To decouple classes and improve testability",
      "To remove the need for interfaces",
    ],
    answer: "To decouple classes and improve testability",
  },
  {
    question: "Which of the following is NOT an IoC pattern?",
    options: [
      "Dependency Injection",
      "Abstract Factory",
      "Strategy",
      "Singleton",
    ],
    answer: "Singleton",
  },
  {
    question: "Providing dependencies via constructor parameters is called:",
    options: [
      "Setter Injection",
      "Interface Injection",
      "Constructor Injection",
      "Static Injection",
    ],
    answer: "Constructor Injection",
  },
  {
    question:
      "Which DI method provides dependencies through public properties?",
    options: [
      "Interface Injection",
      "Constructor Injection",
      "Setter Injection",
      "Service Locator",
    ],
    answer: "Setter Injection",
  },
  {
    question: "What is the repository pattern mainly used for?",
    options: [
      "UI design",
      "Data access abstraction",
      "Error handling",
      "Memory management",
    ],
    answer: "Data access abstraction",
  },
  {
    question: "Which of the following is NOT a benefit of repository pattern?",
    options: [
      "Loose coupling",
      "Reusability",
      "Easy testing",
      "Strong tight coupling",
    ],
    answer: "Strong tight coupling",
  },
  {
    question:
      "Without the repository pattern, what does the Business Logic Layer directly interact with?",
    options: ["Repository", "DBContext", "Data Storage", "User Interface"],
    answer: "DBContext",
  },
];

export default D;
