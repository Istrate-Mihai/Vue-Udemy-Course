<template>
  <ul>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal" :another-prop="anotherProp"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      anotherProp: 'Just a string',
      goals: ['Finish this course', 'Become a better developer'],
    };
  },
};
</script>
