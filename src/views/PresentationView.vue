<template>
  <section class="relative h-screen">
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/src/videos/CopyrightMarinaBorisovaAllRightsReservedSaintPetersburgforAbout.MP4" type="video/mp4" />
    </video>

    <div class="absolute inset-0 bg-black/30"></div>

    <div class="relative z-10 flex flex-col h-full items-center justify-center gap-2">
      <h1 class="text-6xl font-[Roboto_Slab] text-white uppercase tracking-widest">
        Marina Borisova
      </h1>
      <p class="font-[EB_Garamond] text-xl w-full text-start lg:text-center text-white">Creative artist, illustrator, motion designer, animator, dreamer...</p>
    </div>
  </section>
  <section class="relative h-screen m-[3rem]">
    <div class="flex w-full">
      <div class="flex flex-col gap-1 w-[60%] items-start justify-start">
        <h2 class="text-2xl font-[Roboto_Slab] uppercase tracking-wide w-full text-start">About me</h2>
        <div class="flex flex-col gap-2 items-start justify-start">
          <p class="font-[EB_Garamond] text-xl text-start lg:text-start w-[90%]">I am a junior animator with a strong interest in directing animation and shaping visual storytelling from concept to final motion. I enjoy working across the animation pipeline — from idea development and storyboarding to animation and polish — with a focus on clarity, rhythm, and emotional impact.  </p>
          <p class="font-[EB_Garamond] text-xl text-start lg:text-start w-[90%]">I’m comfortable collaborating with designers, developers, and other creatives, and I value clear communication and feedback as part of the creative process. While still growing professionally, I’m eager to learn, experiment, and take responsibility for creative decisions that support the overall vision of a project.</p>
          <p class="font-[EB_Garamond] text-xl text-start lg:text-start w-[90%]">My goal is to develop as a director of animation by creating purposeful, story-driven motion that enhances user experience and brings ideas to life.</p>

        </div>
        <div><p class="font-[EB_Garamond] text-2xl text-start mt-[2rem]">Contacts: </p></div>


      </div>
      <div class="w-[40%]">
        <img src="/src/images/MarinaBorisova.jpg" alt="Marina Borisova">
      </div>

    </div>


  </section>
</template>

<script setup></script>

<style></style>
