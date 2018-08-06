<template>
    <div>
        <carousel paginationColor="#fed700" paginationActiveColor="red" paginationPadding="10" paginationEnabled="false" :perPageCustom="[[411, 2], [768, 4], [1024, 6]]" autoplay="true"  easing="ease" minSwipeDistance="10" perPage="6" >
            <slide>
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
                    </el-card>
                </el-row>
            </slide>
            <slide>
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
                    </el-card>
                </el-row>
            </slide>
             <slide>
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
                    </el-card>
                </el-row>
            </slide>
             <slide>
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
                    </el-card>
                </el-row>
            </slide>
             <slide>
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
                    </el-card>
                </el-row>
            </slide>
            <slide>
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
                    </el-card>
                </el-row>
            </slide>
        

        </carousel>
    </div>
</template>
