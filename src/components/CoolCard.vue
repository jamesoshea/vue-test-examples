<template>
  <div
    class="vte__cool-card"
    data-test="cool-card-div"
  >
    hello I am a card :)
  </div>
</template>

<script>
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
