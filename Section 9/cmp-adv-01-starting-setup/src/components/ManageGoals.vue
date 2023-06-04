<template>
  <h2>Manage Goals</h2>
  <form>
    <input type="text" ref="goal" />
    <button @click.prevent="setGoal">Set goal</button>
  </form>

  <teleport to="body">
    <error-alert v-if="inputIsInvalid">
      <h2>Input is empty</h2>
      <p>Enter at least a few characters</p>
      <button @click="setInputValidity">Close</button>
    </error-alert>
  </teleport>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredGoal = this.$refs.goal.value;

      if (enteredGoal === '') {
        this.inputIsInvalid = true;
      }
    },
    setInputValidity() {
      this.inputIsInvalid = !this.inputIsInvalid;
    },
  },
};
</script>
