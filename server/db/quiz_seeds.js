use quiz-data;
db.dropDatabase();

db.leaderboard.insertMany([

  {
    username: "Colin",
    score: 0
  },

  {
    username: "John",
    score: 8
  },

  {
    username: "Louise",
    score: 7
  }

]);

db.questions.insertOne([
  {
    {geography_easy: [
      {
        category: "Geography",
        type: "multiple",
        difficulty: "easy",
        question: "What colour is the circle on the Japanese flag?",
        correct_answer: "Red",
        incorrect_answers: [
          "White",
          "Yellow",
          "Black",
          "Red"
        ]
      },
      {
        category: "Geography",
        type: "multiple",
        difficulty: "easy",
        question: "What is the capital of Denmark?",
        correct_answer: "Copenhagen",
        incorrect_answers: [
          "Aarhus",
          "Odense",
          "Aalborg"
        ]
      },
      {
        category: "Geography",
        type: "multiple",
        difficulty: "easy",
        question: "If soccer is called football in England, what is American football called in England?",
        correct_answer: "American football",
        incorrect_answers: [
          "Combball",
          "Handball",
          "Touchdown"
        ]
      },
      {
        category: "Geography",
        type: "multiple",
        difficulty: "easy",
        question: "What is the name of New Zealand&#039;s indigenous people?",
        correct_answer: "Maori",
        incorrect_answers: [
          "Vikings",
          "Polynesians",
          "Samoans"
        ]
      },
      {
        category: "Geography",
        type: "multiple",
        difficulty: "easy",
        question: "What is the capital of Scotland?",
        correct_answer: "Edinburgh",
        incorrect_answers: [
          "Glasgow",
          "Dundee",
          "London"
        ]
      },
    ]
  },




  {geography_medium: [
    {
      category: "Geography",
      type: "multiple",
      difficulty: "medium",
      question: "The World Health Organization headquarters is located in which European country?",
      correct_answer: "Switzerland",
      incorrect_answers: [
        "United Kingdom",
        "France",
        "Belgium"
      ]
    },
    {
      category: "Geography",
      type: "multiple",
      difficulty: "medium",
      question: "The historical city Timbuktu is located in which West African country?",
      correct_answer: "Mali",
      incorrect_answers: [
        "Senegal",
        "Niger",
        "Burkina Faso"
      ]
    },

    {
      category: "Geography",
      type: "multiple",
      difficulty: "medium",
      question: "Which Canadian province has Charlottetown as its capital?",
      correct_answer: "Prince Edward Island",
      incorrect_answers: [
        "Saskachewan",
        "Northwest Terrirories",
        "Ontario"
      ]
    },

    {
      category: "Geography",
      type: "multiple",
      difficulty: "medium",
      question: "What is the capital of Seychelles?",
      correct_answer: "Victoria",
      incorrect_answers: [
        "Luanda",
        "Djamena",
        "Tripoli"
      ]
    },

    {
      category: "Geography",
      type: "multiple",
      difficulty: "medium",
      question: "What is the capital city of New Zealand?",
      correct_answer: "Wellington",
      incorrect_answers: [
        "Auckland",
        "Christchurch",
        "Melbourne"
      ]
    }
  ]
}
}

]);
