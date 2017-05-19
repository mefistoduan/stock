<template>
  <div class="hello">
      <!-- 单个page ,第一个.page默认被展示-->
        <!-- 标题栏 -->
        <header class="bar bar-nav">
          <a class="back_btn" href="#">
            <img src="../assets/images/back_icon.png" alt="" width="7">
          </a>
          <h1 class="title wash_title">kxc</h1>
          <a class="close_btn" href="#">
            <img src="../assets/images/close_icon.png" alt="" width="14">
          </a>
        </header>


        <!-- 这里是页面内容区 -->
        <div class="content" id="Query" data-url="{Query}">
          <div class="choice_part">
            <div class="choice_address">
              <div class="add_bg lt_add">
                <i class="address_icon"></i>
                <input type="text" class="address_input" value="齐源大厦">
              </div>
              <div class="add_bg rt_add" @click="showBar">
                <span>济南</span>
                <i class="select_down_icon"></i>
              </div>
            </div>
            <div class="shop_select">
              <div class="select_item distance_btn">
                <span class="si_01"></span>
              </div>
              <div class="select_item times_btn">
                <span class="si_02">
                </span>
              </div>
              <div class="select_item shops_btn">
                <span class="si_03"></span>
              </div>
            </div>
            <div class="select_info">
              <div class="select_bg distance_scope">全部</div>
              <div class="select_bg times_scope" >8:00-18:00</div>
            </div>
          </div>
          <div class="content-block">
            <div class="shop_container">
              <div class="list_container" id="AppointQuery" data-url="{AppointQuery}">
                <ul id="collect_list">
                  <!--shop-->
                  <li v-for="shop in shops">
                    <router-link :to="{ path: '/appoint'}"  class="external"  >
                    <div name="ALList" class="row shop_block">
                      <div class="col-xs-3 leftcol">
                        <div class="col-xs-12">
                          <img src="../assets/images/shop_list_icon.gif" class="alshopimg">
                          <input type="hidden" bw_name="ccorderstate"  class="order_btn">
                          <input type="hidden" bw_name="state"  class="order_state">
                          <input type="hidden" bw_name="todayRemain"  class="todayRemain" value="'+row['todayRemain']+'">
                          </div>
                        </div>
                        <div class="col-xs-9 rightcol">
                        <div class="col-xs-12 shopName"><em bw_name="deptname">{{shop.deptname}}</em> <img src="../assets/images/way_icon.png" width="6" alt="" class="way_icon">
                        <span class="longrun">
                        <img src="../assets/images/arrow_icon.png" alt="" width="10">
                        <em class="distance" bw_name="distance">{{shop.distance}}</em>
                        </span>
                        </div>
                        <div class="col-xs-12 value_line">
                          <img src="../assets/images/star5.png" class="star shopstar">
                          <span>月成交 <em bw_name="mountaintimes">{{shop.mountaintimes}}</em>单</span>
                          <span>￥ <em bw_name="userprice">{{shop.userprice}}</em>元/次</span>
                          </div>
                        <div class="col-xs-12 appoint">
                          <span class="residue">今日剩余<em bw_name="todayRemain">{{shop.todayRemain}}</em></span>
                          <span class="already">今日已约<em bw_name="todayAppoint">{{shop.todayAppoint}}</em></span>
                          </div>
                        <div class="col-xs-12 discount">
                          <div><img class="small_icon" src="../assets/images/cut_icon.png" width="18"><span bw_name="jian">{{shop.jian}}</span></div>
                          <div><img class="small_icon" src="../assets/images/gift_icon.png" width="18"><span bw_name="zeng">{{shop.zeng}}</span></div>
                          </div>
                        </div>
                      </div>
                    <input type="hidden"  class="shopid" bw_attr="shopid" >
                    <input type="hidden" bw_attr="l" value="'+row['l']+'">
                    <input type="hidden" bw_attr="d" value="'+row['d']+'">
                    <input type="hidden"  class="state" value="'+row['state']+'">
                    <input type="hidden" bw_attr="ccframe" class="cctimelist" value="'+row['ccframe']+'">
                    <em class="favorite"></em>
                    </router-link>
                  </li>

                </ul>
                <input type="hidden" id="timesValueinput" value="[1,2,3]">
              </div>
            </div>
          </div>
        </div>
        <EgdSideBar :show-sidebar.sync="showSidebar"></EgdSideBar>
    <!--侧边栏遮罩层-->
        <div v-if="showSidebar" class="sidebar-mask" @click="hiddenBar"></div>
      </div>
