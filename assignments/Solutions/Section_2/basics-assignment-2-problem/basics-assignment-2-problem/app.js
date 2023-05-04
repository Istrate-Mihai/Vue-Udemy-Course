const app  = Vue.createApp({
  data() {
    return {
      userEnteredValue: '',
      confirmedUserEnteredValue: ''
    }
  },
  methods: {
    userInput(event) {
      this.userEnteredValue = event.target.value;
    },
    confirmUserInput(event) {
      this.confirmedUserEnteredValue = event.target.value;
    },
    alert(msg) {
      window.alert(msg);
    }
  }
});

app.mount('#assignment');
