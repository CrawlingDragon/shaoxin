<template>
  <div class="sign-container">
    <Header :indexHeader="false"></Header>
    <div class="title">快速注册</div>
    <van-form @submit="onSubmit" class="from">
      <van-field v-model="username" name="手机号" placeholder="请输入手机号" :rules="[{validator: validatorPhone,message:'请输入正确的手机号码'},{ required: true, message: '请填写手机号' }]" />
      <van-field v-model="sms" center clearable placeholder="请输入4位验证码" maxlength="4" :rules="[{ required: true, message: '请输入验证码' }]">
        <template #button>
          <div class="btn" v-if="showBtn" @click="start">发送验证码</div>
          <div v-show="!showBtn">
            <van-count-down ref="countDown" millisecond :time="60000" :auto-start="false" format="ss秒后重试" @finish="finish" />
          </div>

        </template>
      </van-field>
      <van-field v-model="password" type="password" name="密码" placeholder="请输入密码（6-20位）" minlength="6" maxlength="20" :rules="[{ required: true, message: '请填写密码' }]" />
      <div style="margin: 16px;margin-top:45px">
        <van-button round block type="info" native-type="submit">
          注册
        </van-button>
      </div>
    </van-form>
    <div class="go-login" @click="goToLogin">已有益农宝账号，去登录 </div>
  </div>
</template>
<script>
import Header from "@/components/header/header";
import { mapMutations } from "vuex";

export default {
  name: "sign",
  components: { Header },
  metaInfo: {
    title: "注册",
  },
  props: {},
  data() {
    return {
      showBtn: true,
      clickTrue: false,
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
    ...mapMutations(["setUid"]),
    validatorPhone(val) {
      // 验证手机号码
      if (/^1(3|4|5|6|7|8|9)\d{9}$/.test(val)) {
        this.clickTrue = true;
      } else {
        this.clickTrue = false;
      }
      return /^1(3|4|5|6|7|8|9)\d{9}$/.test(val);
    },
    finish() {
      this.$refs.countDown.reset();
      this.showBtn = true;
      this.clickTrue = true;
    },
    onSubmit(val) {
      console.log("val :>> ", val);
    },
    signFn(username, password, code) {
      this.$axios
        .fetchPost("Mobile/Member/register", { username, password, code })
        .then((res) => {
          if (res.data.code == 0) {
            this.$router.push({ path: "/" });
            this.setUid(res.data.data.uid);
          }
          this.$toast(res.data.message);
        });
    },
    start() {
      if (!this.clickTrue) {
        return;
      }
      this.sendPhone();
      this.clickTrue = false;
      this.showBtn = false;
      setTimeout(() => {
        this.$refs.countDown.start();
      }, 100);
    },
    sendPhone() {
      //发送验证码
      this.$axios
        .fetchPost("Mobile/Member/ServerSmsCode", {
          mobile: this.username,
        })
        .then((res) => {
          if (res.data.code == 0) {
            this.$toast(res.data.message);
          } else {
            this.$toast(res.data.message);
          }
        });
    },
    goToLogin() {
      this.$router.push({
        path: "/login",
      });
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
  .van-count-down
    color #999
    font-size 13px
</style>
