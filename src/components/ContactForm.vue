<template>
  <div
    class="border-t border-gray-800 dark:border-gray-300 mt-4 border-b pb-8"
  >
    <h2
      class="mt-8 text-primary-600 text-4xl relative dark:text-primary-400 font-bold"
    >
      Contact and Links
    </h2>
    <div class="">
      <p class="mt-6 text-primary-800 dark:text-primary-100">
        Phone: <br />
        <a
          href="https://wa.me/+573224124297"
          class="cursor-pointer hover:text-secondary-200 duration-200"
          target="_blank"
          >+57 3224124297</a
        >
        <br />
        Repository: <br />
        <a
          href="https://github.com/RedStabros"
          class="cursor-pointer hover:text-secondary-200 duration-200"
          target="_blank"
          >https://github.com/RedStabros</a
        >
        <br />
        Email: <br />
        <a href="mailto:udcarkangel@gmail.com" class="cursor-pointer hover:text-secondary-200 duration-200">udcarkangel@gmail.com</a>
         <br />
        LinkedIn: <br />
        <a
          href="https://www.linkedin.com/in/maurosaldagarcia/"
          class="cursor-pointer hover:text-secondary-200 duration-200"
          target="_blank"
          >https://www.linkedin.com/in/maurosaldagarcia/</a
        >
        <br />
        English Level: <br />
        <a
          href="https://www.efset.org/cert/uix5px"
          class="cursor-pointer hover:text-secondary-200 duration-200"
          target="_blank"
          >https://www.efset.org/cert/uix5px</a
        >
        <br />
      </p>
      <div class="justify-evenly flex mt-16">
        <!--<svg-icon type="mdi" :path="mdiGmail" class="w-10 h-10"></svg-icon>-->
        <a
          href="https://github.com/RedStabros"
          class="cursor-pointer hover:text-secondary-200 duration-200"
          target="_blank"
          ><svg-icon type="mdi" :path="mdiGithub" class="w-10 h-10"></svg-icon
        ></a>
        <a
          href="https://www.linkedin.com/in/maurosaldagarcia/"
          class="cursor-pointer hover:text-secondary-200 duration-200"
          target="_blank"
          ><svg-icon type="mdi" :path="mdiLinkedin" class="w-10 h-10"></svg-icon
        ></a>
        <!--<svg-icon type="mdi" :path="mdiFacebook" class="w-10 h-10"></svg-icon>-->
        <a
          href="https://wa.me/+573224124297"
          class="cursor-pointer hover:text-secondary-200 duration-200"
          target="_blank"
          ><svg-icon type="mdi" :path="mdiWhatsapp" class="w-10 h-10">
          </svg-icon
        ></a>
      </div>
    </div>
  </div>
</template>

<script setup>
//icons
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiGithub } from "@mdi/js";
import { mdiLinkedin } from "@mdi/js";
import { mdiWhatsapp } from "@mdi/js";
import { mdiGmail } from "@mdi/js";
import { mdiFacebook } from "@mdi/js";
</script>
