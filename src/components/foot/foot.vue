<template>
  <div class="foot-container">
    <van-tabbar v-model="myActive">
      <van-tabbar-item @click="goToIndex">
        <template #icon="props">
          <div class="icon" :class="props.active ? icon01.active : icon01.inactive"></div>
        </template>
        首页
      </van-tabbar-item>
      <van-tabbar-item @click="goToHospital">
        <template #icon="props">
          <div class="icon" :class="props.active ? icon02.active : icon02.inactive"></div>
        </template>
        进院
      </van-tabbar-item>
      <van-tabbar-item @click="goToAsk">
        <template #icon="props">
          <div class="icon" :class="props.active ? icon03.active : icon03.inactive"></div>
        </template>
        提问
      </van-tabbar-item>
      <van-tabbar-item @click="goToMessage">
        <template #icon="props">
          <div class="icon" :class="props.active ? icon04.active : icon04.inactive"></div>
        </template>
        资讯
      </van-tabbar-item>
      <van-tabbar-item @click="goToMe">
        <template #icon="props">
          <div class="icon" :class="props.active ? icon05.active : icon05.inactive"></div>
        </template>
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "foot",
  components: {},
  props: {
    active: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      myActive: this.active,
      icon01: {
        active: "icon01_active",
        inactive: "icon01_inactive",
      },
      icon02: {
        active: "icon02_active",
        inactive: "icon02_inactive",
      },
      icon03: {
        active: "icon03_active",
        inactive: "icon03_inactive",
      },
      icon04: {
        active: "icon04_active",
        inactive: "icon04_inactive",
      },
      icon05: {
        active: "icon05_active",
        inactive: "icon05_inactive",
      },
    };
  },
  computed: {},
  watch: {
    active() {
      console.log("1 :>> ", 1);
    },
  },
  mounted() {},
  destroyed() {},
  methods: {
    goToIndex() {
      // 路由 首页
      this.$router
        .push({
          path: "/",
        })
        .catch((err) => err);
    },
    goToHospital() {
      // 路由 医院
      this.$router
        .push({
          path: "/hospital",
        })
        .catch((err) => err);
    },
    goToAsk() {
      // 路由 提问
      this.$router
        .push({
          path: "/ask",
        })
        .catch((err) => err);
    },
    goToMessage() {
      // 路由 资讯
      this.$router
        .push({
          path: "/message",
        })
        .catch((err) => err);
    },
    goToMe() {
      // 路由 我的
      this.$router
        .push({
          path: "/me",
        })
        .catch((err) => err);
    },
  },
};
</script>
<style lang="stylus" scoped>
.foot-container
  .icon
    width 25px
    height 25px
  .icon01_active
    background url('./25.png') no-repeat
    background-size cover
    background-position center center
  .icon01_inactive
    background url('./15.png') no-repeat
    background-size cover
    background-position center center
  .icon02_active
    background url('./27.png') no-repeat
    background-size cover
    background-position center center
  .icon02_inactive
    background url('./16.png') no-repeat
    background-size cover
    background-position center center
  .icon03_active
    background url('./29.png') no-repeat
    background-size cover
    background-position center center
  .icon03_inactive
    background url('./17.png') no-repeat
    background-size cover
    background-position center center
  .icon04_active
    background url('./34.png') no-repeat
    background-size cover
    background-position center center
  .icon04_inactive
    background url('./18.png') no-repeat
    background-size cover
    background-position center center
  .icon05_active
    background url('./31.png') no-repeat
    background-size cover
    background-position center center
  .icon05_inactive
    background url('./19.png') no-repeat
    background-size cover
    background-position center center
</style>
