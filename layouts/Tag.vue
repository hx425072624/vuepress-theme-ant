<template>
  <div>
    <Header></Header>
    <div class="tags">
      <List :grid="{ gutter: 16, column: 8 }" :dataSource="$tag.list">
        <ListItem  slot="renderItem" slot-scope="item">
           <router-link class="ant-tag" :to="{ path: item.path }">{{
            item.name
          }}</router-link>
        </ListItem>
      </List>
      <!-- <ul class="ant-list">
        <li class="ant-list-item" v-for="tag in $tag.list" :key="tag.name">
           <router-link class="ant-tag" :to="{ path: tag.path }">{{
            tag.name
          }}</router-link>
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import {List} from "ant-design-vue"
export default {
  components: { Header,List,ListItem:List.Item },
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
.tags{
    max-width: 1024px;
  margin-right: auto;
  margin-left: auto;
  padding: 10px 0px;
}
</style>