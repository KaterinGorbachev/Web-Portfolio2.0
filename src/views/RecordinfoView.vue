<template>
  <div class="relative min-h-screen w-full overflow-hidden">
    <!-- Background image -->
    <div
      class="absolute inset-0 bg-cover bg-center"
      style="background-image: url('/MarinaBorisovaboardback.jpg')"
    ></div>

    <!-- Optional dark overlay for readability -->
    <div class="absolute inset-0 bg-black/40"></div>

    <div class="relative z-10 flex min-h-screen">
      <section
        class="w-full p-2 flex flex-col gap-4 items-center pt-[80px] lg:w-[49%] bg-white ml-auto"
      >
        <h2
          class="text-2xl font-[Roboto_Slab] uppercase tracking-wide w-full px-8 text-start lg:text-center"
        >
          Managment board
        </h2>
        <div class="flex w-full px-8 items-start lg:items-center lg:justify-center">
          <button
            :disabled="toggleAddInfo"
            type="button"
            @click="selectAddInfo"
            :class="toggleAddInfo ? 'border-black  bg-[#a2dffd]  text-black ' : ' bg-transparent border-black  text-black transition hover:bg-black hover:text-white cursor-pointer'"
            class="inline-flex items-center justify-center border   px-6 py-3 text-sm uppercase tracking-wide"
            >
            Add info
          </button>
          <button
            :disabled="toggleUpdateInfo"
            type="button"
            @click="selectUpdateInfo"
            :class="toggleUpdateInfo ? 'border-black  bg-[#a2dffd]  text-black ' : ' bg-transparent border-black  text-black transition hover:bg-black hover:text-white cursor-pointer'"
            class="inline-flex items-center justify-center border   px-6 py-3 text-sm uppercase tracking-wide"
            >
            Update info
          </button>
          <button
            :disabled="toggleDeleteInfo"
            type="button"
            @click="selectDeleteInfo"
            :class="toggleDeleteInfo ? 'border-black  bg-[#a2dffd]  text-black ' : ' bg-transparent border-black  text-black transition hover:bg-black hover:text-white cursor-pointer'"
            class="inline-flex items-center justify-center border   px-6 py-3 text-sm uppercase tracking-wide"
            >
            Delete info
          </button>
        </div>
        <div v-if="toggleAddInfo">
          <p class="font-[EB_Garamond] text-[1.2rem] px-8 w-full text-start lg:text-center">
            Select a category to add information to the specific page. Fields with * must be
            fulfilled.
          </p>
          <form @submit.prevent="addInfo" class="p-8 flex flex-col gap-4 w-full">
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
                  >Name:</label
                >
                <input
                  type="text"
                  name="title"
                  placeholder="Enter name"
                  v-model="title"
                  class="w-full border border-black bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none focus:border-[#a2dffd]"
                />
                <small>0/200 characters</small>
              </div>
              <div class="flex flex-col gap-0.5">
                <label for="description" class="font-[EB_Garamond] text-[1.2rem] w-full text-start"
                  >Your story in 3 paragraphs:</label
                >
                <textarea
                  name="description"
                  placeholder="Your passion"
                  v-model="about[0]"
                  class="w-full h-[30vh] border border-black bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 resize-none focus:outline-none focus:border-[#a2dffd]"
                ></textarea>
                <textarea
                  name="description"
                  placeholder="Your job"
                  v-model="about[1]"
                  class="w-full h-[30vh] border border-black bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 resize-none focus:outline-none focus:border-[#a2dffd]"
                ></textarea>
                <textarea
                  name="description"
                  placeholder="Your objectives"
                  v-model="about[2]"
                  class="w-full h-[30vh] border border-black bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 resize-none focus:outline-none focus:border-[#a2dffd]"
                ></textarea>
              </div>
              <div class="flex flex-col gap-0.5">
                <label for="image" class="font-[EB_Garamond] text-[1.2rem] w-full text-start"
                  >Photo:</label
                >
                <input
                  type="url"
                  name="image"
                  placeholder="Enter link to photo"
                  v-model="images[0]"
                  class="w-full border border-black bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none focus:border-[#a2dffd]"
                />
              </div>
              <div class="flex flex-col gap-0.5">
                <label for="contacts" class="font-[EB_Garamond] text-[1.2rem] w-full text-start"
                  >Contacts:</label
                >
                <input
                  type="text"
                  name="contacts"
                  placeholder="Enter contacts"
                  v-model="contacts"
                  class="w-full border border-black bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none focus:border-[#a2dffd]"
                />
              </div>
              <div class="flex flex-col gap-0.5">
                <label for="tools" class="font-[EB_Garamond] text-[1.2rem] w-full text-start"
                  >Tools:</label
                >
                <input
                  type="text"
                  name="tools"
                  placeholder="Enter tools"
                  v-model="tools"
                  class="w-full border border-black bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none focus:border-[#a2dffd]"
                />
              </div>
            </div>

            <div v-else class="flex flex-col gap-[2rem]">
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

              <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-0.5">
                  <label for="image" class="font-[EB_Garamond] text-[1.2rem] w-full text-start"
                    >Image:</label
                  >

                  <input
                    v-for="(_, index) in moreImages"
                    :key="index"
                    type="url"
                    name="image"
                    placeholder="Enter link to image"
                    v-model="images[index]"
                    class="w-full border border-black bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 focus:outline-none focus:border-[#a2dffd]"
                  />
                </div>

                <div class="flex w-full justify-between">
                  <button
                    type="button"
                    @click="moreImages--"
                    v-if="moreImages > 0"
                    class="inline-flex items-center justify-center border border-black bg-transparent px-6 py-3 text-sm uppercase tracking-wide text-black transition hover:bg-black hover:text-white cursor-pointer"
                  >
                    - Delete image
                  </button>
                  <button
                    type="button"
                    @click="moreImages++"
                    class="inline-flex items-center justify-center border border-black bg-black px-6 py-3 text-sm uppercase tracking-wide text-white transition hover:bg-white hover:text-black cursor-pointer"
                  >
                    + Add image
                  </button>
                </div>
              </div>
              <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-0.5">
                  <label for="video" class="font-[EB_Garamond] text-[1.2rem] w-full text-start"
                    >Video:</label
                  >

                  <input
                    type="text"
                    name="video"
                    placeholder="Enter link to video"
                    v-model="videos[0]"
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
                  class="w-full border border-black bg-white px-4 py-3 min-h-[30vh] text-sm text-black placeholder:text-black/40 resize-none focus:outline-none focus:border-[#a2dffd]"
                ></textarea>
                <small>0/300 characters</small>
              </div>
            </div>

            <p>{{ message }}</p>

            <button
              type="submit"
              class="mt-5 inline-flex items-center justify-center bg-black px-6 py-3 text-sm uppercase tracking-wide text-white transition hover:bg-[#a2dffd] hover:text-black cursor-pointer"
            >
              {{ cargando ? 'Sending data....' : 'Add info' }}
            </button>
          </form>

        </div>
        <div v-else-if="toggleDeleteInfo">
          <p class="font-[EB_Garamond] text-[1.2rem] px-8 w-full text-start lg:text-center">
            To delete information first select a category and than fill all fields with *.
          </p>
          <form @submit.prevent="searchInfo" class="p-8 flex flex-col gap-4 w-full">
            <select
              name="table_name"
              v-model="table"
              required
              class="w-full border border-black bg-white px-4 py-3 text-sm text-black focus:outline-none focus:border-[#a2dffd] cursor-pointer"
            >
              <option value="" default>Select category*</option>
              <option value="studies">Studies</option>
              <option value="experience">Experience</option>
              <option value="projects">Projects</option>
            </select>
            <div  class="flex flex-col gap-[2rem]">
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
                  <small>Exactly as it was written and added to the category</small>
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


            </div>

            <div class="flex flex-col">
              <div class="flex flex-col gap-0.5" v-for="item in toDeleteDataPreview" :key="item.id">
                <label class="font-[EB_Garamond] text-[1.2rem] w-full text-start">Information preview:</label>
                <div class="flex flex-col p-[1rem] gap-[0.75rem] border border-gray-600 text-gray-600 w-full h-[150px] overflow-x-hidden overflow-y-scroll" >
                  <h1>{{ item?.title }}</h1>
                  <p>{{ item?.date }}</p>
                  <p>{{ item?.description || 'Without description' }}</p>
                </div>
                <p class="font-[EB_Garamond] text-md text-red-800"> Are you shure about deleting this information?</p>


                <button @click="deleteInfoById(item.id)" type="button" class="my-10 inline-flex items-center justify-center bg-red-800 px-6 py-3 text-sm uppercase tracking-wide text-white transition hover:bg-[#a2dffd] hover:text-black cursor-pointer">Delete</button>
              </div>



            </div>
            <p class="font-[EB_Garamond] text-lg text-red-800"> {{ notFoundData ? `We did not find information with given title and date!` : ''}} </p>


            <button
              type="submit"
              class="mt-5 inline-flex items-center justify-center bg-black px-6 py-3 text-sm uppercase tracking-wide text-white transition hover:bg-[#a2dffd] hover:text-black cursor-pointer"
            >
              {{ cargando ? 'Searching data....' : 'Delete info' }}
            </button>
          </form>

        </div>

      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { saveData, updateAbout, getOneInfoToUpdateOrDelete, deleteData } from '@/services/administrateinfo'
