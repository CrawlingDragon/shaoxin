import { mapState } from 'vuex';
<template>
  <div class="fast_nav-conatiner" v-show="showFlag">
    <div class="title van-hairline--top van-hairline--bottom">
      快速导航
      <van-icon name="cross" class="van-hairline--left" @click="closeBox" />
    </div>
    <div class="nav-list">
      <div class="small-title">新型庄稼医院</div>
      <van-grid :column-num="4" :border="false">
        <van-grid-item>
          <div class="p" @click="goToHospital">找医院</div>
        </van-grid-item>
        <van-grid-item @click="goToExpert">
          <div class="p">找专家</div>
        </van-grid-item>
        <van-grid-item @click="goToBase">
          <div class="p">找基地</div>
        </van-grid-item>
        <van-grid-item>
          <a href="http://vip.114nz.com/Index/Index/index.html" class="p" target="_blank">专享商城</a>
        </van-grid-item>
      </van-grid>
      <van-grid :column-num="4" :border="false">
        <van-grid-item @click="goToAnswer">
          <div class="p">找答案</div>
        </van-grid-item>
        <van-grid-item @click="goToZuoXun">
          <div class="p">坐诊巡诊</div>
        </van-grid-item>
        <van-grid-item @click="goToCetu">
          <div class="p">测土配方</div>
        </van-grid-item>
        <van-grid-item @click="goToAsk">
          <div class="p">提问</div>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="nav-list">
      <div class="small-title">平台服务</div>
      <van-grid :column-num="4" :border="false">
        <van-grid-item>
          <a href="http://sxmvip.114nz.com" class="p" target="_blank">农资商城</a>
        </van-grid-item>
        <van-grid-item @click="goToVideo">
          <div class="p">培训视频</div>
        </van-grid-item>
        <van-grid-item @click="goToDiseases">
          <div class="p">病虫害</div>
        </van-grid-item>
        <van-grid-item @click="goToLive">
          <div class="p">直播</div>
        </van-grid-item>
      </van-grid>
      <van-grid :column-num="4" :border="false">
        <van-grid-item>
          <div class="p" @click="goToMessage">资讯</div>
        </van-grid-item>
        <van-grid-item @click="goToAi">
          <div class="p">AI智能专家</div>
        </van-grid-item>
        <van-grid-item @click="goToAboutUs">
          <div class="p">关于我们</div>
        </van-grid-item>
        <van-grid-item>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="btns" v-if="uid == ''">
      <div class="btn1" @click="goToLogin">登录</div>
      <div class="btn2" @click="goToSign">注册</div>
    </div>
    <div class="logined" v-else>
      <van-image width="35" height="35" round :src="user.avatar" class="avator" fit="cover" />
      <p class="name">{{user.username}}</p>
      <div class="login-out" @click="loginOut">退出登录</div>
    </div>
    <div class="index-btn" @click="goToIndex">
      <div class="logo"></div>
      绍兴市为农服务平台首页
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { Dialog } from "vant";
export default {
  name: "fast_nav",
  components: {},
  props: {
    showFlag: {
      type: Boolean,
      default: false,
    },
    user: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  data() {
    return {
      ai: "",
    };
  },
  computed: {
    ...mapState(["uid", "initMid"]),
  },
  watch: {},
  mounted() {
    this.getAiId();
  },
  destroyed() {},
  methods: {
    ...mapMutations(["setUid", "setMid"]),
    getAiId() {
      this.$axios.fetchPost("Mobile/Sysconfig/getAiExpert").then((res) => {
        if (res.data.code == 0) {
          this.ai = res.data.data;
        }
      });
    },
    closeBox() {
      this.$emit("changeFlag", false);
    },
    goToLogin() {
      this.$router.push({
        path: "/login",
      });
    },
    goToSign() {
      this.$router.push({
        path: "/sign",
      });
    },
    loginOut() {
      Dialog.confirm({
        title: "提示",
        message: "确认要退出登录吗",
      })
        .then(() => {
          // on confirm
          this.setUid("");
          this.$router.push({ path: "/login" });
        })
        .catch(() => {
          // on cancel
        });
    },
    goToIndex() {
      // 路由 去首页
      this.$router.push({ path: "/" }).catch((err) => err);
      this.closeBox();
    },
    goToHospital() {
      this.$router.push({ path: "/into_hospital" }).catch((err) => err);
    },
    goToExpert() {
      this.setMid(this.initMid);
      this.$router.push({ path: "/look_expert" }).catch((err) => err);
    },
    goToLive() {
      this.setMid(this.initMid);
      this.$router
        .push({ path: "/live", query: { from: "index" } })
        .catch((err) => err);
    },
    goToMessage() {
      this.$router.push({ path: "/message" }).catch((err) => err);
    },
    goToBase() {
      this.$router.push({ path: "/good_base" }).catch((err) => err);
    },
    goToAnswer() {
      //  去首页的的网诊
      this.$router.push({ path: "/index_online" }).catch((err) => err);
    },
    goToZuoXun() {
      //  去坐诊巡诊页面，和我的坐诊巡诊页面是一样
      this.$router.push({ path: "/whole_zuozhen_list" }).catch((err) => err);
    },
    goToCetu() {
      this.$router.push({ path: "/whole_cetu_list" }).catch((err) => err);
    },
    goToAsk() {
      this.$router.push({ path: "/ask" }).catch((err) => err);
    },
    goToVideo() {
      this.$router.push({ path: "/video_list" }).catch((err) => err);
    },
    goToDiseases() {
      this.$router.push({ path: "/diseases" }).catch((err) => err);
    },
    goToAi() {
      // 去ai页面
      this.$router
        .push({ path: "/expert", query: { id: this.ai } })
        .catch((err) => err);
    },
    goToAboutUs() {
      this.$router.push({ path: "/about_us" }).catch((err) => err);
    },
  },
};
</script>
<style lang="stylus" scoped>
.fast_nav-conatiner
  position fixed
  top 0
  bottom 0
  right 0
  left 0
  background #EBEBEB
  z-index 11
  .title
    height 40px
    line-height 40px
    padding-left 12px
    color #999999
    font-size 14px
    background #fff
    border-bottom 1px solid #E5E5E5
    .van-icon
      width 45px
      font-size 14px
      float right
      line-height 40px
      text-align center
      border-left 1px solid #E5E5E5
  .nav-list
    background #fff
    padding-top 15px
    padding-bottom 13px
    border-bottom 1px solid #E5E5E5
    .small-title
      font-size 12px
      color #999999
      line-height 12px
      margin 0 0 15px 11px
    .p
      width 75px
      height 26px
      background rgba(246, 246, 246, 1)
      border-radius 8px
      color #333333
      font-size 15px
      text-align center
      line-height 26px
      margin 0 auto
    /deep/.van-grid-item__content
      padding-top 7px
      padding-bottom 7px
  .btns
    background #fff
    text-align center
    line-height 1.2
    padding 25px 21px
    & > div
      display inline-block
      width 80px
      height 30px
      text-align center
      line-height 30px
      border-radius 4px
      &:first-child
        margin-right 30px
    .btn1
      color #155BBB
      border 1px solid #155BBB
      font-size 12px
      vertical-align middle
    .btn2
      background rgba(21, 91, 187, 1)
      color #fff
      border 1px solid #333333
      vertical-align middle
  .logined
    background #fff
    height 76px
    display flex
    align-items center
    .avator
      margin 0 15px 0 12px
    .name
      font-size 14px
      color #333
      flex 1
    .login-out
      color #155BBB
      font-size 12px
      margin 0 12px
  .index-btn
    position absolute
    bottom 30px
    width 190px
    height 30px
    left 50%
    transform translateX(-50%)
    background rgba(248, 248, 248, 0)
    border 1px solid rgba(21, 91, 187, 1)
    border-radius 4px
    line-height 30px
    font-size 12px
    display flex
    align-items center
    color #155BBB
    .logo
      width 20px
      height 20px
      margin-left 15px
      margin-right 5px
      background url('./1.png') no-repeat
      background-size 100% 100%
      background-position center
</style>
