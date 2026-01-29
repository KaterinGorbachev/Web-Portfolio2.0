import { ref } from "vue";
import { defineStore } from "pinia";
import { getInfo } from "@/services/administrateinfo";


export const useSavedatabaseStore = defineStore('data', () => {

  const about = ref({})
  const studies = ref([])
  const projects = ref([])

  const getAbout = async() => {
    let dataAbout = await getInfo('about')
    if (dataAbout.ok) {
      about.value = dataAbout.data[0]
    }

  }

  const getProjects = async() => {
    let dataProjects = await getInfo('projects')
    if (dataProjects.ok) {
      projects.value = dataProjects.data
    }
  }

  const getStudies = async() => {
    let dataStudies = await getInfo('studies')
    if (dataStudies.ok) {
      studies.value = dataStudies.data
    }

  }

  return {
    about,
    studies,
    projects,
    getAbout,
    getProjects,
    getStudies
  }


})
