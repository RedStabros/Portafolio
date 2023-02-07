<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import MainComponent from "./components/MainComponent.vue";

defineProps<{
  msg: string;
}>();

const changeDarkMode = () => {
  document.documentElement.classList.toggle("dark");
};
</script>

<template>
  <main
    class="text-center h-full w-full px-8 py-16 bg-secondary-600 dark:bg-primary-200 relative"
  >
    <div class="flex justify-between">
      <div class="text-primary-200 left-14 top-4 absolute text-2xl">
        &lt; MauroSG/ >
      </div>
      <button
        class="w-24 py-1 px-2 rounded-lg m-4 right-14 top-1 absolute bg-secondary-200 dark:text-secondary-400 dark:bg-primary-100 text-primary-200"
        @click="changeDarkMode"
      >
        DarKMode
      </button>
    </div>
    <div
      class="text-center h-full w-full px-8 py-16 bg-primary-200 dark:bg-secondary-500"
    >
      <MainComponent msg="<MauroSG/>" />
      <RouterView />
    </div>
  </main>
</template>
