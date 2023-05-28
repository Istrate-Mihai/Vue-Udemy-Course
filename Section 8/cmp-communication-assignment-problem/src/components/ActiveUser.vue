<template>
  <div>
    <h2>{{ name }}</h2>

    <h3>{{ age }}</h3>
  </div>
</template>

<script>
export default {
  name: 'ActiveUser',
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
