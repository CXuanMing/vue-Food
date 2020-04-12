<template>
<div class="item">
    <router-link class="item-container" tag="div" :to="'/detail/' + data.id">
        <img :src="'/img/list/' + data.img" alt="">
        <div class="content">
            <h3>{{data.title}}</h3>
            <p>
                <span class="price">{{data.price}}元</span>
                <span class="orgin-price">门市价:{{data.originPrice}}</span>
                <span class="sales">销量{{data.sales}}</span>
            </p>
        </div>
    </router-link>
</div>
</template>
<style type="text/css" lang="scss">
@import './base.scss';
.item {
    background: #fff;
    .item-container {
        padding: 10px 0;
        margin: 0 10px;
        border-bottom: 1px solid #ccc;
        display: flex;
        img {
            width: 100px;
            height: 60.5px;
        }
        .content {
            flex: 1;
            padding-left: 10px;
            h3 {
                height: 44px;
                font-size: 15px;
            }
            p {
                font-size: 12px;
            }
            .price {
                color: $navColor;
                margin-right: 4px;
            }
            .sales {
                float: right;
            }
        }
    }
}
</style>
<script type="text/javascript">
export default {
    props: ['data']
}
</script>