import { useToast } from 'vue-toastification'


const toggleDeleteInfo = ref(false)
const toggleAddInfo = ref(true)
const toggleUpdateInfo = ref(false)

const selectDeleteInfo =()=> {
  toggleDeleteInfo.value = true
  toggleAddInfo.value = false
  toggleUpdateInfo.value = false
}

const selectAddInfo =() => {
  toggleDeleteInfo.value = false
  toggleAddInfo.value = true
  toggleUpdateInfo.value = false
}

const selectUpdateInfo =() => {
  toggleDeleteInfo.value = false
  toggleAddInfo.value = false
  toggleUpdateInfo.value = true
}


const toast = useToast()

const cargando = ref(false)
const message = ref('')

const title = ref('')
const table = ref('')
const about = ref([])
const description = ref('')
const date = ref('')
const contacts = ref('')
const tools = ref('')

const moreImages = ref(0)
const moreVideos = ref(0)
const images = ref([])
const videos = ref([])
let toDeleteDataPreview = ref([])
let notFoundData = ref(false)

const deleteInfoById = async (id) => {
  const result = await deleteData(id, table.value)
  if(result.ok){
    title.value = ''
    date.value = ''
    table.value = ''

    toast.success(result.message, {
        timeout: 2500,
      })

  } else {
      toast.error(result.message, {
        timeout: false,
      })
    }


}


