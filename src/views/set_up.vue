<template>
<div class="hello">
  <header class="bar bar-nav">
    <a class="back_btn" href="#">
      <img src="../assets/images/back_icon_w.png" alt="" width="7">
    </a>
    <h1 class="title wash_title">KXC</h1>
  </header>
  <div class="content" id="Query" data-url="/?ctl=ajax&amp;mod=yyxc&amp;act=set_up">
    <div class="content-block">
      <div class="main_set_up">
        <ul>
          <li>
            <label for="head_logo_hidden">
              <em>头像</em>
              <div class="rt">
                <img bw_src="headup" src="../assets/images/headup/test_user.jpg" alt="" class="head_logo">
                <img src="../assets/images/user_g_arr.fw.png" alt="" class="arr">
              </div>
              <form action="xxx.php" type="post" id="head_img_form" onsubmit="return PostData()">
                <input type="file" id="head_logo_hidden">
              </form>
            </label>
          </li>
          <li class="panel_li" id="nickname_set">
            <em>昵称</em>
            <div class="rt">
              <img src="../assets/images/user_g_arr.fw.png" alt="" class="arr">
              <span bw_name="usercode">apptest</span>
            </div>
          </li>
          <li class="panel_li" id="login_pwd_set">
            <em>登录密码</em>
            <div class="rt">
              <img src="../assets/images/user_g_arr.fw.png" alt="" class="arr">
              <span>修改</span>

            </div>
          </li>
          <li class="panel_li" id="pay_pwd_set">
            <em>支付密码</em>
            <div class="rt">
              <img src="../assets/images/user_g_arr.fw.png" alt="" class="arr">
              <span>设置</span>

            </div>
          </li>
          <li class="panel_li">
            <em>手机号</em>
            <div class="rt">
              <img src="../assets/images/user_g_arr.fw.png" alt="" class="arr">
              <span bw_name="phone">13335119550</span>

            </div>
          </li>
          <li class="panel_li" style="display: none">
            <em>绑定邮箱</em>
            <div class="rt">
              <img src="../assets/images/user_g_arr.fw.png" alt="" class="arr">
              <span>设置</span>

            </div>
          </li>
          <li class="panel_li">
            <em>车辆信息</em>
            <div class="rt">
              <img src="../assets/images/user_g_arr.fw.png" alt="" class="arr">
              <span>添加</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    }
  }
