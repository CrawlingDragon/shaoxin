<template>
  <div class="ask-container">
    <Header navHeader="提问"></Header>
    <div class="title">问题描述</div>
    <van-form @submit="onSubmit" class="from">
      <van-field v-model="message" rows="1" autosize type="textarea" placeholder="请输入具体问题描述" class="text" />
      <van-field name="uploader" class="uploader">
        <template #input>
          <van-uploader v-model="uploader" />
        </template>
      </van-field>
      <div class="choose-crop">
        <div class="left">作物</div>
        <div class="right">请选择</div>
        <van-icon name="arrow" class="arrow" />
      </div>
      <div class="list">
        <div class="left">咨询专家</div>
        <div class="right">王汉荣</div>
      </div>
      <div class="choose-crop">
        <div class="left">所在位置</div>
        <div class="right location">浙江省绍兴市柯城区</div>
        <van-icon name="arrow" class="arrow" />
      </div>
      <div style="margin: 16px;" class="sub">
        <van-button round block type="info" native-type="submit" class="btn">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import Header from "@/components/hospital_header/hospital_header";
export default {
  name: "ask",
  components: { Header },
  props: {},
  data() {
    return {
      message: "",
      uploader: [],
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  destroyed() {},
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
  },
};
</script>
<style lang="stylus" scoped>
.ask-container
  height 100%
  background #fff
  position relative
  .title
    background #fff
    color #333333
    font-size 16px
    line-height 16px
    padding 15px 12px 10px 12px
  .from
    background #fff
    .text
      margin-right 12px
      margin-left 12px
      width auto
      height 125px
      font-size 12px
      border 1px solid #e5e5e5
    .uploader
      padding 10px 12px
      &.van-cell::after
        display none
    .choose-crop
      border-top 1px solid #e5e5e5
      border-bottom 1px solid #e5e5e5
      display flex
      align-items center
      height 50px
      padding-left 12px
      .left
        width 106px
        color #333333
        font-size 16px
      .right
        flex 1
        color #999999
        text-align right
        &.location
          color #333
      .arrow
        font-size 12px
        color #999999
        margin 0 12px
    .list
      height 50px
      line-height 50px
      display flex
      align-items center
      justify-content space-between
      font-size 16px
      color #333
      padding 0 35px 0 12px
    .sub
      bottom -85px
      position absolute
      left 12px
      right 12px
      .btn
        border-radius 4px
        background #155BBB
        font-size 15px
        color #fff
</style>
