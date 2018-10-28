use quiz_data;
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
db.questions.insertMany([{
    // geography_easy: [{
    topic: "Geography",
    category: "geography_easy",
    type: "multiple",
    difficulty: "easy",
    question: "What colour is the circle on the Japanese flag?",
    correct_answer: "Red",
    answers: [
      "White",
      "Yellow",
      "Black",
      "Red"
    ]
  },
  {
    topic: "Geography",
    category: "geography_easy",
    type: "multiple",
    difficulty: "easy",
    question: "What is the capital of Denmark?",
    correct_answer: "Copenhagen",
    answers: [
      "Copenhagen",
      "Aarhus",
      "Odense",
      "Aalborg"
    ]
  },
  {
    topic: "Geography",
    category: "geography_easy",
    type: "multiple",
    difficulty: "easy",
    question: "If soccer is called football in England, what is American football called in England?",
    correct_answer: "American football",
    answers: [
      "American football",
      "Combball",
      "Handball",
      "Touchdown"
    ]
  },
  {
    topic: "Geography",
    category: "geography_easy",
    type: "multiple",
    difficulty: "easy",
    question: "What is the name of New Zealand&#039;s indigenous people?",
    correct_answer: "Maori",
    answers: [
      "Maori",
      "Vikings",
      "Polynesians",
      "Samoans"
    ]
  },
  {
    topic: "Geography",
    category: "geography_easy",
    type: "multiple",
    difficulty: "easy",
    question: "What is the capital of Scotland?",
    correct_answer: "Edinburgh",
    answers: [
      "Edinburgh",
      "Glasgow",
      "Dundee",
      "London"
    ]
  }
]);
db.questions.insertMany([{
    // geography_medium: [{
    topic: "Geography",
    category: "geography_medium",
    type: "multiple",
    difficulty: "medium",
    question: "The World Health Organization headquarters is located in which European country?",
    correct_answer: "Switzerland",
    answers: [
      "Switzerland",
      "United Kingdom",
      "France",
      "Belgium"
    ]
  },
  {
    topic: "Geography",
    category: "geography_medium",
    type: "multiple",
    difficulty: "medium",
    question: "The historical city Timbuktu is located in which West African country?",
    correct_answer: "Mali",
    answers: [
      "Mali",
      "Senegal",
      "Niger",
      "Burkina Faso"
    ]
  },
  {
    topic: "Geography",
    category: "geography_medium",
    type: "multiple",
    difficulty: "medium",
    question: "Which Canadian province has Charlottetown as its capital?",
    correct_answer: "Prince Edward Island",
    answers: [
      "Prince Edward Island",
      "Saskachewan",
      "Northwest Terrirories",
      "Ontario"
    ]
  },
  {
    topic: "Geography",
    category: "geography_medium",
    type: "multiple",
    difficulty: "medium",
    question: "What is the capital of Seychelles?",
    correct_answer: "Victoria",
    answers: [
      "Victoria",
      "Luanda",
      "Djamena",
      "Tripoli"
    ]
  },
  {
    topic: "Geography",
    category: "geography_medium",
    type: "multiple",
    difficulty: "medium",
    question: "What is the capital city of New Zealand?",
    correct_answer: "Wellington",
    answers: [
      "Wellington",
      "Auckland",
      "Christchurch",
      "Melbourne"
    ]
  }
]);
db.questions.insertMany([{
    topic: "Geography",
    category: "geography_hard",
    type: "multiple",
    difficulty: "hard",
    question: "What North American tourist attraction is served by the &quot;Maid of the Mist&quot; tour company?",
    correct_answer: "Niagara Falls",
    answers: [
      "Niagara Falls",
      "Whistler, British Columbia",
      "Disney World",
      "Yosemite National Park"
    ]
  },
  {
    topic: "Geography",
    category: "geography_hard",
    type: "multiple",
    difficulty: "hard",
    question: "What is the tallest mountain in Canada?",
    correct_answer: "Mount Logan",
    answers: [
      "Mount Logan",
      "Mont Tremblant",
      "Whistler Mountain",
      "Blue Mountain"
    ]
  },
  {
    topic: "Geography",
    category: "geography_hard",
    type: "multiple",
    difficulty: "hard",
    question: "What is the second-largest city in Lithuania?",
    correct_answer: "Kaunas",
    answers: [
      "Kaunas",
      "Panevėžys",
      "Vilnius",
      "Klaipėda"
    ]
  },
  {
    topic: "Geography",
    category: "geography_hard",
    type: "multiple",
    difficulty: "hard",
    question: "What is the land connecting North America and South America?",
    correct_answer: "Isthmus of Panama",
    answers: [
      "Isthmus of Panama",
      "Isthmus of Suez",
      "Urals",
      "Australasia"
    ]
  },
  {
    topic: "Geography",
    category: "geography_hard",
    type: "multiple",
    difficulty: "hard",
    question: "What is the most common climbing route for the second highest mountain in the world, K2?",
    correct_answer: "Abruzzi Spur",
    answers: [
      "Abruzzi Spur",
      "Magic Line",
      "Cesen Route",
      "Polish Line"
    ]
  }
]);
