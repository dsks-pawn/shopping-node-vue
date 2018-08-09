<template>
 <no-ssr>
    <!-- <div style="padding: 20px 0 20px;"> -->
        <!-- <carousel paginationColor="#fed700" paginationActiveColor="red" :paginationPadding="10" :paginationEnabled="false" :perPageCustom="[[411, 2], [768, 4], [1024, 6]]" :autoplay="true"   :minSwipeDistance="10">
            <slide>
               <el-row>
                    <el-card :body-style="{ padding: '0px' }">
                    <img src="~static/brand1.png" class="image">
                    </el-card>
                </el-row>
            </slide>
             <slide>
               <el-row>
                    <el-card :body-style="{ padding: '0px' }">
                    <img src="~static/brand1.png" class="image">
                    </el-card>
                </el-row>
            </slide>
             <slide>
               <el-row>
                    <el-card :body-style="{ padding: '0px' }">
                    <img src="~static/brand1.png" class="image">
                    </el-card>
                </el-row>
            </slide>
            <slide>
                <el-row>
                    <el-card :body-style="{ padding: '0px' }">
                    <img src="~static/brand1.png" class="image">
                    </el-card>
                </el-row>
            </slide>
             <slide>
                <el-row>
                    <el-card :body-style="{ padding: '0px' }">
                    <img src="~static/brand1.png" class="image">
                    </el-card>
                </el-row>
            </slide>
             <slide>
                <el-row>
                    <el-card :body-style="{ padding: '0px' }">
                    <img src="~static/brand1.png" class="image">
                    </el-card>
                </el-row>
            </slide>
        </carousel>
         <div>{{$store.state.BRANDS}}</div>
    </div> -->
     </no-ssr>
</template>


<script>
import Brands from "@/api/Brands"

export default {
	async mounted() {
		try {
			let dataBrands = await Brands.getBrandsWithLimit()
			if (dataBrands)
				await this.$store.dispatch(
					"getBrandsWithLimit",
					dataBrands.data
				)
		} catch (error) {
			throw error
		}
	}
}
</script>
