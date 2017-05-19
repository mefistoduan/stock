<template>
  <div class="hello">
    <header class="bar bar-nav">
            <span class="back_btn">
                <img src="../assets/images/back_icon_w.png" alt="" width="7">
            </span>
      <h1 class="title wash_title">预约时间</h1>
      <a class="close_btn" href="#">
        <img src="../assets/images/close_icon_w.png" alt="" width="14">
      </a>
    </header>
    <div class="content">
      <div class="content-block">
        <div id="rs_data" class="info_container" data-url="/?ctl=ajax&amp;mod=yyxc&amp;act=appoint_cx" data-shopid="3">
          <img class="shop_img" src="../assets/images/shop_list_icon.gif" alt="">
          <ul v-for="shop in shops">
            <li>
              <h5 bw_name="deptname">{{shop.deptname}}</h5>
              <span bw_name="deptid" style="display: none"></span>
              <s>{{shop.serve}}</s>
            </li>
            <li>
              <img id="icon01" src="../assets/images/appoint/money_icon.png" alt="" width="14">
              <span><em class="orange" bw_name="userprice">{{shop.userprice}}</em>元/次</span>
            </li>
            <li>
              <img id="icon02" src="../assets/images/appoint/calendar_icon.png" alt="" width="14">
              <span id="appoint_date">{{shop.appoint_date}}</span><span class="blue">{{weekday}}</span>
            </li>
            <li>
              <img id="icon03" src="../assets/images/appoint/car.png" alt="" width="14">
              <input type="text" class="car_select" id="picker" readonly="" :value="shop.plate">
              <img class="car_select_icon" src="../assets/images/appoint/hide_panel.gif" width="15" alt="">
              <a href="#router3" class="hide_add_panel">点击添加车牌</a>
            </li>
          </ul>
          <div class="control">
                        <span class="collect_btn" id="CollectTj" data-url="">
                             <img id="icon_collect" src="../assets/images/appoint/icon_collect.gif" alt="" width="18">
                        </span>
            <a class="map_btn" l="117.16" d="36.650002">
              <img id="icon_map" src="../assets/images/appoint/icon_map.gif" alt="" width="18">
              <em>查看地图</em>
            </a>
          </div>
        </div>
        <div class="tab">
          <span class="active">预约</span>
          <span>评价</span>
          <span>详情</span>
        </div>
        <div class="tab_page  time_select_container active">
          <div class="part part1">
            <ul><li v-for="appoint in appoints" class="disable" :class="{can_choice:isItemSelected(appoint.state,appoint.ccframeremain) }"><em bw_name="frame" :state="appoint.state" ccframeremain="appoint.ccframeremain">{{appoint.frame}}</em></li></ul>
          </div>
          <input type="hidden" id="appoint_time" value="">
          <div id="submit_appoint_btn" class="open" data-url="/?ctl=ajax&amp;mod=yyxc&amp;act=appoint_tj">确认预约</div>
        </div>
        <div class="tab_page ">
          <div class="appraise">
            <div class="grade">
              <h5>4.9</h5>
              <s>总评分</s>
            </div>
            <div class="start">
              <img src="../assets/images/star5.png" alt="">
            </div>
            <div class="all_appraise">
              <a href="http://app/?ctl=yyxc&amp;mod=yyxc&amp;act=sum_comm&amp;shopid=3" class="external">全部评价</a>
            </div>
          </div>
          <ul class="comment_list" id="ComQuery" data-url="/?ctl=ajax&amp;mod=index&amp;act=indexquery">
            <li><div class="cmt_lt"><img src="../assets/images/head_icon.jpg" alt="" class="comment_head"></div><div class="cmt_rt"><span class="comment_name"><i bw_name="usercode">apptest</i></span><div class="cmt_info"><em>打分</em><img src="../assets/images/star3.png" alt="" bw_src="score" class="cmt_start" width="60"><span><i bw_name="commenttime">2017-02-11</i></span></div><div class="cmt_text"><p><i bw_name="comment">一般情况</i></p></div></div></li></ul>
        </div>
        <div class="tab_page ">
          <div class="information">
            <ul>
              <li>
                <img src="../assets/images/appoint/info_icon01.png" alt="">
                <span bw_name="linkphone">21239281232</span>
              </li>
              <li>
                <img src="../assets/images/appoint/info_icon02.png" alt="">
                <span bw_name="address">ceshidizhi</span>
              </li>
              <li>
                <img src="../assets/images/appoint/info_icon03.png" alt="">
                <span>营业时间：<em bw_name="ccframe">08:00,11:00,13:00,16:00,16:30,17:00,17:30,18:00,18:30,19:00</em></span>
              </li>
              <li>
                <img src="../assets/images/appoint/info_icon04.png" alt="">
                <span>商家环境</span>
                <p class="pb-standalone" pic1="shop0006.png" pic2="shop0006.png" pic3="shop0006.png">
                  <img src="../assets/images/shop/shop0001.png" class="infor_img" alt="">
                  <img src="../assets/images/mine_icon01.fw.png" class="arrows" alt="">
                </p>
              </li>
            </ul>
          </div>
          <div class="reward">
            <div class="discount">
              <img class="small_icon show_act" src="../assets/images/cut_icon.png" width="18" style="display: inline;">
              <span bw_name="jian">周一到周四减免两元</span>
            </div>
            <div class="discount">
              <img class="small_icon show_act" src="../assets/images/gift_icon.png" width="18" style="display: inline;">
              <span bw_name="zeng">赠送轮胎检查一次</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
          weekday:'星期二',
          shops:[
              {deptname:'TianChen',serve:'Beauty/repair/maintenance/tire/car decoration',userprice:'50',appoint_date:'2017/07/14',plate:'鲁A7894561'}
              ],
          appoints:[
              {frame:'08:00',state:'1',ccframeremain:'1'},
              {frame:'09:00',state:'1',ccframeremain:'1'},
              {frame:'10:00',state:'0',ccframeremain:'1'},
              {frame:'11:00',state:'1',ccframeremain:'1'},
              {frame:'12:00',state:'1',ccframeremain:'0'},
              {frame:'13:00',state:'1',ccframeremain:'1'},
              {frame:'14:00',state:'1',ccframeremain:'1'},
              {frame:'15:00',state:'1',ccframeremain:'1'},
            ]
      }
    },
    filters:{

    },
    methods:{
      isItemSelected:function (state,ccframeremain) {
          if(state == 1 && ccframeremain == 1){
               return true
          }
          else
          {
            return false
          }
      }

    }
  }
