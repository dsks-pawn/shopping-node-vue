<template>
 <no-ssr>
    <div>
        <carousel paginationColor="#fed700" paginationActiveColor="red" :paginationPadding="10" :paginationEnabled="false" :perPageCustom="[[411, 2], [768, 2], [1024, 4]]" :autoplay="true"   :minSwipeDistance="10">
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
    </div>
     </no-ssr>
</template>
