<template>
    <div class="bag">
        <h4 class="name_item">
          {{nameProduct}}<span class="code_item">{{codeProduct}}</span>
        </h4>
        <el-rate class="product_rate" v-model="ratingStar" v-scroll-to="'#element'" disabled show-score text-color="grey" :score-template="countEvaluates + countComments"></el-rate>
	<!-- {{ratingStar}} -->
    </div>
    
</template>
<script>
import convertRating from "~/helpers/converts_rating"

export default {
	computed: {
		nameProduct() {
			return this.$store.state.PRODUCT_DETAIL.name
		},
		codeProduct() {
			return this.$store.state.PRODUCT_DETAIL.code
		},
		countEvaluates() {
			return `${
				this.$store.state.PRODUCT_DETAIL.evaluates.length
			} khách hàng đánh giá `
		},
		countComments() {
			return `| ${
				this.$store.state.PRODUCT_DETAIL.comments.length
			} câu hỏi được trả lời`
		},
		ratingStar() {
			let result = convertRating(this.$store.state.PRODUCT_DETAIL.rate)
			return result
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