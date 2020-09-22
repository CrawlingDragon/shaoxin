<template>
  <div class="message-container">
    <Header v-if="mid == initMid" :indexHeader="false"></Header>
    <HospitalHeader v-else indexHeader="indexHeader" navHeader="资讯"></HospitalHeader>
    <ul class="message-ul">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <li v-for="item in list" :key="item.id" @click="goToMessageDetail(item.id,item.catid)">
          <MessageItem :list="item" :index="true"></MessageItem>
        </li>
      </van-list>
    </ul>
  </div>
</template>
<script>
import Header from "@/components/header/header";
import HospitalHeader from "@/components/hospital_header/hospital_header";
import MessageItem from "@/components/message_item/message_item";
import { mapState } from "vuex";

export default {
  metaInfo: {
    title: "资讯列表",
  },
  name: "message",
  components: { Header, MessageItem, HospitalHeader },
  props: {},
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      page: 0,
    };
  },
  computed: {
    ...mapState(["mid", "initMid"]),
  },
  created() {
    this.$emit("footer", true);
  },
  watch: {},
  mounted() {},
  destroyed() {},
  methods: {
    onLoad() {
      this.getList();
    },
    getList() {
      this.page += 1;
      this.$axios
        .fetchPost("/Mobile/News/index", { mId: this.mid, page: this.page })
        .then((res) => {
          if (res.data.code == 0) {
            this.loading = false;
            this.list = this.list.concat(res.data.data);
            if (res.data.data.length == 0) {
              this.finished = true;
            }
          } else if (res.data.code == 201) {
            this.finished = true;
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
  padding-bottom 55px
  background #fff
  .message-ul
    margin-left 12px
    li
      border-bottom 1px solid #e5e5e5
      &:last-child
        border-bottom none
</style>
