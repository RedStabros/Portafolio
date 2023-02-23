<template>
  <div class="flex items-center justify-center flex-1 flex-wrap md:flex-row sm:flex-col">
  <div class="bg-gray-200 rounded-md mt-6 md:w-1/3 mx-2 px-6 pt-4 pb-4 border-2 shadow sm:w-2/3 overflow-hidden h-fit">
    <h3 class="text-2xl font-semibold from-primary-300 rounded bg-gradient-to-b pb-4">Wordpress and Joomla - One year</h3>
    <div class="text-justify pt-10 sm:flex-col">
      Design, creation and administration of the website in wordpress, email management, maintenance, galleries, forums, users, templates and plugins.
      <br/>
      <br/><p class="font-semibold text-justify">www.comunidadunderground.com<br/>(site not available)</p>      
      <br/>
      <br/><p class=" text-left font-semibold">Company: Underground community<br/>(Now Corp. Ciudad Friki)</p>
      <br/>
      Year: June 2018 to June 2019
      <img src="../../public/logoCU.jpeg" alt="Logo Comunidad Underground" class="w-80 mx-auto mt-4 border-2 border-primary-300 rounded-md hover:opacity-60 duration-300">
      <p class="flex justify-center mt-3">
      Contact: <br/>
      (+57) 3014021328 - Medellín Colombia
      <a  href="https://www.facebook.com/Ciudadfrikii" target="_blank"><svg-icon type="mdi" :path="mdiFacebook" class="w-10 h-10 ml-4 text-secondary-300 hover:text-secondary-600 transition-all cursor-pointer duration-300"></svg-icon></a>
      </p>
    </div>
  </div>
  <div class="bg-gray-200 rounded-md mt-6 md:w-1/3 mx-2 px-6 pt-4 pb-4 border-2 shadow sm:w-2/3 overflow-hidden h-fit">
    <h3 class="text-2xl font-semibold from-primary-300 rounded bg-gradient-to-b pb-4">Machine learning algorithms and Frontend in VueJs</h3>
    <p class="text-justify mt-10 pb-2">
      Experience 5 months, Front-End development Jr. and machine learning algorithms, for GSC Goldensec Colombia, 
      using Javascript with the VueJs framework and the Tailwind CSS framework, taking the figma design and turning it 
      into reality, tables, galleries, API connections, authentications, downloads, overlays and layouts, under company design.
      <br/>
      <br/><p class=" text-left font-semibold">Company: Goldensec GSC - a GSS company</p>
      <br/>Date: September 2022 to February 2023 (Completion of contract March 16, 2023)
      <img src="../../public/gscLogo.jpeg" alt="Logo Comunidad Underground" class="w-520 mx-auto mt-4 border-2 border-primary-300 rounded-md hover:opacity-60 duration-300">
      <p class="flex justify-center mt-3">
        <br/>
      Contact: <br/>
      (+57) (601) 3210735 - Bogotá Colombia 
      <a  href="https://www.linkedin.com/company/goldensec-colombia-sas" target="_blank"><svg-icon type="mdi" :path="mdiLinkedin" class="w-10 h-10 ml-4 text-secondary-300 hover:text-secondary-600 transition-all cursor-pointer duration-300"></svg-icon></a>
      </p>
    </p>
  </div>
</div>
</template>

<script setup lang="ts">
//icons
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiGithub } from "@mdi/js";
import { mdiLinkedin } from "@mdi/js";
import { mdiWhatsapp } from "@mdi/js";
import { mdiGmail } from "@mdi/js";
import { mdiFacebook } from "@mdi/js";
</script>

