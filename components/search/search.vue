<template name="search">
	<view class="head">
		<view class="headwrap">
			<image class="searchimg" src="../../static/img/search.png"></image>
			 <input type="text" class="searchtext" confirm-type="search" 
			 @confirm="searchcontent" v-model="searchtext"
			 placeholder="搜索..."  maxlength="20" placeholder-class="textstyle"/>
		</view>
	</view>
</template>

<script>
	export default {
		name:"search",
		data() {
			return {
				searchtext:''
			};
		},methods: {
			searchcontent() {
				var me = this;
				me.$emit('search',me.searchtext);
			}
		}
	}
</script>

<style>
@import url("search.css");
</style>
