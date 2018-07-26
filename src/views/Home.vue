<template>
  <div class="home">
    <template v-for="user in users">
      <user-item :user='user' :key="user.id"></user-item>
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import UserItem from '@/components/UserItem.vue';

export default {
  name: 'home',
  components: {
    UserItem,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        return res.json();
      })
      .then((users) => { this.users = users; });
  },
};
</script>
