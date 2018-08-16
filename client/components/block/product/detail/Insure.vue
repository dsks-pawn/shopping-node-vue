<template>
    <div class="bag">
        <div>
             <h6>Trong hộp có:</h6>
              <p class="attached"><i class="fa fa-gift"></i> Củ sạc, Cáp sạc, Tai nghe, Ốp lưng, Cây lấy sim, Sách hướng dẫn sử dụng.</p>
        </div>
        <div class="assure">
            <h6>FPTShop cam kết</h6>
            <p><i class="fa fa-balance-scale"></i> Hàng chính hãng</p>
            <p><i class="fa fa-check"></i> Bảo hành 12 tháng chính hãng</p>
            <p><i class="fa fa-truck"></i> Giao hàng miễn phí toàn quốc trong 60 phút</p>
            <p><i class="fa fa-map-marker"></i> Bảo hành nhanh tại FPT Shop trên toàn quốc</p>
        </div>
        <div class="location_shop">
            <h6>Tìm shop còn hàng gần bạn:</h6>
            <div class="text-center">
                <el-select class="select"  v-model="selectedState" default-first-option filterable placeholder="Chọn tỉnh/thành">
                <el-option
                v-for="item in states"
                :key="item.name"
                :label="item.name_with_type"
                :value="item.name">
                </el-option>
            </el-select>
            <el-select  class="select" v-model="selectedDistrict" filterable placeholder="Chọn quận/huyện">
                <el-option
                v-for="item of district"
                :key="item.code"
                :label="item.name_with_type"
                :value="item.name">
                </el-option>
            </el-select>
            </div>
        </div>
        <div class="location_store">
            <h6>Danh sách shop:</h6>
            <ul>
               <li>
                    <p>261-263 Khánh Hội, P. 5, Quận 4, Hồ Chí Minh</p>
                    <nuxt-link to=""> <p>-Tạm hết hàng- Đặt hàng lấy sau 2-7 ngày</p></nuxt-link>
               </li>
                <li>
                    <p>261-263 Khánh Hội, P. 5, Quận 4, Hồ Chí Minh</p>
                    <nuxt-link to=""> <p>-Tạm hết hàng- Đặt hàng lấy sau 2-7 ngày</p></nuxt-link>
               </li>
            </ul>
           
        </div>
    </div>
</template>
<script>
import states from "~/static/json/states.json"
import districts from "~/static/json/districts.json"
export default {
	data() {
		return {
			selectedState: "",
			selectedDistrict: "",
			states: states.states,
			district: []
		}
	},
	watch: {
		selectedState() {
			let stated = states.states.filter(
				state => state.name == this.selectedState
			)
			if (this.selectedState) {
				let codeStated = stated[0].code
				let result = districts.districts.filter(
					res => res.parent_code == codeStated
				)
				this.selectedDistrict = result[1].name
				return (this.district = result)
			}
		}
	}
}
</script>
<style scoped>
.bag {
	padding-top: 20px;
	border-left: 1px solid #e2e2e2;
	padding-left: 8px;
}
h6 {
	font-size: 14px;
	font-weight: bold;
}
p {
	font-size: 13px;
	line-height: 1.2em;
}
i {
	color: #cd1818;
	font-size: 20px;
	padding-right: 2px;
}
.attached {
	color: #337ab7;
}

.location_store {
	height: 220px;
	overflow: auto;
}
.select {
	padding-bottom: 15px;
	width: 100%;
}
/* width */
::-webkit-scrollbar {
	width: 2px;
}
.location_store ul {
	padding-left: 0px;
}
.location_store li {
	display: inline-block;
}
/* Track */
::-webkit-scrollbar-track {
	background: grey;
}

/* Handle */
::-webkit-scrollbar-thumb {
	background: #f3f3f3;
}
</style>

