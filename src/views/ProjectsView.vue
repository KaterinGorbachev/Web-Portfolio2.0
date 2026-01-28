<template>
  <section class="flex flex-col mt-[80px]">
    <h1 class="text-2xl font-[Roboto_Slab] uppercase tracking-wide w-full p-8 text-start lg:text-center">Projects</h1>
    <hr>
    <!--v-for="project, index in projects" :key="index"-->
    <div v-for="project, index in projects" :key="index">
       <ProjectCard
        v-for="project, index in projects" :key="index"
        :title="project?.title"
        :description="project?.description"
        :video="project?.video"
        :date="project?.date"
        :image="project?.image"
      />
      <!-- <div v-for="link, index in project.video" :key="index" >
        <iframe  width="560" height="315" :src="link" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      </div> -->

      <hr>
    </div>


  </section>
  <section class="relative flex flex-col h-screen lg:m-h-screen pt-[10vh] bg-[#a2dffd]">
    <p class="text-xl font-[Roboto_Slab] uppercase tracking-wide w-full px-8 lg:text-start text-center text-gray-500">next page</p>
    <router-link
      to="/studies"
      class="text-2xl font-[Roboto_Slab] uppercase tracking-wide w-full px-8 pb-8 lg:text-start text-center transition-all delay-100 hover:font-bold"
      >Studies & Experience ></router-link
    >
    <hr>
    <div class="flex flex-col lg:flex-row px-8 py-8 gap-[3rem] justify-between items-start lg:items-center">
      <div class="flex">
        <p class="font-[EB_Garamond] text-2xl text-start">Contacts: </p>
        <p>{{ about?.contacts }}</p>
      </div>
      <div class="flex">
        <a href="https://youtube.com/@mrnbrsv?si=mgk6vTcKHSLus5Nj">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] cursor-pointer"><path d="M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z"/></svg>



        </a>

      </div>
      <hr>

    </div>
    <p class="mt-auto p-8 text-gray-500 text-center lg:text-start">&copy;Copyright Marina Borisova. All rights reserved, Saint-Petersburg, 2025.</p>
  </section>
</template>

<script setup>
import { getInfo } from '@/services/administrateinfo'
import { onMounted, ref } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'

let projects = ref([])
let dataAbout = ref([])
let about = ref({})

onMounted(async () => {
  const response = await getInfo('projects')
  if(response.ok){
    projects.value = response.data
    console.log(projects);


  }

  dataAbout.value = await getInfo('about')
  if (dataAbout.value.ok) {
    about.value = dataAbout.value.data[0]
  }


})
</script>

<style></style>

