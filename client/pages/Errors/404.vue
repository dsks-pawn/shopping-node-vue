<template>
    <div class="container">
      <nuxt-link to="/"><h2><b>Home page</b></h2></nuxt-link>
     <h4>Page not found</h4>
     <div class="img">
  <a class="btn-floating btn-lg purple-gradient"><i class="fa fa-bolt"></i></a>
  <a class="btn-floating peach-gradient"><i class="fa fa-leaf"></i></a>
  <a class="btn-floating btn-sm blue-gradient"><i class="fa fa-star"></i></a> 
  <img src="@/static/error.png">
     </div>
  
    </div>
  </template>
  
<script>
import Home from "~/api/Home.js"
import Additional from "~/api/Additional.js"
export default {
	async fetch({ store }) {
		if (!store.state.HOME_DATA._id) {
			let data = await Home.getDataByDb()
			try {
				if (data.data.status != 200) data = await Home.getDataByFpt()
				let result = data.data.data[0]
				if (result) await store.dispatch("getDataByHome", result)
			} catch (error) {
				throw error
			}
		}
	},
	data() {
		return {
			dialogVisible: false
		}
	}
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
  