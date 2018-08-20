<template>
    <div class="bag" id="specifications">
         <div class="specifications_title">
            <p>Thông số kỹ thuật</p>
         </div>
        <div class="specifications_main">
                <p>Màn hình: </p>
                <p>Camera trước: </p>
                <p>Camera sau: </p>
                <p>CPU:</p>
                <p>GPU:</p>
                <p>RAM:</p>
                <p>Bộ nhớ trong:</p>
                <p>Kết nối:</p>
                <div class="text-center">
                    <el-button  data-toggle="modal" data-target="#basicExampleModal" plain>Xem cấu hình chi tiết</el-button>
                </div>
                <!-- Modal -->
                <div class="modal fade" id="basicExampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Thông số kỹ thuật chi tiết</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div>
                            <p>Màn hình</p>
                            <p>Màn hình</p>
                            <p>Màn hình</p>
                            <p>Màn hình</p>
                            <p>Màn hình</p>
                            <p class="item_title">Màn hình</p>
                            <p>Màn hình</p>
                            <p>Màn dsad sadsadsads adsadsadsad sadsadsadsadsadsad sadsadsadsads adsadsadsad sadsa dsadsadsadsads adsadsa</p>
                            <p>Màn hình</p>
                            <p>Màn hình</p>
                            <p>Màn hình</p>
                            <p>Màn hình</p>
                            <p>Màn hình</p>
                            <p class="item_title">Màn hình</p>
                            <p>Màn hình</p>
                            <p>Màn hình</p>
                            <p>Màn hình</p>
                            <p>Màn hình</p>
                            <p>Màn hình</p>
                            <p class="item_title">Màn hình</p>
                            <p>Màn hình</p>
                            <p>Màn hình</p>
                            <p>Màn hình</p>
                            <p>Màn hình</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.bag {
	background: #fff;
	padding-bottom: 15px;
}
.specifications_title {
	border-bottom: 1px solid #e6e6e6;
	font-size: 14px;
	padding: 36px 0 2px 10px;
}
.specifications_main {
	padding-top: 10px;
	font-size: 14px;
	padding-left: 10px;
	padding-right: 10px;
}
.modal-body p {
	border-bottom: 1px solid #d8d8d8;
	padding-bottom: 10px;
}
li {
	list-style-type: none;
}
.item_title {
	color: #d0021b;
	font-weight: bold;
}
</style>
<script>
export default {
	data() {
		return {
			product: {
				typeProduct: "",
				specifications: {
					screen: "10.5 inch, 1668 x 2224 pixels",
					frontCamera: "",
					backCamera: "",
					cpu: "",
					gpu: "",
					ram: "",
					internalMemory: "",
					connection: ""
				}
			}
		}
	}
}
</script>

