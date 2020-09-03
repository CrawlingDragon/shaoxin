<template>
  <div class="zuozhen_detail-container">
    <Header header="logoHeader"></Header>
    <ul class="top-ul">
      <li class="title1">{{zuozhen.title}}</li>
      <li>
        <div class="left">送样人</div>
        <div class="right">{{zuozhen.username}}</div>
      </li>
      <li>
        <div class="left">种植作物</div>
        <div class="right">{{zuozhen.fname}}</div>
      </li>
      <li>
        <div class="left">坐诊日期</div>
        <div class="right">{{zuozhen.addtime}}</div>
      </li>
      <li>
        <div class="left">病情描述</div>
        <div class="right">{{zuozhen.content}}</div>
      </li>
      <div class="img-ul" v-if="zuozhen.pic_urls_tiny.length != 0">
        <div class="t1">病情图片</div>
        <div class="item">
          <van-image class="img" v-for="(item,index) in zuozhen.pic_urls_tiny" :key="item" :src="item" @click="preverImg(index)"></van-image>
        </div>
      </div>
    </ul>
    <div class="bottom">
      <div class="title">处方信息</div>
      <div class="list">
        <div class="left">处方专家</div>
        <div class="right">{{zuozhen.chufang_expert}}</div>
      </div>
      <div class="list">
        <div class="left">看诊结果</div>
        <div class="right">{{zuozhen.result}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/hospital_header/hospital_header";
import { ImagePreview } from "vant";
export default {
  metaInfo() {
    return {
      title: this.zuozhen.title,
    };
  },
  name: "zuozhenDetail",
  components: { Header, [ImagePreview.Component.name]: ImagePreview.Component },
  props: {},
  data() {
    return {
      zuozhen: "",
      id: this.$route.query.id,
    };
  },
  computed: {},
  watch: {
    $route() {
      this.getZuoDetail(this.id);
    },
  },
  mounted() {
    this.getZuoDetail(this.id);
  },
  destroyed() {},
  methods: {
    getZuoDetail(id) {
      this.$axios
        .fetchPost("/Mobile/Treatment/wenzhenDetail", { id: id })
        .then((res) => {
          if (res.data.code == 0) {
            this.zuozhen = res.data.data;
          }
        });
    },
    preverImg(index) {
      //网诊的图片预览
      ImagePreview({
        images: this.zuozhen.pic_urls,
        startPosition: index,
        closeable: true,
      });
    },
  },
};
</script>
<style lang="stylus" scoped>
.zuozhen_detail-container
  .top-ul
    margin-top 10px
    background #fff
    padding-left 12px
    .title1
      color #155BBB
      font-size 17px
    li
      min-height 50px
      padding 15px 12px
      padding-left 0
      display flex
      border-bottom 1px solid #e5e5e5
      &:last-child
        border none
      .left
        width 100px
        color #999999
        font-size 15px
      .right
        flex 1
        color #333
    .img-ul
      padding 15px 12px
      padding-right 5px
      .t1
        color #999999
        font-size 15px
        margin-bottom 10px
      .img
        display inline-block
        width 70px
        height 70px
        margin-right 10px
  .bottom
    margin-top 10px
    background #fff
    .title
      font-size 17px
      color #155BBB
    & > div
      padding 15px 12px
      border-bottom 1px solid #e5e5e5
      &:last-child
        border none
    .list
      display flex
      .left
        width 100px
        color #999999
        font-size 15px
      .right
        flex 1
        color #333
        font-size 15px
</style>