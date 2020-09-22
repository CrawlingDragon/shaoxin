<template>
  <div class="into_hospital-conatiner">
    <Header header="searchHeader" :address="address"></Header>

    <div class="box" v-if="list_joinin != ''">
      <div class="title">加入的医院</div>
      <ul>
        <li v-for="item in list_joinin" :key="item.id">
          <RecommendHospital :list="item"></RecommendHospital>
        </li>
      </ul>
    </div>
    <div class="box" v-if="list_fav != ''">
      <div class="title">关注的医院</div>
      <ul>
        <li v-for="item in  list_fav" :key="item.id">
          <RecommendHospital :list="item"></RecommendHospital>
        </li>
      </ul>
    </div>
    <div class="box" v-if="list_area != ''">
      <div class="title">庄稼医院</div>
      <ul>
        <li v-for="item in list_area" :key="item.id">
          <RecommendHospital :list="item"></RecommendHospital>
        </li>
      </ul>
    </div>
    <van-loading size="24px" vertical style="height:200px;padding-top:130px" v-if="loading">加载中...</van-loading>
    <div id="container" style="display:none"></div>
  </div>
</template>
<script>
import Header from "@/components/hospital_header/hospital_header";
import RecommendHospital from "@/components/recommend_hospital/recommend_hospital";
import { mapState } from "vuex";
import AMapLoader from "@amap/amap-jsapi-loader";
export default {
  name: "intoHospital",
  components: { Header, RecommendHospital },
  props: {},
  metaInfo: {
    title: "进院",
  },
  data() {
    return {
      list_joinin: "",
      list_fav: "",
      list_area: "",
      address: "", // 定位的地址
      // myAddress: "",
      location: "",
      loading: true,
    };
  },
  computed: {
    ...mapState(["uid", "mid"]),
  },
  watch: {},
  created() {},
  mounted() {
    if (this.uid == "") {
      this.getaddress();
    } else {
      this.getMyAddress();
    }
  },
  destroyed() {},
  methods: {
    getaddress() {
      let that = this;
      AMapLoader.load({
        key: "23a2a13dc7fdd9a8af2ec7683b2f333e", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "1.4.15", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        Loca: {
          // 是否加载 Loca， 缺省不加载
          version: "1.3.2", // Loca 版本，缺省 1.3.2
        },
      })
        .then((AMap) => {
          var map = new AMap.Map("container", {
            resizeEnable: true, //是否监控地图容器尺寸变化
            zoom: 11, //初始地图级别
          });
          map.getCity(function (info) {
            // console.table("info :>> ", info);
            if (info.city != "绍兴市") {
              that.location = "浙江省,绍兴市";
              that.address = "绍兴市";
            } else if (info.city == "绍兴市") {
              that.location = "浙江省,绍兴市," + info.district;
              that.address = info.district;
            }
            setTimeout(() => {
              that.getList();
            }, 100);
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getList() {
      this.$axios
        .fetchPost("Mobile/Entrance/index", {
          uId: this.uid,
          location: this.location,
        })
        .then((res) => {
          if (res.data.code == 0) {
            this.list_joinin = res.data.data.list_joinin;
            this.list_fav = res.data.data.list_fav;
            this.list_area = res.data.data.list_area;
            this.$nextTick(() => {
              this.loading = false;
            });
          }
        });
    },
    getMyAddress() {
      this.$axios
        .fetchPost("Mobile/User/userCenter", {
          uId: this.uid,
          mId: this.mid,
        })
        .then((res) => {
          if (res.data.code == 0) {
            this.$nextTick(() => {
              this.loading = false;
            });
            let myAddress = res.data.data.ismember;
            if (myAddress == 1) {
              this.location = "浙江省,绍兴市";
              this.address = "绍兴市";
              setTimeout(() => {
                this.getList();
              }, 100);
            } else {
              setTimeout(() => {
                this.getaddress();
              }, 100);
            }
          }
        });
    },
  },
};
</script>
<style lang="stylus" scoped>
.into_hospital-conatiner
  padding-bottom 50px
  .box
    margin-top 10px
    background #fff
    .title
      height 40px
      line-height 40px
      color #333
      font-size 17px
      border-bottom 1px solid #e5e5e5
      padding-left 12px
    ul
      margin-left 12px
      margin-top 10px
      padding-bottom 15px
      li
        width 50%
        display inline-block
        padding-right 12px
        padding-bottom 12px
        height 274px
        vertical-align top
        .recommend-hospital-wrap
          height 100%
</style>
