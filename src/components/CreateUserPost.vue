<template>
  <div class="py-8 px-8 border-2 border-gray-300">
    <div>
      <input type="text" id="small-input" placeholder="Enter title"
             class="my-4 block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </div>
    <div class="mb-6">
      <input type="text" id="large-input" placeholder="Enter description for the post"
             class="block p-4 w-full h-40 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </div>

    <div class="mb-6">
      <input type="file" @change="onChange"/>
    </div>

    <div class="mb-6">
      <button class="px-6
      py-2.5
      bg-slate-600
      text-white
      font-medium
      rounded
      my-2
      ">
        Submit
      </button>
    </div>
    <!--  <div class="flex justify-center mt-8">-->
    <!--    <div class="max-w-2xl rounded-lg shadow-xl bg-gray-50">-->
    <!--      <div class="m-4">-->
    <!--        <label class="inline-block mb-2 text-gray-500">{{ image ? "" : "Choose" }} Image File</label>-->
    <!--        <div class="flex items-center justify-center w-full">-->
    <!--          <label-->
    <!--              class="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">-->
    <!--            <div class="flex flex-col items-center justify-center pt-7">-->
    <!--              <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">-->
    <!--                {{ image ? image[0].name : "Upload an image" }}</p>-->
    <!--            </div>-->
    <!--            <input type="file" @change="onChange" class="opacity-0"/>-->
    <!--          </label>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="flex justify-center p-2">-->
    <!--        <button class="w-full px-4 py-2 text-white bg-blue-500 rounded shadow-xl">Upload</button>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--  </div>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      file: null,
      headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`},
      url: "posts/",
      image: null
    }
  },
  methods: {
    onChange(event) {
      console.log(event)
      console.log(event.target)
      console.log(event.target.files[0].name)
      this.image = event.target.files
    },
    onUpload() {
      const formData = new FormData()
      formData.append('image', this.image, this.image.name)
      this.$http.post(this.url, formData, {headers: this.headers}).then((response) => {
        console.log(response)
      })
    }


  }

}

</script>