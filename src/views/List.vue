<template>
  <div class="list">
    <ul class="order">
        <li v-for='item in orders' :key="item.id" @click='listOrder(item.id)'>
            <span>{{item.text}}</span>
            <span class="arrow"></span>
        </li>
    </ul>
    <!-- 渲染商品 -->
    <Item v-for='item in deallist' :key='item.id' :data='item'></Item>
    <div class="load-more" @click='showOther' v-show='others.length'>
        <span>查看其他{{others.length}}条团购</span>
        <span class="arrow">
            <span class="arrow white"></span>
        </span>
    </div>
  </div>
</template>
<style type="text/css" lang="scss">
@import './base.scss';
.list {
    .order {
        display: flex;
        background: #fff;
        li  {
            flex: 1;
            height: 30px;
            line-height: 30px;
            text-align: center;
            font-size: 12px;
            border-right: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            &:last-child {
                border-right: none;
            }
            .arrow {
                @include arrow(4px);
                position: relative;
                top: -2px;
                left: 2px;
            }
        }
    }
    .load-more {
        height: 50px;
        line-height: 50px;
        text-align: center;
        background: #fff;
        font-size: 18px;
        color: $navColor;
        .arrow {
            @include arrow(9px, $navColor)
            position: relative;
            top: 0px;
            left: 4px;
            .white {
                position: absolute;
                border-top-color: #fff;
                top: -10px;
                left: -9px;
            }
        }
    }
}
</style>
<script type="text/javascript">
import Item from '../components/item.vue';
export default {
    components: { Item },
    data() {
        return {
            // 排序数据
            orders: [
                { text: '价格排序', id: 'price' },
                { text: '销量排序', id: 'sales' },
                { text: '好评排序', id: 'evaluate' },
                { text: '优惠排序', id: 'discount' }
            ],
            // 数据列表
            list: [],
            others: []
        }
    },
    // 定义计算属性数据
    computed: {
        // 过滤list数组
        deallist() {
            return this.list.filter((item) => item.title.indexOf(this.$store.state.search) >= 0)
        }
    },
    methods: {
        showOther() {
            this.list = this.list.concat(this.others);
            this.others = [];
        },
        // 列表数据排序
        listOrder(id) {
            // 如果是优惠 判断优惠最高的在第一位
            if (id === 'discount') {
                return this.list.sort((a, b) => {
                    // 原价 减去 现价 就是优惠的额度
                    // 降序 优惠力度从大到小
                    return (b.originPrice - b.price) - (a.originPrice - a.price)
                })
            }
            // 对商品的排序，就是对list数组的排序
            this.list.sort((a, b) => {
                return b[id] - a[id]
            })
        }
    },
    created() {
        console.log(this)
        console.log(this.$route)
        this.$http
            .get('/data/list.json?id=' + this.$route.params.id)
            .then(({ data }) => {
                // 存储数据
                this.list = data.slice(0, 3);
                this.others = data.slice(3)
            })
    }
}
</script>
