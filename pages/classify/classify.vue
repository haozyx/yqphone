<template>
	<view class="page-fill">
		
		<view class="zuo" @tap="backtoindex">
			<image class="zuoimg" src="../../static/img/zuo.png"></image>
		</view>
		<search @search="searchthreeclassify"></search>
		
		<view class="body">
			<view class="left">
				<view class="leftTitle">
					事业单位
				</view>
				<block v-for="(er,index) in childarry" :key="index">
					<view class="lefttext" 
					 :class="[{'selectcolor':cursel== index},index%2==0?'color-white':'color-grey']"
					 @tap="changeColor" :data-index="index" :data-id="er.id">
						{{er.name}}
					</view>
				 </block>
			</view>
			
			<view class="right">
				<scroll-view scroll-y="true" class="right-scroll">
					<block v-for="(value,key) in  rightarry" :key="key">
						<view class="first-str">
						 {{key}}
						</view>
						<view class="righttext" v-for="(item,index) in value" :key="index" @tap="viewdetail" :data-id="item.id">
							{{item.name}}
						</view>
					</block>
					
					<view class="nodata" v-if="disno">
						<view class="bigtext">还没有录入电话哦</view>
						<view class="smalltext">点击右下角的+可添加电话</view>
						<image src="../../static/img/nodata.png" class="nodataimg"></image>
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
	import search from '../../components/search/search.vue';
	export default {
		components: {
			search
		},
		data() {
			return {
				cursel:0,
				childarry:[],
				rightarry:{},
				curclick:undefined,
				disno:false
			}
		},
		onLoad(e) {
			var me = this;
			me.gettwoclassify(e.id);
		},
		onBackPress(e) {
			 
		},
		methods: {
			backtoindex(){
				uni.navigateBack({
					delta: 1
				});
			},
			searchthreeclassify(e){ 
				var name =e;
				uni.navigateTo({
					url:'../search/search?name='+e
				})
			},
			gettwoclassify(id){
				var me = this;
				uni.request({
					url: me.websiteUrl+'gettwoclassify',
					method: 'GET',
					data: {pid:id},
					success: res => {
						if(res.data.code ==200){
							me.childarry = res.data.list;
							//第一次进来默认加载全部
							me.curclick = id;
							me.getthreeclassify(id);
						}
						
					},
					fail: () => {},
					complete: () => {}
				});
			},
			addinfo(){
				uni.navigateTo({
					url:'../add/add'
				})
			
			},
			viewdetail(e){
				var id = e.currentTarget.dataset.id;
				uni.navigateTo({
					url:'../detail/detail?id='+id
				})
			},
			changeColor(e){
				var me = this;
				var index = e.currentTarget.dataset.index;
				me.cursel = index;
				 
				var pid = e.currentTarget.dataset.id;
				//多次点击多次请求,比较费服务器资源,如果节点没有发生改变 多次点击算一次
				if(!me.curclick){
					me.curclick = pid;
				}else if(me.curclick == pid){
					return;
				}
				me.curclick = pid;
				me.rightarry=[];
				me.getthreeclassify(pid);
			},
			getthreeclassify(pid){
				var me = this;
				
				uni.showLoading({
					mask:true,
					title:"努力加载中"
				});
				
				uni.request({
					url: me.websiteUrl + 'getallthreeclassify',
					method: 'GET',
					data: {pid:pid},
					success: res => {
						uni.hideLoading();
						if(res.data.code ==200){
							
							var threearry = res.data.list;
							if(threearry){
								me.disno = false;
								me.rightarry = res.data.list;
							}else{
								me.disno = true;
							}
						
						}
						 
					},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
@import url("classify.css");
</style>
