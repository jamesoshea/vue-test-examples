<template>
  <div>
    <div v-for="(thing, index) in Array(2)" :key="index">
      <div data-test="fake-table-row" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FakeComponent'
};
</script>

<style>
</style>
