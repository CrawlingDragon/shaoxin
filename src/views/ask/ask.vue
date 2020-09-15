<template>
  <div class="ask-container">
    <Header :indexHeader="false"></Header>
    <div class="title">问题描述</div>
    <van-form @submit="onSubmit" class="from">
      <van-field v-model="message" rows="4" autosize type="textarea" placeholder="请输入具体问题描述" class="text" show-word-limit maxlength="300" name="message" />
      <van-field name="uploader" class="uploader">
        <template #input>
          <van-uploader v-model="uploader" :after-read="afterRead" :before-delete="deleteItem" accept="image/*" capture :max-count="9" multiple />
        </template>
      </van-field>
      <div class="choose-crop" @click="goToChooseCrop">
        <div class="left">作物</div>
        <!-- <div class="right" :class="{'location':crop != '请选择'}">{{crop}}</div> -->
        <van-field :value="crop" readonly class="right" :class="{ location: crop != '请选择' }" input-align="right" :border="false" name="crop" />
        <van-icon name="arrow" class="arrow" />
      </div>
      <div class="list" v-if="expert">
        <div class="left">咨询专家</div>
        <div class="right">{{ expert }}</div>
      </div>
      <div class="choose-crop" v-if="expert">
        <div class="left">所在位置</div>
        <div class="right location">{{ address }}</div>
        <van-icon name="arrow" class="arrow" />
      </div>
      <div style="margin: 16px;" class="sub">
        <van-button round block type="info" native-type="submit" class="btn">
          提交
        </van-button>
      </div>
      <div id="container" style="width:100px;height:100px"></div>
    </van-form>
    <router-view @getCrop="getCrop"></router-view>
  </div>
</template>

<script>
import Header from "@/components/header/header";
import { mapState } from "vuex";
import AMapLoader from "@amap/amap-jsapi-loader";
export default {
  name: "ask",
  components: { Header },
  props: {},
  metaInfo: {
    title: "提问",
  },
  data() {
    return {
      expert: this.$route.query.expert,
      expertId: this.$route.query.expertId,
      address: "",
      message: "",
      crop: "请选择",
      fid: "",
      uploader: [],
      imgList: [],
    };
  },
  computed: {
    ...mapState(["uid", "mid"]),
  },
  created() {},
  watch: {},
  mounted() {
    let that = this;
    AMapLoader.load({
      key: "23a2a13dc7fdd9a8af2ec7683b2f333e&AMap.CitySearch", // 申请好的Web端开发者Key，首次调用 load 时必填
      version: "1.4.15", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: ["AMap.CitySearch"], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      Loca: {
        // 是否加载 Loca， 缺省不加载
        version: "1.3.2", // Loca 版本，缺省 1.3.2
      },
    })
      .then((AMap) => {
        var citysearch = new AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function (status, result) {
          if (status === "complete" && result.info === "OK") {
            if (result && result.city && result.bounds) {
              var cityinfo = result.city;
              // var citybounds = result.bounds;
              that.address = cityinfo;
              //地图显示当前城市
            }
          } else {
            this.address = result.info;
          }
        });
      })
      .catch((e) => {
        console.log(e);
      });
  },
  destroyed() {},
  methods: {
    onSubmit(values) {
      if (values.message == "") {
        this.$toast("问题描述不能为空");
        return;
      } else if (values.message.length <= 9) {
        this.$toast("问题描述不能少余10个字");
        return;
      }
      if (values.crop == "请选择") {
        this.$toast("作物不能为空");
        return;
      }
      this.subAsk(this.expertId, this.address);
    },
    goToChooseCrop() {
      //选择作物
      this.$router.push({
        path: "/ask/ask_choose_crop",
      });
    },
    getCrop(crop) {
      //选择作物
      this.crop = crop.name;
      this.fid = crop.fid;
    },
    afterRead(file) {
      // 图片上传
      let formData = new FormData();
      formData.append("urls[]", file.file);
      this.$axios
        .fetchPost("/Mobile/Wen/OssUploadFile", formData)
        .then((res) => {
          // console.log("res :>> ", res);
          if (res.data.code == 0) {
            this.imgList.push(res.data.data);
          } else {
            this.$toast(res.data.message);
          }
        });
    },
    deleteItem(file, val) {
      let index = val.index;
      this.imgList = this.imgList.splice(0, index, 1);
      return true;
    },
    subAsk(expertId = "", location = "") {
      let obj = {
        mId: this.mid, //mId
        uId: this.uid, //用户ID
        content: this.message, //发布内容
        fId: this.fid, //作物ID
        expertId: expertId,
        picurl: this.imgList.join(","),
        location: location,
      };
      this.$axios.fetchPost("Mobile/Wen/addWenQuestion", obj).then((res) => {
        this.$toast(res.data.message);
        if (res.data.code == 0) {
          setTimeout(() => {
            this.$router.push({ path: "/me_answer" });
          }, 1000);
        }
      });
    },
  },
};
</script>
<style lang="stylus" scoped>
.ask-container
  height 100%
  background #fff
  position relative
  .title
    background #fff
    color #333333
    font-size 16px
    line-height 16px
    padding 15px 12px 10px 12px
  .from
    background #fff
    .text
      margin-right 12px
      margin-left 12px
      width auto
      height 130px
      font-size 12px
      border 1px solid #e5e5e5
    .uploader
      padding 10px 12px
      border-bottom 1px solid #e5e5e5
      &.van-cell::after
        display none
    .choose-crop
      border-bottom 1px solid #e5e5e5
      display flex
      align-items center
      height 50px
      padding-left 12px
      .left
        width 106px
        color #333333
        font-size 16px
      .right
        flex 1
        color #999999
        text-align right
        /deep/.van-field__control
          color #999
        &.location
          color #333
          /deep/.van-field__control
            color #333
      .arrow
        font-size 12px
        color #999999
        margin 0 12px
    .list
      height 50px
      line-height 50px
      display flex
      align-items center
      justify-content space-between
      font-size 16px
      color #333
      padding 0 35px 0 12px
      border-bottom 1px solid #e5e5e5
    .sub
      bottom -85px
      position absolute
      left 12px
      right 12px
      .btn
        border-radius 4px
        background #155BBB
        font-size 15px
        color #fff
</style>
