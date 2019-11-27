<template>
  <div>
    <Header></Header>

    <div class="post-list">
      <Posts :posts="$pagination.pages"></Posts>
      <Pagination class="page-right"></Pagination>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Posts from "../components/Posts";

import Pagination from "../components/Pagination";
export default {
  components: { Header, Pagination, Posts }
};
</script>
<style scope>
.post-list {
  max-width: 1024px;
  margin-right: auto;
  margin-left: auto;
}
.page-right{
  text-align: right;
}
</style>
