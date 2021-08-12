// export default function MapLoader(key) {
//     return new Promise((resolve, reject) => {
//         if (window.AMap) {
//             resolve(window.AMap)
//         } else {
//             var script = document.createElement('script')
//             script.type = "text/javascript"
//             script.async = "true"
//             script.src = "http://webapi.amap.com/maps?v=1.4.15&callback=initAMap&key='" + key
//             script.onerror = reject
//             document.head.appendChild(script)
//         }
//         window.initAMap = () => { resolve(window.AMap) }
//     })
// }
import BMapGL from "BMapGL";

export function getCityAddress() {
  // ip定位，获取市
  return new Promise(resolve => {
    // let dom = document.createElement("div");
    // dom.id = "allmap";
    // document.getElementsByTagName("body")[0].appendChild(dom);
    // new BMapGL.Map("allmap");
    function myFun(result) {
      var cityName = result.name;
      resolve(cityName);
    }
    var myCity = new BMapGL.LocalCity();
    myCity.get(myFun);
  });
}

export function geolocation() {
  // 浏览器精确定位
  return new Promise(resolve => {
    var geolocation = new BMapGL.Geolocation();
    geolocation.getCurrentPosition(function(r) {
      if (this.getStatus() == 0) {
        let address = r.address;
        resolve(address.city + "," + address.district);
      } else {
        resolve("定位失败");
        console.log("failed :>> ", this.getStatus());
      }
    });
  });
}
