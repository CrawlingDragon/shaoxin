<template>
  <div class="online-container">
    <Header :tabbarActive="1"></Header>

  </div>
</template>
<script>
import Header from "@/components/header/header";
export default {
  name: "online",
  components: { Header },
  props: {},
  data() {
    return {};
  },
  created() {
    this.$emit("footer", true);
  },
  computed: {},
  watch: {},
  mounted() {},
  destroyed() {},
  methods: {},
};
</script>
<style lang="stylus" scoped></style>
