<script >
import { store } from './store.js';
import questionServices from "./services/QuestionServices"
// translate.engine = "deepl";
// translate.key = process.env.DEEPL_KEY;




export default {
  data() {
    return {
      store
    }
  },
  methods: {
    generateNewWord() {
      questionServices.resetChoices();
      questionServices.goToNext();
    },
    checkAnswer(event, item){
      questionServices.checkAnswer(item.word);
    }
  }
}
</script>

<template>
  <div class="main-container ">
    <div class="little-container">
      <div class="main-item main-word">{{ this.store.englishWord }}</div>
      <div class="choices">
        <div class="main-item choice"  :class="{ green: word.green, red: word.red }" v-for="word in this.store.answerChoices" @click="checkAnswer($event, word)">{{ word.word }}</div>
      </div>
      <div @click="generateNewWord" class="main-item next-button">Next</div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--vt-c-divider-dark-2);
}

.main-word {
  font-size: 3rem;
}

.next-button {
  background-color: var(--green);
  cursor: pointer;

}

.main-item {
  width: 100%;
  /* width: 600px; */
  display: flex;
  justify-content: center;
  padding: 15px;
}

.choices{
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  text-align: center;

}
.choice {
  background-color: var(--vt-c-divider-dark-2);
  margin: 10px;
  cursor: pointer;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.little-container {
  background-color: var(--vt-c-divider-dark-2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 35px;
  min-height: 500px;
  width: 600px;
}
.red{
  background-color: tomato;

}

.green{
  background-color: aquamarine;
}
</style>
