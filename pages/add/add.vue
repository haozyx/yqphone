<template>
	<view>
		<view class="textwrap">
			<view class="text">分类</view>
			<view class="jilian" :class="cur==0?'':'changcolor'" @tap="showpicker">{{fenlei}}</view>
			<mpvue-picker
				ref="mpvuePicker"
				:mode="mode"
				:deepLength="deepLength"
				@onChange="onChange"
				@onConfirm="onConfirm"
				@onCancel="onCancel"
				:pickerValueArray="pickerValueArray"
			></mpvue-picker>
		</view>
		<view class="textwrap">
			<view class="text">名称</view>
			<input type="text" maxlength="20" class="inputext" placeholder="请输入店铺或者单位名称" placeholder-class="textstyle" />
		</view>
		<view class="textwrap">
			<view class="text">电话</view>
			<input type="text" maxlength="22" class="inputext" placeholder="请输入电话,多个用'|'隔开" placeholder-class="textstyle" />
		</view>
		<view class="textwrap">
			<view class="text">地址</view>
			<input type="text" maxlength="20" class="inputext" placeholder="请输入地址..." placeholder-class="textstyle" />
		</view>
		
		<view class="bottom">
			<button class="button">提交申请</button>
		</view>
		
	</view>
</template>

<script>
import mpvuePicker from 'mpvue-picker';
export default {
	components: {
		mpvuePicker
	},
	data() {
		return {
			mode:'multiLinkageSelector',
			deepLength:2,
			fenlei:'请选择分类',
			cur:0,
			pickerValueArray: [
				{
					label: '飞机票',
					value: 0,
					children: [
						{
							label: '经济舱',
							value: 1
						},
						{
							label: '商务舱',
							value: 2
						}
					]
				},
				{
					label: '火车票',
					value: 1,
					children: [
						{
							label: '卧铺',
							value: 1
						},
						{
							label: '坐票',
							value: 2
						},
						{
							label: '站票',
							value: 3
						}
					]
				},
				{
					label: '汽车票',
					value: 3,
					children: [
						{
							label: '快班',
							value: 1
						},
						{
							label: '普通',
							value: 2
						}
					]
				}
			]
		};
	},
	methods: {
		showpicker(){
			 this.$refs.mpvuePicker.show();
		},
		onConfirm(e) {
		  console.log(e);
		  this.fenlei = e.label;
		  this.cur=1;
		},
		onChange(e) {
		  console.log(e);
		},
		onCancel(e) {
		  console.log(e);
		}

	}
};
</script>

<style>
@import url('add.css');
</style>
