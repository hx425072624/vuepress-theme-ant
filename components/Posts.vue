<template>
  <div>
    <ul class="ant-list">
      <li class="ant-list-item" v-for="page in posts" :key="page.path">
        <PostSummary :post="page"></PostSummary>
      </li>
    </ul>
  </div>
</template>

<script>
import PostSummary from "./PostSummary";
export default {
  components: { PostSummary },
  props: ["posts"],
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style  scoped>
</style>