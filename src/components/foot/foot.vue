<template>
  <div class="foot-container">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">进院</van-tabbar-item>
      <van-tabbar-item icon="friends-o">提问</van-tabbar-item>
      <van-tabbar-item icon="setting-o">资讯</van-tabbar-item>
      <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
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
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
  destroyed() {},
  methods: {},
};
</script>
<style lang="stylus" scoped></style>
