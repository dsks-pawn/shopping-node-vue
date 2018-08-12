<template>
    <div class="products text-center">
        <div class="breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item ><nuxt-link class="breadcrumb_title" to="/">Trang chủ</nuxt-link></el-breadcrumb-item>
                <el-breadcrumb-item><nuxt-link class="breadcrumb_title" to="">{{typeProduct.title}}</nuxt-link></el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div>
            <h6 class="product_title">{{typeProduct.title}}</h6>
             <el-row>
                <el-col :xs="8" :sm="8" :md="4" v-for="pupri of typeProduct.purchasePrice" :key="pupri.id">
                    <div class="product_item">
                        <nuxt-link :to="pupri.link"><span><img :src="pupri.img" :alt="pupri.price"></span></nuxt-link>
                    </div>
                    <div class="product_price">
                        <nuxt-link :to="pupri.link"><small>{{pupri.price}}</small></nuxt-link>
                    </div>
                </el-col>

                
                 <el-col :xs="8" :sm="8" :md="4">
                    <div class="product_item ">
                        <nuxt-link :to="typeProduct.linkViewAll"><span><i class="fa fa-ellipsis-h fa-3x"></i></span></nuxt-link>
                    </div>
                    <div class="product_price">
                        <nuxt-link :to="typeProduct.linkViewAll"><small>Xem tất cả</small></nuxt-link>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<style scoped>
.breadcrumb {
	background: #f3f3f3;
}
.breadcrumb_title {
	text-transform: capitalize;
}
.products {
	background-color: #fff;
}
.product_title {
	text-transform: uppercase;
}

.product_item span {
	display: inline-block;
	text-align: center;
	overflow: hidden;
	margin-bottom: 10px;
	padding: 10px;
	width: 100px;
	height: 100px;
	background: #fff;
	border: solid 1px #dcdcdc;
	border-radius: 50%;
}
.product_item span:hover {
	border: solid 1px #a6a6a6;
}
.product_price {
	padding-bottom: 25px;
}
.product_price small {
	color: #252525;
}
.fa-ellipsis-h {
	padding-top: 18px;
	padding-bottom: 18px;
	display: inline-block;
}
</style>
<script>
export default {
	data() {
		return {
			typeProduct: {
				title: "điện thoại",
				purchasePrice: [
					{
						price: "Từ 1 đến 3 triệu",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2017/4/25/636287267646710000_200.jpg",
						link: ""
					},
					{
						price: "Từ 3 đến 6 triệu",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2017/4/25/636287267954174000_200.jpg",
						link: ""
					},
					{
						price: "Từ 6 đến 10 triệu",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2017/4/25/636287268647066000_200.jpg",
						link: ""
					},
					{
						price: "Từ 10 đến 15 triệu",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2017/5/15/636304622649228315_10-15.jpg",
						link: ""
					},
					{
						price: "Trên 15 triệu",
						img:
							"//cdn.fptshop.com.vn/Uploads/Thumbs/2017/4/25/636287269146660000_200.jpg",
						link: ""
					}
				],
				linkViewAll: ""
			}
		}
	}
}
</script>
