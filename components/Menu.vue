<template>
  <Menu mode="horizontal" :defaultSelectedKeys="[current]">
    <MenuItem v-for="nav in navs" :key="nav.link"
      ><router-link :to="nav.link">{{ nav.text }}</router-link></MenuItem
    >
  </Menu>
</template>

<script>
import { Menu } from "ant-design-vue";

export default {
  components: {
    Menu,
    MenuItem: Menu.Item
  },
  props: ["navs"],
  data() {
    return {
      current: ""
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    this.current = this.$page.path;
  }
};
</script>
<style  scoped>
.ant-menu-horizontal {
  border-bottom: none;
}
.ant-menu-horizontal > .ant-menu-item {
  height: 64px;
  line-height: 60px;
  min-width: 72px;
  border-top: 2px solid transparent;
}

.ant-menu-horizontal > .ant-menu-item-selected {
  border-top: 2px solid #1890ff;
  border-bottom: 2px solid transparent;
}
.ant-menu-horizontal > .ant-menu-item:hover {
  border-top: 2px solid #1890ff;
  border-bottom: 2px solid transparent;
}
</style>