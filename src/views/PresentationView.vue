<template>
  <section class="relative h-screen">
    <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover">
      <source
        src="/videos/CopyrightmarinaborisovaallrightsreservedsaintpetersburgforaboutXS.mp4"
        type="video/mp4"
      />
    </video>

    <div class="absolute inset-0 bg-black/30"></div>

    <div class="relative z-10 flex flex-col h-full items-center justify-center gap-2">
      <h1 class="text-6xl font-[Roboto_Slab] text-white uppercase tracking-widest text-center">
        {{ about?.title || 'Marina Borisova' }}
      </h1>
      <p class="font-[EB_Garamond] text-xl w-full text-center text-white">
        Creative artist, illustrator, motion designer, animator, dreamer...
      </p>
    </div>
  </section>
  <section class="relative">
    <h2
      class="text-2xl font-[Roboto_Slab] uppercase tracking-wide w-full p-8 text-start lg:text-center">
      About me
    </h2>
    <hr>
    <div class="flex flex-col-reverse lg:flex-row w-full py-[3rem] px-[2rem]">

      <div class="flex flex-col gap-1 w-full lg:w-[60%] items-start justify-start">

        <div class="flex flex-col gap-2 items-start justify-start">
          <p
            v-for="(desc, index) in about?.description"
            :key="index"
            class="font-[EB_Garamond] text-xl text-start w-[90%]"
          >
            {{ desc }}
          </p>
        </div>
        <div>
          <p class="font-[EB_Garamond] text-2xl text-start mt-[2rem]">Tools & Skills:</p>
          <p>{{ about?.tools }}</p>
        </div>
        <div>
          <p class="font-[EB_Garamond] text-2xl text-start mt-[2rem]">Contacts:</p>
          <p>{{ about?.contacts }}</p>
        </div>
      </div>
      <div class="lg:w-[40%] w-full">
        <img src="/images/MarinaBorisova.jpg" alt="Marina Borisova" />
      </div>
    </div>
  </section>
  <section class="relative flex flex-col">
    <hr />
    <router-link
      to="/studies"
      class="text-2xl font-[Roboto_Slab] uppercase tracking-wide w-full p-8 text-start lg:text-center transition-all delay-100 hover:font-bold"
      >Studies & Experience ></router-link
    >
    <hr />
    <div class="flex flex-col bg-black w-[full] pb-8 overflow-hidden">
      <h2
        class="text-2xl font-[Roboto_Slab] uppercase tracking-wide w-full p-8 text-start lg:text-center text-[#efefef]"
      >
        Static & Motion
      </h2>

      <div>
        <div class="pt-4 relative">
          <h3
            class="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 text-xl font-[Roboto_Slab] lowercase bg-white/90 px-2 py-1 tracking-widest text-black pointer-events-none "
          >
            Abstracts
          </h3>
          <div class="galery overflow-x-auto pb-8">
            <div class="flex gap-2 px-6 w-max">
              <div
                class="shrink-0 w-[320px] h-[200px]"
              >
                <video autoplay muted loop playsinline class="w-full h-full object-cover">
                  <source src="/videos/CopyrightMarinaBorisovaAllRightsReservedSaintPetersburgabstract1XS.mp4" type="video/mp4" />
                </video>
              </div>
              <div
                class="shrink-0 w-[320px] h-[200px]"
              >
                <img src="/images/CopyrightAllRightsReservedMarinaBorisovaabstract1.jpg" class="w-full h-full object-cover" />
              </div>
              <div
                class="shrink-0 w-[320px] h-[200px]"
              >
                <video autoplay muted loop playsinline class="w-full h-full object-cover">
                  <source src="/videos/CopyrightMarinaBorisovaAllRightsReservedSaintPetersburgabstract2.mp4" type="video/mp4" />
                </video>
              </div>
              <div
                class="shrink-0 w-[320px] h-[200px]"
              >
                <img src="/images/CopyrightAllRightsReservedMarinaBorisovaabstract3.jpg" class="w-full h-full object-cover" />
              </div>
              <div
                class="shrink-0 w-[320px] h-[200px]"
              >
                <video autoplay muted loop playsinline class="w-full h-full object-cover">
                  <source src="/videos/CopyrightMarinaBorisovaAllRightsReservedSaintPetersburgabstract3XS.mp4" type="video/mp4" />
                </video>
              </div>
               <div
                class="shrink-0 w-[320px] h-[200px]"
              >
                <img src="/images/CopyrightAllRightsReservedMarinaBorisovaabstract4.jpg" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
        <div class="pt-4 relative">
          <h3
            class="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 text-xl font-[Roboto_Slab] lowercase bg-white/90 px-2 py-1 tracking-widest text-black pointer-events-none"
          >
            Dance
          </h3>
          <div class="galery overflow-x-auto pb-8">
            <div class="flex gap-2 px-6 w-max">
              <div
                class="shrink-0 w-[320px] h-[200px]"
              >
                <video autoplay muted loop playsinline class="w-full h-full object-cover">
                  <source src="/videos/CopyrightMarinaBorisovaAllRightsReservedSaintPetersburgfor2025silentdanceXS.mp4" type="video/mp4" />
                </video>
              </div>
              <div
                class="shrink-0 w-[320px] h-[200px]"
              >
                <video autoplay muted loop playsinline class="w-full h-full object-cover">
                  <source src="/videos/CopyrightMarinaBorisovaAllRightsReservedSaintPetersburgfor2025dncingmanXS.mp4" type="video/mp4" />
                </video>
              </div>

            </div>
          </div>
        </div>
        <div class="pt-4 relative">
          <h3
            class="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 text-xl font-[Roboto_Slab] lowercase bg-white/90 px-2 py-1 tracking-widest text-black pointer-events-none"
          >
            posters
          </h3>
          <div class="galery overflow-x-auto pb-8">
            <div class="flex gap-2 px-6 w-max">
              <div
                class="shrink-0 w-[320px] h-[200px]"
              >
                <img src="/images/CopyrightAllRightsReservedMarinaBorisovaabstractman.jpg" class="w-full h-full object-cover" />

              </div>
              <div
                class="shrink-0 w-[320px] h-[200px]"
              >
                <img src="/images/CopyrightAllRightsReservedMarinaBorisovaabstracthelloween.jpg" class="w-full h-full object-cover" />

              </div>
              <div
                class="shrink-0 w-[320px] h-[200px]"
              >
                <img src="/images/CopyrightAllRightsReservedMarinaBorisovaabstractmonte.jpg" class="w-full h-full object-cover" />

              </div>
              <div
                class="shrink-0 w-[320px] h-[200px]"
              >
                <img src="/images/CopyrightAllRightsReservedMarinaBorisovaabstracttiger.jpg" class="w-full h-full object-cover" />

              </div>

            </div>
          </div>
        </div>


      </div>

    </div>
  </section>
  <section class="relative flex flex-col h-screen lg:m-h-screen pt-[10vh] bg-[#a2dffd]">
    <p class="text-xl font-[Roboto_Slab] uppercase tracking-wide w-full px-8 lg:text-start text-center text-gray-500">next page</p>
    <router-link
      to="/projects"
      class="text-2xl font-[Roboto_Slab] uppercase tracking-wide w-full px-8 pb-8 lg:text-start text-center transition-all delay-100 hover:font-bold"
      >All Projects ></router-link
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
import { onMounted, ref } from 'vue'
import { getInfo } from '@/services/administrateinfo'
let dataAbout = ref([])
let about = ref({})

let dataProjects = ref([])
let projects = ref([])

onMounted(async () => {
  dataAbout.value = await getInfo('about')

  if (dataAbout.value.ok) {
    about.value = dataAbout.value.data[0]
  }

  dataProjects.value = await getInfo('projects')
  if (dataProjects.value.ok) {
    projects.value = dataProjects.value.data

  }
})
</script>

<style></style>
