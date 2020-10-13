<template>
  <div class="login-container">
    <Header :indexHeader="false"></Header>
    <div class="title-bar">账号密码登录<span @click="goToSign">注册</span></div>
    <van-form @submit="onSubmit" class="from">
      <van-field v-model="username" type="tel" name="phone" placeholder="请输入手机号" :rules="[{validator:validatorPhone, },{ required: true }]" />
      <van-field v-model="password" type="password" name="pwd" placeholder="请输入密码" :rules="[{ required: true }]" />
      <div class="forget" @click="goToForget">忘记密码？</div>
      <div style="margin: 16px;margin-top:45px">
        <van-button round block type="info" native-type="submit" class="sub" :class="{'success':(this.username && this.password)}">
          登录
        </van-button>
      </div>
    </van-form>
    <div class="message-login" @click="goTo_M_Login">短信快捷登录</div>

  </div>
</template>
<script>
import Header from "@/components/header/header";
import { mapMutations } from "vuex";
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
  created() {},
  computed: {},
  watch: {},
  mounted() {
    // console.log("this.axios :>> ", this.$axios);
  },
  destroyed() {},
  methods: {
    ...mapMutations(["setUid", "setIsMember"]),
    validatorPhone(val) {
      // 验证手机号码
      if (/^1(3|4|5|6|7|8|9)\d{9}$/.test(val)) {
        this.clickTrue = true;
      } else {
        this.clickTrue = false;
      }
      return /^1(3|4|5|6|7|8|9)\d{9}$/.test(val);
    },
    onSubmit() {
      // console.log("submit", values);
      this.$axios
        .fetchPost("Mobile/Member/login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          this.$toast(res.data.message);
          if (res.data.code == 0) {
            this.setUid(res.data.data.uid);
            this.createScript(res.data.data.msg[0])
            this.createScript(res.data.data.msg[1])
            this.createScript(res.data.data.msg[2])
            this.createScript(res.data.data.msg[3])
            this.$router.push({
              path: "/index",
            });
          }
        });
    },
    createScript(src){
      let js = document.createElement('script')
      js.setAttribute('type','text/javascript')
      js.src = src
      document.getElementsByTagName('head')[0].appendChild(js)
    },
    goTo_M_Login() {
      this.$router.push({
        path: "/m_login",
      });
    },
    goToSign() {
      this.$router.push({
        path: "/sign",
      });
    },
    goToForget() {
      this.$router.push({
        path: "/find_password",
      });
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
    margin 80px 0 40px
    span
      font-size 15px
      margin-left 19px
  .from
    width 80%
    margin 0 auto
    .sub
      background #BBBBBB
      border none
      &.success
        background #ff6600
        color #fff
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
