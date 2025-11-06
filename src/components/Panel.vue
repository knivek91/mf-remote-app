<template>
  <h1>Is this rendering an h1?</h1>
  <div class="some-class">In theory a Panel will be displayed here!.</div>
  <p>this is to test Fragments</p>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
console.log("log a console just to test this out");

onMounted(() => {
  console.log("onMounted ran, right?");
});
</script>

<style scoped>
.some-class {
  background-color: bisque;
  color: #999;
  padding: 2rem;
  border: 1px dashed green;
}
</style>
