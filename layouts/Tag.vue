<template>
  <div>
    <ul class="ant-list" >
      <li class="ant-list-item" v-for="tag in $tag.list" :key="tag.name">
        <router-link class="ant-tag"
          :to="{ path: tag.path }"
          >{{ tag.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
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