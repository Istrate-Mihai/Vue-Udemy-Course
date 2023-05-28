<template>
  <li>
    <h2>{{ name }} {{ isFavoriteMemberMsg }}</h2>
    <p>
      <button @click="toggleDetails">{{ detailsVisibleMessage }}</button>
    </p>

    <p>
      <button @click="toggleIsFavorite">Toggle favorite</button>
    </p>

    <p>
      <button @click="deleteFriendContact">Delete Contact</button>
    </p>

    <ul v-if="this.detailsAreDisplayed">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'FriendContact',
  // props: ['id', 'name', 'phoneNumber', 'emailAddress', 'isFavorite'],
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      // validator: function (value) {
      //   return value == '0' || value == '1';
      // },
    },
  },
  emits: ['toggle-is-favorite', 'delete-friend-contact'],
  // emits: {
  //   'toggle-is-favorite': function (id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn('Id is empty');

  //       return false;
  //     }
  //   },
  // },
  data() {
    return {
      detailsAreDisplayed: true,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreDisplayed = !this.detailsAreDisplayed;
    },
    toggleIsFavorite() {
      this.$emit('toggle-is-favorite', this.id);
    },
    deleteFriendContact() {
      this.$emit('delete-friend-contact', this.id);
    },
  },
  computed: {
    detailsVisibleMessage() {
      const msg = this.detailsAreDisplayed ? 'Hide' : 'Show';

      return msg;
    },
    isFavoriteMemberMsg() {
      const msg = this.isFavorite ? 'Favorite' : '';

      return msg;
    },
  },
};
</script>
