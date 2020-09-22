<template>
  <div class="base_location-container" id="container"></div>
</template>
<script>
import AMapLoader from "@amap/amap-jsapi-loader";
export default {
  name: "baseLocation",
  components: {},
  metaInfo: {
    title: "基地",
  },
  props: {},
  data() {
    return {
      location: this.$route.query.location,
    };
  },
  computed: {},
  watch: {},
  created() {
    this.$emit("footer", false);
  },
  mounted() {
    this.getaddress();
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
          function markLocation(mapId, address) {
            AMap.plugin("AMap.Geocoder", function () {
              var geocoder = new AMap.Geocoder();
              geocoder.getLocation(address, function (status, result) {
                if (status === "complete" && result.info === "OK") {
                  // 经纬度
                  var lng = result.geocodes[0].location.lng;
                  var lat = result.geocodes[0].location.lat;

                  // 地图实例
                  var map = new AMap.Map(mapId, {
                    resizeEnable: true, // 允许缩放
                    center: [lng, lat], // 设置地图的中心点
                    zoom: 15, // 设置地图的缩放级别，0 - 20
                  });

                  // 添加标记
                  new AMap.Marker({
                    map: map,
                    position: new AMap.LngLat(lng, lat), // 经纬度
                  });
                } else {
                  console.log("定位失败！");
                }
              });
            });
          }
          markLocation("container", that.location);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
<style lang="stylus" scoped>
.base_location-container
  position fixed
  top 0px
  bottom 0
  left 0
  right 0
  width 100%
</style>
