<template>
  <div class="vte__cool-card">
    <p data-test="cool-card-div" v-text="'hello I am a card :)'" />
    <p>Current Total:</p>
    <p>{{ currentTotal }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'CoolCard',
  props: {
    wow: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      buzzword: ''
    };
  },
  computed: {
    ...mapGetters({
      currentTotal: 'basket/currentTotal'
    }),
    someComputedProperty() {
      return `${this.buzzword} is very big`;
    }
  },
  methods: {
    someMethod(arg1, arg2) {
      return arg1 + arg2;
    }
  }
};
</script>

<style>
.vte__cool-card {
  height: 20vh;
  width: 40vw;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0px 1px 1px #000;
}
</style>
