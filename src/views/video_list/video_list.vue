<template>
  <div class="video_list-container">
    <Header :indexHeader="false"></Header>
    <ul class="video-ul">
      <li v-for="item in 4" :key="item">
        <van-image class="img" fit="cover" src="" radius="5px"></van-image>
        <p class="p1">培训视频标题培训视频标题培训视频标题培训视频标题培训视频标题</p>
      </li>
    </ul>
  </div>
</template>
<script>
import Header from "@/components/header/header";
export default {
  name: "videoList",
  components: { Header },
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
.video_list-container
  .video-ul
    margin-top 10px
    li
      border-bottom 1px solid #e5e5e5
      padding 15px 12px 0 12px
      background #fff
      &:last-child
        border none
      .img
        width 100%
        height 150px
      .p1
        height 45px
        line-height 45px
        color #333
        font-size 16px
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
</style>
