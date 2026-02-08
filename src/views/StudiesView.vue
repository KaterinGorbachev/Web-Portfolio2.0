<template>
  <section class="flex flex-col mt-[80px]">
    <h1
      class="tetx-xl lg:text-2xl font-[Roboto_Slab] uppercase tracking-wide w-full p-8 text-start lg:text-center"
    >
      Studies & Experience
    </h1>
    <hr />
    <div v-for="(data, index) in datos" :key="index">
      <StudyCard
        :image="data?.image"
        :title="data?.title"
        :date="data?.date"
        :description="data?.description"
      />
      <hr />
    </div>

    <div v-for="(data, index) in experience" :key="index">
      <StudyCard
        :image="data?.image"
        :title="data?.title"
        :date="data?.date"
        :description="data?.description"
      />
      <hr />
    </div>
  </section>
  <section class="relative flex flex-col min-h-screen pt-[10vh] bg-[#a2dffd]">
    <p
      class="text-md lg:text-xl font-[Roboto_Slab] uppercase tracking-wide w-full px-8  text-center text-gray-500"
    >
      next page
    </p>
    <router-link
      to="/"
      class="text-xl lg:text-2xl font-[Roboto_Slab] uppercase tracking-wide w-full px-8 pb-8  text-center transition-all delay-100 hover:font-bold"
      >About me ></router-link
    >
    <hr />
    <div
      class="flex flex-col lg:flex-row px-8 py-8 gap-[3rem] justify-between items-start lg:items-center"
    >
      <div class="flex flex-col">
        <p class="font-[EB_Garamond] text-2xl text-start">Contacts:</p>
        <p>{{ about?.contacts }}</p>
      </div>
      <div class="flex">
        <a href="https://youtube.com/@mrnbrsv?si=mgk6vTcKHSLus5Nj">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            class="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] cursor-pointer"
          >
            <path
              d="M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z"
            />
          </svg>
        </a>
      </div>
      <hr />
    </div>
    <p class="mt-auto p-8 text-gray-500 text-center lg:text-start">
      &copy; Marina Borisova. All rights reserved, Saint-Petersburg, 2025. All illustrations,
      animations, characters, designs, and visual content on this website are the exclusive property
      of Marina Borisova and are protected by international copyright laws. Unauthorized use,
      reproduction, modification, distribution, or display of any artwork without prior written
      permission is strictly prohibited. The artwork on this website may not be used for AI
      training, machine learning datasets, NFTs, or blockchain-related projects without explicit
      written permission from the artist. |
      <i
        >Web site made and designed by
        <a
          href="https://www.linkedin.com/in/katerina-gorbacheva-93717324a/"
          class="underline underline-offset-8 hover:text-gray-700 hover:decoration-gray-700 transition-colors duration-200"
          >Ekaterina Gorbacheva</a
        >.</i
      >
    </p>
  </section>
</template>

<script setup>
import { getInfo } from '@/services/administrateinfo'
import { onMounted, ref } from 'vue'
import StudyCard from '@/components/StudyCard.vue'
let datos = ref([])
let experience = ref([])
let dataAbout = ref([])
let about = ref({})

onMounted(async () => {
  const response = await getInfo('studies')
  if (response.ok) {
    datos.value = response.data
  }

  const response_experience = await getInfo('experience')
  if (response_experience.ok) {
    experience.value = response_experience.data
  }

  dataAbout.value = await getInfo('about')
  if (dataAbout.value.ok) {
    about.value = dataAbout.value.data[0]
  }
})
</script>

<style></style>
