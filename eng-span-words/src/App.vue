<script >
import { store } from './store.js';
import translate from "translate";
import randomWords from 'random-words';

// translate.engine = "deepl";
// translate.key = process.env.DEEPL_KEY;




export default {
  data() {
    return {
      store
    }
  },
  methods: {
    async generateNewWord() {
      this.store.englishWord = randomWords();
      this.store.spanishWord = await translate(this.store.englishWord, "es");
    }
  }
}
</script>

<template>
  <div>{{ this.store.englishWord }}</div>
  <div>{{ this.store.spanishWord }}</div>
  <div @click="generateNewWord">Cick me</div>
</template>

<style scoped>

</style>
