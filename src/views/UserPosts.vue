<template>
  <div>
    Hello User {{$route.params.id}}
    <router-link v-bind:to="userLink">Back to User</router-link>
    <div :key="post.id" v-for="post in posts">
        <p>{{post.title}}</p>
        <h6>{{post.body}}</h6>
        <hr/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'UserPosts',
  components: {
  },
  data() {
    return {
      posts: [],
    };
  },
  computed: {
    userLink() {
      return `/user/${this.$route.params.id}`;
    },
  },
  created() {
    fetch(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}/posts`)
      .then(res => res.json())
      .then((posts) => { this.posts = posts; });
  },
};
</script>
