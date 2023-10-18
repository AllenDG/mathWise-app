export const Types = [
  {
    id: 9,
    name: "General Knowledge",
  },
  {
    id: 15,
    name: "Addition and Subtraction: Mathematics",
  },
 
  {
    id: 17,
    name: "Multiplication and Division: Mathematics",
  },
  {
    id: 18,
    name: "Exponents: Mathematics",
  },
  {
    id: 19,
    name: "Parentheses: Mathematics",
  },
 
];

export const Question = [
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "easy",
    question:
      "What does PEMDAS stand for?",
    correct_answer: " Parentheses, Exponents, Multiplication, Division, Addition, Subtraction",
    incorrect_answers: ["Please Excuse My Dear Aunt Sally", " People Eat My Delicious Apple Slices", "Primary Education Makes Dreams A Reality"],
  },
  [
    {
      category: "General Knowledge",
      type: "multiple-choice",
      difficulty: "easy",
      question: "What does PEMDAS stand for?",
      correct_answer: "B. Parentheses, Exponents, Multiplication, Division, Addition, Subtraction",
      incorrect_answers: [
        "A. Please Excuse My Dear Aunt Sally",
        "C. People Eat My Delicious Apple Slices",
        "D. Primary Education Makes Dreams A Reality"
      ]
    },
    {
      category: "General Knowledge",
      type: "multiple-choice",
      difficulty: "medium",
      question: "Which operation should be performed first in PEMDAS?",
      correct_answer: "D. Parentheses",
      incorrect_answers: [
        "A. Multiplication",
        "B. Subtraction",
        "C. Addition"
      ]
    },
    {
      category: "General Knowledge",
      type: "multiple-choice",
      difficulty: "medium",
      question: "In the expression 4 + 3 x 2, what operation should be done first?",
      correct_answer: "A. Addition",
      incorrect_answers: [
        "B. Multiplication",
        "C. Subtraction",
        "D. Division"
      ]
    },
    {
      category: "General Knowledge",
      type: "multiple-choice",
      difficulty: "medium",
      question: "What is the result of 7 + 2 × (4 ÷ 2) in PEMDAS?",
      correct_answer: "C. 11",
      incorrect_answers: [
        "A. 7",
        "B. 9",
        "D. 13"
      ]
    },
    {
      category: "General Knowledge",
      type: "multiple-choice",
      difficulty: "hard",
      question: "Solve: 8 ÷ 2 + 3.",
      correct_answer: "C. 11",
      incorrect_answers: [
        "A. 7",
        "B. 2",
        "D. 4"
      ]
    },
    {
      category: "General Knowledge",
      type: "true-false",
      difficulty: "easy",
      question: "The Earth is flat.",
      correct_answer: "false",
      incorrect_answers: ["true"]
    },
    {
      category: "General Knowledge",
      type: "multiple-choice",
      difficulty: "hard",
      question: "Calculate: (5 × 3) - (4 + 2).",
      correct_answer: "B. 14",
      incorrect_answers: [
        "A. 19",
        "C. 15",
        "D. 6"
      ]
    },
    {
      category: "General Knowledge",
      type: "true-false",
      difficulty: "easy",
      question: "The sum of 6 and 3 is 10.",
      correct_answer: "false",
      incorrect_answers: ["true"]
    },
    {
      category: "General Knowledge",
      type: "multiple-choice",
      difficulty: "medium",
      question: "Which symbol represents the exponentiation operation in PEMDAS?",
      correct_answer: "C. ^",
      incorrect_answers: [
        "A. ×",
        "B. +",
        "D. ÷"
      ]
    },
    {
      category: "General Knowledge",
      type: "multiple-choice",
      difficulty: "easy",
      question: "In the expression 2 + 6 ÷ 3, which operation should be done first?",
      correct_answer: "B. Division",
      incorrect_answers: [
        "A. Addition",
        "C. Subtraction",
        "D. Parentheses"
      ]
    }
  ]
  
];

export const Level = ["easy", "medium", "hard"];

export const Idx = ["A", "B", "C", "D"];
