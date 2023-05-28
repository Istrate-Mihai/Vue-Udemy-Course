<template>
  <form @submit.prevent="addFriendContact">
    <div>
      <label>Name</label>
      <input type="name" v-model="name" />
    </div>

    <div>
      <label>Phone</label>
      <input type="tel" v-model="phoneNumber" />
    </div>

    <div>
      <label>Email</label>
      <input type="email" v-model="emailAddress" />
    </div>

    <button>Add friend</button>
  </form>
</template>

<script>
export default {
  emits: ['add-friend-contact'],
  data() {
    return {
      name: '',
      phoneNumber: '',
      emailAddress: '',
    };
  },
  methods: {
    addFriendContact() {
      this.$emit('add-friend-contact', {
        name: this.name,
        phoneNumber: this.phoneNumber,
        emailAddress: this.emailAddress,
      });
    },
  },
};
</script>
