const app = Vue.createApp({
  data() {
    return {
      myName: 'Istrate Mihai',
      myAge: 27,
      imgLink: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'
    }
  },
  methods: {
    randomNumber() {
      return Math.random();
    }
  }
});

app.mount('#assignment');
