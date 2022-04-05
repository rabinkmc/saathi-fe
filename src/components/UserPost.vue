<template>
 <!-- component -->
<!-- post card -->
<div class="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-10 max-w-md md:max-w-2xl "><!--horizantil margin is just for display-->
   <div class="flex items-stretch px-4 py-6 w-full">
      <img class="w-12 h-12 rounded-full object-cover mr-4 shadow" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar">
      <div class="grow">
         <div class="flex justify-between">
            <h2 class="text-lg font-semibold text-gray-900 -mt-1">{{post.author}}</h2>
            <small class="text-sm text-gray-700">22h ago</small>
         </div>
        <p class="text-gray-700">{{post.modified}} </p>
         <p class="mt-3 text-black">{{post.title}}</p>
         <p class="mt-3 text-gray-700 text-sm">{{post.body}}</p>
      </div>
   </div>
</div>
</template>
<script>
export default {
  props: {
    post: {}
  }
}
</script>
