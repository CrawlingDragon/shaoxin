<template>
  <div class="me_edit-container">
    <Header :indexHeader="false"></Header>
    <ul>
      <li>
        <div class="left">头像</div>
        <div class="mid">
          <van-image class="avator" fit="cover" round :src="avatar"></van-image>
        </div>
        <van-icon name="arrow" class="arrow" />
      </li>
      <li>
        <div class="left">用户名</div>
        <div class="mid">{{ userName }}</div>
      </li>
      <li @click="clickName">
        <div class="left">名字</div>
        <div class="mid">{{ name }}</div>
        <van-icon name="arrow" class="arrow" />
      </li>
      <li @click="sexShow = true">
        <div class="left">性别</div>
        <div class="mid">{{ sex }}</div>
        <van-icon name="arrow" class="arrow" />
      </li>
      <li @click="areaShow = true">
        <div class="left">所在地</div>
        <div class="mid">
          {{ resideprovince }}{{ residecity }}{{ residedist }}
        </div>
        <van-icon name="arrow" class="arrow" />
      </li>
    </ul>
    <van-dialog
      v-model="nameShow"
      title="修改名字"
      show-cancel-button
      @confirm="confirmName"
    >
      <!-- 修改用户名 -->
      <van-field v-model="names" placeholder="请输入用户名" class="name" />
    </van-dialog>
    <van-action-sheet v-model="sexShow" :actions="actions" @select="onSelect" />
    <!-- 选择性别 -->
    <van-popup
      v-model="areaShow"
      close-icon-position="top-left"
      position="bottom"
    >
      <van-area
        title="选择所在地"
        :area-list="areaList"
        @confirm="confimArea"
        @cancel="cancelArea"
      />
    </van-popup>
  </div>
</template>
<script>
import Header from "@/components/header/header";
import { mapState } from "vuex";
import areaList from "@/common/js/area.js";
export default {
  name: "meEdit",
  metaInfo: {
    title: "编辑资料"
  },
  components: { Header },
  props: {},
  data() {
    return {
      info: "",
      avatar: "",
      userName: "",
      name: "",
      sex: "请选择",
      nameShow: false,
      sexShow: false,
      areaShow: false,
      names: "",
      actions: [{ name: "男" }, { name: "女" }],
      areaList: areaList,
      resideprovince: "",
      residecity: "",
      residedist: ""
    };
  },
  computed: { ...mapState(["uid"]) },
  watch: {},
  mounted() {
    this.getInfo();
  },
  destroyed() {},
  methods: {
    getInfo() {
      this.$axios
        .fetchPost("/Mobile/User/userCenter", { uId: this.uid })
        .then(res => {
          if (res.data.code == 0) {
            let data = res.data.data;
            this.avatar = data.avatar;
            this.userName = data.username;
            this.name = data.realname;
            this.sex = data.sex || "请选择";
            this.resideprovince = data.resideprovince || "请选择";
            this.residecity = data.residecity;
            this.residedist = data.residedist;
          }
        });
    },
    upDate({ gender, realname, resideprovince, residecity, residedist }) {
      //分开上传
      this.$axios
        .fetchPost("Mobile/User/updateInfo", {
          uId: this.uid,
          gender,
          realname,
          resideprovince,
          residecity,
          residedist
        })
        .then(res => {
          if (res.data.code == 0) {
            //
          }
          this.$toast(res.data.message);
        });
    },
    clickName() {
      this.nameShow = true;
      this.names = this.name;
    },
    confirmName() {
      this.name = this.names;
    },
    onSelect(item) {
      this.sex = item.name;
      this.sexShow = false;
    },
    confimArea(item) {
      this.areaShow = false;
      this.resideprovince = item[0].name;
      this.residecity = item[1].name;
      this.residedist = item[2].name;
    },
    cancelArea() {
      this.areaShow = false;
    }
  }
};
</script>
<style lang="stylus" scoped>
.me_edit-container
  ul
    margin-top 10px
    padding-left 12px
    background #fff
    li
      display flex
      align-items center
      height 50px
      border-bottom 1px solid #e5e5e5
      &:last-child
        border none
      .left
        width 90px
        color #333333
        font-size 16px
      .mid
        flex 1
        color #333333
        font-size 16px
        .avator
          width 40px
          height 40px
          margin-top 5px
      .arrow
        margin-right 12px
        margin-left 4px
        color #969799
        min-width 1em
        height 24px
        font-size 16px
        line-height 24px
  .name
    width 90%
    margin 10px auto
    border 1px solid #e5e5e5
    height 35px
    line-height 35px
    padding 0 12px
</style>
