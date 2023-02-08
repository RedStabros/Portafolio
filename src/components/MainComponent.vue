<script setup lang="ts">
import skills from "../components/SkillsProg.vue";
import Gallery from "../components/PortGalery.vue";
import Contact from "../components/ContactForm.vue";
import Experience from "../components/ExperienceProfile.vue";

defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="space-y-8">
    <h1
      class="font-bold text-primary-800 dark:text-primary-100 text-5xl capitalize"
    >
      {{ msg }}
    </h1>
    <h3
      class="text-primary-900 pt-8 pb-4 font-bold text-3xl dark:text-primary-50 capitalize"
    >
      digital portfolio
    </h3>
    <a
      href="#"
      target="_blank"
      rel="noopener"
      class="text-secondary-300 px-2 dark:text-primary-500 font-bold"
      >CV</a
    >
    <a
      href="#"
      target="_blank"
      rel="noopener"
      class="text-secondary-300 px-2 dark:text-primary-500 font-bold"
      >GitHub</a
    >
  </div>
  <div class="text-primary-900 pt-8 space-y-4 capitalize dark:text-primary-100">
    <h1>¿who I am?</h1>
    <p class="w-1/2 text-justify mx-auto pb-2">
      Passionate about technology, with experience of more than 10 years in
      hardware, I jumped to programming, I am currently working on Frontend,
      using VueJs and tailwind, becoming passionate about web development
    </p>
  </div>
  <skills />
  <Experience />
  <Gallery />
  <Contact />
</template>
