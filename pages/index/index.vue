<template>
	<view class="page-fill">
		<search @search="searchthreeclassify"></search>
		
		<view class="body">
			
			<block v-for="(item,index) in indexarry" :key="index">
				<view class="textwrap" @tap="disdetail"   :data-id="item.id">
					<view >{{item.name}}</view>
					<image src="../../static/img/you.png" class="you"></image>
				</view>
				<view class="line-wrap"> <view class="line"></view> </view>
			</block>
			 
		</view>
	</view>
</template>

<script>
	import search from '../../components/search/search.vue';
	export default{
		data(){
			return {
				indexarry:[],
			}
		},
		components: {
			search
		},
		onLoad() {
			//获取一级分类
			this.getoneclassify();
		},
		methods:{
			searchthreeclassify(e){ 
				var name =e;
				uni.navigateTo({
					url:'../search/search?name='+e
				})
			},
			disdetail(e){
				var id = e.currentTarget.dataset.id;
				uni.navigateTo({
					url:'../classify/classify?id='+id
				})
			},
			getoneclassify(){
				var me = this;
				uni.request({
					url:me.websiteUrl + 'getoneclassify',
					method:'GET',
					success(res) {
						if(res.data.code ==200){
							me.indexarry = res.data.list;
						}
					},fail(e) {
						//console.log(e);
					}
				})
			}
		}
	}
</script>

<style>
	@import url("index.css");
</style>