</template>

<script>
  import EgdSideBar from '../components/sidebar/sidebar'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showSidebar : false,
      shops:[
          {shopid:'001',deptname:'beswellSunshine',distance:'5.63km',mountaintimes:'3',userprice:'30',todayRemain:'10',todayAppoint:'3',jian:'周一到周四减免两元',zeng:'赠送轮胎检查一次'},
          {shopid:'001',deptname:'beswellSunshine',distance:'5.63km',mountaintimes:'3',userprice:'30',todayRemain:'10',todayAppoint:'3',jian:'周一到周四减免两元',zeng:'赠送轮胎检查一次'},
          {shopid:'001',deptname:'beswellSunshine',distance:'5.63km',mountaintimes:'3',userprice:'30',todayRemain:'10',todayAppoint:'3',jian:'周一到周四减免两元',zeng:'赠送轮胎检查一次'},
          {shopid:'001',deptname:'beswellSunshine',distance:'5.63km',mountaintimes:'3',userprice:'30',todayRemain:'10',todayAppoint:'3',jian:'周一到周四减免两元',zeng:'赠送轮胎检查一次'},
          {shopid:'001',deptname:'beswellSunshine',distance:'5.63km',mountaintimes:'3',userprice:'30',todayRemain:'10',todayAppoint:'3',jian:'周一到周四减免两元',zeng:'赠送轮胎检查一次'},
          {shopid:'001',deptname:'beswellSunshine',distance:'5.63km',mountaintimes:'3',userprice:'30',todayRemain:'10',todayAppoint:'3',jian:'周一到周四减免两元',zeng:'赠送轮胎检查一次'},
      ]
    }
  },
  methods : {
    showBar: function(){
      window.document.body.classList.add = 'scroll-stop';
      window.document.querySelector('html').classList.add = 'scroll-stop';
      this.showSidebar = !this.showSidebar
    },
    hiddenBar () {
      window.document.body.className = '';
      window.document.querySelector('html').className = '';
      this.showSidebar = !this.showSidebar
    },
    getDate(v) {
      console.log(v)
    }
  },
  components: {
    EgdSideBar
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sidebar-mask{
    position: fixed;
    transform: translateZ(0);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    background: rgba(0, 0, 0, 0.7);
  }

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
  em, i {
    font-style: normal;
  }
  ul,li {
    list-style: none;
    padding: 0;
    margin: 0;
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
  .orange {
    background-color: #ff7644;
    color: #fff;
    font-size: 18px;
    font-family: "Microsoft Yahei", "微软雅黑";
  }
  .choice_part {
    width: 100%;
    height: 9.4rem;
    background: url("../assets/images/index/bg.png")top center repeat;
    background-size: 100% 100%;
    display: block;
    margin: 0 auto;
    overflow: hidden;
  }
  .shop_container {
    width: 100%;
    overflow: hidden;
    display: block;
    margin: 0 auto;
  }
  .shop_container .shop_tab {
    width: 100%;
    overflow: hidden;
    display: block;
  }
  .shop_container .col_half {
    width: 50%;
  }
  .shop_tab .tab_item {
    float: left;
    padding: 10px;
    border-bottom: 1px solid #FF8143;

  }
  .tab_item .recomm_icon {
    width: 18px;
    height: 18px;
    float: left;
    margin-left: 5px;
    margin-top: 5px;
    background: url("../assets/images/index/index_tab01.png")top center no-repeat;
    background-size: 100%;
    margin-right: 10px;
  }
  .tab_item .useful_icon {
    width: 18px;
    height: 18px;
    float: left;
    margin-left: 5px;
    margin-top: 5px;
    background: url("../assets/images/index/index_tab02.png")top center no-repeat;
    background-size: 100%;
    margin-right: 10px;
  }
  .shop_tab .tab_item.active {
    color: #FF8143;
    border-bottom: 3px solid #ff8143;
    padding-bottom: 8px;
  }
  .tab_item.active .recomm_icon {
    background: url("../assets/images/index/index_tab01a.png")top center no-repeat;
    background-size: 100%;
  }
  .tab_item.active .useful_icon {
    background: url("../assets/images/index/index_tab02a.png")top center no-repeat;
    background-size: 100%;
  }
  .list_container li {
    border-top: 1px solid #efefef;
  }
  .shop_block {
    display: block;
    background-color: #fff;
    padding-left: 10px;
    padding-bottom: 10px;
    overflow: hidden;
  }
  .title_font button {
    margin-top: -2px;
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
    max-width: 60%;
    height: 1.5em;
    font-style: normal;
    float: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
  }
  .value_line span {
    float: left;
    margin-left: 3px;
  }
  .value_line span.serve {
    color: #7C7C7C;
    margin-left: 0;
  }

  .rightcol .text img {
    float: left;
    margin-right: 5px;
  }
  .text .blue {
    color: #3385FF;
  }
  .alshopimg {
    width: 80px;
    margin-left: 4px;
    margin-top: 15px;
  }
  .col-xs-12 .star {
    width: 80px;
    padding: 0px 0px 0px 0px;
  }
  .order {
    margin: 5px 0px 5px 0px;
    width: 30px;
  }
  li .leftcol .col-xs-12>img {
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  li .appoint {
    width: 100%;
    padding-top: 5px;
    float: left;
    font-size: 12px;
    margin-bottom: 5px;
  }
  li div.discount {
    padding-top: 5px;
    float: left;
    border-top: 1px solid #efefef;
  }
  li .appoint span {
    float: left;
    margin-right: 10px;
    border-radius: 4px;
    padding: 2px 5px;
    text-align: center;
  }
  li .appoint .residue {
    background-color:#FF6537 ;
    color: #fff;
    border: 1px solid #FF6537;
  }
  li .appoint .already {
    background-color:#fff ;
    color: #777;
    border: 1px solid #FF6537 ;
  }
  li .appoint .residue.no_more {
    background-color:#777 ;
    color: #fff;
    border: 1px solid #777;
  }
  li .discount div {
    width: 100%;
    float: left;
  }
  li .discount .small_icon {
    float: left;
  }
  li .discount div span {
    font-size: 12px;
    line-height: 20px;
    float: left;
    margin-left: 10px;
  }
  .state_pic {
    position: relative;
    bottom: 75px;
    left: 0;
    width: 80px;
    height: 80px;
  }
  .leftcol {
    height: 120px;
    overflow: hidden;
  }
  li .longrun {
    float: right;
  }
  li .longrun em {
    margin-left: 5px;
  }
  .value_line span em {
    font-size: 12px;
    color: #FF6537;
  }
  .reset_list {
    color: #00a9d6;
  }
  .picker-item em {
    width: 20px;
    height: 20px;
    float: right;
    line-height: 20px;
    margin-top: 8px;
    border-radius: 250px;
    background-color: #FF8143;
    color: #fff;
    text-align: center;
    font-size: 12px;
  }
  /*select part*/
  .choice_part .choice_address {
    width: 90%;
    height: 35px;
    display: block;
    margin: 0 auto;
    margin-top: 10px;
  }
  .choice_address .add_bg {
    height: 30px;
    background-color: rgba(75,71,67,0.35);
    border-radius: 250px;
  }
  .lt_add {
    width: 55%;
    float: left;
  }
  .rt_add {
    width: 30%;
    float: right;
  }
  .add_bg .address_icon {
    width: 12px;
    height: 16px;
    float: left;
    margin-left: 10px;
    margin-top: 7px;
    background: url("../assets/images/index/index_local.png")top center no-repeat;
    background-size: 100% 100%;
  }
  .add_bg .address_input {
    width: 50%;
    height: 30px;
    float: left;
    background-color: rgba(75,71,67,0);
    color: #FFD2BF;
    border: none;
    font-size: 14px;
    text-align: center;
    display:inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-left: 10px;
  }
  .add_bg span {
    width: 50px;
    float: left;
    line-height: 30px;
    color: #FFD2BF;
    font-size: 14px;
    text-align: center;
    display:inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-left: 10px;
  }
  .add_bg .select_down_icon {
    width: 12px;
    height: 6px;
    float: left;
    margin-left: 10px;
    margin-top: 12px;
    background: url("../assets/images/index/index_select.png")top center no-repeat;
    background-size: 100% 100%;
  }
  .shop_select {
    width: 90%;
    height: 100px;
    display: block;
    margin: 0 auto;
  }
  .shop_select .select_item {
    width: 33%;
    height: 100%;
    float: left;
  }
  .select_item span {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
  }
  .favorite {
    display: none;
  }
  span.si_01 {
    margin-top: 20px;
    background: url("../assets/images/index/default_06.png")top center no-repeat;
    background-size: 80% 80%;
  }
  span.si_02 {
    margin-top: 10px;
    background: url("../assets/images/index/default_03.png")top center no-repeat;
    background-size: 100% 100%;
  }
  span.si_03 {
    margin-top: 20px;
    background: url("../assets/images/index/default_09.png")top center no-repeat;
    background-size: 80% 80%;
  }
  /*dark*/
  span.si_01.dark {
    margin-top: 20px;
    background: url("../assets/images/index/dark_06.png")top center no-repeat;
    background-size: 80% 80%;
  }
  span.si_02.dark {
    margin-top: 10px;
    background: url("../assets/images/index/dark_03.png")top center no-repeat;
    background-size: 100% 100%;
  }
  span.si_03.dark {
    margin-top: 20px;
    background: url("../assets/images/index/dark_09.png")top center no-repeat;
    background-size: 80% 80%;
  }
  .select_info {
    width: 90%;
    height: 30px;
    display: block;
    margin: 0 auto;
    margin-top: 15px;

  }
  .select_info .select_bg {
    width: 49%;
    border-radius: 250px;
    background-color: rgba(255,255,255,0.45);
    color: #FF7743;
    font-size: 14px;
    text-align: center;
  }
  .select_bg.distance_scope {
    float: left;
  }
  .select_bg.times_scope {
    float: right;
  }

  /*search_page*/
  .popup header.bar {
    background-color: #fff;
  }
  .popup_search .search_page:before {
    clear: both;
  }
  .popup_search .search_page {
    width: 100%;
    overflow: hidden;
    display: block;
    margin: 0 auto;
    margin-top: 60px;
  }
  .popup_search .search_page .seach_page_input {
    margin-left: 10px;
    margin-right: 10px;
    padding: 10px;
    background-color: #EDEDED;
    color: #7D7D7D;
    font-size: 12px;
    text-align: center;
    border-radius: 4px;
    overflow: hidden;
    display: block;
  }
  .popup_search .seach_page_input #address_input {
    height: 20px;
    line-height: 20px;
    border: none;
    background-color: #EDEDED;
    text-align: center;
    float: left;
  }
  .popup_search .select_icon {
    width: 12px;
    height: 10px;
    float: left;
    margin-top: 6px;
    background: url("../assets/images/select_icon.png")top center no-repeat;
    background-size: 100% 50%;
  }
  .popup_search .seach_page_input #city_picker {
    width: 20%;
    height: 100%;
    background-color: #EDEDED;
    color: #7D7D7D;
    border: none;
    font-size: 16px;
    float: left;
    text-align: center;
    line-height: 20px;
  }
  .popup_search .search_page .local_btn_container {
    width: 120px;
    visibility: hidden;
    display: block;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 14px;
  }
  header.bar.city_nav {
    background-color: #f7f7f8;
  }
  .popup_search .local_btn_container em {
    font-style: normal;
    margin-left: 5px;
  }
  .popup_search .now_local_btn img {
    float: left;
    margin-top: 3px;
  }
  .popup_search .search_page .useful_list {
    overflow: hidden;
    display: block;
    padding-top: 10px;
    background-color:#EDEDED ;
    color: #7D7D7D;
    font-size: 14px;
  }
  .popup_search .useful_list span {
    display: block;
    padding-left: 20px;
    margin-bottom: 10px;
  }
  .popup_search .useful_list ul {
    background-color: #fff;
    color: #333;
  }
  .popup_search .useful_list li {
    padding-top: 10px;
    padding-left: 20px;
    padding-bottom: 10px;
    font-size: 14px;
    border-bottom: 1px solid #E3E3E3;
  }
  .popup_search .hide_search {
    width: 15px;
    height: 100%;
    overflow: hidden;
    float: left;
    position: relative;
    z-index: 20;
    font-size: 1rem;
    line-height: 1.2rem;
  }
  .hide_search img {
    margin-top: 15px;
  }
  .popup_search .wash_title {
    background-color: #fff;
    color: #000;
    letter-spacing: 1px;
  }
  #gaode_map {
    width: 100%;
    height: 1px;
  }

  /*搜索页面*/
  .page_default {
    display: none!important;
  }
  .shop_page {
    width: 100%;
    overflow: hidden;
    display: block;
    margin: 0 auto;
    margin-top: 60px
  }
  .btn_shop {
    width: 95%;
    height: 36px;
    margin: 0 auto;
    overflow: hidden;
    display: block;
    margin-top: 60px;
    line-height: 36px;
    background-color: #FF9545;
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
  .half_page {
    top:60%;
  }
  /*响应式调整*/
  @media only screen and (max-width: 320px) {
    .alshopimg {
      width: 60px;
      margin-top: 15px;
    }
    .state_pic {
      position: relative;
      bottom: 65px;
      left: 3px;
      width: 60px;
      height: 60px;
    }
    .col-xs-12 .star {
      width: 60px;
      padding: 0px 0px 0px 0px;
    }
    .popup_panel {
      height: 448px;
      top: 21%;
    }
    .leftcol .order_btn {
      width: 40px;
      height: 20px;
      display: block;
      margin-left: 15px;
    }
    .more_comment {
      bottom: 30px;
    }
    .menu-fixed {
      position: absolute;
      left: 5px;
      top: 55px;
      width:46px;
      height:160px;
      z-index:9999;
    }
  }
  @media(min-width:321px) and (max-width: 360px) {
    .alshopimg {
      width: 70px;
      margin-top: 15px;
    }
    .state_pic {
      position: relative;
      bottom: 75px;
      left: 4px;
      width: 70px;
      height: 70px;
    }
  }
  @media(min-width:361px) and (max-width: 375px) {
    .popup_panel {
      height: 448px;
      top: 33%;
    }
    .more_comment {
      bottom: 32px;
    }
    .state_pic {
      position: relative;
      bottom: 85px;
      left: 4px;
      width: 80px;
      height: 80px;
    }
  }
  @media (min-width:376px) and (max-width: 414px) {
    .popup_panel {
      height: 448px;
      top: 39%;
    }
    .shop_block {
      padding-left: 20px;
    }
    .state_pic {
      position: relative;
      bottom: 85px;
      left: 4px;
    }

  }
  @media(min-width:415px) and (max-width: 480px) {
    .popup_panel {
      height: 516px;
    }

  }
  @media (min-width:481px) and (max-width: 640px) {
  }
  @media (min-width:641px) and (max-width: 1023px) {
    .popup_panel {
      height: 448px;
      top: 60%;
    }
  }
  @media (min-width:1024px) and (max-width: 1366px) {
    .popup_panel {
      height: 448px;
      top: 70%;
    }
  }
</style>
