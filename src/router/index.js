import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login/login.vue";
import MLogin from "../views/m_login/m_login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import(/*webpackChunkName:"index" */ "@/views/index/index")
  },
  {
    path: "/index_online",
    name: "indexOnline",
    component: () =>
      import(
        /*webpackChunkName:"index_online" */ "@/views/index_online/index_online"
      )
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
  {
    path: "/mLogin",
    name: "mLogin",
    component: MLogin
  },
  {
    path: "/sign",
    name: "sign",
    component: () => import(/*webpackChunkName:"sign" */ "@/views/sign/sign")
  },
  {
    path: "/find_password",
    name: "findPassword",
    component: () =>
      import(
        /*webpackChunkName:"find_password" */ "@/views/find_password/find_password"
      )
  },
  {
    path: "/search_online",
    name: "searchOnline",
    component: () =>
      import(
        /*webpackChunkName:"searchOnline" */ "@/views/search_online/search_online"
      )
  },
  {
    path: "/searchOnlineCrop",
    name: "searchOnlineCrop",
    component: () =>
      import(
        /*webpackChunkName:"searchOnlineCrop" */ "@/views/search_online_crop/search_online_crop"
      )
  },
  {
    path: "/hospital",
    name: "hospital",
    component: () =>
      import(/*webpackChunkName:"hospital" */ "@/views/hospital/hospital")
  },
  {
    path: "/into_hospital",
    name: "intoHospital",
    component: () =>
      import(
        /*webpackChunkName:"into_hospital" */ "@/views/into_hospital/into_hospital"
      )
  },
  {
    path: "/hospital_intro",
    name: "hospitalIntro",
    component: () =>
      import(
        /*webpackChunkName:"hospital_intro" */ "@/views/hospital_intro/hospital_intro"
      )
  },
  {
    path: "/search_hospital",
    name: "searchHospital",
    component: () =>
      import(
        /*webpackChunkName:"search_hospital" */ "@/views/search_hospital/search_hospital"
      )
  },
  {
    path: "/hospital_expert",
    name: "hospitalExpert",
    component: () =>
      import(
        /*webpackChunkName:"hospital_expert" */ "@/views/hospital_expert/hospital_expert"
      )
  },
  {
    path: "/hospital_online",
    name: "hospitalOnline",
    component: () =>
      import(
        /*webpackChunkName:"hospital_online" */ "@/views/hospital_online/hospital_online"
      )
  },
  {
    path: "/ask",
    name: "ask",
    component: () => import(/*webpackChunkName:"ask" */ "@/views/ask/ask")
  },
  {
    path: "/ask_detail",
    name: "askDetail",
    component: () =>
      import(/*webpackChunkName:"ask_detail" */ "@/views/ask_detail/ask_detail")
  },
  {
    path: "/cetu_list",
    name: "cetuList",
    component: () =>
      import(/*webpackChunkName:"cetu_list" */ "@/views/cetu_list/cetu_list")
  },
  {
    path: "/soil_detail",
    name: "soilDetail",
    component: () =>
      import(
        /*webpackChunkName:"soil_detail" */ "@/views/soil_detail/soil_detail"
      )
  },
  {
    path: "/zuozhen_list",
    name: "zuozhenList",
    component: () =>
      import(
        /*webpackChunkName:"zuozhen_list" */ "@/views/zuozhen_list/zuozhen_list"
      )
  },
  {
    path: "/zuozhen_detail",
    name: "zuozhenDetail",
    component: () =>
      import(
        /*webpackChunkName:"zuozhen_detail" */ "@/views/zuozhen_detail/zuozhen_detail"
      )
  },
  {
    path: "/apply_vip",
    name: "applyVip",
    component: () =>
      import(/*webpackChunkName:"apply_vip" */ "@/views/apply_vip/apply_vip")
  },
  {
    path: "/vip",
    name: "vip",
    component: () => import(/*webpackChunkName:"vip" */ "@/views/vip/vip")
  },
  {
    path: "/choose_crop",
    name: "chooseCrop",
    component: () =>
      import(
        /*webpackChunkName:"choose_crop" */ "@/views/choose_crop/choose_crop"
      )
  },
  {
    path: "/good_base",
    name: "goodBase",
    component: () =>
      import(/*webpackChunkName:"good_base" */ "@/views/good_base/good_base")
  },
  {
    path: "/base_detail",
    name: "baseDetail",
    component: () =>
      import(
        /*webpackChunkName:"base_detail" */ "@/views/base_detail/base_detail"
      )
  },
  {
    path: "/message",
    name: "message",
    component: () =>
      import(/*webpackChunkName:"message" */ "@/views/message/message")
  },
  {
    path: "/message_detail",
    name: "messageDetail",
    component: () =>
      import(
        /*webpackChunkName:"message_detail" */ "@/views/message_detail/message_detail"
      )
  },
  {
    path: "/live",
    name: "live",
    component: () => import(/*webpackChunkName:"live" */ "@/views/live/live")
  },
  {
    path: "/live_list",
    name: "liveList",
    component: () =>
      import(/*webpackChunkName:"liveList" */ "@/views/live_list/live_list")
  },
  {
    path: "/expert",
    name: "expert",
    component: () =>
      import(/*webpackChunkName:"expert" */ "@/views/expert/expert")
  },
  {
    path: "/look_expert",
    name: "lookExpert",
    component: () =>
      import(
        /*webpackChunkName:"look_expert" */ "@/views/look_expert/look_expert"
      )
  },
  {
    path: "/expert_registration",
    name: "expertRegistration",
    component: () =>
      import(
        /*webpackChunkName:"expert_registration" */ "@/views/expert_registration/expert_registration"
      )
  },
  {
    path: "/expert_detail",
    name: "expertDetail",
    component: () =>
      import(
        /*webpackChunkName:"expert_detail" */ "@/views/expert_detail/expert_detail"
      )
  },
  {
    path: "/whole_zuozhen_list",
    name: "wholeZuoZhenList",
    component: () =>
      import(
        /*webpackChunkName:"whole_zuozhen_list" */ "@/views/whole_zuozhen_list/whole_zuozhen_list"
      )
  },
  {
    path: "/whole_cetu_list",
    name: "wholeCetuList",
    component: () =>
      import(
        /*webpackChunkName:"whole_cetu_list" */ "@/views/whole_cetu_list/whole_cetu_list"
      )
  },
  {
    path: "/me",
    name: "me",
    component: () => import(/*webpackChunkName:"me" */ "@/views/me/me")
  },
  {
    path: "/me_edit",
    name: "meEdit",
    component: () =>
      import(/*webpackChunkName:"me_edit" */ "@/views/me_edit/me_edit")
  },
  {
    path: "/me_hospital",
    name: "meHospital",
    component: () =>
      import(
        /*webpackChunkName:"me_hospital" */ "@/views/me_hospital/me_hospital"
      )
  },
  {
    path: "/me_registration",
    name: "meRegistration",
    component: () =>
      import(
        /*webpackChunkName:"me_registration" */ "@/views/me_registration/me_registration"
      )
  },
  {
    path: "/me_answer",
    name: "meAnswer",
    component: () =>
      import(/*webpackChunkName:"me_answer" */ "@/views/me_answer/me_answer")
  },
  {
    path: "/me_base",
    name: "meBase",
    component: () =>
      import(/*webpackChunkName:"me_base" */ "@/views/me_base/me_base")
  },
  {
    path: "/diseases",
    name: "diseases",
    component: () =>
      import(/*webpackChunkName:"diseases" */ "@/views/diseases/diseases")
  },
  {
    path: "/diseases_detail",
    name: "diseasesDetail",
    component: () =>
      import(
        /*webpackChunkName:"diseases_detail" */ "@/views/diseases_detail/diseases_detail"
      )
  },
  {
    path: "/about_us",
    name: "aboutUs",
    component: () =>
      import(/*webpackChunkName:"about_us" */ "@/views/about_us/about_us")
  },
  {
    path: "/video_list",
    name: "videoList",
    component: () =>
      import(/*webpackChunkName:"video_list" */ "@/views/video_list/video_list")
  },
  {
    path: "/video_detail",
    name: "videoDetail",
    component: () =>
      import(
        /*webpackChunkName:"video_detail" */ "@/views/video_detail/video_detail"
      )
  }
];

const router = new VueRouter({
  routes,
  scrollBehavior() {
    // ...
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  if (to.name == from.name) {
    next(false);
  } else {
    next(true);
  }
});

export default router;
