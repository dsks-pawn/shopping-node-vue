<template>
    <div class="bag">
        <div class="evalute_title">
            <h5>Đánh giá & Nhận xét {{product.name}}</h5>
        </div>
        <div id="evaluate" class="evalute_main">
            <el-row :gutter="10">
                <el-col class="rate" :xs="24" :sm="12" :md="7">
                    <div class="rate_main">
                        <h6>{{product.rate.value}}/5</h6>
                        <el-rate
                        v-model="product.rate.value"
                        disabled
                        show-score>
                        </el-rate>
                        <span>{{product.rate.countComment}} đánh giá & nhận xét</span>
                    </div>
                </el-col>
                <el-col class="progress_main" :xs="24" :sm="12" :md="7">
                   <div class="progress_pd">
                        <div class="progress_all">
                        <span>5sao</span>
                            <el-progress style="width: 100%; padding: 7px 15px 0px 10px;" :percentage="product.countStar.one" :show-text="false" color="#2a7709"></el-progress>
                        <span>{{product.countStar.one}}</span>
                    </div>
                     <div class="progress_all">
                        <span>4sao</span>
                            <el-progress style="width: 100%; padding: 7px 15px 0px 10px;" :percentage="product.countStar.two" :show-text="false" color="#2a7709"></el-progress>
                        <span>{{product.countStar.two}}</span>
                    </div>
                     <div class="progress_all">
                        <span>3sao</span>
                            <el-progress style="width: 100%; padding: 7px 15px 0px 10px;" :percentage="product.countStar.three" :show-text="false" color="#2a7709"></el-progress>
                        <span>{{product.countStar.three}}</span>
                    </div>
                     <div class="progress_all">
                        <span>2sao</span>
                            <el-progress style="width: 100%; padding: 7px 15px 0px 10px;" :percentage="product.countStar.four" :show-text="false" color="#f6a623"></el-progress>
                        <span>{{product.countStar.four}}</span>
                    </div>
                     <div class="progress_all">
                        <span>1sao</span>
                            <el-progress style="width: 100%; padding: 7px 15px 0px 10px;" :percentage="product.countStar.five" :show-text="false" color="red"></el-progress>
                        <span>{{product.countStar.five}}</span>
                     </div>
                   </div>
                </el-col>
                <el-col  class="block_evalute" :xs="24" :sm="24" :md="10">
                    <div class="block_evalute_main">
                        <h6>Bạn đã dùng sản phẩm này?</h6>
                        <div class="button_evalute">
                            <a @click="showForm = true">Gửi đánh giá của bạn</a>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
         <div v-show="showForm" class="form_evalute">
            <transition name="el-fade-in-linear">
                <div class="transition-box">
                    <div class="form_evalute_title">
                        <h5>Gửi nhận xét của bạn</h5>
                    </div>
                    <div class="form_evalute_main">
                        <h6>Bạn chấm sản phẩm này bao nhiêu sao?</h6>
                        <el-rate
                            v-model="value3"
                            :texts="['Không thích', 'Tạm được', 'Bình thường', 'Hài Lòng', 'Tuyệt vời']"
                            show-text>
                        </el-rate>
                        <textarea name="" id="" rows="8" placeholder="Bạn có khuyên người khác mua sản phẩm này không? Tại sao?"></textarea>
                        <small>Một đánh giá có ích thường dài từ 100 ký tự trở lên</small>
                        <div class="button_form text-right">
                            <button class="btn btn-muted" @click="showForm = false">Hủy</button>
                            <button class="btn btn-danger">Gửi</button>
                        </div>
                    </div>
                </div>
            </transition>
         </div>
    </div>
</template>
<script>
export default {
	data() {
		return {
			showForm: false,
			product: {
				name: "Macbook Air 13 128GB MQD32SA/A (2017)",
				rate: { value: 3.4, countComment: "12" },
				countStar: {
					one: "6",
					two: "2",
					three: "3",
					four: "12",
					five: "23"
				}
			}
		}
	}
}
</script>

<style scoped>
.bag {
	margin-top: 10px;
	background: #fff;
	padding-left: 15px;
	padding-right: 15px;
}
.evalute_title {
	border-bottom: 1px solid #d8d8d8;
	padding-top: 15px;
}
.evalute_main {
	border: 1px solid #d8d8d8;
	margin-top: 15px;
}
.rate {
	display: flex;
	height: 100px;
	justify-content: center;
	align-items: center;
	text-align: center;
}
.rate_main {
	padding-top: 8%;
}
.progress_pd {
	padding: 15px 15px;
}
.progress_main {
	border-right: 1px solid #d8d8d8;
	border-left: 1px solid #d8d8d8;
}
.progress_all {
	display: flex;
}
.block_evalute {
	display: flex;
	height: 100px;
	justify-content: center;
	align-items: center;
	text-align: center;
}
.block_evalute_main {
	padding-top: 6%;
}

.button_evalute {
	background: #d0021b;
	color: #fff;
	padding: 7px 15px;
	margin-top: 10px;
}
a {
	color: #fff;
}
h6 {
	color: #4a4a4a;
	font-weight: bold;
}
p,
span {
	font-size: 13px;
	color: #4a4a4a;
}
textarea {
	background: #fff;
	border: 1px solid #d8d8d8;
	font-size: 13px;
	height: 60px;
}

.form_evalute_title {
	border-bottom: 1px solid #d8d8d8;
}
.form_evalute_main {
	background-color: #f3f3f3;
	margin-top: 10px;
	border: 1px solid #d8d8d8;
	padding: 15px 15px;
}
</style>
