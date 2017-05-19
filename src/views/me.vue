<template>
  <div class="hello">
    <div class="content" id="Query" data-url="{Query}">
      <div class="content-block">
        <div class="common-wrapper">
          <div class="head-img">
            <div class="my-id-pic">
              <img src="../assets/images/mine_bg.fw.png" width="100%">
            </div>
            <div class="my-info cf">
              <a class="my-img external" href="{SetJump}">
                <img bw_src="headup" src="../assets/images/user_header.fw.png" alt="" id="head_display">
                <img src="../assets/images/user_arr.fw.png" width="100%" class="user_arr">
              </a>
              <a class=" external" href="{SetJump}">
                <div class="my-person-info">
                  <p class="my-mx-head-name" bw_name="usercode">{{usercode}}</p>
                  <div class="head-meassage">
                    <span class="head-meassage-name" bw_name="plate">{{plate}}</span>
                  </div>
                </div>
              </a>
            </div>
            <ul class="my-watch cf row">
              <li class="col-33">
                <span class="color_font" >￥<i bw_name="balance">{{balance}}</i></span>
                <p class="watch-shop"><img src="../assets/images/user_icon01.fw.png" alt=""><em>balance</em></p>
              </li>
              <li class="col-33">
                <router-link :to="{ path: '/coupon'}"  class="external"  >
                  <span class="color_font"><i bw_name="coupon">{{coupon}}</i>个</span>
                  <p class="watch-shop"><img src="../assets/images/user_icon02.fw.png" alt=""><em>coupon</em></p>
                </router-link>
              </li>
              <li class="col-33">
                <span class="color_font"><i>{{integral}}</i>分</span>
                <p class="watch-shop"><img src="../assets/images/user_icon03.fw.png" alt=""><em>integral</em></p>
              </li>
            </ul>
          </div>
          <div class="myJD-content">
            <ul class="in-list bdbr-1px bdbt-1px">
              <li>
                <router-link :to="{ path: '/tasks'}"  class="external"  >
                  <div class="in-item  my-item">
                    <div class="couponIn-icon w-18">
                      <img src="../assets/images/list.png"></div>
                    <div class="in-item-info my-item bdbr-1px">
                      <div class="fl">
                        <span class="myJD-Order">mine tasks</span>
                      </div>
                      <div class="fr">
                        <span class="myMX-arrow"></span>
                      </div>
                    </div>
                  </div>
                  </router-link>
              </li>
              <li>
                <router-link :to="{ path: '/collect'}"  class="external"  >
                  <div class="in-item  my-item">
                    <div class="couponIn-icon w-18">
                      <img src="../assets/images/list_user01.fw.png"></div>
                    <div class="in-item-info my-item bdbr-1px">
                      <div class="fl">
                        <span class="myJD-Order">mine collect</span>
                      </div>
                      <div class="fr">
                        <span class="myMX-arrow"></span>
                      </div>
                    </div>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link :to="{ path: '/history_appraise'}"  class="external"  >
                  <div class="in-item  my-item">
                    <div class="couponIn-icon w-18">
                      <img src="../assets/images/list_user02.fw.png"></div>
                    <div class="in-item-info my-item bdbr-1px">
                      <div class="fl">
                        <span class="myJD-Order">history appraise</span>
                      </div>
                      <div class="fr">
                        <span class="myMX-arrow"></span>
                      </div>
                    </div>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link :to="{ path: '/set_up'}"  class="external"  >
                  <div class="in-item  my-item">
                    <div class="couponIn-icon w-18">
                      <img src="../assets/images/list_user03.fw.png"></div>
                    <div class="in-item-info my-item bdbr-1px">
                      <div class="fl">
                        <span class="myJD-Order">set up</span>
                      </div>
                      <div class="fr">
                        <span class="myMX-arrow"></span>
                      </div>
                    </div>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link :to="{ path: '/help'}"  class="external"  >
                  <div class="in-item  my-item">
                    <div class="couponIn-icon w-18">
                      <img src="../assets/images/list_user04.fw.png"></div>
                    <div class="in-item-info my-item bdbr-1px">
                      <div class="fl">
                        <span class="myJD-Order">help information</span>
                      </div>
                      <div class="fr">
                        <span class="myMX-arrow"></span>
                      </div>
                    </div>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      usercode: 'apptest',
      plate:'鲁A77777',
      balance:'70.00',
      coupon:'5',
      integral:'0'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .content-block {
    margin: 0;
    padding: 0;
  }
  .common-wrapper {
    width: 100%;
    position: relative;
    max-width: 640px;
    overflow: hidden;
    margin: 0 auto;
    padding-bottom: 10px;
  }
  .head-img {
    width: 100%;
    color: #FFF;
    position: relative;
  }
  .head-img .my-id-pic {
    height: 187px;
    width: 100%;
    position: absolute;
  }
  .head-img .my-info {
    margin: 0 15px 15px 15px;
    position: relative;
    padding-top: 35px;
    position: relative;
    z-index: 20;
  }
  .head-img .my-img {
    width: 80px;
    height: 80px;
    border-radius: 4em;
    border: .125em solid #fff;
    box-shadow: inset 0 1px 8px rgba(0, 0, 0, 0.2);
    display: block;
    margin: 0 auto;
    vertical-align: middle;
    background-color: #fff;
    padding: 4px;
  }
  .head-img .my-img img {
    width: 100%;
    height: 100%;
    border-radius: 250px;
  }
  .head-img .user_arr {
    width:11px!important;
    height: 19px!important;
    position: relative;
    bottom:50px;
    right: -80px;
  }
  .head-img .my-person-info {
    display: block;
    margin: 0 auto;
    vertical-align: middle;
    color: #656565;
    margin-top: 10px;
  }
  .cf:after {
    content: '';
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
  }
  .head-img .my-person-info .my-mx-head-name {
    display: block;
    margin: 0 auto;
    text-align: center;
    font-size: 19px;
    line-height: 17px;
    margin-bottom: 6px;
    color: #fff;
  }
  .head-img .my-person-info .my-jd-head-type {
    font-size: 13px;
    line-height: 13px;
  }
  .head-meassage {
    margin: 0 auto;
    margin-top: 10px;
    display: block;
    text-align: center;
  }
  .head-meassage img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  .head-meassage span {
    display: inline-block;
    vertical-align: top;
    line-height: 20px;
    color: #FEFEFE;
    font-family: "Microsoft YaHei UI Light";
  }

  .info-hint {
    width: 5px;
    height: 8px;
    /*background: url("../assets/images/user/icon_right.png");*/
    background-size: 5px 8px;
  }
  .my-watch {
    display: block;
    margin: 0 auto;
    overflow: hidden;
  }
  .my-watch li {
    overflow: hidden;
    padding-top: 9px;
    margin-left: 1px;
  }
  .my-watch li p {
    width: 70%;
    height: 40px;
    display: block;
    margin: 0 auto;
    padding: 0;
  }
  .my-watch li p img {
    width:30%;
    float: left;
    margin-right: 10%;
    padding-top: 10px;
    display: inline-table;
  }
  .my-watch li em {
    height: 100%;
    text-align: center;
    vertical-align: middle;
    line-height: 40px;
    color:#888888;
    float: left;
  }
  .my-watch li span {
    font-size: 18px;
    display: block;
    text-align: center;
    color: #FF7743;

  }
  .watch-goods {
    font-size: 14px;
    height: 14px;
    margin-bottom: 5px;
  }
  .watch-re {
    position: relative;
    font-weight: bold;
    color: #333333;
  }
  .watch-shop {
    display: block;
    padding-top: 5px;
    font-size: 11px;
    height: 11px;
  }
  .myJD-content {
    margin-top: 10px;
  }
  .bdbr-1px, .bdbt-1px {
    position: relative;
  }
  .bdbt-1px:before {
    height: 1px;
    content: '';
    width: 100%;
    border-bottom: 1px solid #e3e5e9;
    position: absolute;
    top: -1px;
    left: 0;
    transform: scaleY(.5);
    -webkit-transform: scaleY(.5);
    z-index: 10;
  }
  .myJD-item {
    padding: 12px 0 12px 0;
    background: #fff;
    display: -webkit-box;
  }
  .myJD-item a {
    display: block;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    width: 1%;
  }
  .myID-part {
    text-align: center;
    position: relative;
  }
  .myID-img {
    width: 39px;
    height: 39px;
    margin: 0 auto;
    margin-bottom: 4px;
    position: relative;
    display: block;
  }
  .myID-img img {
    width: 39px;
    height: 39px;
  }
  .re-count {
    position: absolute;
    top: -6px;
    right: -8px;
  }
  .myID-text {
    font-size: 14px;
    color: #656565;
  }
  .my-count {
    height: 12px;
    line-height: 11px;
    padding-left: 3px;
    padding-right: 3px;
    display: inline-block;
    background-color: #f23030;
    border: 1px solid #fff;
    border-radius: 12px;
    margin-left: -2px;
    font-size: 9px;
    color: #fff;
  }
  .in-list {
    width: 100%;
    margin-top: 10px;
    background-color: white;
    overflow: hidden;
  }
  .bdbt-1px:before {
    height: 1px;
    content: '';
    width: 100%;
    border-bottom: 1px solid #e3e5e9;
    position: absolute;
    top: -1px;
    left: 0;
    transform: scaleY(.5);
    -webkit-transform: scaleY(.5);
    z-index: 10;
  }
  .in-list li {
    list-style-type: none;
  }
  .in-list .in-item {
    height: 44px;
    line-height: 44px;
    padding: 0 0 0 10px;
    width: 100%;
    overflow: hidden;
    display: -webkit-box;
    display: -moz-box;
    vertical-align: middle;
  }
  .couponIn-icon {
    height: 100%;
    display: table-cell;
    margin-right: 10px;
    line-height: 44px;
    vertical-align: top;
  }
  .w-18 {
    width: 18px;
  }
  .couponIn-icon img {
    width: 100%;
    vertical-align: middle;
  }
  .in-item .in-item-info {
    vertical-align: middle;
    padding-right: 10px;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    margin-left: 10px;
  }
  .fl {
    float: left;
    font-size: 0;
  }
  .fr {
    float: right;
    font-size: 0;
  }
  .in-item-info span {
    display: inline-block;
    vertical-align: middle;
  }
  .myJD-Order {
    font-size: 14px;
    color: #232326;
  }
  .in-item-info span {
    display: inline-block;
    vertical-align: middle;
  }
  .myMX-arrow {
    width: 6px;
    height: 10px;
    background: url("../assets/images/user_g_arr.fw.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    vertical-align: middle;
    margin-top: 4px;
    margin-right: 5px;
  }
  .bdbr-1px:after {
    height: 1px;
    content: '';
    width: 100%;
    border-top: 1px solid #e3e5e9;
    position: absolute;
    bottom: -1px;
    right: 0;
    transform: scaleY(.5);
    -webkit-transform: scaleY(.5);
    z-index: 10;
  }
  #header_photo_up {
    display: none;
  }
  /*响应式调整*/
  @media only screen and (max-width: 320px) {

  }
  @media(min-width:321px) and (max-width: 360px) {
    .my-watch {
      margin-top:3em;
    }
  }
  @media(min-width:361px) and (max-width: 375px) {
    .my-watch {
      margin-top: 3.5em;
    }
  }
  @media (min-width:376px) and (max-width: 414px) {
    .my-watch {
      margin-top: 4em;
    }

  }
  @media(min-width:415px) and (max-width: 480px) {
    .my-watch {
      margin-top: 5em;
    }

  }
  @media (min-width:481px) and (max-width: 640px) {
    .my-watch {
      margin-top: 6em;
    }

  }
</style>
