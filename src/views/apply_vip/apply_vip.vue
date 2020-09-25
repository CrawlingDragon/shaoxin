<template>
  <div class="apply_vip-container">
    <Header header="indexHeader" navHeader="申请会员"></Header>
    <van-form @submit="onSubmit">
      <van-field v-model="name" name="name" label="姓名" placeholder="请输入姓名" required :rules="[{ required: true }]" />
      <van-field v-model="phone" name="phone" label="手机号" readonly />
      <van-field v-model="card" name="card" label="身份证" placeholder="请输入身份证号码" @click="cardShow = true" :rules="[{ validator, message: '请输入正确的身份证格式' }]" />
      <van-number-keyboard :show="cardShow" extra-key="X" close-button-text="完成" @blur="cardShow = false" v-model="card" />
      <van-field v-model="sex" name="sex" @click="sexShow = true" label="性别" placeholder="请选择" required readonly :rules="[{ required: true }]" />
      <van-action-sheet v-model="sexShow" :actions="actions" @select="onSelectSex" />
      <van-field readonly required clickable name="area" :value="address" label="地区选择" placeholder="点击选择省市区" @click="showArea = true" :rules="[{ required: true }]" />
      <van-popup v-model="showArea" position="bottom">
        <van-area :area-list="areaList" @confirm="onConfirm" @cancel="showArea = false" />
      </van-popup>
      <van-field v-model="detailAddress" name="detailAddress" label="详细地址" placeholder="请输入详细地址" required :rules="[{ required: true }]" />
      <div class="title">种植作物情况</div>
      <div class="add-box" v-for="(item, index) in addList" :key="index">
        <van-field v-model="item.name" name="作物名" label="作物名" placeholder="请选择" readonly @click="goToChooseCrop(index)" />
        <van-field v-model="item.mushu" name="种养数量" label="种养数量" placeholder="请选择" type="number">
          <template #button>
            <select name="" id="" class="select" v-model="item.unit">
              <option value="亩">亩</option>
              <option value="尾">尾</option>
              <option value="箱">箱</option>
              <option value="头">头</option>
              <option value="羽">羽</option>
              <option value="只">只</option>
              <option value="棒">棒</option>
            </select>
          </template>
        </van-field>
        <div class="close" @click="removeItem(index)">x</div>
      </div>
      <div class="add-btn" @click="add"><span>+</span>添加作物</div>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          提交会员申请
        </van-button>
      </div>
    </van-form>
    <div class="bottom-title">申请加入新型庄稼医院，享受会员服务</div>
    <router-view @getCrop="choosedCrop"></router-view>
  </div>
