<template>
  <div class="hello">
    <header class="bar bar-nav">
      <a class="back_btn" href="#">
        <img src="../assets/images/back_icon_w.png" alt="" width="7">
      </a>
      <h1 class="title wash_title">KXC</h1>
    </header>

    <div class="content native-scroll">
        <div class="content-block">
          <div class="row" id="AppointQuery">
            <div class="appraise_content  infinite-scroll infinite-scroll-bottom" data-distance="20">
        <ul class="appraise_list" id="Query" data-url="/?ctl=ajax&amp;mod=yyxc&amp;act=history_appraise">
          <li v-for="appraise in appraises">
            <div class="appraise_title">
            <a class="external now_appoint" bw_attr="shopid" :shopid="appraise.shopid">
              <img src="../assets/images/mine_icon02.fw.png" alt="" class="icon_car">
              <em bw_name="deptname">{{appraise.deptname}}</em>
              <img src="../assets/images/mine_icon01.fw.png" alt="" class="jump_to">
            </a>
          </div>
            <div class="appraise_text">
              <div class="tiem_info">
              <img src="../assets/images/mine_icon.png" alt="" class="head_logo">
                <em class="username" bw_name="usercode">{{appraise.usercode}}</em>
                <span class="time">{{appraise.time}}</span></div></div>
            <div class="appraise_detail"><em>打分</em>
              <img src="../assets/images/star5.png" bw_img="score" alt="" class="appraise_start">
              <p bw_name="comment">{{appraise.comment}}</p>
              <ul class="photo_list pb-standalone"></ul><div class="idea" style="display: none;">
                <em>商家回复:</em><i class="replytime" bw_name="replytime">null</i><p bw_name="reply">{{appraise.reply}}</p>
                <input type="hidden" class="ccorderstate" bw_attr="ccorderstate" ccorderstate="1">
                <input type="hidden" class="state" bw_attr="state" state="1">
                <input type="hidden" class="todayRemain" bw_attr="todayRemain" todayremain="8">
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
          appraises:[
            {shopid:'2',deptname:'Cano car  maintenance center',time:'2017-04-28',comment:"Fine cleaning for the first time, always feel is not a good car, don't need it.",reply:'',usercode:'apptest'},
            {shopid:'2',deptname:'Cano car  maintenance center',time:'2017-04-28',comment:"Fine cleaning for the first time, always feel is not a good car, don't need it.",reply:'',usercode:'apptest'},
            {shopid:'2',deptname:'Cano car  maintenance center',time:'2017-04-28',comment:"Fine cleaning for the first time, always feel is not a good car, don't need it.",reply:'',usercode:'apptest'},
            {shopid:'2',deptname:'Cano car  maintenance center',time:'2017-04-28',comment:"Fine cleaning for the first time, always feel is not a good car, don't need it.",reply:'',usercode:'apptest'},
            {shopid:'2',deptname:'Cano car  maintenance center',time:'2017-04-28',comment:"Fine cleaning for the first time, always feel is not a good car, don't need it.",reply:'',usercode:'apptest'},
            {shopid:'2',deptname:'Cano car  maintenance center',time:'2017-04-28',comment:"Fine cleaning for the first time, always feel is not a good car, don't need it.",reply:'',usercode:'apptest'},
          ]
      }
    }
  }
