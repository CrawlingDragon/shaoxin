<template>
  <div class="me_registration-container">
    <Header :indexHeader="false"></Header>
    <ul>
      <li v-for="item in 4" :key="item">
        <RegistrationItem></RegistrationItem>
      </li>
    </ul>
  </div>
</template>
<script>
import Header from "@/components/header/header";
import RegistrationItem from "@/components/register_item/register_item";
export default {
  name: "meRegistration",
  components: { Header, RegistrationItem },
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
.me_registration-container
  ul
    li
      margin-top 10px
      background #fff
      overflow hidden
      padding 0 12px
</style>
