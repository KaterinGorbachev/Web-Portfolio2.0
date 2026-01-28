<template>
  <div class="flex flex-col lg:flex-row w-full p-8">
    <div v-if="image.length > 0">
      <div class="shrink-0 w-[100px] h-[100px] max-w-[200px]">
        <img :src="image" />
      </div>
    </div>
    <div class="flex flex-col w-full">
      <div class="flex flex-col-reverse lg:flex-row justify-between w-full">
        <h2
          class="w-full lg:w-[80%] text-[16px] font-[EB_Garamond] uppercase tracking-wide text-start"
        >
          {{ title }}
        </h2>
        <p class="w-[70%] lg:w-[20%] font-[EB_Garamond] text-[16px] text-start">{{ date }}</p>
      </div>
      <p class="font-[EB_Garamond] text-[16px] lg:w-[70%] text-start text-[#3f3f3f]">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  date: String,
  description: String,
})
</script>

<style></style>
