<template>
  <section class="w-full p-2 flex flex-col gap-4 items-center pt-[80px]">
    <h2
      class="text-2xl font-[Roboto_Slab] uppercase tracking-wide w-full text-center"
    >
      Managment board
    </h2>
    <p class="font-[EB_Garamond] text-[1.2rem] w-full text-start lg:text-center">Select a category to add information to the specific page. Fields with * must be fulfilled.</p>
    <form @submit.prevent="addInfo" class="p-8 flex flex-col gap-4 w-[80vw]">
      <select
        name="table_name"
        v-model="table"
        required
        class="w-full border border-black bg-white px-4 py-3 text-sm text-black focus:outline-none focus:border-[#a2dffd] cursor-pointer"
      >
        <option value="" default>Select category*</option>
        <option value="about">About</option>
        <option value="studies">Studies</option>
        <option value="experience">Experience</option>
        <option value="projects">Projects</option>
      </select>

      <div v-if="table == 'about'">
        <div class="flex flex-col gap-0.5 w-full">
          <label for="title" class="font-[EB_Garamond] text-[1.2rem] w-full text-start"
            >Name*:</label
          >
          <input
            type="text"
            name="title"
            placeholder="Enter name"
            v-model="title"
            required
            class="w-full border border-black bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none focus:border-[#a2dffd]"
          />
          <small>0/200 characters</small>
        </div>
        <div class="flex flex-col gap-0.5">
        <label for="description" class="font-[EB_Garamond] text-[1.2rem] w-full text-start"
          >About*:</label
        >
          <textarea
            name="description"
            required
            placeholder="Your story"
            v-model="description"
            class="w-full h-[30vh] border border-black bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 resize-none focus:outline-none focus:border-[#a2dffd]"
          ></textarea>

        </div>


      </div>
      <div v-else>
         <div class="flex items-start w-full justify-between">
        <div class="flex flex-col gap-0.5 w-[75%]">
          <label for="title" class="font-[EB_Garamond] text-[1.2rem] w-full text-start"
            >Title*:</label
          >
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            v-model="title"
            required
            class="w-full border border-black bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none focus:border-[#a2dffd]"
          />
          <small>0/200 characters</small>
        </div>
        <div class="flex flex-col gap-0.5 w-[20%]">
          <label for="date" class="font-[EB_Garamond] text-[1.2rem] w-full text-start"
            >Date*:</label
          >
          <input
            type="date"
            name="date"
            v-model="date"
            required
            class="w-full border border-black bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none focus:border-[#a2dffd]"
          />
        </div>
      </div>
      <div class="flex flex-col gap-0.5">
        <label for="description" class="font-[EB_Garamond] text-[1.2rem] w-full text-start"
          >About:</label
        >
        <textarea
          name="description"
          placeholder="Add description"
          v-model="description"
          class="w-full border border-black bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 resize-none focus:outline-none focus:border-[#a2dffd]"
        ></textarea>
        <small>0/300 characters</small>
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-0.5">
          <label for="image" class="font-[EB_Garamond] text-[1.2rem] w-full text-start"
            >Image:</label
          >
          <input
            type="url"
            name="image"
            placeholder="Enter link to image"
            v-model="images[0]"
            class="w-full border border-black bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none focus:border-[#a2dffd]"
          />
          <input v-for="index in moreImages" :key="index"
            type="url"
            name="image"
            placeholder="Enter link to image"
            v-model="images[index+1]"
            class="w-full border border-black bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none focus:border-[#a2dffd]"
          />
        </div>

        <div class="flex flex-col gap-4">
          <button type="button" @click="moreImages--" v-if="moreImages > 0" class="
            inline-flex items-center justify-center
            border border-black
            bg-transparent
            px-6 py-3
            text-sm uppercase tracking-wide
            text-black
            transition
            hover:bg-black hover:text-white cursor-pointer
          ">- Delete image</button>
          <button type="button" @click="moreImages++" class="
          inline-flex items-center justify-center
          border border-black
          bg-white
          px-6 py-3
          text-sm uppercase tracking-wide
          text-black
          transition
          hover:bg-black hover:text-white cursor-pointer
        ">+ Add image</button>
        </div>


      </div>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-0.5">
          <label for="video" class="font-[EB_Garamond] text-[1.2rem] w-full text-start"
            >Video:</label
          >
          <input
            type="url"
            name="video"
            placeholder="Enter link to video"
            v-model="videos[0]"
            class="w-full border border-black bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none focus:border-[#a2dffd]"
          />
          <input v-for="index in moreImages" :key="index"
            type="url"
            name="video"
            placeholder="Enter link to video"
            v-model="videos[index+1]"
            class="w-full border border-black bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none focus:border-[#a2dffd]"
          />
        </div>

        <div class="flex flex-col gap-4">
          <button type="button" @click="moreVideos--" v-if="moreVideos > 0" class="
            inline-flex items-center justify-center
            border border-black
            bg-transparent
            px-6 py-3
            text-sm uppercase tracking-wide
            text-black
            transition
            hover:bg-black hover:text-white cursor-pointer
          ">- Delete video</button>
          <button type="button" @click="moreVideos++" class="
          inline-flex items-center justify-center
          border border-black
          bg-white
          px-6 py-3
          text-sm uppercase tracking-wide
          text-black
          transition
          hover:bg-black hover:text-white cursor-pointer
        ">+ Add video</button>
        </div>


      </div>

      </div>



      <button
        type="submit"
        class="mt-5 inline-flex items-center justify-center bg-black px-6 py-3 text-sm uppercase tracking-wide text-white transition hover:bg-[#a2dffd] hover:text-black cursor-pointer"
      >
        Add
      </button>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { saveData } from '@/services/administrateinfo'

const title = ref('')
const table = ref('')
const description = ref('')
const date = ref('')

const moreImages = ref(0)
const moreVideos = ref(0)
const images = ref([])
const videos = ref([])

const addInfo = async () => {
  if (!table.value) {
    alert('Select a category')
    return
  }

  let data = {
    title: title.value,
    description: description.value,
    date: date.value,
    image: images.value,
    video: videos.value
  }

  await saveData(data, table.value)
}
</script>

<style></style>
