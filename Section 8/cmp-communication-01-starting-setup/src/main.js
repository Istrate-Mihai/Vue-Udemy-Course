import { createApp } from 'vue';

import App from './App.vue';

import FriendContact from './components/FriendContact.vue';

import AddFriendContact from './components/AddFriendContact.vue';

const app = createApp(App);

app.component('friend-contact', FriendContact);

app.component('add-friend-contact', AddFriendContact);

app.mount('#app');
