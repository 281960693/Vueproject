<template>
  <div>
    <div class="block">
      <el-carousel height="350px">
        <el-carousel-item v-for="item in bannerlist" :key="item.advImg">
          <img :src="geturl(item.advImg) " alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
import { bannerurls } from "../../network/homerequerst";
export default {
  data() {
    return {
      bannerlist: [],
    };
  },
  methods: {
    geturl(url) {
      return "http://124.93.196.45:10001" + url;
    },
  },
  created() {
    bannerurls().then((res) => {
        console.log(res);
        this.bannerlist = res.data.rows;
        console.log(this.bannerlist);
      });
  },
};
</script>>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__item img {
  width: 100%;
}
</style>