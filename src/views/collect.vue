<template>
  <div class="hello">
    <header class="bar bar-nav">
      <a class="back_btn" href="#">
        <img src="../assets/images/back_icon_w.png" alt="" width="7">
      </a>
      <h1 class="title wash_title">KXC</h1>
    </header>
    <div class="content" id="Query" data-url="{Query}">
      <ul class="tab_header" id="CollectXg" data-url="{CollectXg}">
        <li class="active">全部收藏</li>
        <li>常去商家</li>
        <li>离我最近</li>
        <li>口碑最优</li>
      </ul>
      <div class="content-block">
        <div class="tab_container">
          <div class="tab_page">
            <ul id="collect_list">
              <li v-for="shop in shops">
                <div name="ALList" class="row shop_block">
                  <div class="col-xs-3 leftcol">
                    <div class="col-xs-12"><img src="../assets/images/shop_list_icon.gif" class="alshopimg"></div>
                  </div>
                  <div class="col-xs-9 rightcol">
                    <div bw_attr="alid" class="jump_part">
                      <div class="col-xs-12 shopName"><em bw_name="deptname">{{shop.deptname}}</em>
                        <span class="distance"><img src="../assets/images/arrow_icon.png" width="10" alt=""><em></em><em class="dis_container">{{shop.distance}}</em>km</span>
                      </div>
                      <div class="col-xs-12 value_line">
                        <img src="http://mw.beswell.com/tpl2/res/img/alshop/star5.png" class="star">
                        <span>月成交 <em>{{shop.mouance}}</em>单</span>
                        <span>￥ <em bw_name="userprice">{{shop.userprice}}</em>元/次</span>
                      </div>
                      <div class="clo-xs-12 text">
                        <em class="blue ccframe" bw_name="ccframe">{{shop.ccframe}}</em>
                      </div>
                      <div class="col-xs-12 discount">
                        <img class="small_icon" src="../assets/images/cut_icon.png" width="18">
                        <img class="small_icon" src="../assets/images/gift_icon.png" width="18">
                      </div>
                      <input type="hidden" bw_val="alid"/>
                      <input type="hidden" bw_attr="l"/>
                      <input type="hidden" bw_attr="d"/>
                    </div>
                  </div>
                  <div class="btn_control">
                    <input type="button" class="btn go_appoint" bw_name="orderstate" value="去预约" >
                    <input type="button" class="btn cancel_collect" value="取消收藏">
                    <input type="hidden" class="deptid"  bw_attr="deptid">
                    <input type="hidden" class="ccorderstate"  bw_attr="ccorderstate">
                    <input type="hidden" class="state"  bw_attr="state">
                    <input type="hidden" class="todayRemain"  bw_attr="todayRemain">
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <input type="hidden" id="shopID">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        shops:[
          {shopid:'001',deptname:'beswellSunshine',distance:'3.2km',mouance:'10',userprice:'22.00',ccframe:'9:00,10:00,12:00'},
          {shopid:'001',deptname:'beswellSunshine',distance:'5.2km',mouance:'6',userprice:'40.00',ccframe:'8:30,15:00,17:30'},
          {shopid:'001',deptname:'beswellSunshine',distance:'56.2km',mouance:'4',userprice:'130.00',ccframe:'9:00,14:00,16:00'},
          {shopid:'001',deptname:'beswellSunshine',distance:'15.2km',mouance:'12',userprice:'30.00',ccframe:'9:00,11:30,12:00'},
          {shopid:'001',deptname:'beswellSunshine',distance:'15.2km',mouance:'12',userprice:'30.00',ccframe:'9:00,11:30,12:00'},
          {shopid:'001',deptname:'beswellSunshine',distance:'15.2km',mouance:'12',userprice:'30.00',ccframe:'9:00,11:30,12:00'},
          {shopid:'001',deptname:'beswellSunshine',distance:'15.2km',mouance:'12',userprice:'30.00',ccframe:'9:00,11:30,12:00'},
        ]
      }
    }
  }
