<template>
	<div class="home">
	<!-- 定义分类icon -->
	<ul class="type-list">
		<router-link v-for="(item, index) in types" :key='index' tag="li" :to="'/list/' + item.id">
			<img :src="'/img/icon/' + item.img + '.png' "  alt="">
			<p>{{item.text}}</p>
		</router-link>
	</ul>
	<!-- 定义广告 -->
	<ul class="ad">
		<router-link v-for="(item, index) in ad" tag="li" :key="index" :to="'/detail/' + item.id">
			<h3 :class="'color-' + index">{{item.title}}</h3>
			<p>{{item.description}}</p>
			<img :src="'/img/ad/' + item.url" alt="">
		</router-link>
	</ul>
	<!-- 猜你喜欢 -->
	<div class="guess">
		<div class="guess-title">猜你喜欢</div>
		<!-- 父组件向子组件通讯 -->
		<Item v-for="(item, index) in list" :data='item' :key='index'></Item>
	</div>
</div>
</template>
<style type="text/css" lang="scss">
@import './base.scss';
*{
	margin: 0;
	padding: 0;
}
ul {
	list-style: none;
}
.home {
	.type-list {
		@include clearfix;
		background: #fff;
		padding: 5px 0 10px;
		li {
			width: (100%/5);
			float: left;
			text-align: center;
			img{
				width: 60%;
			}
			p {
				font-size: 12px;
				margin: 5px 0 10px;
			}
		}
	}
	.ad {
		margin-top: 10px;
		background: #fff;
		display: flex;
		li {
			flex: 1;
			text-align: center;
			border-right: 1px solid #ccc;
			padding: 15px 0 20px;
			&:last-child {
				border-right: none;
			}
		}
		img {
			width: 60%;
		}
		$i: 0;
		@each $item in red, green, purple {
			.color-#{$i} {
				color: $item;
			}
			// 改变循环变量
			$i: $i + 1;
		}
		h3 {
			font-size: 15px;
		}
		p {
			font-size: 14px;
			color: #666;
			margin: 5px 0;
		}
	}
	.guess {
		margin-top: 10px;
		background: #fff;
		.guess-title {
			margin: 0 10px;
			border-bottom: 1px solid #ccc;
			height: 40px;
			line-height: 40px;
			font-size: 18px;
		}
	}
}
</style>
<script type="text/javascript">
	// 引入组件
import Item from '../components/item.vue';
export default {
	// 注册组件
	components: {
		Item
	},
	data() {
		return {
			types: [
				{ text: '美食', img: '01', id: '1'},
				{ text: '电影', img: '02', id: '2'},
				{ text: '酒店', img: '03', id: '3'},
				{ text: '休闲', img: '04', id: '4'},
				{ text: '外卖', img: '05', id: '5'},
				{ text: 'ktv',  img: '06', id: '6'},
				{ text: '周边游', img: '07', id: '7'},
				{ text: '丽人', img: '08', id: '8'},
				{ text: '小吃', img: '09', id: '9'},
				{ text: '火车票', img: '10', id: '10'}
			],
			//预定义出来
			ad: [],
			list: []
		}
	},
	// 获取数据
	created() {
		this.$http
			.get('/data/home.json')
			.then(({ data }) => {
				this.ad = data.ad;
				this.list = data.list;
				console.log(this)
			})
	}
}
</script>

