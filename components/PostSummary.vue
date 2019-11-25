<template>
  <div>
    <router-link :to="post.path">{{ post.title }}</router-link>
    <router-link
      class="ant-tag"
      v-for="tag in post.frontmatter.tag"
      :key="tag"
      :to="{ path: `/tag/${tag}` }"
      >{{ tag }}</router-link
    >
  </div>
</template>

<script>
export default {
  components: {},
  props: ["post"],
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
   
  }
};
</script>
<style  scoped>

</style>