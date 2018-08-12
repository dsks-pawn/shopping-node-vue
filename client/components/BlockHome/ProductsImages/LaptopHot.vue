<template>
    <div class="product">
         <div class="product_title">
             <nuxt-link to=""><h5>laptop bán chạy</h5></nuxt-link>
            <nuxt-link to=""><small>Xem tất cả</small></nuxt-link>
        </div>
        <div>
            <el-row :gutter="10">
                <el-col  :xs="24" :sm="12" :md="8" v-for="item of item_product" :key="item.id">
                    <nuxt-link  :to="item.link" :title="item.name">
                        <div class="product_item">
                            <div class="item">
                                <h6 class="item_title">{{item.name}}</h6>
                                <!-- <small class="item_answer">Trả góp {{item.answer}}%</small> -->
                            </div>
                            <p class="item_price">
                                {{item.price}}₫
                            </p>
                            <img :src="item.img" alt="Sản phẩm hot">
                        </div>
                    </nuxt-link>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<style scoped>
.product {
	padding-top: 30px;
}
.product_title {
	display: flex;
	justify-content: space-between;
}
.product_title h5 {
	color: #1f1f1f;
	text-transform: uppercase;
}
.product_item {
	background-color: #fff;
	padding: 10px;
	margin-top: 10px;
}
.item {
	padding-left: 12px;
	display: flex;
	justify-content: space-between;
}
.item_title {
	color: #1f1f1f;
	font-weight: bold;
}
.item_price {
	padding-left: 12px;
	color: #656464;
	font-weight: bold;
}
.item_answer {
	background-color: #ff2842;
	padding: 0px 7px 0px 7px;

	color: #fff;
}
</style>
<script>
export default {
	data() {
		return {
			item_product: [
				{
					name: "Macbook Air 128G MQD32SA/A (2017)",
					price: "23.999.000",
					answer: "0",
					img:
						"//cdn.fptshop.com.vn/Uploads/Originals/2018/8/1/636686823970762377_Banner-MacBook-Air.jpg",
					link: ""
				},
				{
					name: "Macbook Air 128G MQD32SA/A (2017)",
					price: "23.999.000",
					answer: "0",
					img:
						"//cdn.fptshop.com.vn/Uploads/Originals/2018/8/1/636686823970762377_Banner-MacBook-Air.jpg",
					link: ""
				},
				{
					name: "Macbook Air 128G MQD32SA/A (2017)",
					price: "23.999.000",
					answer: "0",
					img:
						"//cdn.fptshop.com.vn/Uploads/Originals/2018/8/1/636686823970762377_Banner-MacBook-Air.jpg",
					link: ""
				},
				{
					name: "Macbook Air 128G MQD32SA/A (2017)",
					price: "23.999.000",
					answer: "0",
					img:
						"//cdn.fptshop.com.vn/Uploads/Originals/2018/8/1/636686823970762377_Banner-MacBook-Air.jpg",
					link: ""
				},
				{
					name: "Macbook Air 128G MQD32SA/A (2017)",
					price: "23.999.000",
					answer: "0",
					img:
						"//cdn.fptshop.com.vn/Uploads/Originals/2018/8/1/636686823970762377_Banner-MacBook-Air.jpg",
					link: ""
				},
				{
					name: "Macbook Air 128G MQD32SA/A (2017)",
					price: "23.999.000",
					answer: "0",
					img:
						"//cdn.fptshop.com.vn/Uploads/Originals/2018/8/1/636686823970762377_Banner-MacBook-Air.jpg",
					link: ""
				}
			]
		}
	}
}
</script>

