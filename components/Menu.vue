<template>
  <div>
    <ul>
      <li v-for="nav in navs" :key="nav.link">
        <router-link :to="nav.link">{{ nav.text }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["navs"],
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {}
};
</script>
<style  scoped>
</style>