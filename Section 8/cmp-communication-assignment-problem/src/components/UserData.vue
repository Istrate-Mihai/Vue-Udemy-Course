<template>
  <form>
    <div>
      <label>Name</label>
      <input type="text" v-model="name" />
    </div>

    <div>
      <label>Age</label>
      <input type="text" v-model="age" />
    </div>
  </form>

  <button @click="updateUser">Submit</button>
</template>

<script>
export default {
  name: 'UserData',
  emits: ['update-user'],
  data() {
    return {
      name: '',
      age: '',
    };
  },
  methods: {
    updateUser(event) {
      event.preventDefault();

      const user = {
        name: this.name,
        age: this.age,
      };

      this.$emit('update-user', user);
    },
  },
};
</script>
