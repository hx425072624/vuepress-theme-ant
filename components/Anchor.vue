<template>
  <div class="anchor">
    <Anchor v-if="anchorLinks">
      <AnchorLink
        v-for="anchor in anchorLinks"
        :key="anchor.slug"
        :href="anchor.href"
        :title="anchor.title"
      ></AnchorLink>
    </Anchor>
  </div>
</template>

<script>
import { Anchor } from "ant-design-vue";
export default {
  components: { Anchor, AnchorLink: Anchor.Link },
  props: {},
  data() {
    return {
      //   marks: {}
    };
  },
  watch: {},
  computed: {
    anchorLinks() {
      return this.toObject(this.$page.headers);
    }
  },
  methods: {
    toObject(arr) {
      if (!arr) {
        return null;
      }
      var rv = [];
      for (var i = 0; i < arr.length; ++i) {
        rv.push({ href: "#" + arr[i].slug, title: arr[i].title });
      }
      return rv;
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped>
.anchor {
  /* height: 200px; */
  position: fixed;
  top: 50px;
  right: 30px;
  z-index: 900;
}
</style>