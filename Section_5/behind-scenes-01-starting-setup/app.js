const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
      userValue: '',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      console.dir(this.$refs.userText.value);
    },
  },
  beforeCreate() {
    console.log('beforeCreate()');
  },
  created() {
    console.log('created()');
  },
  beforeMount() {
    console.log('beforeMount()');
  },
  mounted() {
    console.log('mount()');
  },
  beforeUpdate() {
    console.log('beforeUpdate()');
  },
  updated() {
    console.log('updated()');
  },
  beforeUnmount() {
    console.log('beforeUnmount()');
  },
  unmounted() {
    console.log('mount()');
  },
});

app.mount('#app');

setTimeout(function () {
  app.unmount();
}, 3000);

// const data = {
//   message: '',
//   longMessage: ''
// };

// const handler = {
//   set(target, key, value) {
//     if (key === 'message') {
//       target.longMessage = value + ' extra';
//       target.message = value;
//     }
//   }
// };

// const proxy = new Proxy(data, handler);

// proxy.message = 'This is a message';

// console.log(proxy.message + ' - ' + proxy.longMessage);
