<template>
  <div>
    <Header></Header>
    <Posts :posts="$pagination.pages"></Posts>
    <Pagination></Pagination>
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
<style>
</style>