</script>
<style scoped>
  .col-xs-2 {
    width: 22%;
  }
  .col-xs-3 {
    width: 25%;
  }

  .col-xs-9 {
    width: 75%;
  }
  .col-xs-12 {
    width: 100%;
  }
  .search_icon {
    float: right;
  }
  .search_icon img {
    margin-top: 15px;
    margin-right: 10px;
  }
  .tab_page ul {
    padding-left: 10px;
    padding-right: 10px;
  }
  .tab_header {
    width: 100%;
    overflow: hidden;
    display: block;
    border-bottom: 1px solid #D3D3D3;
  }
  .tab_header li {
    width: 25%;
    overflow: hidden;
    margin-top: 10px;
    margin-bottom: 10px;
    float: left;
    text-align: center;
    font-size: 14px;
    color: #303030;
    border-right: 1px solid #d3d3d3;
  }
  .tab_header li:nth-child(4) {
    border-right:none;
  }
  .tab_header li.active {
    color:#FF6537;
  }
  .content-block {
    padding: 0;
    padding-left: 10px;
    margin: 0;
  }
  .shop_block {
    background-color: #fff;
    /*margin: 2px -14px 0px -15px;*/
    border-bottom:1px solid #D3D3D3;
    padding-bottom: 10px;
  }
  .title_font button {
    margin-top: -2px;
  }
  .leftcol .star {
    width: 70%;
    display: block;
    margin: 0;
    margin-bottom: 10px;
  }
  .leftcol tel {
    font-size: 12px;
  }
  .leftcol .order_btn {
    width: 40px;
    height: 20px;
    display: block;
    margin-left: 0;
    margin-bottom: 5px;
  }
  .shopName {
    height: 1.6em;
    line-height: 1.6em;
    color: #000000;
    font-size: 14px;
    font-family: "微软雅黑";
    font-weight: bold;
    margin-top: 12px;
    padding-right: 5px;
  }
  .shopName .simple_info {
    height: 100%;
    line-height: 1.6em;
    float: right;
    font-size: 12px;
    color: #333;
  }
  .shopName .simple_info img {
    float: left;
    margin-top: 4px;
  }
  .shopName .simple_info em {
    float: left;
    margin-right: 3px;
    margin-left: 3px;
    font-weight: normal;
  }
  .shopName>em {
    float: left;
  }
  .shopName .way_icon {
    float: left;
    margin-top: 5px;
    margin-left: 5px;
  }
  .text {
    color: #171717;
    font-size: 10px;
    font-family: "微软雅黑";
    padding-right: 5px;
    margin: 5px 0px 5px 0px;
  }
  .value_line {
    width: 100%;
    overflow: hidden;
    display: block;
    font-size: 10px;
    color: #000000;
  }
  .value_line img {
    width: 60px;
    float: left;
    margin-top: 4px;
    margin-right: 5px;
  }
  .value_line span {
    float: left;
    margin-right: 10px;
    color: #000;
  }
  .value_line span em {
    color: #FF6537;
  }
  .rightcol .text img {
    float: left;
    margin-right: 5px;
    margin-top: 3px;
  }
  .text .blue {
    color: #3385FF;
    word-wrap:break-word;
  }
  .alshopimg {
    width: 60px;
    height: 60px;
    display: block;
    margin: 0 auto;
    margin-top: 15px;
    border: 1px solid #ccc;
  }
  .order {
    margin: 5px 0px 5px 0px;
    width: 30px;
  }

  .small_icon {
    margin-right: 7px;
  }
  .leftcol {
    height: 100%;
  }
  .btn_control {
    width:100%;
    height: 30px;
    float: left;
    /*background-color: #00d7d7;*/
  }
  .btn_control .go_appoint {
    width: 70px;
    line-height: 30px;
    font-size: 14px;
    overflow: hidden;
    float: right;
    margin-left: 10px;
    color: #fff;
    background-color:#FF6537 ;
    text-align: center;
    border-radius: 4px;
    border: 1px solid #FF6537;
  }
  .btn_control .un_appoint {
    background-color:#ccc ;
    border: 1px solid #ccc;
  }
  .btn_control .cancel_collect {
    /*width: 70px;*/
    line-height: 30px;
    font-size: 14px;
    overflow: hidden;
    float: right;
    margin-left: 10px;
    color: #626262;
    background-color:#fff ;
    text-align: center;
    border-radius: 4px;
    border: 1px solid #626262;
  }
  .btn_control .start {
    background: url("../assets/images/focus_icon.png")top center no-repeat;
    background-size: 100%;
  }
  .distance {
    float: right;
    font-weight: normal;
  }
  .distance img {
    margin-right: 3px;
  }
  .distance em {
    font-size: 12px;
    color: #333;
  }

</style>