const searchInfo = async() => {

  cargando.value = true
  toDeleteDataPreview.value = []
  notFoundData.value = false

  console.log(table.value, title.value, date.value);



  //const result = await getOneInfoToUpdateOrDelete(title.value.trim().toLowerCase(), date.value, table.value)
  const result = await getOneInfoToUpdateOrDelete(title.value, date.value, table.value)
  if(result.ok){
    toDeleteDataPreview.value = result.data
    cargando.value = false
    if(toDeleteDataPreview.value.length == 0){
      notFoundData.value = true
    }
  } else {
      toast.error(result.message, {
        timeout: false,
      })
    }

}

function convertToYouTubeEmbed(url) {
  if (!url || typeof url !== 'string') return null

  try {
    const parsedUrl = new URL(url)
    let videoId = null

    // youtu.be/VIDEO_ID
    if (parsedUrl.hostname === 'youtu.be') {
      videoId = parsedUrl.pathname.slice(1)
    }

    // youtube.com/watch?v=VIDEO_ID
    if (parsedUrl.hostname.includes('youtube.com') && parsedUrl.searchParams.has('v')) {
      videoId = parsedUrl.searchParams.get('v')
    }

    // youtube.com/embed/VIDEO_ID (already embedded)
    if (parsedUrl.hostname.includes('youtube.com') && parsedUrl.pathname.startsWith('/embed/')) {
      videoId = parsedUrl.pathname.split('/embed/')[1]
    }

    if (!videoId) return null

    return `https://www.youtube.com/embed/${videoId}`
  } catch (error) {
    return null
  }
}

const addInfo = async () => {
  if (!table.value) {
    toast.error('Select a category', {
      timeout: 4000,
    })
    return
  }

  let data = {}
  if (table.value == 'about') {
    data = {
      title: title?.value.trim().toLowerCase(),
      description: about?.value,
      image: images?.value[0],
      tools: tools?.value,
      contacts: contacts?.value,
    }
    const cleanData = JSON.parse(JSON.stringify(data))
    cargando.value = true
    const resultFromDataBase = await updateAbout(cleanData)
    if (resultFromDataBase.ok) {
      toast.success(resultFromDataBase.message, {
        timeout: 500,
      })

      title.value = ''
      about.value = ''
      images.value = []
      tools.value = ''
      contacts.value = ''
      cargando.value = false
    } else {
      toast.error(resultFromDataBase.message, {
        timeout: 1500,
      })
      cargando.value = false
    }
  } else {
    videos.value = videos.value.map((element) => convertToYouTubeEmbed(element))

    data = {
      title: title.value.trim().toLowerCase(),
      description: description.value,
      date: date.value,
      image: images?.value,
      video: videos?.value,
    }

    const cleanData = JSON.parse(JSON.stringify(data))
    const resultFromDataBase = await saveData(cleanData, table.value)
    if (resultFromDataBase.ok) {
      toast.success(resultFromDataBase.message, {
        timeout: 500,
      })

      title.value = ''
      description.value = ''
      date.value = ''
      images.value = []
      videos.value = []
      cargando.value = false
    } else {
      toast.error(resultFromDataBase.message, {
        timeout: 1500,
      })
      cargando.value = false
    }
  }
}

watch(moreImages, (n) => {
  images.value.length = n
})

watch(moreVideos, (n) => {
  videos.value.length = n
})
</script>

<style></style>
