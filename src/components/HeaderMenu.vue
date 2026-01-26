<template>
  <header class="pt-7 py-0.5 lg:p-7 w-full flex justify-center items-center backdrop-blur-md sticky top-0 z-50 text-[#efefef] hover:bg-white hover:text-black duration-300 ease-in-out">
    <nav class="w-[80%] flex justify-between items-center">
      <!-- Logo / About Me Link -->


      <!-- Hamburger Button (Mobile) -->
      <button
        @click="isOpen = !isOpen"
        class="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none cursor-pointer"
      >
        <span :class="{'rotate-45 translate-y-2': isOpen}" class="block w-8 h-0.5 bg-current transition-all duration-300"></span>
        <span :class="{'opacity-0': isOpen}" class="block w-8 h-0.5 bg-current transition-all duration-300"></span>
        <span :class="{'-rotate-45 -translate-y-2': isOpen}" class="block w-8 h-0.5 bg-current transition-all duration-300"></span>
      </button>

      <!-- Menu Links -->
      <div
        :class="{'max-h-0 overflow-hidden': !isOpen, 'max-h-96': isOpen}"
        class="lg:flex lg:space-x-6 flex-col lg:flex-row transition-all duration-300 ease-in-out absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent text-start px-1 py-5 lg:text-left lg:overflow-visible"

      >
        <router-link
          to="/"
          class="text-[14px] lg:text-xl transition-all delay-100 hover:font-bold font-[Roboto_Slab] uppercase tracking-wide"
        >
          About me
        </router-link>
        <router-link
          to="/studies"
          class="block py-3 lg:py-0 text-[14px] lg:text-xl transition-all delay-100 hover:font-bold font-[Roboto_Slab] uppercase tracking-wide"
          @click="isOpen = false"
        >
          Studies & Experience
        </router-link>
        <router-link
          to="/projects"
          class="block py-3 lg:py-0 text-[14px] lg:text-xl transition-all delay-100 hover:font-bold font-[Roboto_Slab] uppercase tracking-wide"
          @click="isOpen = false"
        >
          Projects
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<style></style>
