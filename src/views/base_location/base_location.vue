<template>
  <div class="base_location-container">
    <div id="container"></div>
    <div class='center'>
      <div id='bt' class="btmtip">点击去高德地图</div>
    </div>
  </div>
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
      startLngLat: 0,
      endLngLat: 0,
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.getaddress();
  },
  destroyed() {},
  methods: {
    getaddress() {
      let that = this;
      AMapLoader.load({
        key: "23a2a13dc7fdd9a8af2ec7683b2f333e&plugin=AMap.Driving", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "1.4.15", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ["AMap.ToolBar", "Geolocation"], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        Loca: {
          // 是否加载 Loca， 缺省不加载
          version: "1.3.2", // Loca 版本，缺省 1.3.2
        },
      })
        .then((AMap) => {
          new AMap.Map("container", {
            resizeEnable: true,
            center: [116.397428, 39.90923], //地图中心点
            zoom: 13, //地图显示的缩放级别
          });
          AMap.plugin("AMap.Geolocation", function () {
            var geolocation = new AMap.Geolocation({
              // 是否使用高精度定位，默认：true
              enableHighAccuracy: true,
              // 设置定位超时时间，默认：无穷大
              timeout: 10000,
              // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
              buttonOffset: new AMap.Pixel(10, 20),
              //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
              zoomToAccuracy: true,
              //  定位按钮的排放位置,  RB表示右下
              buttonPosition: "RB",
            });

            geolocation.getCurrentPosition();
            AMap.event.addListener(geolocation, "complete", function onComplete(
              data
            ) {
              // data是具体的定位信息
              // console.log(data.addressComponent);
              that.startLngLat = [
                data.addressComponent.geocodes[0].location.lng,
                data.addressComponent.geocodes[0].location.lat,
              ];
            });
          });
          AMap.plugin("AMap.Geocoder", function () {
            var geocoder = new AMap.Geocoder();
            geocoder.getLocation(that.location, function (status, result) {
              // that.startLngLat = [116.379028, 39.865042];
              that.endLngLat = [
                result.geocodes[0].location.lng,
                result.geocodes[0].location.lat,
              ];

              let map = new AMap.Map("container");
              AMap.plugin(["AMap.Driving"], function () {
                var drivingOption = {
                  policy: AMap.DrivingPolicy.LEAST_TIME,
                  map: map,
                };

                var driving = new AMap.Driving(drivingOption); //构造驾车导航类

                //根据起终点坐标规划驾车路线

                driving.search(that.startLngLat, that.endLngLat, function (
                  status,
                  result
                ) {
                  document.getElementById("bt").onclick = function () {
                    driving.searchOnAMAP({
                      origin: result.origin,
                      destination: result.destination,
                    });
                  };
                });

                //
              });
            });
          });

          // function markLocation(mapId, address) {
          //   AMap.plugin("AMap.Geocoder", function () {
          //     var geocoder = new AMap.Geocoder();
          //     geocoder.getLocation(address, function (status, result) {
          //       if (status === "complete" && result.info === "OK") {
          //         // 经纬度
          //         var lng = result.geocodes[0].location.lng;
          //         var lat = result.geocodes[0].location.lat;
          //         init(lng, lat);
          //         // 地图实例
          //         // var map = new AMap.Map(mapId, {
          //         //   resizeEnable: true, // 允许缩放
          //         //   center: [lng, lat], // 设置地图的中心点
          //         //   zoom: 15, // 设置地图的缩放级别，0 - 20
          //         // });
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
  #container
    height 100%
  .center
    position fixed
    right 15px
    bottom 30px
    background #155BBB
    padding 5px
    border-radius 5px
    color #fff
</style>
