<template>
  <div class="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
    <div class="py-8 px-8 rounded-xl">
      <div>
        <div class="my-5 text-sm">
          <input
            type="text"
            autofocus
            id="username"
            v-model="username"
            class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
            placeholder="Username"
          />
        </div>
        <div class="my-5 text-sm">
          <input
            type="password"
            id="password"
            class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
            v-model="password"
            placeholder="Password"
          />
          <div class="flex justify-end mt-2 text-xs text-gray-600">
            <a href="../../pages/auth/forget_password.html hover:text-black"
              >Forget Password?</a
            >
          </div>
        </div>

        <button
          class="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full"
          @click="login"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
//import axios from "axios";
export default {
  name: "LoginView",
  components: {},
  data() {
    return {
      rabin: "Rabin Dhamala",
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      const url = "http://localhost:8000/api/token/";
      this.$http
        .post(url, { username: this.username, password: this.password })
        .then((response) => {
          const token = localStorage.setItem("token", response.data.access);
          this.saveToken(token);
          this.$router.push('/home')
        })
    },
    saveToken(token) {
      if (token) {
        this.$http.defaults.headers.common["Authorization"] = token;
      } else {
        this.$http.defaults.headers.common["Authorization"] = null;
      }
    },
  },
};
</script>
