const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      isVisible: true,
      userBackground: ''
    }
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    }
  },
  computed: {
    computedClasses() {
      const classList = {
        visible: this.isVisible,
        hidden: !this.isVisible,
      };

      classList[this.userInput] = true;

      return classList;
    }
  },
  watch: {}
});

app.mount('#assignment');
