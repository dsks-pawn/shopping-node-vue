<template>
   <div class="bag" id="ask">
		<div>
			<div class="name_product">
				<h5>Hỏi Đáp về {{nameProduct}}</h5>
			</div>
			<div class="form_comment">
				<textarea v-model="newComment" rows="8" placeholder=" Viết bình luận của bạn (Vui lòng gõ tiếng việt có dấu)"></textarea>
				<div class="text-right">
					<button class=" btn-danger btn">Gửi câu hỏi</button>
				</div>
			</div>
    	</div>
		<div>
			<div class="evaluate_new"  v-for="evaluate of evaluated" :key="evaluate.id">
				
				<div>
					<div class="avatar">{{evaluate.nameAcronym}}</div>
						<p class="user_comment"><span class="user_valuate">{{evaluate.name}} </span><span> {{evaluate.time}}</span></p>
					</div>
				<p>{{evaluate.comment}}</p>
				<p class="reply_click" @click="evaluate.showInputComment = true">Trả lời</p>
				 <div v-show="evaluate.showInputComment" class="form_evalute_main">
					 <div class="reply_all">

					 </div>
					<div>
						<textarea v-model="reply" id="" rows="8" placeholder=" Viết bình luận của bạn (Vui lòng gõ tiếng Việt có dấu)"></textarea>
						<div class="text-right">
							<button class="btn-danger btn">Gửi câu hỏi</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div>
			<div class="text-center pd">
				<el-pagination
					background
					layout="prev, pager, next"
					:total="100">
				</el-pagination>
			</div>
		</div>
   </div>
</template>
<script>
export default {
	data() {
		return {
			nameProduct: "Macbook Air 13 128GB MQD32SA/A (2017)",
			newComment: "",
			evaluated: [
				{
					name: "Quốc khánh",
					nameAcronym: "QK",
					time: "1 giờ trước",
					comment:
						"Bạn Quốc Minh nói vậy ko đúng vì S625 bây giờ mình vẫn chiến tất cả các game nặng",
					showInputComment: false
				},
				{
					name: "Sáu lượng",
					nameAcronym: "SL",
					time: "1 giờ trước",
					comment:
						"Tuyêt vơi quá a sơn tùng mtv ơi e mua cái mạng của a đó nhớ gơi qua cho e nha sáu lượng gởi",
					showInputComment: false
				}
			],
			reply: ""
		}
	},
	methods: {
		showComment() {}
	}
}
</script>

<style scoped>
.bag {
	margin-top: 10px;
	background: #fff;
	padding: 15px;
}

.form_comment {
	border-top: 1px solid #d8d8d8;
	border-bottom: 1px solid #d8d8d8;
	padding-top: 15px;
	padding-bottom: 5px;
}
textarea {
	background: #fff;
	border: 1px solid #d8d8d8;
	font-size: 13px;
	height: 60px;
}
.btn {
	padding: 0.6rem 2.13rem;
	background: #d0021b;
}
.avatar {
	width: 30px;
	height: 30px;
	display: inline-block;
	vertical-align: middle;
	line-height: 31px;
	background-color: #b3b3b3;
	margin-right: 5px;
	text-align: center;
	color: #fff;
	text-transform: uppercase;
	font-size: 12px;
	font-style: normal;
	margin-bottom: 7px;
}
.user_comment {
	display: inline;
}
.evaluate_new {
	padding: 15px 0px;
	border-bottom: 1px solid #d8d8d8;
}
.evaluate_new p {
	color: black;
	font-size: 13px;
	color: #4a4a4a;
}
.evaluate_new span {
	color: black;
}
.user_valuate {
	font-weight: bold;
}
.reply_click {
	color: #007aff !important;
	cursor: pointer;
	padding-left: 40px;
}
.form_evalute_main {
	background-color: #f3f3f3;
	border: 1px solid #d8d8d8;
	padding: 15px 15px;
	margin-left: 30px;
}
.pd {
	padding-top: 30px;
}
</style>
