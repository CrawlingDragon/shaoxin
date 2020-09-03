<template>
  <div class="apply_vip-container">
    <Header header="indexHeader" navHeader="申请会员"></Header>
    <van-form @submit="onSubmit">
      <van-field v-model="name" name="姓名" label="姓名" placeholder="请输入姓名" required />
      <van-field v-model="phone" name="手机号" label="手机号" placeholder="请输入手机号" />
      <van-field v-model="card" name="身份证" label="身份证" placeholder="请输入身份证" />
      <van-field v-model="sex" name="性别" label="性别" placeholder="请选择" required readonly />
      <van-field readonly clickable name="area" :value="value" label="地区选择" placeholder="点击选择省市区" @click="showArea = true" required />
      <van-popup v-model="showArea" position="bottom">
        <van-area :area-list="areaList" @confirm="onConfirm" @cancel="showArea = false" />
      </van-popup>
      <van-field v-model="card" name="详细地址" label="详细地址" placeholder="请输入详细地址" required />
      <div class="title">种植作物情况</div>
      <div class="add-box">
        <van-field v-model="crop" name="作物名" label="作物名" placeholder="请选择" />
        <van-field v-model="number" name="种养数量" label="作物名" placeholder="请选择" />
        <div class="unit">亩</div>
        <div class="close">x</div>
      </div>
      <div class="add-btn"><span>+</span>添加作物</div>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交会员申请
        </van-button>
      </div>
    </van-form>
    <div class="bottom-title">申请加入新型庄稼医院，享受会员服务</div>
  </div>
</template>
<script>
import Header from "@/components/hospital_header/hospital_header";
export default {
  name: "applyVip",
  components: { Header },
  props: {},
  data() {
    return {
      username: "",
      password: "",
      value: "",
      showArea: false,
      areaList: {}, // 数据格式见 Area 组件文档
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  destroyed() {},
  methods: {
    onConfirm(values) {
      this.value = values.map((item) => item.name).join("/");
      this.showArea = false;
    },
    onSubmit(values) {
      console.log("submit", values);
    },
  },
};
</script>
<style lang="stylus" scoped></style>
