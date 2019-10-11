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
				<block v-for="(er,index) in childarry" :key="index">
					<view class="lefttext" 
					 :class="[{'selectcolor':cursel== index},index%2==0?'color-white':'color-grey']"
					 @tap="changeColor" :data-index="index">
						{{er}}
					</view>
				 </block>
			</view>
			
			<view class="right">
				<scroll-view scroll-y="true" class="right-scroll">
					<view class="righttext" v-for="(item,index) in rightarry" :key="index" @tap="viewdetail">
						{{item}}
					</view>
					
				</scroll-view>
				
			</view>
		</view>
		
		<view class="add" @tap="addinfo">
			<image class="addimg" src="../../static/img/jia.png"></image>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cursel:0,
				childarry:['全部','园林中心','电业局','公积金中心','档案局','审批中心'],
				rightarry:['小明洗脚城','和哈','百货超市','鸡蛋炒西红柿'],
			}
		},
		methods: {
			addinfo(){
				uni.navigateTo({
					url:'../add/add'
				})
			
			},
			viewdetail(){
				uni.navigateTo({
					url:'../detail/detail'
				})
			},
			changeColor(e){
				var me = this;
				var index = e.currentTarget.dataset.index;
				me.cursel = index;
			}
		}
	}
</script>

<style>
@import url("classify.css");
</style>
