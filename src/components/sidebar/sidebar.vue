<template>
  <div class="sidebar-box" :class="{'show-sidebar':showSidebar}">
    <div class="swiper-slide">
      <!--侧边栏头部-->
      <div class="sidebar-header">
          侧边栏
      </div>
      <!--侧边栏列表-->
      <div class="sidebar-list">
        <ul class="menu-fixed-list" style="display: block;">
          <li v-for="city in citys" class="fore01">
              {{city.name}}
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'egd-sidebar',
    componentName: 'egd-sidebar',
    props: ['showSidebar'],
    data () {
      return {
        citys: [
            {name:'jinan'},
            {name:'qingdao'},
            {name:'weifang'},
            {name:'zibo'},
            {name:'changyi'},
        ]
      }
    }
  }
</script>

<style rel="stylesheet/stylus" scoped>
  ul,li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .show-sidebar {
    transform: translateX(240px);
    -webkit-transform: translateX(240px);
  }

  .sidebar-box{
    position: fixed;
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
    height: 100%;
    overflow: auto;
    width: 240px;
    left: -240px;
    z-index: 99;
    top: 0;
    bottom: 0;
    transition: all .3s ease;
    background-color:#fff;
  }

    .show-sidebar{
      transform: translateX(240px);
      -webkit-transform: translateX(240px);
    }

    .swiper-slide{
      height: auto;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }

  .sidebar-box .sidebar-header {
    padding: 15px;
    background: #FF6537;
    color: #fff;
    font-weight: bold;
  }

  .sidebar-list {
    padding-bottom: 20px;
    background-color: #f9f9f9;
  }
  .menu-fixed-list{
    width: 100%;
    overflow: hidden;
  }

  .menu-fixed-list li {
    width: 100%;
    overflow: hidden;
    display: block;
    font-size: 14px;
    text-align: center;
    padding-top: 5px;
    padding-bottom: 5px;
    color: #FF6537;
  }
  .menu-fixed-list li:hover {
    width:  100%;
    height: 100%;
    display: block;
    background-color: #FF6537;
    text-align: center;
    color:#fff;
  }
</style>

