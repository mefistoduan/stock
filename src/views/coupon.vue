<template>
  <div class="hello">
    <header class="bar bar-nav">
      <a class="back_btn" href="#">
        <img src="../assets/images/back_icon_w.png" alt="" width="7">
      </a>
      <h1 class="title wash_title">KXC</h1>
    </header>
    <div class="content">
      <div class="content-block">
        <ul class="coupon_list" id="Query" data-url="{Query}">
           <li v-for="coupon in coupons">
              <div class="Cou03-block" bw_class="typeid" :class='coupon.typestyle'>
                <div class="Cou-No">编号：<em bw_name="cpid">{{coupon.cpid}}</em></div>
              <div>
                <div class="Cou03-Covalue font_color" bw_name="cpmoney">{{coupon.cpmoney}}</div>
                <div class="Cou03-unit font_color">元</div>
                <div class="Cou-right">
                  <div class="Cou-name"><em bw_name="cpname">{{coupon.cpname}}</em>优惠券</div>
                  <div class="Cou03-data font_color">有效期至：<em class="endtime" bw_name="endtime">{{coupon.endtime}}</em></div>
                  <div class="Cou-Exp"><span style="color:white">优惠券说明</span></div>
                  </div>
                </div>
              </div>
          </li>
        </ul>
        <div class="tips_warning">
          <img src="../assets/images/coupon_none.gif" width="90" alt="">
          <h5>sorry,没有可用的优惠劵！</h5>
          <router-link :to="{ path: '/me'}"  class="external"  >
            返回
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
          coupons:[
            {typestyle:'sea',cpid:'001',cpmoney:40,cpname:'sale',endtime:'2017/07/28'},
            {typestyle:'rose',cpid:'002',cpmoney:14,cpname:'sale',endtime:'2017/07/28'},
            {typestyle:'yellow',cpid:'031',cpmoney:340,cpname:'sale',endtime:'2017/07/28'},
            {typestyle:'violet',cpid:'041',cpmoney:5,cpname:'sale',endtime:'2017/07/28'},
            {typestyle:'sea',cpid:'001',cpmoney:40,cpname:'sale',endtime:'2017/07/28'},
            {typestyle:'sea',cpid:'001',cpmoney:40,cpname:'sale',endtime:'2017/07/28'},
            {typestyle:'sea',cpid:'001',cpmoney:40,cpname:'sale',endtime:'2017/07/28'},
          ]
      }
    }
  }
</script>
<style scoped>
  .coupon_list li {
    margin-bottom: 10px;
  }
  .Cou03-block.gary {
    background: url(../assets/images/coupon05.png)top center no-repeat;
    background-size: 100% 100%;
  }
  .Cou03-block.sea {
    background: url(../assets/images/coupon01.png)top center no-repeat;
    background-size: 100% 100%;
  }
  .Cou03-block.rose {
    background: url(../assets/images/coupon04.png)top center no-repeat;
    background-size: 100% 100%;
  }
  .Cou03-block.violet {
    background: url(../assets/images/coupon03.png)top center no-repeat;
    background-size: 100% 100%;
  }
  .Cou03-block.yellow {
    background: url(../assets/images/coupon02.png)top center no-repeat;
    background-size: 100% 100%;
  }
  .gary .Cou03-data {
    background-color: #fff;
    padding-left: 3px;
  }
  .gary .font_color {
    color: #333;
  }
  .violet .Cou03-data {
    background-color: #65009a;
    padding-left: 3px;
  }
  .violet .font_color {
    color: #e4b0ff;
  }
  .yellow .font_color {
    color: #fdd835;
  }
  .yellow .Cou03-data {
    background-color: #cc6620;
    padding-left: 3px;
  }
  .sea .font_color {
    /*700*/
    color: #d0d9ff;
  }
  .sea .Cou03-data {
    /*100*/
    background-color: #455ede;
    padding-left: 3px;
  }
  .rose .font_color {
    color: #f8bbd0;
  }
  .rose .Cou03-data {
    background-color: #c2185b;
  }

  .Cou03-block {
    width: 100%;
    height: 108px;
  }
  .Cou-No {
    padding-left: 15px;
    padding-top: 15px;
    font-size: 12px;
    color: #fff;
  }
  .Cou03-Covalue {
    padding-left: 15px;
    width: auto !important;
    float: left;
    font-size: 30px;
    font-family: 'Arial';
    font-weight: bold;
    text-align: center;
    line-height: 1.6em;
  }
  .Cou03-unit {
    width: 20px;
    height: 100%;
    float: left;
    font-size: 1em;
    font-family: '微软雅黑';
    text-align: center;
    line-height: 50px;
  }
  .Cou-right {
    float: right;
    margin-right: 30px;
  }
  .Cou-name {
    text-align: left;
    color: #fff;
  }
  .Cou03-data {
    text-align: center;
    font-size: 12px;

  }
  .Cou-Exp {
    text-align: left;
  }

  .tips_warning {
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    overflow: hidden;
    /*display: block;*/
    display: none;
    color: #fff;
    background-color: #F4F4F4;
  }
  .tips_warning img {
    position: relative;
    top: 30%;
    display: block;
    margin: 0 auto;
  }
  .tips_warning h5 {
    position: relative;
    top: 35%;
    width: 100%;
    font-weight: normal;
    text-align: center;
    color: #7B7B7B;
  }
  .tips_warning a {
    width: 40%;
    margin: 0 auto;
    position: relative;
    top: 40%;
    background-color: #FFF2ED;
    color: #FF7743;
    font-size: 16px;
    text-align: center;
    border: 1px solid #FF7743;
    border-radius: 250px;
    display: block;
    padding: 5px 3px;
  }
  .endtime {
    width: 80px;
    height: 16px;
    overflow: hidden;
    float: right;
  }

</style>
