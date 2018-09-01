<template>
    <div class="bag" id="evaluate">
        <div class="evalute_title">
            <h5>Đánh giá & Nhận xét {{name}}</h5>
        </div>
        <div  class="evalute_main">
            <el-row :gutter="10">
                <el-col class="rate" :xs="24" :sm="12" :md="7">
                    <div class="rate_main">
                        <h6>{{ratingStar}}/5</h6>
                        <el-rate v-model="ratingStar" disabled show-score></el-rate>
                        <span>{{countEvaluatesAndComment}} đánh giá & nhận xét</span>
                    </div>
                </el-col>
                <el-col class="progress_main" :xs="24" :sm="12" :md="7">
                   <div class="progress_pd">
                        <div class="progress_all">
                        <span>5.sao</span>
                            <el-progress style="width: 100%; padding: 7px 15px 0px 10px;" :percentage="rate.one.toString()" :show-text="false" color="#2a7709"></el-progress>
                        <span>{{rate.one}}</span>
                    </div>
                     <div class="progress_all">
                        <span>4.sao</span>
                            <el-progress style="width: 100%; padding: 7px 15px 0px 10px;" :percentage="rate.two.toString()" :show-text="false" color="#2a7709"></el-progress>
                        <span>{{rate.two}}</span>
                    </div>
                     <div class="progress_all">
                        <span>3.sao</span>
                            <el-progress style="width: 100%; padding: 7px 15px 0px 10px;" :percentage="rate.three.toString()" :show-text="false" color="#2a7709"></el-progress>
                        <span>{{rate.three}}</span>
                    </div>
                     <div class="progress_all">
                        <span>2.sao</span>
                            <el-progress style="width: 100%; padding: 7px 15px 0px 10px;" :percentage="rate.four.toString()" :show-text="false" color="#f6a623"></el-progress>
                        <span>{{rate.four}}</span>
                    </div>
                     <div class="progress_all">
                        <span>1.sao</span>
                            <el-progress style="width: 100%; padding: 7px 15px 0px 10px;" :percentage="rate.five.toString()" :show-text="false" color="red"></el-progress>
                        <span>{{rate.five}}</span>
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
                        <el-rate v-model="newEvaluate.rate" :texts="['Không thích', 'Tạm được', 'Bình thường', 'Hài Lòng', 'Tuyệt vời']" show-text>
                        </el-rate>
                        <textarea v-model="newEvaluate.text" id="" rows="8" placeholder="Bạn có khuyên người khác mua sản phẩm này không? Tại sao?"></textarea>
                        <small>Một đánh giá có ích thường dài từ 100 ký tự trở lên</small>
                        <div class="text-right">
                            <button class="btn btn-info" @click="showForm = false">Hủy</button>
                            <button class="btn-danger btn">Gửi</button>
                            
                        </div>
                    </div>
                </div>
            </transition>
         </div>
         <div>
             <div class="form_evalute_title" >
                <h5>Khách hàng nhận xét ({{evaluates.length}})</h5>
             </div>
            <div> 
    
                        <!-- CHỖ NÀY VẪN LÀ DỮ LIỆU GIẢ -->
                    
                 <el-tabs lazy="true" tab-position="right" v-model="activeTabsComment">
                    <el-tab-pane label="Mới nhất" name="new">
                        <div class="evaluate_new"  v-for="evaluate of evaluated" :key="evaluate.id">
                            <el-rate v-model="evaluate.rate" disabled></el-rate>
                            <p>Bởi: <span class="user_valuate">{{evaluate.name}} </span><span> {{evaluate.time}}</span></p>
                            <p>{{evaluate.comment}}</p>
                            <el-button ><i class="fa fa-thumbs-up">{{evaluate.like}}</i></el-button>
                        </div>
                        <div  v-show="evaluated.length > 0" class="text-center">
                             <el-button class="viewall">Xem tất cả <b>{{evaluated.length}}</b> nhận xét</el-button>
                        </div>
                        <div v-show="evaluated.length == 0" class="block_evalute text-center">
                           <div>
                                <span>Chưa có nhận xét nào</span><br>
                                <span>Hãy là người nhận xét đầu tiên</span>
                                <div class="button_evalute">
                                    <a @click="showForm = true">Viết nhận xét</a>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="Hữu ích nhất" name="useful">
                         <div class="evaluate_new"  v-for="evaluate of evaluated" :key="evaluate.id">
                            <el-rate v-model="evaluate.rate" disabled></el-rate>
                            <p>Bởi: <span class="user_valuate">{{evaluate.name}} </span><span> {{evaluate.time}}</span></p>
                            <p>{{evaluate.comment}}</p>
                            <el-button plain><i class="fa fa-thumbs-up">{{evaluate.like}}</i></el-button>
                        </div>
                        <div  v-show="evaluated.length > 0" class="text-center">
                             <el-button class="viewall">Xem tất cả <b>{{evaluated.length}}</b> nhận xét</el-button>
                        </div>
                        <div v-show="evaluated.length == 0" class="block_evalute text-center">
                           <div>
                                <span>Chưa có nhận xét nào</span><br>
                                <span>Hãy là người nhận xét đầu tiên</span>
                                <div class="button_evalute">
                                    <a @click="showForm = true">Viết nhận xét</a>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
             </el-tabs>


            </div>
         </div>
    </div>
</template>
<script>
import convertRating from "~/helpers/converts_rating"
export default {
	data() {
		return {
			showForm: false,
			activeTabsComment: "new",
			newEvaluate: {
				rate: 3,
				text: ""
			},
			evaluated: [
				{
					name: "Quốc khánh",
					time: "1 giờ trước",
					rate: 5,
					like: 13,
					comment:
						"Bạn Quốc Minh nói vậy ko đúng vì S625 bây giờ mình vẫn chiến tất cả các game nặng"
				},
				{
					name: "Sáu lượng",
					time: "1 giờ trước",
					rate: 3.5,
					like: 12,
					comment:
						"Tuyêt vơi quá a sơn tùng mtv ơi e mua cái mạng của a đó nhớ gơi qua cho e nha sáu lượng gởi"
				}
			]
		}
	},
	computed: {
		name() {
			return this.$store.state.PRODUCT_DETAIL.name
		},
		ratingStar() {
			let result = convertRating(this.$store.state.PRODUCT_DETAIL.rate)
			return result
		},
		countEvaluatesAndComment() {
			return (
				this.$store.state.PRODUCT_DETAIL.evaluates.length +
				this.$store.state.PRODUCT_DETAIL.comments.length
			)
		},
		evaluates() {
			return this.$store.state.PRODUCT_DETAIL.evaluates
		},
		rate() {
			return this.$store.state.PRODUCT_DETAIL.rate
		}
	}
}
</script>

<style scoped>
.bag {
	margin-top: 10px;
	background: #fff;
	padding: 15px;
}
.evalute_title {
	border-bottom: 1px solid #d8d8d8;
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
	padding-top: 15px;
	border-bottom: 1px solid #d8d8d8;
}
.form_evalute_main {
	background-color: #f3f3f3;
	margin-top: 10px;
	border: 1px solid #d8d8d8;
	padding: 15px 15px;
}
.evaluate_new {
	padding: 15px 15px;
	border-bottom: 1px solid #d8d8d8;
}
.evaluate_new p {
	color: black;
}
.evaluate_new span {
	color: black;
}
.user_valuate {
	font-weight: bold;
}
.viewall {
	margin-top: 10px;
	padding: 7px 10px;
}
.btn {
	padding: 0.6rem 2.13rem;
}
.btn-danger {
	background: #d0021b;
}
</style>
