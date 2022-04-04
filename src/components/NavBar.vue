<template>
  <nav class="container flex justify-around py-8 mx-auto bg-white">
    <div class="space-x-8">
      <router-link to="">Home</router-link>
      <button @click="$emit('logout')">Sign Out</button>
    </div>
  </nav>
</template>

<script>
export default {};
</script>
