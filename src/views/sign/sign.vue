<template>
  <div class="sign-container">
    <Header :indexHeader="false"></Header>
    <div class="title">快速注册</div>
    <van-form @submit="onSubmit" class="from">
      <van-field v-model="username" name="手机号" placeholder="请输入手机号" :rules="[{ required: true, message: '请填写手机号' }]" />
      <van-field v-model="sms" center clearable placeholder="请输入6位验证码">
        <template #button>
          <div class="btn" v-if="showBtn">发送验证码</div>
          <van-count-down ref="countDown" millisecond :time="60000" :auto-start="false" format="ss" @finish="finish" v-else />
        </template>
      </van-field>
      <van-field v-model="password" type="password" name="密码" placeholder="请输入密码（6-20位）" :rules="[{ required: true, message: '请填写密码' }]" />
      <div style="margin: 16px;margin-top:45px">
        <van-button round block type="info" native-type="submit">
          注册
        </van-button>
      </div>
    </van-form>
    <div class="go-login">已有益农宝账号，去登录 </div>
  </div>
</template>
<script>
import Header from "@/components/header/header";
export default {
  name: "sign",
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
.sign-container
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
  .from
    width 80%
    margin 0 auto
  .go-login
    margin 15px 0
    text-align center
    color #ff6600
    font-size 15px
</style>
