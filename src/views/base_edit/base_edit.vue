<template>
  <div class="base_edit-container">
    <Header :haveBackIcon="true">
      <div class="icon" @click="goBack">
        <van-icon name="arrow-left" class="back-icon" />
        <span class="back">返回</span>
      </div>
    </Header>
    <div class="edit-container">
      <van-form @submit="onSubmit">
        <van-field
          class="case"
          readonly
          clickable
          name="case"
          :value="caseValue"
          label="方案"
          placeholder="请选择"
          @click="showPicker = true"
          :rules="[{ required: true, message: '方案不能为空' }]"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            ref="casePick"
            show-toolbar
            :columns="caseColumns"
            @confirm="onCaseConfirm"
            @cancel="showPicker = false"
            :key="caseValue"
          />
        </van-popup>
        <div>
          <van-field
            readonly
            clickable
            name="datetime"
            :value="date"
            label="时间"
            placeholder="添加时间"
            @click="show = true"
            :rules="[{ required: true, message: '时间不能为空' }]"
          />
          <van-calendar
            title="请选择开始和结束日期"
            v-model="show"
            type="range"
            :allow-same-day="true"
            @confirm="onTimeConfirm"
            color="#155BBB"
            :min-date="minDate"
            :max-date="maxDate"
          />
          <van-field
            v-model="message"
            rows="2"
            autosize
            label="记录"
            type="textarea"
            maxlength="500"
            placeholder="文字添加记录内容"
            show-word-limit
            :rules="[{ required: true, message: '记录不能为空' }]"
          />
          <van-field name="uploader" label="照片">
            <template #input>
              <van-uploader
                v-model="uploader"
                :after-read="afterRead"
                :before-delete="deleteItem"
                accept="image/*"
                :max-count="6"
                :before-read="beforeRead"
              />
            </template>
          </van-field>
        </div>
        <div class="use-medicine" v-if="false">
          <div class="title">用药</div>
          <div
            class="add-box van-hairline--bottom"
            v-for="(item, index) in medicine"
            :key="item"
          >
            <van-icon
              name="cross"
              class="cross"
              @click="closeMedicine(index)"
            />
            <div class="medicine-li">
              <van-field
                readonly
                clickable
                name="picker"
                :value="value"
                label="名称"
                placeholder="请选择药品"
                @click="showPicker = true"
              />
              <van-popup v-model="showPicker" position="bottom">
                <van-picker
                  show-toolbar
                  :columns="columns"
                  @confirm="onConfirm"
                  @cancel="showPicker = false"
                />
              </van-popup>
            </div>
            <div>
              <van-field
                readonly
                clickable
                name="picker"
                :value="value"
                label="规格"
                placeholder="请选择规格"
                @click="showPicker = true"
              />
              <van-popup v-model="showPicker" position="bottom">
                <van-picker
                  show-toolbar
                  :columns="columns"
                  @confirm="onConfirm"
                  @cancel="showPicker = false"
                />
              </van-popup>
            </div>
            <van-field
              v-model="username"
              name="数量"
              label="数量"
              placeholder="请输入"
              class="number"
            />
          </div>
          <div class="add-btn-title" @click="addMedicine">增加</div>
        </div>
        <div class="submit-wrap">
          <van-button
            round
            block
            type="info"
            native-type="submit"
            class="submit"
            color="#155BBB"
            >发布</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header/header";
