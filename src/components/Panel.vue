<template>
  <!-- use a theme provider with an unique theme name, so it won't be override by the host app and will keep required styles that don't need to be overriden -->
  <v-theme-provider theme="remote-light">
    <v-container fluid>
      <v-expand-x-transition>
        <v-responsive
          v-show="token !== null"
          width="fit-content"
        >
          <v-alert
            class="text-no-wrap"
            type="success"
            dismissible
            :text="token"
            @click="token = undefined"
          ></v-alert>
        </v-responsive>
      </v-expand-x-transition>

      <v-defaults-provider :defaults="defaults">
        <div class="d-flex flex-column ga-3">
          <v-card
            subtitle="vCard"
            title="Title"
          ></v-card>
          <v-sheet class="testing-scoped-class">
            Some text inside a sheet
          </v-sheet>
          <div class="testing-scoped-class">Div with custom scoped class</div>
          <slot
            name="remote-slot"
            :generated-token="token"
          />
          <v-divider />
          <v-btn
            color="primary"
            @click="$emit('click', 'string from the remote app click event.')"
            icon="mdi-check-circle"
          />
          <v-btn
            color="primary"
            text="Get Access Token"
            @click="callGetAccessToken"
          />
        </div>
      </v-defaults-provider>
    </v-container>
  </v-theme-provider>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

defineEmits<{ click: [string] }>();
const props = defineProps<{
  getAccessToken: () => Promise<string>;
}>();

const token = ref<string | undefined>(undefined);
async function callGetAccessToken() {
  try {
    token.value = await props.getAccessToken();
  } catch (error) {
    console.log({ error });
  }
}

const defaults = ref({
  VCard: {
    color: "secondary",
  },
  VSheet: {
    color: "primary",
    rounded: "xl",
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
