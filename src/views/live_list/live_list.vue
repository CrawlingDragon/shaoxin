<template>
  <div class="live_list-container">
    <Header header="logoHeader"></Header>
    <div class="list-content" v-html="detail.content"></div>
  </div>
</template>
<script>
import Header from "@/components/hospital_header/hospital_header";
export default {
  name: "liveList",
  metaInfo: {
    title: "直播节目单",
  },
  components: { Header },
  props: {},
  data() {
    return {
      detail: "",
      mid: this.$route.query.mid,
    };
  },
  computed: {},
  watch: {},
  mounted() {
    this.getDetail();
  },
  destroyed() {},
  methods: {
    getDetail() {
      this.$axios
        .fetchPost("/Mobile/Live/getLiveMenu", { mId: this.mid })
        .then((res) => {
          if (res.data.code == 0) {
            this.detail = res.data.data;
          }
        });
    },
  },
};
</script>
<style lang="stylus" scoped>
.live_list-container
  .list-content
    background #fff
</style>
