<template>
  <div class="hospital-container">
    <HospitalHeader header='indexHeader' navHeader='医院主页'></HospitalHeader>
    <HospitalNav :isistore="mpublic.isistore" :ismember="mpublic.ismember"></HospitalNav>
    <div class="info-list" v-show="messageList.length != 0">
      <div class="title">资讯</div>
      <ul>
        <li v-for="item in messageList" :key="item.id">
          <MessageItem :list="item"></MessageItem>
        </li>
      </ul>
    </div>
    <div class="look-more" @click="goToMmessage" v-show="messageList.length != 0">查看更多 ></div>
    <div class="expert-list">
      <div class="title">本院专家</div>
      <ul class="expert-ul clearfix">
        <li v-for="item in expertList" :key="item.expertid">
          <RecommendExpert :list="item" :isSelfExpert="true"></RecommendExpert>
        </li>
      </ul>
    </div>
    <div class="look-more" @click="goToExperts">查看更多 ></div>
    <div class="online-list">
      <div class="title">网诊</div>
      <ul class="ul-online">
        <li v-for="item in wenList" :key="item.tid">
          <OnlineItem :list="item" @preImage="preverImg"></OnlineItem>
        </li>
      </ul>
    </div>
    <div class="look-more" @click="lookMoreHospital">查看更多 ></div>
  </div>
</template>
<script>
import HospitalHeader from "@/components/hospital_header/hospital_header";
import HospitalNav from "@/components/hospital_nav/hospital_nav";
import MessageItem from "@/components/message_item/message_item";
import RecommendExpert from "@/components/recommend_expert/recommend_expert";
import OnlineItem from "@/components/online_item/online_item";
import { mapState, mapMutations } from "vuex";
import { ImagePreview } from "vant";
export default {
  name: "hospital",
  components: {
    HospitalHeader,
    HospitalNav,
    MessageItem,
    RecommendExpert,
    OnlineItem,
    [ImagePreview.Component.name]: ImagePreview.Component,
  },
  metaInfo() {
    return {
      title: this.title + "新型庄稼医院",
    };
  },
  props: {},
  data() {
    return {
      title: "",
      messageList: [],
      expertList: [],
      wenList: [],
      mpublic: "",
    };
  },
  created() {
    this.$emit("footer", true);
  },
  computed: {
    ...mapState(["uid", "mid"]),
  },
  watch: {
    $route() {
      this.getHospitalData(this.mid);
      this.$emit("footer", true);
    },
  },
  mounted() {
    this.getHospitalData(this.mid);
  },
  destroyed() {},
  methods: {
    ...mapMutations(["setJoinTime"]),
    getHospitalData(mid) {
      this.$axios
        .fetchPost("Mobile/Mpublic/MpublicPage", {
          mId: mid,
          uId: this.uid,
        })
        .then((res) => {
          let data = res.data.data;
          if (res.data.code == 0) {
            this.messageList = data.list_news;
            this.expertList = data.list_expert;
            this.wenList = data.list_wen;
            this.title = data.mpublic.name;
            this.mpublic = data.mpublic;
            this.setJoinTime(data.mpublic.addtime);
          }
        });
    },
    preverImg(item) {
      //网诊的图片预览
      ImagePreview({
        images: item.arr,
        startPosition: item.index,
        closeable: true,
      });
    },
    goToMmessage() {
      //  查看更多资讯
      this.$router.push({
        path: "/hospital_message",
        query: { mid: this.mid },
      });
    },
    goToExperts() {
      //  查看更多专家
      this.$router.push({
        path: "/hospital_expert",
      });
    },
    lookMoreHospital() {
      //  查看更多医院网诊
      this.$router.push({
        path: "/hospital_online",
      });
    },
  },
};
</script>
<style lang="stylus" scoped>
.hospital-container
  padding-bottom 50px
  .info-list
    background #fff
    .title
      font-size 17px
      color #333
      padding-left 12px
      height 40px
      line-height 40px
      border-bottom 1px solid #e5e5e5
    ul
      border-bottom 1px solid #e5e5e5
      padding-left 12px
      li
        border-bottom 1px solid #e5e5e5
        &:last-child
          border none
  .look-more
    height 41px
    text-align center
    color #155BBB
    line-height 41px
    margin-bottom 10px
    font-size 12px
    background #fff
  .expert-list
    background #fff
    .title
      height 40px
      line-height 40px
      padding-left 12px
      font-size 17px
      color #333
      border-bottom 1px solid #e5e5e5
    .expert-ul
      margin-left 12px
      column-count 2
      column-gap 0
      border-bottom 1px solid #e5e5e5
      padding-bottom 15px
      padding-top 15px
      li
        padding-right 12px
        margin-bottom 10px
        break-inside avoid
  .online-list
    background #fff
    .title
      height 40px
      line-height 40px
      padding-left 12px
      font-size 17px
      color #333
      border-bottom 1px solid #e5e5e5
    .ul-online
      margin-left 12px
      display flex
      flex-wrap wrap
      border-bottom 1px solid #e5e5e5
      li
        border-bottom 1px solid #e5e5e5
        width 100%
        &:last-child
          border none
</style>
