<template>
  <div>
    <h3>
      <a @click="goBack">Go Back</a>
    </h3>
    Hello User {{$route.params.id}}
    <ul>
      <li>{{user.name}}</li>
      <li>{{user.email}}</li>
      <li>{{user.website}}</li>
      <router-link v-bind:to="postsLink">Posts</router-link><br/>
      <router-link v-if="$route.params.id <= 9" :to="nextUserLink">Next User</router-link>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'UserProfile',
  components: {
  },
  data() {
    return {
      user: [],
    };
  },
  computed: {
    postsLink() {
      return `/user/${this.$route.params.id}/posts`;
    },
    nextUserLink() {
      return `/user/${parseInt(this.$route.params.id, 10) + 1}`;
    },
  },
  methods: {
    fetchData() {
      fetch(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`)
        .then(res => res.json())
        .then((user) => { this.user = user; });
    },
    goBack() {
      this.$router.push({ name: 'home' });
    },
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: 'fetchData',
  },
};
</script>
