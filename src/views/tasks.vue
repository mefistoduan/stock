<template>
  <div class="hello">
  <header class="bar bar-nav">
    <a class="back_btn" href="#">
      <img src="../assets/images/back_icon.png" alt="" width="7">
    </a>
    <h1 class="title wash_title">KXC</h1>
  </header>

  <div class="content"  id="Query" data-url="{Query}">
    <ul class="tab_header">
      <li class="active">全部订单</li>
      <li>待付款 <em>{{ready_state}}</em></li>
      <li>已付款 <em>{{finish_state}}</em></li>
      <li>待评价 <em>{{appraise_state}}</em></li>
    </ul>
    <div class="content-block">
      <div class="tab_container" id="DeleteOrder" data-url="{DeleteOrder}">
        <div class="tab_page infinite-scroll infinite-scroll-bottom" data-distance="20">
          <ul>

            <li v-for="order in orders">
            <div name="ALList" class="row shop_block">
              <div class="col-xs-3 leftcol">
                <div class="col-xs-12">
                  <img src="../assets/images/shop_list_icon.gif" class="alshopimg">
                  </div>
                </div>
              <div class="col-xs-9 rightcol">
                <div class="col-xs-12 shopName"><em bw_name="deptname">{{order.deptname}}</em>
                  <span class="simple_info">
                <em class="uncomplete" bw_name="state">{{order.state | filterFun}}</em>
                </span>
                  </div>
                <div class="col-xs-12 value_line">地址：
                  <span class="address" bw_name="address">{{order.address}}</span>
                  </div>
                <div class="col-xs-12 text order_detail ">
                  <p class="appoint_time">预约时间：<em class="ordertime" bw_name="ordertime">{{order.ordertime}}</em></p>
                  <span><em class="paytext">实付：￥</em><i class="realpay" bw_name="realpay">{{order.realpay}}</i><i class="shouldpay" bw_name="shouldpay">{{order.shouldpay}}</i></span>
                  </div>
                </div>
              <div class="col-xs-12 text order_control" bw_attr="rsid">
                <span  class="gary_btn ">{{order.check_map}}</span>
                <span  class="gary_btn ">{{order.reset_order}}</span>
                <input type="hidden" class="location" l="'+row['l']+'" d="'+row['d']+'"  >
                <input type="hidden" class="orderId"  bw_attr="orderid" value="'+row['orderid']+'">
                <input type="hidden" class="shopid"  bw_attr="shopid" value="'+row['shopid']+'">
                <input type="hidden" class="ccorderstate"  bw_attr="ccorderstate" value="'+row['ccorderstate']+'">
                <input type="hidden" class="ccid"  bw_attr="ccid" value="'+row['ccid']+'">
                <input type="hidden" class="state"  bw_attr="state" value="'+row['state']+'">
                <input type="hidden" class="todayRemain"  bw_attr="todayRemain" value="'+row['todayRemain']+'">
                </div>
              </div>
            </li>

          </ul>
          <input type="hidden" id="items" value="0">
          <!-- 加载提示符 -->
          <div class="infinite-scroll-preloader">
            <div class="preloader"></div>
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
      ready_state:0,
      finish_state:0,
      appraise_state:0,
      orders:[
        {shopid:'001',deptname:'beswellSunshine',address:'Jinan high-tech zone tianchen road 2815  Olympic road east 100 meters ',ordertime:'2017-05-12 17:30',realpay:'10',reset_order:'Reset',check_map:'Map',state:'1'},
        {shopid:'001',deptname:'beswellSunshine',address:'Jinan high-tech zone tianchen road 2815  Olympic road east 100 meters ',ordertime:'2017-05-12 17:30',realpay:'10',reset_order:'Reset',check_map:'Map',state:'2'},
        {shopid:'001',deptname:'beswellSunshine',address:'Jinan high-tech zone tianchen road 2815  Olympic road east 100 meters ',ordertime:'2017-05-12 17:30',realpay:'10',reset_order:'Reset',check_map:'Map',state:'9'},
        {shopid:'001',deptname:'beswellSunshine',address:'Jinan high-tech zone tianchen road 2815  Olympic road east 100 meters ',ordertime:'2017-05-12 17:30',realpay:'10',reset_order:'Reset',check_map:'Map',state:'0'},
        {shopid:'001',deptname:'beswellSunshine',address:'Jinan high-tech zone tianchen road 2815  Olympic road east 100 meters ',ordertime:'2017-05-12 17:30',realpay:'10',reset_order:'Reset',check_map:'Map',state:'0'},
        {shopid:'001',deptname:'beswellSunshine',address:'Jinan high-tech zone tianchen road 2815  Olympic road east 100 meters ',ordertime:'2017-05-12 17:30',realpay:'10',reset_order:'Reset',check_map:'Map',state:'1'},
      ]
    }
  },
  filters: {
    filterFun: function (value) {
        if(value == "0"){
          return "shouldPay";
        }
        if(value == "1"){
          return "complete";
        }
        if(value == "2"){
          return "readyAppraise";
        }
        if(value == "9"){
          return "cancle";
        }
    }
  },
    methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header.bar {
    background-color: #fff !important;
    background-image:-webkit-linear-gradient( 105deg, rgb(255,255,255) 0%, rgb(255,255,255) 100%);;
  }
  .wash_title {
    color: #333;
    font-size: 22px;
  }
  .clear {
    clear: both;
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

  .tab_header {
    width: 100%;
    overflow: hidden;
    display: block;
    border-bottom: 1px solid #D3D3D3;
    background-color: #fff;
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
  .tab_header li em {
    color:#FF6537;
  }
  .content-block {
    margin: 0;
    padding: 0;
  }
  .tab_page ul {
    padding: 0;
    padding-bottom: 1px;
    background-color: #E3E3E3;
  }
  .tab_page ul li {
    overflow: hidden;
    display: block;
    margin-bottom: 8px;
  }
  .shop_block {
    overflow: hidden;
    display: block;
    background-color: #fff;
    margin-left: 0;
  }
  .title_font button {
    margin-top: -2px;
  }
  .shopName {
    height: 1.6em;
    line-height: 1.6em;
    color: #000000;
    font-size: 16px;
    font-family: "微软雅黑";
    margin-top: 12px;
    padding-right: 5px;
  }
  .shopName .simple_info {
    height: 100%;
    line-height: 2em;
    float: right;
    font-size: 14px;
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
  .shopName .simple_info em.complete {
    color: #616161;
  }
  .shopName .simple_info em.uncomplete {
    color: #FF7743;
  }
  .shopName>em {
    float: left;
  }
  .value_line {
    font-size: 12px;
    font-family: "微软雅黑";
    padding-right: 5px;
    margin: 5px 0px 5px 0px;
    overflow: hidden;
    display: block;
    color: #949494;
  }
  .value_line i {
    float: left;
    margin-right: 5px;
    overflow: hidden;
  }
  i.tel_icon {
    width: 16px;
    height: 16px;
    background: url("../assets/images/sm_add02.png")top center no-repeat;
    background-size: 100%;
  }
  i.address_icon {
    width: 16px;
    height: 16px;
    background: url("../assets/images/sm_add01.png")top center no-repeat;
    background-size: 100%;
  }
  .value_line span {
  }
  .text {
    color: #171717;
    font-size: 14px;
    font-family: "微软雅黑";
    padding-right: 5px;
    margin: 5px 0px 5px 0px;
    overflow: hidden;
    display: block;
  }
  .text p.appoint_time {
    margin: 0;
    float: left;
    font-size: 14px;
    /*border: 1px solid #FF7743;*/
    color: #3385FF;
    text-align: left;
    border-radius: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .text span {
    float: right;
    border-radius: 4px;
  }
  .text span i {
    font-weight: bold;
  }
  .col-xs-9.rightcol {
    padding-right: 0.75rem;
  }
  .order_control {
    border-top: 1px solid #E3E3E3;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 0.75rem;
  }
  .order_control em {
    width: 100%;
    height: 100%;
    display: block;
    text-align: center;
    color: #aaa;
  }
  .alshopimg {
    width: 60px;
    display: block;
    margin: 0 auto;
    margin-top: 15px;
  }
  .gary_btn {
    width: 70px;
    height: 30px;
    font-size: 14px;
    overflow: hidden;
    float: right;
    color: #626262;
    text-align: center;
    line-height: 30px;
    border: 1px solid #e3e3e3;
    margin-left: 10px;
  }
  .check_map {
    /*color: #FF6537;*/
    /*border: 1px solid #FF7743;*/
  }
  .orange_btn {
    width: 70px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    overflow: hidden;
    float: right;
    margin-left: 10px;
    color: #FF6537;
    border: 1px solid #FF7743;
    text-align: center;
  }
  .immediate_pay {
    width: 70px;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    overflow: hidden;
    float: right;
    margin-left: 10px;
    /*color: #fff;*/
    /*background-color: #FF7743;*/
    color:#FF7743 ;
    border: 1px solid #FF7743;
    text-align: center;
  }
  .orange_btn {
    /*background-color: #673ab7;*/
    /*color: #fff;*/
  }
  .cancel_repeal_btn {
    border-right: 1px solid #ccc;
  }
  .shopName .simple_info em.uncomplete.state_wait {
    color: #FF7743;
  }
  .shopName .simple_info em.uncomplete.state_payed {
    /*color: #259b24;*/
  }
  .shopName .simple_info em.uncomplete.state_appointe {
    /*color: #673ab7;*/
  }
  .shopName .simple_info em.uncomplete.state_cancle {
    color: #aaa;
  }
  .repeal_btn {
    /*background-color: #e51c23;*/
    /*color: #fff;*/
    /*border: none;*/
  }


</style>
