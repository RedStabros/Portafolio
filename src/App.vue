<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import MainComponent from "./components/MainComponent.vue";

import SvgIcon from "@jamescoyle/vue-icon";
import { mdiHeartCircleOutline } from "@mdi/js";

defineProps<{
  msg: string;
}>();

const changeDarkMode = () => {
  document.documentElement.classList.toggle("dark");
};
</script>

<template>
  <main
    class="text-center h-full w-full px-8 pt-16 pb-4 bg-secondary-600 dark:bg-primary-100 relative items-center justify-center"
  >
    <div class="flex justify-between">
      <div
        class="text-primary-300 dark:text-primary-600 left-14 top-4 absolute text-2xl"
      >
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
      class="bg-primary-600 dark:bg-red-800 rounded-md -inset-0.5 absolute mx-8 mt-16 mb-4 blur"
    ></div>
    <div
      class="relative text-center h-full w-full px-8 py-16 bg-primary-100 dark:bg-secondary-500 rounded-md"
    >
      <MainComponent msg="< MauroSG />" />
      <RouterView />
    </div>
  </main>
  <footer
    class="bg-secondary-600 dark:bg-primary-100 text-white text-center pb-4 dark:text-secondary-500 flex items-center justify-center"
  >
    <p class="flex items-center justify-center">
      From Colombia with love
      <svg-icon
        type="mdi"
        :path="mdiHeartCircleOutline"
        class="w-5 h-5 ml-4 mt-1 hover:text-red-700 text-red-400 transition-all cursor-pointer duration-300 hover:animate-ping mr-3"
      />
        © 2023
    </p>
  </footer>
</template>
