<template>
  <section class="h-[80vh] flex justify-center items-center pt-[80px]">
    <div class="shadow-md w-[90%] lg:w-[40%] gap-[1.75em] p-8 rounded flex flex-col items-center">
      <div class="flex flex-col gap-0.5 items-start lg:items-center">
        <h2
          class="text-2xl font-[Roboto_Slab] uppercase tracking-wide w-full text-start lg:text-center"
        >
          Access information management board
        </h2>
        <p class="font-[EB_Garamond] text-[1.2rem] w-full text-start lg:text-center">
          Enter the password to access the administration panel
        </p>
      </div>
      <input
        type="password"
        v-model="inputPassword"
        class="w-full border border-black bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none focus:border-[#a2dffd]"
      />
      <button
        @click="getAccess()"
        class="inline-flex items-center justify-center bg-black px-6 py-3 text-sm uppercase tracking-wide text-white transition hover:bg-[#a2dffd] hover:text-black cursor-pointer w-full"
      >
        Log in
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAccessStore } from '@/stores/access'
import { useToast } from "vue-toastification";

const toast = useToast()

const accessStore = useAccessStore()
accessStore.setAdmin(false)

const router = useRouter()

const password = import.meta.env.VITE_APP_ADMIN_CODE
const inputPassword = ref('')

const getAccess = () => {
  if (!inputPassword.value.trim()) {
    toast.error("Enter password", {
      timeout: 4000,
    })
    return
  }
  if (inputPassword.value.trim() === password) {
    accessStore.setAdmin(true)

    toast.info("Access granted", {
      timeout: 1500,
    })

    router.push('/recordadmin')
  } else {
    toast.error("Wrong password", {
      timeout: 4000,
    })
    return
  }
}
</script>

<style></style>
