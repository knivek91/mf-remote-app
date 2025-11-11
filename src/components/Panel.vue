<template>
  <v-theme-provider
    theme="remote-light"
    tag="section"
  >
    <v-container fluid>
      <v-defaults-provider :defaults="defaults">
        <v-card
          class="ma-10"
          subtitle="Subtitle"
          title="Title"
        ></v-card>
        <v-sheet class="testing-scoped-class">
          Some text inside a sheet
        </v-sheet>
        <div class="testing-scoped-class">Some text inside a sheet</div>
      </v-defaults-provider>
    </v-container>
  </v-theme-provider>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const defaults = ref({
  VCard: {
    color: "secondary",
  },
  VSheet: {
    color: "primary",
    variant: "outlined",
  },
});

console.log("log a console just to test this out");

onMounted(() => {
  console.log("onMounted ran, right?");
});
</script>

<style scoped>
.testing-scoped-class {
  background-color: bisque;
  color: #999;
  padding: 2rem;
  border: 1px dashed green;
}
</style>
