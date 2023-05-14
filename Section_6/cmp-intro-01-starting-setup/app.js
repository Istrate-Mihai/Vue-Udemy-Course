const app = Vue.createApp({
  data() {
    return {
      friendList: [
        {
          id: 1,
          name: 'Manuel Lorenz',
          phone: '01234 5678 991',
          email: 'manuel@localhost.com',
        },
        {
          id: 2,
          name: 'Julie Jones',
          phone: '09876 543 221',
          email: 'julie@localhost.com',
        },
      ],
    };
  },
  methods: {},
});

app.component('friend-contact', {
  data() {
    return {
      isDetailsVisible: true,
      friend: {
        id: 1,
        name: 'Manuel Lorenz',
        phone: '01234 5678 991',
        email: 'manuel@localhost.com',
      },
    };
  },
  template: `
    <li>
      <h2>{{ friend.name }}</h2>

      <button @click="toggleDetails">{{ isDetailsVisible ? 'Hide' : 'Show' }}</button>

      <ul v-if="isDetailsVisible">
        <li><strong>Phone:</strong>{{ friend.phone }}</li>
        <li><strong>Email:</strong>{{ friend.email }}</li>
      </ul>
    </li>
  `,
  methods: {
    toggleDetails() {
      this.isDetailsVisible = !this.isDetailsVisible;
    },
  },
});

app.mount('#app');
