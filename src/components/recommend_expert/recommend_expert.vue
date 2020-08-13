<template>
  <!-- 首页推荐专家列表 -->
  <div class="recommend_expert-container">Recommend_expert</div>
</template>
<script>
export default {
  name: "Recommend_expert",
  components: {},
  props: {},
  data() {
    return {
      list: {
        type: Array,
        default: function () {
          return [];
        },
      },
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  destroyed() {},
  methods: {},
};
</script>
<style lang="stylus" scoped></style>
