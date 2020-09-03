<template>
  <!-- 挂号记录item -->
  <div class="register_item">
    <div class="top">
      <div class="left">2020-08-06 上午 第5号</div>
      <div class="right">待就诊</div>
    </div>
    <div class="mid">
      <van-image class="img" fit="cover" radius="5px"></van-image>
      <div class="p2">
        <div class="name">柯桥新型庄稼医院</div>
        <div class="expert">王汉荣专家 </div>
      </div>
    </div>
    <div class="bottom">
      <div class="left">挂号时间: 2020-08-01 16:00</div>
      <div class="right">NO:7200000038</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Register_item",
  components: {},
  props: {},
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
<style lang="stylus" scoped>
.register_item
  .top
    height 40px
    display flex
    align-items center
    justify-content space-between
    .left
      font-size 12px
      color #999999
    .right
      color #155BBB
      font-size 12px
.mid
  padding 15px 0
  display flex
  align-items center
  border-top 1px solid #e5e5e5
  border-bottom 1px solid #e5e5e5
  .img
    width 60px
    height 60px
    margin-right 10px
  .p2
    .name
      font-size 15px
      color #333
      margin-bottom 5px
    .expert
      font-size 12px
      color #333
.bottom
  display flex
  align-items center
  justify-content space-between
  height 40px
  color #999999
  font-size 12px
</style>
