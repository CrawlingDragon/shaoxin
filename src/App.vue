<template>
  <div id="app">
    <keep-alive exclude="Login,mLogin,findPassword,sign,live,hospital" include="index,searchOnline,hospital,search_hospital,apply_vip">
      <router-view @footer="footer" />
    </keep-alive>
    <Foot v-if="footShow"></Foot>
  </div>
</template>
<script>
import Foot from "@/components/foot/foot";
export default {
  data() {
    return {
      footShow: true,
    };
  },
  components: { Foot },
  methods: {
    footer(bool) {
      this.footShow = bool;
    },
  },
};
</script>
<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align left
  background #EBEBEB
  min-height 100%
  position relative
</style>
