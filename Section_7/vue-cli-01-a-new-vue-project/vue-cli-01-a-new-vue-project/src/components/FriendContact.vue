<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">
      {‌{ detailsAreVisible ? 'Hide' : 'Show' }} details
    </button>
    <ul v-if="this.detailsAreDisplayed">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'FriendContact',
  data() {
    return {
      detailsAreDisplayed: true,
      friend: {
        id: 1,
        name: 'Manuel Lorenz',
        phone: '0123456789',
        email: 'manuel@localhost.com',
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreDisplayed = !this.detailsAreDisplayed;
    },
  },
};
</script>
