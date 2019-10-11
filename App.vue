<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	.page {
		width: 100%;
		height: 100%;
		background-color: #f7f7f7;
		/* 	position: absolute; */
	}
	.page-fill{
		width: 100%;
		height: 100%;
		background-color: #f7f7f7;
		position: absolute;
	}
	.line-wrap{
		padding:0 20upx;
	}
	.line{
		height: 1px;
		background-color: #F7F7F7;
	}
</style>
