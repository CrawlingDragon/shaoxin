<template>
  <div class="expert_registration-container">
    <Header navHeader="专家挂号"></Header>
    <div class="registration-box">
      <div class="title">
        <div class="left"></div>
        <div class="mid">上午</div>
        <div class="right">下午</div>
      </div>
      <div class="item-box">
        <div class="item" v-for="item in 6" :key="item">
          <div class=" left">
            周四 <br /> <span class="days">07/23</span>
          </div>
          <div class="mid">
            <div class="number" v-if="forenoon">总10 剩10</div>
            <div class="p1" v-else>无号源</div>
            <div class="now">即将开发</div>
            <div class="expert" v-if="forenoon">王汉荣专家</div>
          </div>
          <div class="right">
            <div class="number" v-if="afternoon">总10 剩10</div>
            <div class="p1" v-else>无号源</div>
            <div class="now">即将开发</div>
            <div class="expert" v-if="afternoon">王汉荣专家</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/hospital_header/hospital_header";
export default {
  name: "expertRegistration",
  components: { Header },
  props: {},
  data() {
    return {
      afternoon: true,
      forenoon: true,
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  destroyed() {},
  methods: {},
};
</script>
<style lang="stylus" scoped>
.expert_registration-container
  .title
    margin-top 10px
    background #fff
    height 40px
    line-height 40px
    font-size 0
    border-bottom 1px solid #e5e5e5
    padding 0 12px
    display flex
    & > div
      flex 1
      font-size 15px
      color #333
    .mid
      text-align center
      flex 2
    .right
      text-align center
      flex 2
  .item-box
    background #fff
    padding 0 12px
    .item
      background #fff
      border-bottom 1px solid #e5e5e5
      display flex
      height 75px
      align-items center
      justify-content center
      &:last-child
        border none
      & > div
        flex 1
      .left
        font-size 15px
        color #333
        .days
          color #999
          font-size 12px
      .mid, .right
        text-align center
        flex 2
        font-size 12px
        color #999
        .number
          color #155BBB
          padding 9px 12px
          border 1px solid #155BBB
          border-radius 4px
          display inline-block
          line-height 12px
          margin-bottom 5px
        .now
          color #999999
          padding 9px 12px
          border 1px solid #999999
          border-radius 4px
          display inline-block
          line-height 12px
          margin-bottom 5px
</style>
