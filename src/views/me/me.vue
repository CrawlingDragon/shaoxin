<template>
  <div class="me-container">
    <Header :indexHeader="false"></Header>
    <div class="user-box">
      <van-image class="avator" round fit="cover"></van-image>
      <div class="mid">
        <p class="p1">某某某<span>种植专家</span></p>
        <p class="p2">用户名:13450297220</p>
      </div>
      <div class="right">编辑 ></div>
    </div>
    <div class="my-ul">
      <van-cell title="加入的医院" to="/hospital" is-link>
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #icon>
          <div class="icon01"></div>
        </template>
      </van-cell>
      <van-cell title="挂号记录" to="/hospital" is-link>
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #icon>
          <div class="icon02"></div>
        </template>
      </van-cell>
      <van-cell title="我的基地" to="/hospital" is-link>
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #icon>
          <div class="icon03"></div>
        </template>
      </van-cell>
      <van-cell title="土壤检测" to="/hospital" is-link>
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #icon>
          <div class="icon04"></div>
        </template>
      </van-cell>
      <van-cell title="坐诊巡诊" to="/hospital" is-link>
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #icon>
          <div class="icon05"></div>
        </template>
      </van-cell>
      <van-cell title="问答管理" to="/hospital" is-link>
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #icon>
          <div class="icon06"></div>
        </template>
      </van-cell>
    </div>
    <van-cell title="个人主页" to="/hospital" is-link style="margin-top:10px">
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <template #icon>
        <div class="icon07"></div>
      </template>
    </van-cell>
    <van-cell title="我的关注" to="/hospital" is-link>
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <template #icon>
        <div class="icon08"></div>
      </template>
    </van-cell>
    <van-cell title="联系客服 4008596318" to="/hospital" is-link style="margin-top:10px">
      <!-- 使用 right-icon 插槽来自定义右侧图标 -->
      <template #icon>
        <div class="icon09"></div>
      </template>
    </van-cell>
    <Foot :active="4"></Foot>
  </div>
</template>
<script>
import Header from "@/components/header/header";
import Foot from "@/components/foot/foot";
export default {
  name: "me",
  components: { Header, Foot },
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
.me-container
  .user-box
    display flex
    padding 20px 12px
    align-items center
    background #fff
    margin-bottom 10px
    margin-top 10px
    .avator
      width 65px
      height 65px
      margin-right 15px
    .mid
      flex 1
      .p1
        color #333333
        font-size 20px
        line-height 20px
        margin-bottom 5px
        span
          margin-left 12px
          color #999
          font-size 12px
      .p2
        color #999
        font-size 12px
    .right
      color #155BBB
      font-size 14px
      padding 0 12px 0 12px
  .my-ul
    .van-cell
      align-items center
    .icon01
      width 18px
      height 18px
      background url('./62.png') no-repeat
      background-size 100%
      background-position center
      margin-right 10px
    .icon02
      width 18px
      height 18px
      background url('./60.png') no-repeat
      background-size 100%
      background-position center
      margin-right 10px
    .icon03
      width 18px
      height 18px
      background url('./61.png') no-repeat
      background-size 100%
      background-position center
      margin-right 10px
    .icon04
      width 18px
      height 18px
      background url('./63.png') no-repeat
      background-size 100%
      background-position center
      margin-right 10px
    .icon05
      width 18px
      height 18px
      background url('./64.png') no-repeat
      background-size 100%
      background-position center
      margin-right 10px
    .icon06
      width 18px
      height 18px
      background url('./59.png') no-repeat
      background-size 100%
      background-position center
      margin-right 10px
.icon07
  width 18px
  height 18px
  background url('./65.png') no-repeat
  background-size 100%
  background-position center
  margin-right 10px
.icon08
  width 18px
  height 18px
  background url('./66.png') no-repeat
  background-size 100%
  background-position center
  margin-right 10px
.icon09
  width 18px
  height 18px
  background url('./67.png') no-repeat
  background-size 100%
  background-position center
  margin-right 10px
</style>
