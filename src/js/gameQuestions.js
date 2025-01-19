// Banco de preguntas por modo de juego
const questionBank = {
  suma: [
    { question: '5 + 3', answer: 8, options: [8, 7, 9, 6] },
    { question: '12 + 15', answer: 27, options: [25, 27, 28, 26] },
    { question: '24 + 16', answer: 40, options: [38, 40, 42, 39] },
    { question: '33 + 19', answer: 52, options: [52, 51, 54, 50] },
    { question: '45 + 27', answer: 72, options: [70, 71, 72, 73] },
    { question: '125 + 236', answer: 361, options: [361, 351, 371, 359] }
  ],
  
  resta: [
    { question: '15 - 7', answer: 8, options: [7, 8, 9, 6] },
    { question: '23 - 14', answer: 9, options: [8, 9, 10, 11] },
    { question: '45 - 28', answer: 17, options: [16, 17, 18, 15] },
    { question: '56 - 39', answer: 17, options: [16, 17, 18, 19] },
    { question: '67 - 42', answer: 25, options: [24, 25, 26, 23] },
    { question: '234 - 156', answer: 78, options: [77, 78, 79, 76] }
  ],

  multiplicacion: [
    { question: '6 × 7', answer: 42, options: [40, 41, 42, 43] },
    { question: '8 × 9', answer: 72, options: [70, 71, 72, 73] },
    { question: '12 × 5', answer: 60, options: [58, 59, 60, 61] },
    { question: '15 × 4', answer: 60, options: [58, 60, 62, 64] },
    { question: '11 × 6', answer: 66, options: [64, 65, 66, 67] },
    { question: '23 × 15', answer: 345, options: [335, 345, 355, 340] }
  ],

  division: [
    { question: '24 ÷ 6', answer: 4, options: [3, 4, 5, 6] },
    { question: '45 ÷ 9', answer: 5, options: [4, 5, 6, 7] },
    { question: '56 ÷ 8', answer: 7, options: [6, 7, 8, 9] },
    { question: '72 ÷ 9', answer: 8, options: [7, 8, 9, 10] },
    { question: '81 ÷ 9', answer: 9, options: [8, 9, 10, 11] },
    { question: '144 ÷ 12', answer: 12, options: [11, 12, 13, 14] }
  ]
};

class GameQuestions {
  constructor(mode) {
    this.mode = mode;
    this.currentQuestionIndex = 0;
    this.questions = this.getQuestions();
  }

  getQuestions() {
    if (this.mode === 'mixta') {
      return this.getMixedQuestions();
    }
    return this.shuffleQuestions(questionBank[this.mode]);
  }

  getMixedQuestions() {
    const modes = ['suma', 'resta', 'multiplicacion', 'division'];
    const mixedQuestions = [];
    
    // Seleccionar preguntas aleatorias de cada modo
    modes.forEach(mode => {
      const modeQuestions = questionBank[mode];
      const randomQuestions = this.shuffleQuestions(modeQuestions).slice(0, 2);
      mixedQuestions.push(...randomQuestions);
    });

    return this.shuffleQuestions(mixedQuestions);
  }

  shuffleQuestions(questions) {
    const shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  nextQuestion() {
    this.currentQuestionIndex++;
    return this.currentQuestionIndex < this.questions.length;
  }

  shuffleOptions(question) {
    const options = [...question.options];
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
  }

  getProgress() {
    return {
      current: this.currentQuestionIndex + 1,
      total: this.questions.length
    };
  }
}

export default GameQuestions; 