</script>
<style scoped>
  /*head start*/
  header.bar {
    background-color: #fff !important;
    background-image:-webkit-linear-gradient( 105deg, rgb(255,255,255) 0%, rgb(255,255,255) 100%);;
  }
  .wash_title {
    color: #7C7C7C;
  }
  /*head end*/
  .content {
    background-color: #EDEDED;
    padding-left: 10px;
    padding-right: 10px;
  }
  .content-block .main_set_up li {
    height: 3em;
    border-bottom: 1px solid #EDEDED;
  }
  .content-block .main_set_up li label {
    width: 100%;
    height: 100%;
    display: block;
  }
  .main_set_up li em {
    height: 100%;
    float: left;
    font-size: 16px;
    color: #515151;
    line-height: 3em;
    margin-left: 5%;
  }
  .main_set_up li .rt {
    float: right;
    color: #888888;
  }
  .main_set_up li .rt span {
    float: right;
    height: 100%;
    line-height: 3em;
    margin-right: 10px;
  }
  .main_set_up li .rt .arr {
    width: 7px;
    margin-right: 20px;
    margin-top: 20px;
    float: right;
  }
  .main_set_up li .rt .head_logo {
    position: relative;
    top: 8px;
    width: 32px;
    height: 32px;
    margin-right: 10px;
    border-radius: 250px;
  }
  #head_logo_hidden {
    display: none;
  }
  #old_phone_input {
    height: 100%;
    float: left;
    line-height: 35px;
  }
  /*set_up_succeed*/
  .set_up_succeed {
    top:40%;
    width: 90%;
    left: 5%;
    height: 107px;
    border-radius: 4px;
    font-size: 14px;
  }
  .set_up_succeed p {
    height: 58px;
    line-height: 38px;
    margin: 0;
    text-align: center;
    color: #2E2E2E;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    font-size: 20px;
  }
  .set_up_succeed span {
    width: 100%;
    overflow: hidden;
    float: left;
    text-align: center;
    padding-top: 10px;
    color: #3385FF;
    font-size: 14px;
  }
  /*set_up_warning*/
  .set_up_warning {
    top:40%;
    width: 90%;
    left: 5%;
    height: 107px;
    border-radius: 4px;
    font-size: 14px;

  }
  .set_up_warning p {
    height: 58px;
    line-height: 38px;
    margin: 0;
    text-align: center;
    color: #d9534f;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    font-size:14px;
  }
  .set_up_warning span {
    width: 100%;
    overflow: hidden;
    float: left;
    text-align: center;
    padding-top: 10px;
    color: #3385FF;
    font-size: 14px;
  }
  /*set up end*/
  /*panel start*/
  .hide_panel {
    width: 15px;
    height: 100%;
    overflow: hidden;
    float: left;
    position: relative;
    z-index: 20;
    font-size: 1rem;
    line-height: 1.2rem;
  }
  .hide_panel img {
    margin-top: 15px;
  }
  .panel_confirm {
    height:30px ;
    color: #fff;
    border: none;
    float: right;
    border-radius: 4px;
    margin-right: 0;
    background-color: #FF7743;
    line-height: 30px;
    font-size: 16px;
    position: relative;
    margin-top: 8px;
    overflow: hidden;
    z-index: 20;
  }
  #nickname {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    margin-top: 20px;
    display: none;
    background-color: #EDEDED;
    padding-left: 20px;
    padding-right: 20px;
  }
  #nickname ul {
    padding-top: 50px;
  }
  .item-title {
    height: 35px;
    float: left;
    line-height: 35px;
    color: #7D7D7D;
    margin-right: 10px;
  }
  .item-input {
    width: 75%;
    height: 35px;
    float: left;
    background-color: #fff;
  }
  .item-input input {
    width: 60%;
    height: 35px;
    border: none;
    line-height: 35px;
    text-indent: 10px;
  }
  .item-input label {
    width: 35px;
    height: 35px;
    float: right;
  }
  .item-input img {
    width: 14px;
    margin-top: 10px;
    margin-right: 20px;
  }
  #nickname_tips {
    margin-top: 10px;
    margin-left: 83px;
    float: left;
    font-size: 12px;
    color: #4C4C4C;
  }
  #lognInPwd {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    margin-top: 20px;
    display: none;
    background-color: #EDEDED;
    padding-left: 10px;
    padding-right: 10px;
  }
  #lognInPwd .container {
    padding-top: 60px;
  }
  #lognInPwd li {
    overflow: hidden;
    display: block;
    border-bottom: 1px solid #EDEDED;
  }
  .panel_btn {
    width: 100%;
    padding: 5px 0;
    margin-top: 10px;
    background-color:#FF7743;
    color: #fff;
    text-align: center;
    border-radius: 4px;
    border: 0;
  }
  #lognInPwd .item-input {
    width: 100%;
  }#lognInPwd .item-input input {
     width: 85%;
   }
  #lognInPwd .item-input label {
    width: 44px;
  }
  #lognInPwd .item-input img {
    width: 30px;
    margin-top: 8px;
  }
  #pay_panel,#phoneNumber,#mail,#car_info {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    margin-top: 20px;
    display: none;
    background-color: #EDEDED;
    padding-left: 10px;
    padding-right: 10px;
  }
  #pay_panel .container,#phoneNumber .container {
    padding-top: 60px;
  }
  #mail .container,#car_info .container {
    padding-top: 60px;
  }
  li.white {
    overflow: hidden;background-color: #fff;
    border-bottom: 1px solid #EDEDED;
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
  .item-input .old_valid_btn {
    width: 43%!important;
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
  #mail .item-input {
    width: 100%;
  }
  #mail .item-input input {
    width: 70%;
  }
  #mail .item-input img {
    width: 30px;
    margin-top: 8px;
  }
  /*panel end*/
  /*car panel*/
  #default_car h5 {
    text-align: center;
    margin-bottom: 10px;
    font-family: "Microsoft YaHei";
    font-weight: normal;
  }
  .choice_car li {
    overflow: hidden;
    background-color: #fff;
    border-bottom: 1px solid #EDEDED;
    padding-left: 10px;
    padding-top:5px ;
    padding-bottom:5px ;
    font-size: 14px;
  }
  .choice_car li .car_name {
    width: 70%;
    float: left;
    margin-left: 10px;
    margin-right: 10px;
  }
  .choice_car li .state {
    width: 20px;
    height: 20px;
    float: left;
  }
  .choice_car li .state.checked {
    background: url("../assets/images/ic_choice.png")top center no-repeat;
    background-size: 100%;
  }
  .choice_car li span.edit_btn {
    width: 20px;
    height: 20px;
    background: url("../assets/images/edit_icon.png")top center no-repeat;
    background-size: 100%;
    color: #3385FF;
    float: right;
    margin-right: 10px;

  }
  #edit_car {
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
</style>