</template>
<script>
import Header from "@/components/hospital_header/hospital_header";
import areaList from "@/common/js/area";
import { mapState } from "vuex";
export default {
  name: "applyVip",
  components: { Header },
  metaInfo: {
    title: "申请会员",
  },
  props: {},
  data() {
    return {
      userInfo: "",
      name: "",
      phone: "",
      card: "",
      sex: "",
      province: "",
      city: "",
      town: "",
      address: "",
      cardShow: false,
      sexShow: false,
      detailAddress: "",
      showArea: false,
      addList: [{ fid: "", name: "", mushu: "", unit: "亩" }],
      areaList: areaList, // 数据格式见 Area 组件文档
      actions: [{ name: "男" }, { name: "女" }],
      choosedIndex: 0, //选中的作物 数组index
      hospitalTown: "",
    };
  },
  computed: {
    ...mapState(["mid", "uid", "initMid"]),
    cropNumberBoolean() {
      let x = true;
      this.addList.forEach((item) => {
        if (item.name != "") {
          if (item.mushu == "") {
            x = false;
          }
        }
      });
      return x;
    },
  },
  watch: {},
  created() {},
  mounted() {
    this.getUserInfo();
    this.getHospitalTown();
  },
  destroyed() {},
  methods: {
    // /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i
    validator(val) {
      if (val == "") {
        return true;
      }
      return /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(
        val
      );
    },
    add() {
      this.addList.push({ fid: "", name: "", mushu: "", unit: "亩" });
    },
    onSelectSex(val) {
      this.sex = val.name;
      this.sexShow = false;
    },
    onConfirm(values) {
      this.address = values.map((item) => item.name).join("/");
      this.province = values[0].name;
      this.city = values[1].name;
      this.town = values[2].name;
      this.showArea = false;
    },
    onSubmit(values) {
      if (
        values.sex == "" ||
        values.name == "" ||
        values.area == "" ||
        values.detailAddress == ""
      ) {
        this.$dialog
          .alert({
            message: "提交失败，请修改信息后再提交",
            confirmButtonText: "知道了",
          })
          .then(() => {
            // on close
          });
        return;
      }
      if (!this.cropNumberBoolean) {
        this.$toast("作物亩数不能为空");
        return;
      }
      // 申请地址和医院地址不是同一个
      if (this.town != this.hospitalTown) {
        this.$dialog
          .confirm({
            title: "提示",
            message: "您的地址位置离医院较远,确定继续提交吗?",
            confirmButtonText: "继续提交",
            cancelButtonText: "我在想想",
          })
          .then(() => {
            // on confirm
            this.apply();
          })
          .catch(() => {
            // on cancel
          });
      } else {
        this.apply();
      }
      // this.apply();
    },
    apply() {
      this.$axios
        .fetchPost("Mobile/Mpublic/joinMpublic", {
          mId: this.mid,
          uId: this.uid,
          username: this.name,
          mobile: this.phone,
          idcard: this.card,
          sex: this.sex,
          province: this.province,
          city: this.city,
          town: this.town,
          address: this.detailAddress,
          zuowu: this.addList,
        })
        .then((res) => {
          if (res.data.code == 0) {
            this.$toast(res.data.message);
            this.$router.push({
              path: "/apply_vip_succeed",
            });
          }
        });
    },
    // validatorPhone(val) {
    //   if (val == "") {
    //     return true;
    //   }
    //   return /^1(3|4|5|6|7|8|9)\d{9}$/.test(val);
    // },
    removeItem(index) {
      this.addList.splice(index, 1);
    },
    choosedCrop(item) {
      // 选中了作物
      this.addList[this.choosedIndex].name = item.name;
      this.addList[this.choosedIndex].fid = item.fid;
    },
    goToChooseCrop(index) {
      this.choosedIndex = index;
      this.$router.push({
        path: "/apply_vip/ask_choose_crop",
      });
    },
    getUserInfo() {
      this.$axios
        .fetchPost("Mobile/User/userCenter", {
          uId: this.uid,
          mId: this.mid,
        })
        .then((res) => {
          if (res.data.code == 0) {
            this.phone = res.data.data.username;
          }
        });
    },
    getHospitalTown() {
      this.$axios
        .fetchPost("Mobile/Mpublic/MpublicPage", {
          mId: this.mid,
          uId: this.uid,
        })
        .then((res) => {
          if (res.data.code == 0) {
            this.hospitalTown = res.data.data.mpublic.town;
          }
        });
    },
  },
};
</script>
<style lang="stylus" scoped>
.apply_vip-container
  .title
    font-size 12px
    color #656565
    margin 15px 0 5px
    margin-left 12px
  .add-box
    position relative
    padding-right 80px
    background #fff
    margin-bottom 10px
    .close
      width 80px
      height 100%
      position absolute
      right 0
      bottom 0
      line-height 100%
      border-left 1px solid #e5e5e5
      display flex
      align-items center
      justify-content center
      color #9D9D9D
      font-size 30px
    .select
      outline none
      border 1px solid #e5e5e5
      height 30px
      min-width 60px
      border-radius 4px
  .add-btn
    width 110px
    height 30px
    margin 20px auto
    display flex
    align-items center
    justify-content center
    color #155BBA
    font-size 12px
    border-radius 4px
    border 1px solid #155BBB
    span
      margin-right 10px
  .bottom-title
    color #656565
    font-size 12px
    text-align center
    margin 18px 0 0
    padding-bottom 18px
</style>
