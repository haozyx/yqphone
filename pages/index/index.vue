<template>
	<view class="page-fill">
		<view class="head">
			<view class="headwrap">
				<image class="searchimg" src="../../static/img/search.png"></image>
				 <input type="text" class="searchtext" confirm-type="search" 
				 placeholder="搜索..."  maxlength="20" placeholder-class="textstyle"/>
			</view>
		</view>
		<view class="body">
			
			<block v-for="(item,index) in indexarry" :key="index">
				<view class="textwrap" @tap="disdetail">
					<view >{{item}}</view>
					<image src="../../static/img/you.png" class="you"></image>
				</view>
				<view class="line-wrap"> <view class="line"></view> </view>
			</block>
			 
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				indexarry:['政府部门','事业单位','新闻媒体','旅游出行','儿童乐园','酒店住宿','汽车服务','餐饮服务'],
			}
		},
		onLoad() {
			
		},
		methods:{
			disdetail(){
				uni.navigateTo({
					url:'../classify/classify'
				})
			}
		}
	}
</script>

<style>
	@import url("index.css");
</style>
