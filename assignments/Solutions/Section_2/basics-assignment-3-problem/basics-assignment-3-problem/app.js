const app = Vue.createApp({
  data() {
    return {
      result: 0,
    }
  },
  methods: {
    add(value) {
      this.result += value;
    }
  },
  computed: {
    resultCalculation() {
      if (this.result < 37) {
        return 'Not there yet';
      }

      if (this.result > 37) {
        return 'Too much!';
      }

      return this.result;
    }
  },
  watch: {
    result() {
      const that = this;

      setTimeout(function() {
        that.result = 0;
      }, 5000);
    }
  }
});

app.mount('#assignment');
