<template>
	<view class="page">
		<image  class="indeximg" src="../../static/img/yindao.png"></image>
		<button type="default" class="button" @tap="toindex">点击进入</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toindex(){
				uni.navigateTo({
					url:'/pages/index/index'
				})
			}
		}
	}
</script>

<style>
@import url("indeximg.css");
</style>
