<template>
  <NavBar @logout="logOut"/>
<button type="button" class="px-6
      py-2.5
      bg-slate-600
      text-white
      font-medium
      rounded
      my-2
      "
     @click = "createPost= !createPost"
      >
  {{createPost? "Cancel": "Create"}}
</button>
  <template v-if="createPost">
    <CreateUserPost/>
  </template>
  <div v-for="item in posts" :key="item">
    <UserPost :post="item" />
  </div>
</template>

<script>
import UserPost from "../components/UserPost.vue";
import CreateUserPost from "../components/CreateUserPost.vue";
import NavBar from "../components/NavBar.vue";

export default {
  name: "HomeView",
  components: {
    CreateUserPost,
    UserPost,
    NavBar
  },
  data() {
    return {
      posts: {},
      createPost: false,
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
