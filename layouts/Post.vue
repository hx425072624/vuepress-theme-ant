<template>
  <div>
    <Header></Header>
    <div class="post">
      <Content />
      <Anchor></Anchor>
    </div>
  </div>
</template>

<script>
import Anchor from "../components/Anchor";
import Header from "../components/Header";
export default {
  components: { Anchor, Header },
  props: {},
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
.post {
  max-width: 1024px;
  margin-right: auto;
  margin-left: auto;
}
</style>