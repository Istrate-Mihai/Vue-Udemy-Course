<template>
  <user-data @update-user="updateUser"></user-data>

  <active-user :name="user.name" :age="user.age"></active-user>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      user: {
        name: 'Jack',
        age: 28,
      },
    };
  },
  methods: {
    updateUser(user) {
      const { name, age } = user;

      this.user = {
        name: name,
        age: parseInt(age),
      };
    },
  },
};
</script>
