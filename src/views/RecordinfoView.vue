<template>
  <section class="w-full p-0.5 flex flex-col gap-[1rem]">
    <h2
      class="text-2xl font-[Roboto_Slab] uppercase tracking-wide w-full text-start lg:text-center"
    >
      Managment board
    </h2>
    <form @submit.prevent="addInfo" class="w-full p-[2rem] flex flex-col gap-4">

        <div class="flex items-start w-full gap-4">
          <div class="flex flex-col gap-0.5 w-[60%]">
            <label for="title" class="font-[EB_Garamond] text-[1.2rem] w-full text-start">Title*:</label>
            <input
              type="text"
              name="title"
              placeholder="Enter a title"
              v-model="title"
              required
              class="w-full border border-black bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none focus:border-[#a2dffd]"
            />
            <small>0/200 characters</small>
          </div>
          <div class="flex flex-col gap-0.5">
            <label for="date" class="font-[EB_Garamond] text-[1.2rem] w-full text-start">Date*:</label>
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
          <label for="description" class="font-[EB_Garamond] text-[1.2rem] w-full text-start ">About:</label>
          <textarea
            name="description"
            placeholder="Add description"
            v-model="description"
            class="
              w-full
              border border-black
              bg-white
              px-4 py-3
              text-sm
              text-black
              placeholder:text-black/40
              resize-none
              focus:outline-none
              focus:border-[#a2dffd]
            "
          ></textarea>
          <small>0/300 characters</small>
        </div>
        <div class="flex flex-col gap-0.5">
          <label for="image" class="font-[EB_Garamond] text-[1.2rem] w-full text-start">Image:</label>
          <input
            type="url"
            name="image"
            placeholder="Enter the link with image"
            v-model="image"
            class="w-full border border-black bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none focus:border-[#a2dffd]"
          />
        </div>

      <select name="table_name" v-model="table" required class="
          w-full
          border border-black
          bg-white
          px-4 py-3
          text-sm text-black
          focus:outline-none
          focus:border-[#a2dffd]
          cursor-pointer
        ">
        <option value="" default>Select category*</option>
        <option value="studies">Studies</option>
        <option value="experience">Experience</option>
        <option value="projects">Projects</option>
      </select>

      <button
        type="submit"
        class="
          inline-flex items-center justify-center
          bg-black
          px-6 py-3
          text-sm uppercase tracking-wide
          text-white
          transition
          hover:bg-[#a2dffd] hover:text-black
          cursor-pointer
        "
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
const image = ref('')

const addInfo = async () => {
  if (!table.value) {
    alert('Select a category')
    return
  }

  let data = {
    title: title.value,
    description: description.value,
    date: date.value,
    image: image.value,
  }

  await saveData(data, table.value)
}
</script>

<style></style>
