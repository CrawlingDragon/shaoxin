<template>
  <div class="hospital_online-container">
    <Header header="indexHeader" navHeader="线上网诊" :mid="mid"></Header>
    <ul>
      <li v-for="item in list" :key="item.id">
        <OnlineItem :list="item" @preImage="preverImg"></OnlineItem>
      </li>
    </ul>
  </div>
</template>
<script>
import Header from "@/components/hospital_header/hospital_header";
import OnlineItem from "@/components/online_item/online_item";
import { mapState } from "vuex";
import { ImagePreview } from "vant";
export default {
  name: "hospitalOnline",
  components: {
    Header,
    OnlineItem,
    [ImagePreview.Component.name]: ImagePreview.Component,
  },
  metaInfo: {
    title: "线上网诊",
  },
  props: {},
  data() {
    return {
      list: [],
    };
  },
  computed: {
    ...mapState(["mid"]),
  },

  watch: {},
  mounted() {
    this.$emit("footer", false);
    this.getList();
  },
  destroyed() {},
  methods: {
    preverImg(item) {
      //网诊的图片预览
      ImagePreview({
        images: item.arr,
        startPosition: item.index,
        closeable: true,
      });
    },
    getList() {
      // 获取网诊列表
      this.$axios
        .fetchPost("/Mobile/Wen/index", { mId: this.mid })
        .then((res) => {
          if (res.data.code == 0) {
            this.list = res.data.data;
          }
        });
    },
  },
};
</script>
<style lang="stylus" scoped>
.hospital_online-container
  ul
    background #fff
    margin-top 10px
    padding-left 12px
    li
      border-bottom 1px solid #e5e5e5
      &:last-child
        border none
</style>