import { mapState } from "vuex";
import EXIF from "exif-js";
import { imgPress } from "@/common/js/util";
export default {
  name: "base_edit",
  components: { Header },
  props: {},
  data() {
    return {
      id: "", //编辑时，农事记录的id
      eitdObj: "", //编辑内容对象
      caseValue: "",
      caseId: "",
      caseColumns: [],
      showPicker: false,
      date: "",
      minDate: new Date(2010, 1, 1),
      maxDate: new Date(2030, 1, 1),
      show: false,
      message: "",
      uploader: [],
      imgList: [],
      medicine: [1, 2],
      haveMedicine: false
    };
  },
  computed: {
    ...mapState(["mid", "uid"])
  },
  watch: {},
  mounted() {
    this.getCase();
    if (this.$route.query.id) {
      this.getEditData();
    }

    // console.log("object :>> ", this.$refs.cases.getValues());
  },
  destroyed() {},
  methods: {
    beforeRead(file) {
      return new Promise(resolve => {
        EXIF.getData(file, function() {
          let Orientation;
          Orientation = EXIF.getTag(this, "Orientation");
          imgPress({ file: file, Orientation: Orientation }).then(res => {
            resolve(res.filePress);
          });
        });
      });
    },
    afterRead(file, detail) {
      // 图片上传
      let formData = new FormData();
      formData.append("urls[]", file.file);
      this.$axios.fetchPost("/API/Wen/OssUploadFile", formData).then(res => {
        if (res.data.code == 0) {
          this.imgList.push(res.data.data);
        } else {
          this.$toast(res.data.message);
          let index = detail.index;
          this.uploader = this.uploader.splice(0, index, 1);
        }
      });
    },
    deleteItem(file, val) {
      let index = val.index;
      this.imgList = this.imgList.splice(0, index, 1);
      return true;
    },
    getEditData() {
      this.id = this.$route.query.id;
      this.$axios
        .fetchGet("API/User/getfarmerdata", {
          Id: this.id
        })
        .then(res => {
          if (res.data.code == 0) {
            let data = res.data.data;
            this.caseValue = data.point_name;
            this.date = `${data.starttime}/${data.endtime}`;
            this.message = data.content;
            data.thumb_urls.forEach(item => {
              this.uploader.push({ url: item });
              this.imgList.push(item);
            });
          }
        });
    },
    onCaseConfirm(value) {
      // 选择方案
      let r = this.$refs.casePick.getValues();
      if (r[2].pid == "") {
        this.caseId = r[0].id + "_" + r[1].id;
      } else {
        this.caseId = r[0].id + "_" + r[2].id;
      }
      this.caseValue = value.join("-");
      this.showPicker = false;
    },
    formatDate(date) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },
    onTimeConfirm(date) {
      const [start, end] = date;
      this.show = false;
      this.date = `${this.formatDate(start)}/${this.formatDate(end)}`;
    },

    onSubmit(values) {
      console.log("submit", values);
      this.issueFramData();
    },
    issueFramData() {
      //发布农事
      let options = {};
      let sucessMessage = "";
      let url = "";
      if (this.$route.query.id) {
        // 修改农事 接口参数
        options = {
          planer: this.caseId,
          Id: this.$route.query.id,
          starttoendtime: this.date,
          content: this.message,
          picurl: this.imgList.join(",")
        };
        sucessMessage = "修改成功";
        url = "/API/User/subfarmerdata";
      } else {
        // 发布农事接口参数
        options = {
          planer: this.caseId,
          uId: this.uid,
          starttoendtime: this.date,
          content: this.message,
          picurl: this.imgList.join(",")
        };
        sucessMessage = "发布成功";
        url = "/API/User/addfarmerdata";
      }
      this.$axios.fetchPost(url, options).then(res => {
        if (res.data.code == 0) {
          this.$toast.success(sucessMessage);
          setTimeout(() => {
            this.$router.go(-1);
          }, 500);
        } else {
          this.$toast.fail(res.data.message);
        }
      });
    },
    getCase() {
      // 获取方案的节点数据
      this.$axios
        .fetchGet("API/User/getProjectlist", { mId: this.mid, pId: 16 })
        .then(res => {
          if (res.data.code == 0) {
            this.caseColumns = res.data.data;
          }
        });
    },
    closeMedicine(index) {
      console.log("index :>> ", index);
    },
    addMedicine() {
      this.medicine.push(1);
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="stylus" scoped>
.base_edit-container
  .icon
    flex 1
    display flex
    align-items center
    color #999
  .back-icon
    font-size 20px
    color: #999999;
    padding-left 12px
    margin-right 5px
  .edit-container
    .case
      margin 10px 0
      height auto
    .use-medicine
      margin-top 15px
      .add-box
        position relative
        padding-right 20px
        background #fff
        .cross
          position absolute
          right 5px
          top 10px
          color: #999999;
          font-size 20px
          z-index 99999
          padding 5px
      & > .title
        margin-left 12px
        font-size: 15px;
        font-family: Microsoft YaHei;
        color: #333333;
        margin-bottom 5px
      /deep/.van-field__body
        border 1px solid #e5e5e5
        padding 5px
      .number
        /deep/.van-field__body
          width 50%
    .add-btn-title
      height 50px
      line-height 50px
      background #fff
      padding-left 12px
      color: #999999;

  .submit-wrap
    margin 35px 12px 0
    padding-bottom 35px
    overflow hidden
  /deep/.van-field__label
    width 50px
</style>
