<!--<template>-->
  <!--<div id="app">-->
    <!--<p>Post: {{posts[0]}}</p>-->
    <!--<div id="nav">-->
      <!--<router-link to="/">Home</router-link>-->
      <!--|-->
      <!--<router-link to="/about">About</router-link>-->
    <!--</div>-->
    <!--<router-view/>-->
  <!--</div>-->
<!--</template>-->
<template>
  <div id="app">
    <header>
      <h1>Vue.js SPA</h1>
    </header>
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      With Bootstrap!
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <main>
      <aside class="sidebar">
        <router-link
          v-for="post in posts"
          active-class="is-active"
          class="link"
          :to="{ name: 'post', params: { id: post.id } }">
          {{post.id}}. {{post.title}}
        </router-link>
      </aside>
      <div class="content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
  import axios from 'axios'



  export default {
    data() {
      return {
        posts: [
          'Hell0'
        ],
        endpoint: 'https://jsonplaceholder.typicode.com/posts/',
      }
    },
    created() {
      this.getAllPosts();
    },

    methods: {
      getAllPosts() {
        axios.get(this.endpoint)
          .then(response => {
            this.posts = response.data;
            console.log(response.data);
          })
          .catch(error => {
            console.log('-----error-------');
            console.log(error);
          })
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
  #app main{
    display: flex;
  }
  aside{
    width: 25%;
  }

  #app .sidebar a{
    display: inline-block;
    text-align: left;
    width: 100%;
    text-decoration: none;
    color: inherit;
  }

  #app .sidebar a:active{
    color: #2125ff;
    background: aqua;
  }

  #app .sidebar a:hover{
    color: #2125ff;
    background: aqua;
  }
</style>