</script>
<style scoped>
  .content {
    background-color: #EDEDED!important;
  }
  header.bar {
    background-color: #fff !important;
    background-image:-webkit-linear-gradient( 105deg, rgb(255,255,255) 0%, rgb(255,255,255) 100%);;
  }
  .wash_title {
    color: #7C7C7C;
  }
  .head-img {
    width: 100%;
    color: #FFF;
    overflow: hidden;
    position: relative;
  }
  .head-img .my-id-pic {
    height: 187px;
    width: 100%;
    position: absolute;
    background: url("../assets/images/mine_appraise_bg.fw.png")top center no-repeat;
    background-size: 100% 100%;
  }
  .head-img .my-info {
    position: relative;
    padding-top: 35px;
    padding-bottom: 30px;
    position: relative;
    z-index: 20;
  }
  .head-img .my-img {
    width: 54px;
    height: 54px;
    border-radius: 4em;
    border: .125em solid #fff;
    box-shadow: inset 0 1px 8px rgba(0, 0, 0, 0.2);
    display: block;
    margin: 0 auto;
    vertical-align: middle;
    background-color: #fff;
    padding: 3px;
  }
  .head-img .my-img img {
    width: 100%;
    height: 100%;
  }
  .head-img .user_arr {
    width:11px!important;
    height: 19px!important;
    position: relative;
    bottom:40px;
    right: -70px;
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
    color: #515151;
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
  .content-block {
    padding: 0;
    margin-top: 0;
    margin-bottom: 10px!important;
  }
  .appraise_content {
    overflow: hidden;
    display: block;
    margin: 0 auto;
    background-color: #EDEDED;
    padding-left: 18px;
    padding-right: 6px;
  }
  .appraise_content ul.appraise_list {
    width: 100%;
    margin: 0 auto;
    margin-top: 5px;
    display: block;
    overflow: hidden;
    background-color: #EDEDED;
  }
  .appraise_list>li {
    width: 100%;
    overflow: hidden;
    display: block;
    margin: 0 auto;
    margin-bottom: 10px;
    background-color: #fff;
  }
  .appraise_list .appraise_title {
    width: 100%;
    display: block;
    margin: 0 auto;
    overflow: hidden;
    border-bottom: 1px solid #EDEDED;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .appraise_title a {
    width: 100%;
    height: 30px;
    display: block;
    margin: 0 auto;
  }
  .appraise_list .appraise_title em {
    height: 100%;
    line-height: 30px;
    font-size: 16px;
    color: #535353;
    float: left;
  }
  .appraise_list .appraise_title .icon_car {
    width: 15px;
    float: left;
    margin-top: 10px;
    margin-right: 10px;
  }
  .appraise_list  .text {
    width: 100%;
    display: block;
    margin: 0 auto;
    margin-top: 80px;
    overflow: hidden;
    border-bottom: 1px solid #EDEDED;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .appraise_list .appraise_title .jump_to {
    width: 6px;
    float: right;
    margin-top: 10px;
  }
  .appraise_list .appraise_text {
    width: 100%;
    display: block;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 10px;
    padding-left: 5%;
    padding-right: 5%;
  }
  .appraise_list .appraise_text .head_logo {
    width: 25px;
    float: left;
    margin-top: 10px;
    margin-right: 10px;
  }
  .appraise_list .appraise_text .username {
    line-height: 40px;
    font-size: 16px;
    color: #535353;
    float: left;
  }
  .appraise_list .appraise_text .time {
    line-height: 40px;
    font-size: 14px;
    color: #7C7C7C;
    float: right;
  }
  .appraise_list .appraise_detail {
    width: 100%;
    display: block;
    margin: 0 auto;
    overflow: hidden;
    padding-bottom: 10px;
    padding-left: 15%;
    padding-right: 5%;
  }
  .appraise_list .appraise_detail em {
    line-height: 40px;
    font-size: 14px;
    color: #FF6537;
    float: left;
  }
  .appraise_list .appraise_detail img.appraise_start {
    width: 100px;
    float: left;
    margin-top: 10px;
    margin-left: 10px;
  }
  .appraise_list .appraise_detail img:after {
    clear: both;
  }
  .appraise_list .appraise_detail p {
    width: 100%;
    float: left;
    margin: 0 auto;
    font-size: 14px;
  }
  .appraise_list .appraise_detail ul {
    width: 100%;
    float: left;
    padding-top: 10px;
  }
  .appraise_detail ul li {
    width: 70px;
    height: 70px;
    float: left;
    margin-right: 10px;
  }
  .appraise_detail li img {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0;
  }
  .appraise_detail .idea {
    width: 100%;
    float: left;
    overflow: hidden;
    background-color: #EDEDED;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .appraise_detail .idea em {
    color: #818181;
    font-size: 14px;
    float: left;
  }
  .appraise_detail .idea i {
    color: #818181;
    font-size: 14px;
    float: right;
    line-height: 40px;
  }
</style>
