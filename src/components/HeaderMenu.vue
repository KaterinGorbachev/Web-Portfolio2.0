<template>
  <header
    class="pt-6 border-gray-200 pb-4 flex justify-center items-center bg-white/75 backdrop-blur-sm fixed inset-x-0 top-0 z-50 lg:text-[#efefef] text-black hover:bg-white hover:text-black duration-300 ease-in-out"
  >
    <nav class="w-[80%] flex justify-start gap-2 items-center lg:justify-end">
      <!-- Hamburger Button (Mobile) -->
      <button
        @click="isOpen = !isOpen"
        class="text-black lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none cursor-pointer"
      >
        <span
          :class="{ 'rotate-45 translate-y-2': isOpen }"
          class="block w-8 h-0.5 bg-current transition-all duration-300"
        ></span>
        <span
          :class="{ 'opacity-0': isOpen }"
          class="block w-8 h-0.5 bg-current transition-all duration-300"
        ></span>
        <span
          :class="{ '-rotate-45 -translate-y-2': isOpen }"
          class="block w-8 h-0.5 bg-current transition-all duration-300"
        ></span>
      </button>
      <div class="flex items-center justify-center">
          <!-- Menu Links -->
        <div
          :class="isOpen ? 'h-screen opacity-100' : 'max-h-0  opacity-0 lg:opacity-100'"
          class="px-8 absolute top-full left-0 w-full bg-white overflow-hidden transition-all duration-300 ease-in-out lg:static lg:max-h-none lg:flex lg:space-x-6 lg:bg-transparent pt-8 lg:pt-0"
        >
          <router-link
            to="/"
            class="block py-3 lg:py-0 lg:text-[14px]  text-xl transition-all delay-100 hover:font-bold font-[Roboto_Slab] uppercase tracking-wide"
            @click="isOpen = false"
          >
            About
          </router-link>
          <router-link
            to="/studies"
            class="block py-3 lg:py-0 lg:text-[14px] text-xl transition-all delay-100 hover:font-bold font-[Roboto_Slab] uppercase tracking-wide"
            @click="isOpen = false"
          >
            Studies & Experience
          </router-link>
          <router-link
            to="/projects"
            class="block py-3 lg:py-0 lg:text-[14px] text-xl transition-all delay-100 hover:font-bold font-[Roboto_Slab] uppercase tracking-wide"
            @click="isOpen = false"
          >
            Projects
          </router-link>
        </div>

        <!-- Logo  -->

        <h2
          class="hidden lg:block text-[14px] text-black font-[Roboto_Slab] uppercase tracking-wide"
        >
          Menu
        </h2>


      </div>


    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<style></style>
