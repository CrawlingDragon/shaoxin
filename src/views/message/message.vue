<template>
  <div class="message-container">
    <Header indexHeader="indexHeader" navHeader="资讯" :mid="mid"></Header>
    <ul class="message-ul">
      <li v-for="item in list" :key="item.id" @click="goToMessageDetail(item.id,item.catid)">
        <MessageItem :list="item"></MessageItem>
      </li>
    </ul>
  </div>
</template>
<script>
import Header from "@/components/hospital_header/hospital_header";
import MessageItem from "@/components/message_item/message_item";
import { mapState } from "vuex";

export default {
  metaInfo: {
    title: "资讯列表",
  },
  name: "message",
  components: { Header, MessageItem },
  props: {},
  data() {
    return {
      list: [],
    };
  },
  computed: {
    ...mapState(["mid"]),
  },
  created() {
    this.$emit("footer", false);
  },
  watch: {},
  mounted() {
    this.getList(this.mid);
  },
  destroyed() {},
  methods: {
    getList(mid) {
      this.$axios.fetchPost("/Mobile/News/index", { mId: mid }).then((res) => {
        if (res.data.code == 0) {
          this.list = res.data.data;
        }
      });
    },
    goToMessageDetail(id, catId) {
      // 路由  资讯详情页
      this.$router.push({
        path: "/message_detail",
        query: {
          id: id,
          catid: catId,
        },
      });
    },
  },
};
</script>
<style lang="stylus" scoped>
.message-container
  background #fff
  .message-ul
    margin-left 12px
    li
      border-bottom 1px solid #e5e5e5
      &:last-child
        border-bottom none
</style>
