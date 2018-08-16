<template>
    <div class="bag">
        <h4 class="name_item">
          {{product.name}}<span class="code_item">{{product.code}}</span>
        </h4>
        <el-rate class="product_rate" v-model="product.rate.value" v-scroll-to="'#element'" disabled show-score text-color="grey" :score-template="product.rate.countComment + product.rate.countReply"></el-rate>

    </div>
    
</template>
<script>
export default {
	data() {
		return {
			product: {
				name: "iPad Pro 12.9 WI-FI 4G 256GB (2017)",
				code: "(No.00366396)",
				rate: {
					value: 3.7,
					countComment: "83 khách hàng đánh giá",
					countReply: " | 62 câu hỏi được trả lời"
				}
			}
		}
	}
}
</script>
<style scoped>
.bag {
	padding: 15px 15px;
	border-bottom: 1px solid #e2e2e2;
}
.code_item {
	font-size: 12px;
	color: #666;
}
.product_rate {
	cursor: pointer;
}
span {
	padding-left: 10px;
}
#element {
	height: 2000px;
}
</style>