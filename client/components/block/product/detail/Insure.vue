<template>
    <div>
        <div v-if="attached">
             <h6>Trong hộp có</h6>
              <small><i class="fa fa-balance-scale"></i> Hàng chính hãng</small>
        </div>
        <div class="assure">
            <h6>FPTShop cam kết</h6>
            <small><i class="fa fa-balance-scale"></i> Hàng chính hãng</small>
            <small><i class="fa fa-check"></i> Bảo hành 12 tháng chính hãng</small>
            <small><i class="fa fa-truck"></i> Giao hàng miễn phí toàn quốc trong 60 phút</small>
            <small><i class="fa fa-map-marker"></i> Bảo hành nhanh tại FPT Shop trên toàn quốc</small>
        </div>
        <div class="location_shop text-center">
            <h6>Tìm shop còn hàng gần bạn</h6>
            <el-select style="margin-bottom: 20px;" v-model="selectedState" default-first-option filterable placeholder="Chọn tỉnh/thành">
                <el-option
                v-for="item in states"
                :key="item.name"
                :label="item.name_with_type"
                :value="item.name">
                </el-option>
            </el-select>
            <el-select  v-model="selectedDistrict" filterable placeholder="Chọn quận/huyện">
                <el-option
                v-for="item of district"
                :key="item.code"
                :label="item.name_with_type"
                :value="item.name">
                </el-option>
            </el-select>
        </div>
        <div class="">
            <h6>Danh sách shop</h6>

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

