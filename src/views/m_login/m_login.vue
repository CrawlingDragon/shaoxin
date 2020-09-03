<template>
  <div class="m_login-container">
    <Header :indexHeader="false"></Header>
    <div class="title">短信快捷登录<span>注册</span></div>
    <van-form @submit="onSubmit" class="from">
      <van-field v-model="username" name="手机号" placeholder="请输入手机号" :rules="[{ required: true, message: '请填写手机号' }]" />
      <van-field v-model="sms" center clearable placeholder="请输入6位验证码">
        <template #button>
          <div class="btn" v-if="showBtn">发送验证码</div>
          <van-count-down ref="countDown" millisecond :time="60000" :auto-start="false" format="ss" @finish="finish" v-else />
        </template>
      </van-field>
      <div style="margin: 16px;margin-top:45px">
        <van-button round block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
    <div class="go-login">账号密码登录</div>
  </div>
</template>
<script>
import Header from "@/components/header/header";
export default {
  name: "mLogin",
  components: { Header },
  props: {},
  data() {
    return {
      showBtn: true,
      username: "",
      sms: "",
      password: "",
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  destroyed() {},
  methods: {
    finish() {
      this.$oast("倒计时结束");
    },
    onSubmit(val) {
      console.log("val :>> ", val);
    },
  },
};
</script>
<style lang="stylus" scoped>
.m_login-container
  height 100%
  position absolute
  left 0
  right 0
  background #fff
  .title
    font-size 24px
    color #333333
    text-align center
    margin 40px 0
    padding-left 40px
    span
      margin-left 19px
      font-size 15px
  .from
    width 80%
    margin 0 auto
  .go-login
    margin 15px 0
    text-align center
    color #ff6600
    font-size 15px
</style>
