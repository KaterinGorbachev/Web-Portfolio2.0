import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAccessStore = defineStore('admin', () => {
  const admin = ref(false)
  function setAdmin(newValue) {
    admin.value = newValue
  }
  return { admin, setAdmin }
})
