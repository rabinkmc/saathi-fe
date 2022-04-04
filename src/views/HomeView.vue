<template>
  <NavBar @logout="logOut"/>
  <div v-for="item in posts" :key="item">
    <CreateUserPost :post="item" />
  </div>
</template>

<script>
import CreateUserPost from "../components/CreateUserPost.vue";
import NavBar from "../components/NavBar.vue";

export default {
  name: "HomeView",
  components: {
    CreateUserPost,
    NavBar
  },
  data() {
    return {
      posts: {},
      headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`},
      url: "posts/"
    }
  },
  created() {
    this.getPosts()
  },
  methods: {
    logOut() {
      localStorage.clear();
      this.$http.defaults.headers.common["Authorization"] = null;
      this.$router.push("/login");
    },
    getPosts() {
      this.$http.get(this.url, {headers: this.headers}).then(
          response => {
            this.posts = response.data
          }
      )
    }
  },
};
</script>
