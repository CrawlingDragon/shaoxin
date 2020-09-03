<template>
  <div class="me_edit-container">
    <Header :indexHeader="false"></Header>
    <ul>
      <li>
        <div class="left">头像</div>
        <div class="mid">
          <van-image class="avator" fit="cover" round></van-image>
        </div>
        <van-icon name="arrow" class="arrow" />
      </li>
      <li>
        <div class="left">用户名</div>
        <div class="mid">13450797340</div>
      </li>
      <li>
        <div class="left">名字</div>
        <div class="mid">{{name}}</div>
        <van-icon name="arrow" class="arrow" />
      </li>
      <li>
        <div class="left">性别</div>
        <div class="mid">请选择</div>
        <van-icon name="arrow" class="arrow" />
      </li>
      <li>
        <div class="left">所在地</div>
        <div class="mid">请选择</div>
        <van-icon name="arrow" class="arrow" />
      </li>
    </ul>
    <van-dialog v-model="nameShow" title="修改名字" show-cancel-button>
      <!-- 修改用户名 -->
      <van-field v-model="name" placeholder="请输入用户名" class="name" />
    </van-dialog>
    <van-action-sheet v-model="sexShow" :actions="actions" @select="onSelect" />
    <!-- 选择性别 -->
  </div>
</template>
<script>
import Header from "@/components/header/header";
export default {
  name: "meEdit",
  metaInfo: {
    title: "编辑资料",
  },
  components: { Header },
  props: {},
  data() {
    return {
      nameShow: false,
      name: "施德",
      sexShow: false,
      actions: [{ name: "男" }, { name: "女" }],
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
.me_edit-container
  ul
    margin-top 10px
    padding-left 12px
    background #fff
    li
      display flex
      align-items center
      height 50px
      border-bottom 1px solid #e5e5e5
      &:last-child
        border none
      .left
        width 90px
        color #333333
        font-size 16px
      .mid
        flex 1
        color #333333
        font-size 16px
        .avator
          width 40px
          height 40px
          margin-top 5px
      .arrow
        margin-right 12px
        margin-left 4px
        color #969799
        min-width 1em
        height 24px
        font-size 16px
        line-height 24px
  .name
    width 90%
    margin 10px auto
    border 1px solid #e5e5e5
    height 35px
    line-height 35px
    padding 0 12px
</style>
