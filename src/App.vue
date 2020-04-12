<template>
<div class="app">
    <div class="header">
        <div class="go-back" @click='goBack'>
          <span class="arrow"></span>
          <span class="arrow left"></span>
        </div>
        <h1>吃货的平台</h1>
        <div class="login">登录</div>
    </div>
    <div class="search" v-show="$route.fullPath.indexOf('/detail/') < 0">
        <input
            type="text"
            v-model="msg"
            @keyup.enter="showSearchResult"
            placeholder="请输入搜索关键词">
    </div>
    <router-view/>
<!--     {{$store.state.search}} -->
</div>
</template>
<style lang="scss">
@import './base.scss';
* {
    margin: 0;
    padding: 0;
}
body, html {
    background: #efefef;
}
.app {
    .header {
        height: 50px;
        line-height: 50px;
        font-size: 14px;
        background: $navColor;
        color: #fff;
        display: flex;
        h1 {
            flex: 1;
            text-align: center;
        }
        .login,
        .go-back {
            width: 50px;
        }
        .go-back {
            position: relative;
        }
        .arrow {
            position: absolute;
            top: 17px;
            left: 13px;
            @include arrow(10px, #fff, right);
            &.left {
                left: 15px;
                border-right-color: $navColor;
            }
        }
    }
    .search {
        display: flex;
        background: #fff;
        padding: 10px 15px;
        input {
            flex: 1;
            padding: 10px 20px;
            border-radius: 17px;
            outline: none;
            border: none;
            background: #efefef;
            font-size: 12px;
        }
    }
}
</style>
<script type="text/javascript">
    export default {
        data() {
           return {
             msg: ''
           }
        },
        methods: {
            // 将数据存储在store中
            showSearchResult() {
                // 向store发送消息
                this.$store.commit('changeSearch', this.msg)
                this.msg = ''
            },
            goBack() {
                history.go(-1)
            }
        }
    }
</script>

