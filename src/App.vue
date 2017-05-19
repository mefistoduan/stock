<template>
  <div id="app">
    <div class="page page-current">
      <nav class="bar bar-tab">
        <router-link :to="{ path: '/'}" label="首页" class="tab-item external" v-bind:class='{ "active" : isA}'  >
          <span class="icon icon-home" @click="navbar(1)"></span>
          <span class="tab-label">home</span>
        </router-link>
        <router-link :to="{ path: '/tasks'}" label="订单" class="tab-item external " v-bind:class='{ "active" : isB}'>
          <span class="icon icon-menu" @click="navbar(2)"></span>
          <span class="tab-label">tasks</span>
        </router-link>
        <router-link :to="{ path: '/me'}" label="我的" class="tab-item external " v-bind:class='{ "active" : isC}'>
          <span class="icon icon-me" @click="navbar(3)"></span>
          <span class="tab-label">me</span>
        </router-link>
      </nav>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isA:true,
        isB:false,
        isC:false,
      }
    },
    methods:{
        navbar:function (value) {
        this.isA = false,
        this.isB = false,
        this.isC = false
        if(value == 1){
          this.isA = true
        };
        if(value == 2){
          this.isB = true
        };
        if(value == 3){
          this.isC = true
        }
      }
    },
    components: {
    }
  }
</script>
<style>
  .bar-tab , .bar-tab .tab-item:active {
    color:#797979;
  }
  .content-block,.content {
    background-color: #fff;
    font-family: "Microsoft Yahei", "å¾®è½¯é›…é»‘";
  }
  .content-block {
    margin-top: 0.875rem;
  }
  .active .tab-label {
    color: #FF9545;
  }
  .tab-item.active .icon {
    color: #FF9545;
  }
  .back_btn {
    width: 15px;
    height: 100%;
    overflow: hidden;
    float: left;
    position: relative;
    z-index: 20;
    font-size: 1rem;
    line-height: 1.2rem;
  }
  .back_btn img {
    margin-top: 15px;
  }
  .close_btn {
    float: right;
    width: 15px;
    height: 100%;
    overflow: hidden;
    position: relative;
    z-index: 20;
    font-size: 1rem;
    line-height: 1.2rem;
    display: none;
  }
  .close_btn img {
    margin-top: 15px;
  }
  header.bar {
    background-color:#FF9545;
    color: #fff;
    background-image: -moz-linear-gradient( 105deg, rgb(255,101,56) 0%, rgb(255,131,77) 100%);
    background-image: -webkit-linear-gradient( 105deg, rgb(255,101,56) 0%, rgb(255,131,77) 100%);
    background-image: -ms-linear-gradient( 105deg, rgb(255,101,56) 0%, rgb(255,131,77) 100%);

  }
  .wash_title {
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    line-height: 44px;
    word-spacing:8px;
    letter-spacing: 3px;
  }
  .search_icon {
    float: right;
  }
  .search_icon img {
    margin-top: 15px;
    margin-right: 10px;
    position: relative;
    z-index: 20;
    font-size: 1rem;
    line-height: 1.2rem;
  }
  em, i {
    font-style: normal;
  }
  ul,li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  /*åŠ©æ‰‹æ */
  .bar-tab .tab-item .icon {
    width: 28px;
  }

</style>
