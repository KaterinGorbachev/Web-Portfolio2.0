<template>
  <section class="relative h-screen">
    <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover">
      <source
        src="/src/videos/CopyrightMarinaBorisovaAllRightsReservedSaintPetersburgforAbout.MP4"
        type="video/mp4"
      />
    </video>

    <div class="absolute inset-0 bg-black/30"></div>

    <div class="relative z-10 flex flex-col h-full items-center justify-center gap-2">
      <h1 class="text-6xl font-[Roboto_Slab] text-white uppercase tracking-widest text-center">
        {{about?.title || 'Marina Borisova'}}
      </h1>
      <p class="font-[EB_Garamond] text-xl w-full text-center text-white">
        Creative artist, illustrator, motion designer, animator, dreamer...
      </p>
    </div>
  </section>
  <section class="relative m-[3rem]">
    <div class="flex flex-col-reverse lg:flex-row w-full">
      <div class="flex flex-col gap-1 w-full lg:w-[60%] items-start justify-start">
        <h2 class="text-2xl font-[Roboto_Slab] uppercase tracking-wide w-full text-start">
          About me
        </h2>
        <div class="flex flex-col gap-2 items-start justify-start">
          <p
            v-for="(desc, index) in about?.description"
            :key="index"
            class="font-[EB_Garamond] text-xl text-start w-[90%]"
          >
            {{ desc }}
          </p>
        </div>
        <div><p class="font-[EB_Garamond] text-2xl text-start mt-[2rem]">Tools & Skills:</p>
          <p>{{ about?.tools }}</p>
        </div>
        <div><p class="font-[EB_Garamond] text-2xl text-start mt-[2rem]">Contacts:</p>
          <p>{{ about?.contacts }}</p>
        </div>
      </div>
      <div class="lg:w-[40%] w-full">
        <img src="/src/images/MarinaBorisova.jpg" alt="Marina Borisova" />
      </div>
    </div>
  </section>
  <section class="relative flex flex-col ">
    <hr>
    <router-link to="/studies" class="text-2xl font-[Roboto_Slab] uppercase tracking-wide w-full p-8 text-start lg:text-center">Studies & Experience</router-link>
    <hr>
    <div class="flex flex-col bg-black w-[full] pb-8 overflow-hidden">
      <h2 class="text-2xl font-[Roboto_Slab] uppercase tracking-wide w-full p-8 text-start lg:text-center text-[#efefef]">Latest projects</h2>

      <div class="mb-20 relative" v-for="project, index in projects" :key="index">
        <h3 class="absolute bottom-4 left-1/2 -translate-x-1/2 z-30
             text-xl font-[Roboto_Slab] lowercase
             bg-white/90 px-2 py-1 tracking-widest
             text-black pointer-events-none">{{ project?.title }}</h3>

        <div class="galery overflow-x-auto pb-8 " >
          <div class="flex gap-6 px-6 w-max">
            <div v-if="project?.image" class="shrink-0 w-[320px] h-[200px]" v-for="link, index in project.image" :key="index">
              <img src="" alt="" class="w-full h-full object-cover">
            </div>
            <div v-if="project?.video" v-for="link, index in project.video" :key="index" class="shrink-0 w-[320px] h-[200px]">
              <video  muted loop playsinline class="w-full h-full object-cover">
                <source
                  :src="link.slice(1, -1)"
                  type="video/mp4"
                />
              </video>

            </div>


          </div>

        </div>

      </div>

    </div>




  </section>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import { getInfo } from '@/services/administrateinfo';
let dataAbout = ref([])
let about = ref({})

let dataProjects = ref([])
let projects = ref([])

onMounted(async() =>{
  dataAbout.value = await getInfo('about')

  if(dataAbout.value.ok){
    about.value = dataAbout.value.data[0]
  }

  dataProjects.value = await getInfo('projects')
  if(dataProjects.value.ok){
    projects.value = dataProjects.value.data

  }


})


</script>

<style></style>
