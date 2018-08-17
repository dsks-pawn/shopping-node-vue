<template>
    <div class="pay">
        <h4 class="price">27.999.000đ</h4>
         <div class="pay_div"><el-button type="text" class="pay_assure" @click="modalPromotion"><img src="https://png2.kisspng.com/20180404/avq/kisspng-wordpress-search-engine-optimization-plug-in-blog-fast-5ac47027815517.5147965715228232075298.png" alt=""> sản phẩm nhận giao hàng trong 1 giờ</el-button></div>
        <div class="pay_sale">
            <div class="sale_title">Khuyến mại đặc biệt (SL có hạn)</div>
            <div class="sale_main">
                <p>khách hàng chọn 1 trong 2 hình thức thanh toán sau:</p>
                <p class="titkms">KM1:</p>
                <small><i class="fa fa-circle"></i> Trả góp 0%</small>
                <p class="titkms">KM:2</p>
                <small><i class="fa fa-circle"></i> Tặng Office 365 Personal</small>
                <small><i class="fa fa-circle"></i> Giảm thêm 500,000đ khi thanh toán Online bằng thẻ Mastercard</small>
            </div>
        </div>
        <nuxt-link to="">
			<div class="buy_now text-center">
            <h5>mua ngay</h5>
            <p>Giao hàng trong 1 giờ hoặc nhận tại shop</p>
        </div>
		</nuxt-link>
        <div class="installment text-center">
            <nuxt-link to="">
				<div class="installment_item">
                	<h5>trả góp 0%</h5>
                	<p>Xét duyệt nhanh qua điện thoại</p> 
           		 </div>
			</nuxt-link>
            <nuxt-link to="">
				<div class="installment_item">
                	<h5>trả góp qua thẻ</h5>
               	 	<p>Visa, Mastercard, JCB</p> 
           		 </div>
			</nuxt-link>
        </div>
        <div class="sdt text-center">
            <small>Gọi <span >1800-6601</span> để được tư vấn (miễn phí cuộc gọi)</small>
        </div>
		
    </div>
</template>
<style scoped>
.pay {
	padding-top: 20px;
}
.price {
	font-weight: bold;
}
.pay_div {
	background-color: #fff9fa;
	border: solid 1px #ffdddd;
	margin-bottom: 10px;
	overflow: hidden;
}
.pay_assure {
	text-transform: uppercase;
	font-size: 15px;
	font-weight: bold;
	cursor: pointer;
	color: #eb0000;
	position: relative;
	padding: 2px 5px 2px;

	border-radius: 2px;
}
.pay_assure img {
	width: 30px;
}

.sale_title {
	padding: 4px 10px;
	font-weight: bold;
	font-size: 14px;
	color: #fff;
	background: #34a105;
	border: 1px dashed #d7d7d7;
}
.sale_main {
	padding: 15px 5px 5px 5px;
	border: 1px dashed #d7d7d7;
}
.sale_main p {
	text-transform: uppercase;
	font-size: 14px;
	margin-bottom: 0px;
}
.sale_main p:first-child {
	font-style: italic;
	color: #4a4a4a;
	margin-bottom: 5px;
}
.titkms {
	margin-bottom: 5px;
	padding: 2px 5px;
	font-size: 12px;
	color: #fff;
	background: #f5a623;
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
	border-radius: 3px;
	display: block;
	max-width: max-content;
}
h5 {
	text-transform: uppercase;
	font-weight: bold;
}
.buy_now,
.installment_item p {
	font-size: 13px;
	margin-top: 10px;
	line-height: 1.6em;
}
.buy_now,
.installment_item {
	padding-top: 10px;
	color: #fff;
	border-radius: 3px;
	line-height: 0.3em;
}
.buy_now {
	background: #d0021b;
	border: solid 1px #d0021b;
}
.installment {
	margin-top: 10px;
	display: flex;
	justify-content: space-between;
}
.installment_item {
	background: #337ab7;
	border: solid 1px #337ab7;
	padding-left: 5px;
	margin-left: 1px;
	margin-right: 1px;
	padding-right: 5px;
}
small {
	display: block;
	line-height: 2.3em;
}
.sdt {
	padding-top: 10px;
}
.sdt span {
	color: #d0021b;
	font-weight: bold;
	font-size: 15px;
}
.fa-circle {
	font-size: 7px;
	color: #34a105;
}
</style>

<script>
export default {
	methods: {
		modalPromotion() {
			this.$alert(
				`<div class="modal_promotion">
			<p><b>Thời gian diễn ra chương trình: từ 08:00 17/05/2018 - 22:00 31/12/2018:</b> từ <b>08:00 17/05/2018 - 22:00 31/12/2018</b></p>
			<p><b>Sản phẩm áp dụng:</b> Tất cả các sản phẩm Điện thoại, Máy tính bảng mới đang kinh doanh tại hệ thống.</p>
			<p><b>Phạm vi áp dụng: </b>Toàn quốc</p>
			<div><b>1.Giao hàng trong 1 giờ</b></div>
			<div>
				<p>Giao hàng trong 1 Giờ từ 8h đến 21h hàng ngày.</p>
				<p>Giao hàng trong vòng 1 giờ cho Khách hàng mua Online giao hàng tận nơi trên toàn quốc đối với các sản phẩm điện thoại, máy tính bảng. </p>
			</div>
			<div>
				<div>2. Xác định việc giao trễ trong 1 giờ:</div>
				<p>Dựa trên thời gian đến nhà Khách hàng so với thời gian hẹn giao trên hóa đơn. Nếu giao trễ, khách hàng sẽ nhận được Voucher 100.000đ (Áp dụng mua tất cả sản phẩm (trừ sim số, thẻ cào) tại hệ thống cửa hàng FPT Shop. Mã voucher sẽ được tự động gửi tin nhắn đến Số điện thoại mua hàng của Khách hàng trong vòng 24h kể từ khi hoàn tất giao hàng (nếu trễ).</p>
				</div>
			</div>`,
				"Giao hàng 1 giờ",
				{
					confirmButtonText: "Đóng",
					dangerouslyUseHTMLString: true
				}
			)
		}
	}
}
</script>
