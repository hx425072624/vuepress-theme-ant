<template>
  <div>
    <Menu :navs="$themeConfig.nav"></Menu>
    <SearchBox />
  </div>
</template>

<script>
import SearchBox from "@SearchBox";
import Menu from './Menu'
export default {
  components: { SearchBox,Menu }
};
</script>

<style scope>
.search-box input:focus {
  border-color: #40a9ff;
  border-right-width: 1px !important;
  outline: 0;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
}
</style>