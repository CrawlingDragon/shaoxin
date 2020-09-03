<template>
  <div class="login-container">
    <Header :indexHeader="false"></Header>
    <div class="title-bar">账号密码登录<span>注册</span></div>
    <van-form @submit="onSubmit" class="from">
      <van-field v-model="username" name="手机号" placeholder="请输入手机号" :rules="[{ required: true, message: '请填写手机号' }]" />
      <van-field v-model="password" type="password" name="密码" placeholder="请输入密码" :rules="[{ required: true, message: '请填写密码' }]" />
      <div class="forget">忘记密码？</div>
      <div style="margin: 16px;margin-top:45px">
        <van-button round block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
    <div class="message-login">短信快捷登录</div>
    <van-divider class="line">第三方登录</van-divider>
    <div class="wechat"></div>
  </div>
</template>
<script>
import Header from "@/components/header/header";
export default {
  metaInfo: {
    title: "登录",
  },
  name: "Login",
  components: { Header },
  props: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {},
  watch: {},
  mounted() {
    // console.log("this.axios :>> ", this.$axios);
  },
  destroyed() {},
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
  },
};
</script>
<style lang="stylus" scoped>
.login-container
  height 100%
  background #fff
  position absolute
  bottom 0
  left 0
  right 0
  .title-bar
    font-size 24px
    color #333333
    text-align center
    margin 40px 0
    span
      font-size 15px
      margin-left 19px
  .from
    width 80%
    margin 0 auto
  .forget
    text-align right
    font-size 12px
    color #999999
    margin-top 20px
  .message-login
    color #FF6600
    text-align center
    font-size 15px
  .line
    color #333333
    font-size 12px
    width 80%
    margin 20px auto
  .wechat
    width 60px
    height 60px
    margin 15px auto
    border-radius 100%
    overflow hidden
    background #e5e5e5
</style>
