<template>
	<view class="page">
		<view class="title">
			
			小王百货超市
			
		</view>
		<view class="textwrap" >
			<view >电话：15120034501 </view>
			<image src="../../static/img/you.png" class="you"></image>
		</view>
		<view class="line-wrap"> <view class="line"></view> </view>
		<view class="textwrap" >
			<view >地址：山西省运城市垣曲县 </view>
			<image src="../../static/img/you.png" class="you"></image>
		</view>
		<view class="line-wrap"> <view class="line"></view> </view>
		
		<!-- 轮播图 start -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="carousel">
			<swiper-item v-for="(bimg,index) in bannerimgarry" :key="index">
				<image :src="bimg" class="carousel"></image>
			</swiper-item>
		 
		</swiper>
		<!-- 轮播图end -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bannerimgarry:['../../static/img/ad1.jpg','../../static/img/ad1.jpg','../../static/img/ad1.jpg']
			}
		},
		methods: {
			
		}
	}
</script>
 
<style>
@import url("detail.css");
</style>
