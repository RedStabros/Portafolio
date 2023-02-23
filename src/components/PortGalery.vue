<template>
  <!--<div class="border-t-2 border-gray-800 dark:border-gray-300 mt-8 pb-8 bg-[url('/bg.jpg')] mb-10 mt-20">-->
  <div class="dark:border-gray-300 mt-8 pb-8 bg-gradient-to-r from-primary-500 to-secondary-400 mb-10 pt-4 rounded-md dark:from-primary-200 dark:to-secondary-200">
    <h2
      class="mt-8 mb-8 text-primary-100 text-4xl relative dark:text-primary-700 font-bold"
    >
      Project Gallery
    </h2>
    <!--<img
      src="/bg.jpg"
      alt=""
      class="object-cover h-96 w-full rounded blur-sm"
    />-->
    <div
      class="flex-wrap inline-grid lg:grid-cols-3 md:grid-cols-1 md:flex-col md:space-y-4 lg:space-x-8 items-center justify-between"
    >
      <div class="bg-primary-200 w-96 h-64 rounded-lg opacity-100 md:mt-4 md:ml-8 xs:mt-0 xs:ml-0">
        <p
          class="opacity-100 text-lg mt-2 border-b-2 border-primary-700 flex justify-center"
        >
          Web movies
          <a
            href="https://github.com/RedStabros/Movie-page-react"
            target="_blank"
            ><svg-icon
              type="mdi"
              :path="mdiGithub"
              class="w-5 h-5 ml-4 mt-1 hover:text-secondary-300 text-secondary-600 transition-all cursor-pointer duration-300 hover:animate-spin"
            ></svg-icon
          ></a>
        </p>
        <div class="mt-2">
          <section
            class="flex pt-1 gap-2 snap-x overflow-hidden h-36 w-11/12 overflow-x-auto font-semibold mx-4 rounded"
          >
            <div class="shrink-0 snap-center overflow-hidden flex rounded">
              <img src="/movies1.png" class="px-1 h-28 rounded" />
              <img src="/movies2.png" class="px-1 h-28 rounded" />
              <img src="/movies3.png" class="px-1 h-28 rounded" />
            </div>
          </section>
          <p>Used technologies</p>
          <div
            class="w-80 h-8 flex m-auto space-x-3 bg-primary-600 text-xs rounded-xl px-1 pt-1.5"
          >
            <div
              class="bg-transparent hover:bg-yellow-500 text-yellow-300 hover:text-yellow-800 h-5 w-20 px-1 border border-yellow-300 hover:border-yellow-800 rounded-xl duration-300"
            >
              Javascript
            </div>
            <div
              class="bg-transparent hover:bg-orange-500 text-orange-300 hover:text-orange-800 h-5 w-20 px-1 border border-orange-500 hover:border-orange-800 rounded-xl duration-300"
            >
              HTML
            </div>
            <div
              class="bg-transparent hover:bg-primary-500 text-primary-300 hover:text-primary-800 h-5 w-20 px-1 border border-primary-500 hover:border-primary-800 rounded-xl duration-300"
            >
              CSS
            </div>
            <div
              class="bg-transparent hover:bg-green-500 text-green-300 hover:text-green-800 h-5 w-20 px-1 border border-green-500 hover:border-green-800 rounded-xl duration-300"
            >
              React
            </div>
            <div
              class="bg-transparent hover:bg-secondary-500 text-primary-100 hover:text-secondary-100 h-5 w-20 px-1 border border-secondary-300 hover:border-secondary-600 rounded-xl duration-300"
            >
              Jsx
            </div>
            <div
              class="bg-transparent hover:bg-red-500 text-red-300 hover:text-red-800 h-5 w-20 px-1 border border-red-500 hover:border-red-800 rounded-xl duration-300"
            >
              Hooks
            </div>
          </div>
        </div>
      </div>
      <div class="bg-primary-200 w-96 h-64 rounded-lg opacity-100">
        <p
          class="opacity-100 text-lg mt-2 border-b-2 border-primary-700 flex justify-center"
        >
          App CashFlow<a
            href="https://github.com/RedStabros/CashFlow"
            target="_blank"
            ><svg-icon
              type="mdi"
              :path="mdiGithub"
              class="w-5 h-5 ml-4 mt-1 hover:text-secondary-300 text-secondary-600 transition-all cursor-pointer duration-300 hover:animate-spin"
            ></svg-icon
          ></a>
        </p>
        <div class="mt-2">
          <section
            class="flex pt-1 gap-2 snap-x overflow-hidden h-36 w-11/12 overflow-x-auto font-semibold mx-4 rounded"
          >
            <div class="shrink-0 snap-center overflow-hidden flex rounded">
              <img
                src="/cash0.png"
                class="px-1 h-28 w-20 object-cover rounded"
              />
              <img
                src="/cash1.png"
                class="px-1 h-28 w-20 object-cover rounded"
              />
              <img
                src="/cash2.png"
                class="px-1 h-28 w-20 object-cover rounded"
              />
              <img
                src="/cash3.png"
                class="px-1 h-28 w-20 object-cover rounded"
              />
              <img
                src="/cash4.png"
                class="px-1 h-28 w-20 object-cover rounded"
              />
              <img
                src="/cash5.png"
                class="px-1 h-28 w-20 object-cover rounded"
              />
            </div>
          </section>
          <p>Used technologies</p>
          <div
            class="w-80 h-8 flex m-auto space-x-3 bg-primary-600 text-xs rounded-xl px-1 pt-1.5"
          >
            <div
              class="bg-transparent hover:bg-yellow-500 text-yellow-300 hover:text-yellow-800 h-5 w-20 px-1 border border-yellow-300 hover:border-yellow-800 rounded-xl duration-300"
            >
              Javascript
            </div>
            <div
              class="bg-transparent hover:bg-orange-500 text-orange-300 hover:text-orange-800 h-5 w-20 px-1 border border-orange-500 hover:border-orange-800 rounded-xl duration-300"
            >
              HTML
            </div>
            <div
              class="bg-transparent hover:bg-primary-500 text-primary-300 hover:text-primary-800 h-5 w-20 px-1 border border-primary-500 hover:border-primary-800 rounded-xl duration-300"
            >
              CSS
            </div>
            <div
              class="bg-transparent hover:bg-green-500 text-green-300 hover:text-green-800 h-5 w-20 px-1 border border-green-500 hover:border-green-800 rounded-xl duration-300"
            >
              VueJs
            </div>
            <!--<div class="bg-transparent hover:bg-secondary-500 text-primary-100 hover:text-secondary-100 h-5 w-20 px-1 border border-secondary-300 hover:border-secondary-600 rounded-xl">Jsx</div>
        <div class="bg-transparent hover:bg-red-500 text-red-300 hover:text-red-800 h-5 w-20 px-1 border border-red-500 hover:border-red-800 rounded-xl">Hooks</div>-->
          </div>
        </div>
      </div>
      <div class="bg-primary-200 w-96 h-64 rounded-lg opacity-100">
        <p
          class="opacity-100 text-lg mt-2 border-b-2 border-primary-700 flex justify-center"
        >
          Weather App<a
            href="https://github.com/RedStabros/WeatherAppVueJs"
            target="_blank"
            ><svg-icon
              type="mdi"
              :path="mdiGithub"
              class="w-5 h-5 ml-4 mt-1 hover:text-secondary-300 text-secondary-600 transition-all cursor-pointer duration-300 hover:animate-spin"
            ></svg-icon
          ></a>
        </p>
        <div class="mt-2">
          <section
            class="flex pt-1 gap-2 snap-x overflow-hidden h-36 w-11/12 overflow-x-auto font-semibold mx-4 rounded"
          >
            <div
              class="shrink-0 snap-center overflow-hidden flex rounded"
              
            >
              <img
                src="/weather1.png"
                class="px-1 h-28 w-20 object-cover rounded"
              />
              <img
                src="/weather2.png"
                class="px-1 h-28 w-20 object-cover rounded"
              />
              <img
                src="/weather3.png"
                class="px-1 h-28 w-20 object-cover rounded"
              />
              <img
                src="/weather4.png"
                class="px-1 h-28 w-20 object-cover rounded"
              />
              <img
                src="/weather5.png"
                class="px-1 h-28 w-20 object-cover rounded"
              />
              <img
                src="/weather6.png"
                class="px-1 h-28 w-20 object-cover rounded"
              />
              <img
                src="/weather7.png"
                class="px-1 h-28 w-20 object-cover rounded"
              />
              <img
                src="/weather8.png"
                class="px-1 h-28 w-20 object-cover rounded"
              />
            </div>
          </section>
          <p>Used technologies</p>
          <div
            class="w-80 h-8 flex m-auto space-x-3 bg-primary-600 text-xs rounded-xl px-1 pt-1.5"
          >
            <div
              class="bg-transparent hover:bg-yellow-500 text-yellow-300 hover:text-yellow-800 h-5 w-20 px-1 border border-yellow-300 hover:border-yellow-800 rounded-xl duration-300"
            >
              Javascript
            </div>
            <div
              class="bg-transparent hover:bg-orange-500 text-orange-300 hover:text-orange-800 h-5 w-20 px-1 border border-orange-500 hover:border-orange-800 rounded-xl duration-300"
            >
              HTML
            </div>
            <div
              class="bg-transparent hover:bg-primary-500 text-primary-300 hover:text-primary-800 h-5 w-20 px-1 border border-primary-500 hover:border-primary-800 rounded-xl duration-300"
            >
              CSS
            </div>
            <div
              class="bg-transparent hover:bg-green-500 text-green-300 hover:text-green-800 h-5 w-20 px-1 border border-green-500 hover:border-green-800 rounded-xl duration-300"
            >
              VueJs
            </div>
            <div
              class="bg-transparent hover:bg-secondary-500 text-white hover:text-secondary-50 h-5 w-20 px-1 border border-secondary-500 hover:border-secondary-400 rounded-xl duration-300"
            >
              Tailwind
            </div>
            <!--<div class="bg-transparent hover:bg-secondary-500 text-primary-100 hover:text-secondary-100 h-5 w-20 px-1 border border-secondary-300 hover:border-secondary-600 rounded-xl">Jsx</div>
        <div class="bg-transparent hover:bg-red-500 text-red-300 hover:text-red-800 h-5 w-20 px-1 border border-red-500 hover:border-red-800 rounded-xl">Hooks</div>-->
          </div>
        </div>
      </div>
    </div>
  </div>

  <template>
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-10" @close="open = false">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </TransitionChild>

        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div
            class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
          >
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel
                class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
              >
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div class="sm:flex sm:items-start">
                    <div
                      class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-300 sm:mx-0 sm:h-10 sm:w-10"
                    >
                      <svg-icon
                        type="mdi"
                        :path="mdiImageAlbum"
                        class="w-6 h-6 hover:text-secondary-300 text-secondary-500"
                      ></svg-icon>
                    </div>
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <DialogTitle
                        as="h3"
                        class="text-lg font-medium leading-6 text-gray-900"
                        >Gallery
                      </DialogTitle>
                      <div class="mt-2">
                        <ModalGallery />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
                >
                  <!--<button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                  @click="open = false"
                >
                  Deactivate
                </button>-->
                  <button
                    type="button"
                    class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    @click="open = false"
                    ref="cancelButtonRef"
                  >
                    Cancel
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>
</template>

<script setup lang="ts">
//icons
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiGithub } from "@mdi/js";
import { mdiLinkedin } from "@mdi/js";
import { mdiWhatsapp } from "@mdi/js";
import { mdiGmail } from "@mdi/js";
import { mdiFacebook } from "@mdi/js";
import { mdiImageAlbum } from "@mdi/js";

//UI
import ModalGallery from "./ModalGallery.vue";
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

const open = ref(false);
</script>
