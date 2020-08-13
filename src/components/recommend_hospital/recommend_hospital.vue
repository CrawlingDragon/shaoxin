<template>
  <!-- 首页推荐医院列表 -->
  <div class="recommend-hospital-wrap">recommend_hospital</div>
</template>
<script>
export default {
  name: "Recommend_hospital",
  components: {},
  props: {
    list: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
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
<style lang="stylus" scoped></style>
