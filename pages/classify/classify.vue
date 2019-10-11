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
			<view class="left">
				<view class="leftTitle">
					事业单位
				</view>
				<!-- :class="" -->
				<block v-for="(er,index) in childarry" :key="index">
					<view class="lefttext" 
					 :class="[{'selectcolor':cursel== index},index%2==0?'color-white':'color-grey']"
					 @tap="changeColor" :data-index="index">
						{{er}}
					</view>
				 </block>
			</view>
			
			<view class="right">
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cursel:0,
				childarry:['全部','园林中心','电业局','公积金中心','档案局','审批中心']
			}
		},
		methods: {
			changeColor(e){
				var me = this;
				var index = e.currentTarget.dataset.index;
				console.info(index);
				me.cursel = index;
			}
		}
	}
</script>

<style>
@import url("classify.css");
</style>
