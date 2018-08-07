<template>
 <no-ssr>
    <div>
        <carousel paginationColor="#fed700" paginationActiveColor="red" :paginationPadding="10" :paginationEnabled="false" :perPageCustom="[[411, 2], [768, 4], [1024, 6]]" :autoplay="true"  :minSwipeDistance="10" :perPage="6" >
                <slide v-for="co in count" :key="co">
                <el-row>
                    <el-card :body-style="{ padding: '0px' }">
                    <img src="~static/product-1.jpg" class="image">
                    <div style="padding: 14px;">
                        <span>Yummy hamburger</span>
                        <div class="bottom clearfix">
                        <time class="time">{{ currentDate }}</time>
                        <el-button type="text" class="button">Operating button</el-button>
                        </div>
                    </div>
					  <div>{{ $store.state.ITEMS_HOT }}</div>
					  <!-- <div @click="items()">alo</div> -->
                    </el-card>
                </el-row>
            </slide>
        </carousel>
    </div>
     </no-ssr>
</template>
<script>
import Items from "@/api/Items"

export default {
	async fetch() {
		try {
			let { data } = await Items.getItemsWithLimit()
			await this.$store.dispatch("getItemsWithLimit", data)
		} catch (error) {
			throw error
		}
	},
	// methods: {
	// 	async items() {
	// 		try {
	// 			let { data } = await Items.getItemsWithLimit()
	// 			this.$store.dispatch("getItemsWithLimit", data)
	// 		} catch (error) {
	// 			throw error
	// 		}
	// 	}
	// },
	data() {
		return {
			currentDate: 20,
			count: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
		}
	}
}
</script>