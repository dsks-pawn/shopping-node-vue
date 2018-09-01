<template>
    <div class="bag" id="specifications" >
         <div class="z_title">
            <p>Thông số kỹ thuật</p>
         </div>
        <div class="specifications_main">
                <div class="specifications">
                <p>
                    <b>Màn hình:</b>
                     {{specificationsLimit[0]}}
                     <span v-show="!specificationsLimit[0]">Đang cập nhật <i class="el-icon-loading"></i></span>
                </p>
                <p>
                    <b v-if="category != `laptop`">Camera: </b>
                    <b v-else>CPU: </b>{{specificationsLimit[1]}}
                    <span v-show="!specificationsLimit[1]">Đang cập nhật <i class="el-icon-loading"></i></span>
                </p>
                <p>
                    <b v-if="category != `laptop`">Pin: </b>
                    <b v-else>Ram: </b>
                     {{specificationsLimit[2]}}
                     <span v-show="!specificationsLimit[2]">Đang cập nhật <i class="el-icon-loading"></i></span>
                </p>
                <p>
                    <b v-if="category != `laptop`">Ram: </b>
                    <b v-else>VGA :</b>
                     {{specificationsLimit[3]}}
                     <span v-show="!specificationsLimit[3]">Đang cập nhật <i class="el-icon-loading"></i></span>
                </p>
                <p>
                    <b v-if="category == `phone`">CPU: </b>
                    <b v-else-if="category == `tablet`">Kết Nối: </b>
                    <b v-else>HĐH: </b>
                     {{specificationsLimit[4]}}
                      <span v-show="!specificationsLimit[4]">Đang cập nhật <i class="el-icon-loading"></i></span>
                </p>
                <p>
                    <b v-if="category != `laptop`">HĐH: </b>
                    <b v-else>Nặng: </b>
                     {{specificationsLimit[5]}}
                     <span v-show="!specificationsLimit[5]">Đang cập nhật <i class="el-icon-loading"></i></span>
                </p>

            </div>
                
                <div class="text-center">
                    <el-button  data-toggle="modal" data-target="#basicExampleModal" plain>Xem cấu hình chi tiết</el-button>
                </div>
                <!-- Modal -->
                <div class="modal fade" id="basicExampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document"  v-if="specificationsz">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Thông số kỹ thuật chi tiết</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div>
                            <el-row class="border-bottom" v-for="spec of specificationsz" :key="spec.id">
                                <el-col :span="8">
                                    <p :style="spec.color">{{spec.title}}</p>
                                </el-col>
                                <el-col :span="16" v-if="spec.value">
                                    <p>{{spec.value}}</p>
                                </el-col>
                            </el-row>
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
	padding-top: 7px;
	padding-bottom: 7px;
}
.boder-bottom {
	border-bottom: 1px solid #d8d8d8;
}
.z_title {
	padding-top: 30px;
	padding-left: 10px;
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
	computed: {
		category() {
			return this.$store.state.PRODUCT_DETAIL.category
		},
		specificationsz() {
			return this.$store.state.PRODUCT_DETAIL.specifications
		},
		specificationsLimit() {
			return this.$store.state.PRODUCT_DETAIL.provisional.specifications
		}
	}
}
</script>

