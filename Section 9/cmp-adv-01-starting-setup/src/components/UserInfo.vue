<template>
  <section>
    <base-card>
      <template #header>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>

      <template #default>
        <p>{{ infoText }}</p>
      </template>
    </base-card>
  </section>

  <section>
    <course-goals #default="slotProps">
      <h2>{{ slotProps.item }}</h2>
      <p>{{ slotProps.anotherProp }}</p>
    </course-goals>
  </section>
</template>

<script scoped>
import CourseGoals from './CourseGoals.vue';

export default {
  components: { CourseGoals },
  props: ['fullName', 'infoText', 'role'],
};
</script>
