import { reactive } from "vue";

export const store = reactive({
  englishWord: "Hello World",
  spanishWord: "Hola Mundo",
  answerChoices: [
    { word: "Hola Mundo", correct: true },
    { word: "Hola Luna", correct: false },
    { word: "Hola Arbol", correct: false },
  ],
});
