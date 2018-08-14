<template>
    <div class="container">
      <nuxt-link to="/"><h2><b>Home page</b></h2></nuxt-link>
     <h4>Page not found</h4>
     
     <div class="img">
  <a class="btn-floating btn-lg purple-gradient"><i class="fa fa-bolt"></i></a>
  <a class="btn-floating peach-gradient"><i class="fa fa-leaf"></i></a>
  <a class="btn-floating btn-sm blue-gradient"><i class="fa fa-star"></i></a>      <img src="@/static/error.png">
     </div>
     <el-button type="text" @click="dialogVisible = true">click to open the Dialog</el-button>
  
  <el-dialog 
    title="Tips" style="height: 100%;"
    :visible.sync="dialogVisible"
    width="100%"
    :before-close="handleClose">
    <el-carousel :interval="4000" type="card" style="width: 100vw;">
      <el-carousel-item v-for="item in 6" :key="item">
        <img src="//cdn.fptshop.com.vn/Uploads/Originals/2018/7/30/636685732973902030_xiaomiA2lite-den-1.jpg">
      </el-carousel-item>
    </el-carousel>
  </el-dialog>
    </div>
  </template>
  
  <script>
  export default {
    data() {
        return {
          dialogVisible: false
        };
      },
  }
  </script>
  
  <style scoped>
  .el-carousel__container {
    height: 100%;
  }
  .el-dialog__body {
    padding: 0px !important;
  }
  .img {
      margin: 0 auto;
      text-align: center;
  }
  </style>
  