<template>
  <div class="me_registration-container">
    <Header :indexHeader="false"></Header>
    <ul>
      <li v-for="item in list" :key="item.id">
        <RegistrationItem :list="item"></RegistrationItem>
      </li>
    </ul>
  </div>
</template>
<script>
import Header from "@/components/header/header";
import RegistrationItem from "@/components/register_item/register_item";
import { mapState } from "vuex";

export default {
  name: "meRegistration",
  components: { Header, RegistrationItem },
  props: {},
  metaInfo: {
    title: "我的挂号记录",
  },
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.$emit("footer", false);
  },
  computed: {
    ...mapState(["uid"]),
  },
  watch: {},
  mounted() {
    this.getRegistration();
  },
  destroyed() {},
  methods: {
    getRegistration() {
      this.$axios
        .fetchPost("/Mobile/User/getSubscribe", { uId: this.uid })
        .then((res) => {
          if (res.data.code == 0) {
            this.list = res.data.data;
          }
        });
    },
  },
};
</script>
<style lang="stylus" scoped>
.me_registration-container
  ul
    li
      margin-top 10px
      background #fff
      overflow hidden
      padding 0 12px
</style>
