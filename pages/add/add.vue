<template>
	<view>
		<view class="textwrap">
			<view class="text">分类</view>
			<view class="jilian" :class="cur==0?'':'changcolor'" @tap="showpicker">{{fenlei}}</view>
			<mpvue-picker
				ref="mpvuePicker"
				:mode="mode"
				:deepLength="deepLength"
				@onConfirm="onConfirm"
				:pickerValueArray="pickerValueArray"
			></mpvue-picker>
		</view>
		<view class="textwrap">
			<view class="text">名称</view>
			<input type="text" maxlength="20" v-model="name" class="inputext" placeholder="请输入店铺或者单位名称" placeholder-class="textstyle" />
		</view>
		<view class="textwrap">
			<view class="text">电话</view>
			<input type="text" maxlength="22" v-model="phone" class="inputext" placeholder="请输入电话,多个用'|'隔开" placeholder-class="textstyle" />
		</view>
		<view class="textwrap">
			<view class="text">地址</view>
			<input type="text" maxlength="20" v-model="address" class="inputext" placeholder="请输入地址..." placeholder-class="textstyle" />
		</view>
		<view class="hint-text">
			*请您务必填写真实准确的信息，方便你我他，共同建设美好垣曲。提交后经管理员审核后方可展示。
		</view>
		<view class="bottom">
			<button class="button" @tap="savephonebook">提交申请</button>
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
			parentId:0,
			name:'',
			address:'',
			phone:'',
			pickerValueArray: []
		};
	},
	onLoad() {
		var me = this;
		me.loadclassify();
	},
	methods: {
		savephonebook(){
			var me = this;
			var pb ={};
			pb.parentId = me.parentId;
			pb.name = me.name;
			pb.levelNum = 3;
			pb.address = me.address;
			pb.phone = me.phone;
			pb.status = 0;
			//console.log(pb);
			
			if(me.parentId==0){
				uni.showToast({
					mask:true,
					icon:'none',
					title:"请选择分类"
				});
				return ;
			}
			if(me.name == '' || me.name.length == 0){
				uni.showToast({
					mask:true,
					icon:"none",
					title:"请输入名称"
				});
				return ;
			}
			if(me.phone == '' || me.phone.length == 0){
				uni.showToast({
					mask:true,
					icon:"none",
					title:"请输入电话"
				});
				return ;
			}
			if(me.address == '' || me.address.length == 0){
				uni.showToast({
					mask:true,
					icon:"none",
					title:"请输入地址"
				});
				return ;
			}
			
			uni.request({
				url:me.websiteUrl  +  'savephonebookinfo',
				method: 'POST',
				data: pb,
				success: res => {
					if(res.data.code==200){
						uni.showToast({
							mask:true,
							title:"添加成功,感谢您的反馈"
						});
						setTimeout(function() {
							uni.redirectTo({
								url: '../index/index'
							});
						}, 3000);
					}
				},
				fail: () => {},
				complete: () => {}
			});
			
		},
		loadclassify(){
			var me = this;
			uni.request({
				url:me.websiteUrl + 'getallclassify',
				method: 'GET',
				success: res => {
					// console.log(res);
					if(res.data.code==200){
						me.pickerValueArray = res.data.list;
					}
				},
				fail: () => {},
				complete: () => {}
			});
		},
		showpicker(){
			 this.$refs.mpvuePicker.show();
		},
		onConfirm(e) {
		 // console.log(e);
		  this.fenlei = e.label;
		  this.cur=1;
		  this.parentId = e.value[1];
		}

	}
};
</script>

<style>
@import url('add.css');
</style>
