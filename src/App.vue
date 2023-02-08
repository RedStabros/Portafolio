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
    class="text-center h-full w-full px-8 pt-16 pb-4 bg-secondary-600 dark:bg-primary-100 relative"
  >
    <div class="flex justify-between">
      <div class="text-primary-300 left-14 top-4 absolute text-2xl">
        &lt; MauroSG />
      </div>
      <button
        class="w-24 py-1 px-2 rounded-full m-4 right-14 top-1 absolute bg-secondary-200 dark:text-secondary-400 dark:bg-primary-200 text-primary-300 hover:animate-pulse active:animate-ping duration-500"
        @click="changeDarkMode"
      >
        Change
      </button>
    </div>
    <div
      class="text-center h-full w-full px-8 py-16 bg-primary-100 dark:bg-secondary-500 rounded-md"
    >
      <MainComponent msg="< MauroSG />" />
      <RouterView />
    </div>
  </main>
  <footer class="bg-secondary-600 dark:bg-primary-100 text-white text-center pb-4">
    <p class="">With love from Colombia © 2023</p>
  </footer>
</template>
