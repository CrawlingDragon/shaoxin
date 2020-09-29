<template>
  <div class="index_online-container" ref="online">
    <Header :tabbarActive="1"></Header>
    <div class="choose-box">
      <div class="back" @click="goBack"></div>
      <div class="all" @click="openBox">{{areaName}}
        <van-icon name="arrow-down" class="down" />
      </div>
      <div class="crop" @click="goToChooseCrop">{{crop}}
        <van-icon name="arrow-down" class="down" />
      </div>
      <div class="address-box" v-show="addressFlag">
        <div class="item" @click="chooseAddress(9999,'全部地区')">全部地区</div>
        <div class="item" @click="chooseAddress(1111,'绍兴市')">绍兴市</div>
        <van-icon name="cross" class="cross" @click="addressFlag = false" />
      </div>
    </div>
    <div class="online-box">
      <ul class="o-ul">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <li v-for="item in onlineArr" :key="item.id">
            <OnlineItem :list="item" @preImage="preverImg"></OnlineItem>
          </li>
        </van-list>
      </ul>
    </div>
    <Foot></Foot>
  </div>
</template>
<script>
import Header from "@/components/header/header.vue";
import OnlineItem from "@/components/online_item/online_item";
import { ImagePreview } from "vant";
import { mapState } from "vuex";
import Foot from "@/components/foot/foot";
export default {
  name: "indexOnline",
  metaInfo: {
    title: "网诊",
  },
  components: {
    Header,
    OnlineItem,
    [ImagePreview.Component.name]: ImagePreview.Component,
    Foot,
  },
  beforeRouteLeave(to, from, next) {
    // ... to
    window.scrollTo(0, 0);
    next();
  },
  props: {},
  data() {
    return {
      addressFlag: false,
      onlineArr: [],
      fid: this.$route.query.fid,
      crop: this.$route.query.name || "作物",
      areaName: "全部",
      page: 0,
      loading: false,
      finished: false,
      area: "",
    };
  },
  computed: {
    ...mapState(["mid", "uid", "initMid"]),
  },
  watch: {
    fid() {
      this.fid = this.$route.query.fid;
      this.onlineArr = [];
      this.page = 0;
      this.getIndexData();
      // console.log("1 :>> ", 1);
    },
    crop() {
      this.crop = this.$route.query.name;
      this.onlineArr = [];
      this.page = 0;
      this.getIndexData();
    },
    area() {
      this.onlineArr = [];
      this.page = 0;
      this.getIndexData();
    },
  },
  created() {},
  mounted() {
    // this.getIndexData(this.mid, this.fid);
  },
  destroyed() {},
  methods: {
    onLoad() {
      this.getIndexData();
    },
    getIndexData() {
      // 获取首页数据
      this.page += 1;
      this.$axios
        .fetchPost("/Mobile/Wen/index", {
          mId: this.initMid,
          fId: this.fid,
          areaId: this.area,
          page: this.page,
          uId: this.uid,
        })
        .then((res) => {
          if (res.data.code == 0) {
            this.onlineArr = this.onlineArr.concat(res.data.data);
            this.loading = false;
          } else if (res.data.code == 201) {
            this.finished = true;
          }
        });
    },
    chooseAddress(area, name) {
      this.area = area;
      // this.getIndexData();
      this.areaName = name;
      this.addressFlag = false;
    },
    goBack() {
      this.$router.push({ path: "/index" });
    },
    openBox() {
      this.addressFlag = !this.addressFlag;
    },
    preverImg(item) {
      //网诊的图片预览
      ImagePreview({
        images: item.arr,
        startPosition: item.index,
        closeable: true,
      });
    },
    goToChooseCrop() {
      this.$router.push({
        path: "/choose_crop",
        query: { crop: this.crop },
      });
    },
  },
};
</script>
<style lang="stylus" scoped>
.index_online-container
  padding-bottom 50px
  .choose-box
    height 40px
    display flex
    align-items center
    background #fff
    border-bottom 1px solid #e5e5e5
    position relative
    margin-top 10px
    .back
      width 25px
      height 25px
      background url('./70.png') no-repeat
      background-size 25px 25px
      background-position center
      padding 0 13px
      box-sizing content-box
      margin-right 20px
    .all
      font-size 15px
      color #333
      padding-right 34px
      line-height 40px
      display flex
      align-items center
      .down
        margin-left 5px
        font-size 18px
        color #999999
    .crop
      font-size 15px
      color #333
      padding-right 34px
      line-height 40px
      display flex
      align-items center
      .down
        margin-left 5px
        font-size 18px
        color #999999
    .address-box
      position absolute
      left 0
      right 0
      height 75px
      bottom -76px
      background #fff
      display flex
      align-items center
      padding-left 12px
      border-bottom 1px solid #e5e5e5
      z-index 11
      .item
        width 75px
        background #F6F6F6
        height 25px
        color #333333
        border-radius 8px
        font-size 15px
        text-align center
        line-height 25px
        margin-right 15px
      .cross
        font-size 28px
        position absolute
        right 15px
        top 14px
        color #9D9D9D
  .online-box
    background #fff
    .title
      font-size 17px
      color #343434
      height 40px
      line-height 40px
      padding-left 12px
      border-bottom 1px solid #e5e5e5
    .o-ul
      margin-left 12px
      li
        width 100%
        border-bottom 1px solid #e5e5e5
        &:last-child
          border none
    .e-ul
      padding-top 10px
      display flex
      flex-wrap wrap
      margin-left 12px
      border-bottom 1px solid #e5e5e5
      padding-bottom 5px
      li
        width 50%
        padding-right 12px
        margin-bottom 10px
</style>