</script>
<style scoped>
  .content-block {
    padding:0.2rem;
    padding-left: 0;
    padding-right: 0;
  }
  .info_container {
    overflow: hidden;
    display: block;
    margin: 0 auto;
    padding-left: 5px;
    padding-bottom: 20px;
  }
  .info_container h5 {
    margin: 0;
  }
  .info_container ul {
    width: 67%;
    float: left;
    margin-left: 10px;
  }
  .info_container ul h5 {
    font-weight: normal;
    color: #333;
    font-size: 20px;
  }
  .info_container li s {
    text-decoration: none;
    font-size: 12px;
  }
  .info_container li {
    width: 100%;
    overflow: hidden;
    display: block;
    font-size: 14px;
    color: #5F5F5F;
  }
  .info_container li img {
    float: left;
    margin-top: 0.6em;
  }
  .info_container li em {
    line-height: 2em;
  }
  .info_container .control {
    width: 10%;
    float: left;
    overflow: hidden;
  }
  .control span#CollectTj {
    width: 100%;
    height: 70px;
    padding-top: 10px;
    display: block;
    overflow: hidden;
  }

  #CollectTj img {
    display: block;
    margin: 0 auto;
  }
  .control .map_btn {
    width: 100%;
    height: 60px;
    display: block;
    overflow: hidden;
  }

  .map_btn img {
    display: block;
    margin: 0 auto;
  }
  .map_btn em {
    width: 100%;
    display: block;
    overflow: hidden;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    margin-top: 5px;
  }
  li .orange {
    color: #FF9545;
  }
  li #appoint_date {
    color: #3385FF;
  }
  .info_container li span {
    overflow: hidden;
    float: left;
    height: 100%;
    line-height: 2em;
    margin-left: 5px;
    font-size: 14px;
  }
  .time_select_container {
    width: 100%;
    overflow: hidden;
    display: block;
    margin: 0 auto;
    margin-top: 5px;
  }
  .time_select_container .part {
    display: block;
    margin-top: 5px;
  }
  .time_select_container .part span {
    width: 100%;
    height:1.2rem;
    line-height: 0.875rem;
    overflow: hidden;
    display: block;
    font-size: 14px;
    text-align: center;
    color:#FF7743;
    /*background: url("../images/appoint_bg.fw.png")top center no-repeat;*/
    background-size: 100%;
  }

  .back_appoint {
    width: 15px;
    height: 100%;
    overflow: hidden;
    float: left;
    position: relative;
    z-index: 20;
    font-size: 1rem;
    line-height: 1.2rem;
  }
  .back_appoint img {
    width: 8px;
    height: 15px;
    overflow: hidden;
    display: block;
    margin-top: 15px;
  }
  .shop_img {
    width: 60px;
    height: 60px;
    border: 1px solid #ccc;
    float: left;
  }

  .part ul {
    width: 100%;
    height: auto;
    padding-left: 10px;
    padding-right: 10px;
    overflow: hidden;
    /*overflow: visible;*/
    display: block;
    margin-bottom: 5px;
  }
  .part ul li {
    width: 30%;
    height: 27px;
    float: left;
    margin-left: 3px;
    margin-right: 3px;
    margin-bottom: 5px;
    border-radius: 4px;
    text-align: center;
    font-size: 14px;
    line-height: 27px;
  }
  .part ul li.disable {
    background-color: #D9D9D9;
    color: #7C7C7C;
  }
  .part ul li.can_choice {
    background-color: #53C2D7;
    color: #fff;
  }
  .part ul li.can_choice.checked {
    background-color: #FF9545;
    color: #fff;
  }
  #submit_appoint_btn {
    width: 95%;
    height: 36px;
    margin: 0 auto;
    overflow: hidden;
    display: block;
    line-height: 36px;
    background-color:#FF9545;
    color: #fff;
    font-size: 18px;
    text-align: center;
    border-width: 0.5px;
    border-color: rgb( 245, 99, 56 );
    border-style: solid;
    border-radius: 7px;
    background-image: -moz-linear-gradient( 105deg, rgb(255,101,56) 0%, rgb(255,131,77) 100%);
    background-image: -webkit-linear-gradient( 105deg, rgb(255,101,56) 0%, rgb(255,131,77) 100%);
    background-image: -ms-linear-gradient( 105deg, rgb(255,101,56) 0%, rgb(255,131,77) 100%);
  }
  .tab {
    width: 100%;
    height: 40px;
    display: block;
    margin: 0 auto;
    border-top:3px solid #EDEDED ;
    margin-bottom: 10px;
  }
  .tab span {
    width: 33%;
    float: left;
    color: #454545;
    font-size: 16px;
    text-align: center;
    line-height: 40px;
    padding-bottom: 1px;
    border-bottom: 1px solid #D9D9D9;
  }
  .tab span.active {
    color: #FF9545;
    padding-bottom: 0;
    border-bottom: 2px solid #FF9545;
  }
  .center.sliding {
    color: #fff;
  }
  /*comment start*/
  .appraise {
    width: 100%;
    overflow: hidden;
    display: block;
  }
  .appraise>div {
    width: 33%;
    height: 60px;
    overflow: hidden;
    float: left;
    text-align: center;
  }
  .appraise .grade h5 {
    height: 24px;
    text-align: center;
    font-size: 24px;
    color: #FF6537;
  }
  .appraise .start img {
    width: 100%;
    margin-top: 16px;
  }
  .appraise .all_appraise a {
    width: 100%;
    height: 100%;
    display: block;
    font-size: 14px;
    color: #FF6537;
    line-height: 50px;
  }
  .appraise .grade s {
    font-size: 12px;
    text-decoration: none;
  }
  .comment_list {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    margin-right: 10px;
    overflow: hidden;
    display: block;

  }
  .comment_list li {
    width: 100%;
    float: left;
    padding-top: 10px;
    border-bottom: 1px solid #E3E3E3;
    overflow: hidden;

  }
  .comment_list li .cmt_lt {
    width: 20%;
    float: left;
    overflow: hidden;
  }
  .cmt_lt img.comment_head {
    border-radius: 25px;
  }
  .comment_list li .cmt_rt {
    width: 70%;
    float: left;
    padding-right: 10px;
    overflow: hidden;
  }
  .cmt_lt .comment_head {
    width: 42px;
    overflow: hidden;
    display: block;
  }
  .cmt_rt .comment_name {
    font-weight: bold;
    color: #333;
  }
  .cmt_rt .cmt_info em {
    float: left;
    height: 25px;
    font-size: 12px;
    line-height: 25px;
    margin-right: 5px;
  }
  .cmt_rt .cmt_info img {
    float: left;
    margin-top: 7px;
  }
  .cmt_rt .cmt_info span {
    height: 25px;
    float: right;
    font-size: 12px;
    line-height: 25px;
  }
  .cmt_rt .cmt_text {
    width: 100%;
    color: #333;
    overflow: hidden;
  }
  .cmt_rt .cmt_text p {
    width: 100%;
    overflow: hidden;
    float: left;
    padding: 0;
    font-size: 12px;
  }
  /*comment end*/

  /*information start*/
  .tab_page .information {
    width: 95%;
    display: block;
    margin: 0 auto;
  }
  .information ul {
    width: 100%;
    display: block;
    margin: 0 auto;
  }
  .information li {
    width: 100%;
    height: 2.2rem;
    border-bottom: 1px solid #ccc;
    color: #454545;
    font-size: 14px;
  }
  .information li:nth-child(4){
    border-bottom: none;
  }
  .information li img {
    width: 16px;
    margin-left: 10px;
    margin-top: 15px;
    margin-right: 5px;
    float: left;
  }
  .information li span {
    width: 80%;
    height: 2.2rem;
    float: left;
    line-height: 2.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .information li:nth-child(4) span {
    width: 50%;
  }
  .information li p {
    float: right;
    padding: 0;
    margin: 0;
  }
  .information p .arrows {
    width: 10px;
  }
  .information p .infor_img {
    width: 25px;
    margin-top: 12px;
    border-radius: 5px;
  }
  .reward {
    width: 100%;
    overflow: hidden;
    display: block;
    border-top: 10px solid #EDEDED;
    border-bottom: 10px solid #EDEDED;
    padding-top: 20px;
  }
  .reward .discount {
    width: 90%;
    height: 1.4rem;
    overflow: hidden;
    display: block;
    margin: 0 auto;
  }
  .discount .small_icon {
    float: left;
  }
  .discount span {
    font-size: 12px;
    line-height: 20px;
    float: left;
    margin-left: 10px;
  }
  /*information end*/
  /*map*/
  #gaode_map {
    height:400px;
    margin-top: 10px;
  }

  .amap-geolocation-con {
    bottom: 30px!important;
    right: 70px!important;
  }
  .amap-touch-toolbar .amap-zoomcontrol {
    left: 0!important;
  }
  #panel {
    position: relative;
    background-color: white;
    max-height: 100%;
    top: 10px;
    width: 100%;
    height: 200px;
    overflow: scroll;
    margin-bottom: 20px;
  }
  .planTitle p .blue {
    display: none;
  }
  .plan-nobus {
    display: block!important;
  }





  .picker-modal .bar .title {
    color: #fff;
  }
  .tab_page {
    display: none;
  }
  .tab_page.active {
    display: block;
  }
  /*popup*/
  .popup {
    top:40%;
    width: 90%;
    left: 5%;
    height: 100px;
    border-radius: 4px;
    font-size: 14px;
  }
  .popup p {
    width: 100%;
    padding: 0;
    margin: 0;
    text-align: center;
    color: #333;
    padding-top: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
  }
  .popup a {
    width: 100%;
    overflow: hidden;
    display: block;
    text-align: center;
    padding-top: 10px;
  }
  .car_select {
    width: 40%;
    height: 26px;
    border: none;
    float: left;
    padding-left: 5px;
    font-weight: bold;
    border: none;
    font-family: Verdana,simsun;
    color: #3385FF;
  }
  #icon03 {
    margin-top: 0.5em;
  }
  .car_select_icon {
    margin-top: 10px!important;
  }
  .popup-first {
    height: 122px;
  }
  .popup-first ul {
    width: 80%;
    margin: 0;
    padding: 0;
    padding-top: 10px;
    margin: 0 auto;
    display: block;
    overflow: hidden;
  }
  .popup-first ul li {
    width: 100%;
    text-align: center;
    overflow: hidden;
    display: block;
  }
  .popup-first p {
    padding: 3px;
  }
  .popup-first a {
    width: 49%;
    float: left;
    overflow: hidden;
    text-align: center;
    padding-top: 10px;
  }
  .popup-first a:nth-child(1) {
    border: 1px solid #ccc;
  }
  .picker-columns header.bar {
    background-color: #fff;
    color: #333;
  }
  .hide_add_panel {
    height: 100%;
    line-height: 25px;
    float: left;
    margin-left: 10px;
    display: none;
  }
  .car_btn_container {
    padding-top: 10px;
  }
  .car_btn_container .half_lt_btn {
    width: 48%;
    float: left;
    border: none;
    border-radius: 4px;
    text-align: center;
  }

  .car_btn_container .half_rt_btn {
    width: 48%;
    float: right;
    border: none;
    border-radius: 4px;

  }

  .gary_btn {
    background-color: #ccc;
    color: #fff;
  }
  .orange_btn {
    color: #fff;
    background-color: #FF7743;
  }

  li.white {
    overflow: hidden;background-color: #fff;
    padding-left: 10px;
  }
  .item-input .valid_btn {
    width: 35%!important;
    height: 25px;
    float: right;
    margin-top: 5px;
    padding: 0;
    text-indent: 0;
    font-size: 12px;
    text-align: center;
    line-height: 25px;
    background-color: #FF7743;
    color: #fff;
  }
  .item-title {
    height: 35px;
    float: left;
    line-height: 35px;
    color: #7D7D7D;
    margin-right: 10px;
  }
  .item-input.short {
    width: 55%;
  }
  .item-input.middle {
    width: 63%;
  }
  .hide {
    display: none;
  }
  .un_receive_message {
    width: 100%;
    display: block;
    overflow: hidden;
    margin-top: 10px;
    text-align: center;
    font-size: 12px;
    color: #FF7743;
  }

  /*响应式兼容*/
  /*iPhone 5*/
  @media only screen and (max-width: 320px) {
  }
  /*iPhone 6*/
  @media only screen and  (min-width: 321px)  and (max-width: 375px) {
    .info_container ul{
      width: 63%;
    }
    .info_container .control{
      width: 14%;
    }
  }
  /*iPhone 6P*/
  @media only screen  and (max-width: 376px) and (min-width: 414px) {
    .part ul li {
      margin-right: 7px;
    }
    .info_container ul{
      width: 61%;
    }
    .info_container .control{
      width: 16%;
    }
  }
  /*iPhone 6se*/
  @media only screen  and (max-width: 416px) and (min-width: 414px) {
    .part ul li {
      margin-right: 7px;
    }
    .info_container ul{
      width: 61%;
    }
    .info_container .control{
      width: 16%;
    }
  }

</style>
