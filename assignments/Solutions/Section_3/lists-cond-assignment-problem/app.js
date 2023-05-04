const app = Vue.createApp({
  data() {
    return {
      goal: '',
      goalList: [],
      isListVisible: true,
      toggleMsg: 'Hide'
    }
  },
  methods: {
    addGoal() {
      this.goalList.push(this.goal);
    },
    toggleList() {
      this.isListVisible = !this.isListVisible;

      if (this.isListVisible) {
        this.toggleMsg = 'Hide';
      }

      if (!this.isListVisible) {
        this.toggleMsg = 'Show';
      }
    }
  }
});

app.mount('#assignment');
