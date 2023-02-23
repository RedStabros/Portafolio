<template>
  <div
    class="border-t border-gray-800 dark:border-gray-300 pt-6 pb-12"
  >
    <h2
      class="mt-8 text-primary-600 text-4xl relative dark:text-primary-400 font-bold mb-4"
    >
      Experience
    </h2>
    <div class="flex flex-1 flex-wrap justify-center">
      <Card />
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from "../components/CardInfo.vue";
</script>
