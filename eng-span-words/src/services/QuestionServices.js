import { store } from "../store";
import randomWords from "random-words";
import translate from "translate";

export default {
  async goToNext() {
    store.englishWord = randomWords();
    store.spanishWord = await translate(store.englishWord, "es");

    let newChoices = [{ word: store.spanishWord, correct: true }];
    for (let i = 0; i < 2; i++) {
      newChoices.push({ word: await translate(randomWords(), "es"), correct: false });
    }

    store.answerChoices = this.shuffle(newChoices);
  },
  resetChoices() {
    store.answerChoices = null;
  },
  shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  },
  checkAnswer(word) {
    let correctChoice = store.answerChoices.find((item) => {
      return item.correct;
    });
    if (word === correctChoice.word) {
      this.changeStateToCorrect(correctChoice);
    } else {
      let incorrectChoice = store.answerChoices.find((item) => {
        return item.word === word;
      });
      this.changeStateToIncorrect(correctChoice, incorrectChoice);
    }
  },
  changeStateToCorrect(correctChoice) {
    correctChoice.green = true;
  },
  changeStateToIncorrect(correctChoice, incorrectChoice) {
    correctChoice.green = true;
    incorrectChoice.red = true;
  },
};
