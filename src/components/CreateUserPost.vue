<template>
  <div class="py-8 px-8 border-2 border-gray-300">
    <div>
      <input v-model="title" type="text" id="small-input" placeholder="Enter title"
             class="my-4 block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </div>
    <div class="mb-6">
      <input v-model="body" type="text" id="large-input" placeholder="Enter description for the post"
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
      "
              @click="postData"
      >
        Submit
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      file: null,
      url: "posts/",
      image: null,
      title: "",
      body: ""
    }
  },
  methods: {
    onChange(event) {
      console.log(event)
      console.log(event.target)
      console.log(event.target.files[0].name)
      this.image = event.target.files
    },
    postData() {
      const formData = new FormData()
      // if (this.image) {
      //   formData.append('image', this.image, this.image.name)
      // }
      formData.append('title', this.title)
      formData.append('body', this.body)
      this.$http.post(this.url,
          formData
      ).then(()=> {
        console.log("created")
        this.$emit("created")
      })

    }


  }

}

</script>