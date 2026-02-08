<template>
  <div class="group relative flex flex-col bg-white overflow-hidden">
    <!-- Media -->
    <div class="relative w-full">
      <div class="galery overflow-x-auto ">
        <div class="flex gap-0.5 px-6 w-max">
          <!-- Image -->
          <div
            class="shrink-0 w-[320px] lg:w-full max-w-100"
            v-for="(link, index) in image"
            :key="index"
          >
            <img :src="link" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <!-- Video -->
      <div v-for="(link, index) in video" :key="index" class="flex p-[1rem]">
        <video
          v-if="link.endsWith('.mp4')"
          autoplay
          muted
          loop
          playsinline
          class="w-full lg:w-[300px] h-[200px] object-cover"
        >
          <source :src="link" type="video/mp4" />
        </video>

        <iframe
          v-else
          class="w-full h-[200px] lg:h-[400px]"
          :src="link"
          title="YouTube video player"
          frameborder="0"
          allow="
            accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture;
            web-share;
          "
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <!-- Play button Stop video when card loses focus / hover ends Stop when another video starts (one-at-a-time) Stop video when component unmounts (VERY important)-->

      <!-- Gradient overlay -->
      <!-- <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div> -->

      <!-- Date -->
    </div>

    <!-- Content -->
    <div class="flex flex-col gap-0.5 p-6">

      <h3 class=" text-md lg:text-xl font-[Roboto_Slab] uppercase tracking-wide text-gray-900">
        {{ title }}
      </h3>
      <p class="uppercase tracking-widest text-gray-600 py-1 text-sm">
        {{ date }}
      </p>

      <p class="font-[EB_Garamond] text-[16px] leading-relaxed text-gray-800">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: Array,
    default: null,
  },
  video: {
    type: Array,
    default: null,
  },
  date: {
    type: String,
    default: '',
  },
})

const youtubeEmbed = (url) => {
  const id = url.match(/(?:v=|youtu\.be\/)([^&]+)/)?.[1]
  return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}`
}
</script>
