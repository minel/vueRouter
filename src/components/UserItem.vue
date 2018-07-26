<template>
  <div>
    <p>{{user.name}} -
      <router-link v-bind:to="profileLink">
        @{{user.username}}
      </router-link>
    </p>
    
  </div>
</template>
<script>
export default {
  name: 'UserItem',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    profileLink() {
      return `/user/${this.user.id}`;
    }
  }
};
</script>
