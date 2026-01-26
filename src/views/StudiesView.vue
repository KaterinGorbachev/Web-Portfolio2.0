<template>
  <section></section>
</template>

<script setup>
import { getInfo } from '@/services/administrateinfo'
import { onMounted } from 'vue'

onMounted(async () => {
  const data = await getInfo('studies')
  console.log(data.data)
})
</script>

<style></style>
