<template>
  <div id="app">
    <!-- 这里是页面内容区 -->
    <div class="content">
      <div class="content-block">
        <div class="top row" v-for="top in tops">
          <div class="col-50"><p class="red">{{top.ltIndex}}</p><p><em>上证</em><s class="red">{{top.ltPer}}</s></p></div>
          <div class="col-50"><p class="red">{{top.rtIndex}}</p><p><em>创业</em><s class="red">{{top.rtPer}}</s></p></div>
        </div>
        <ul class="list">
          <li class="row" v-for="detail in details">
            <a href="detail.html" class="external">
              <span class="name col-33">
              <em>{{detail.name}}</em>
              <s>{{detail.code}}</s>
              </span>
            </a>
              <span v-bind:class="detail.tag" class="exponent col-33">
                  {{detail.exponent}}
              </span>
              <span v-bind:class="detail.tag" class="cube col-33">
                 {{detail.Per}}
              </span>
          </li>
        </ul>
        <div id="main"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'common/css/reset.css';
  import Hello from 'components/Hello/Hello'
  export default {
    name: 'app',
    data () {
      return {
          tops:[
          {ltIndex:3154.66,ltPer:'+0.08%',rtIndex:1850.73,rtPer:'+0.42%'},
          ],
          details: [
                    {name: '深成指',code:399001,exponent: 10234.65,Per:'+0.05%',tag:'red'},
                    {name: '万科A',code:'sz000002',exponent: 18.47,Per:'-2.22%',tag:'green'},
                    {name: '世纪星源',code:'sz000005',exponent: 5.47,Per:'-2.84%',tag:'green'},
                    {name: '深振业A',code:'sz000006',exponent: 7.82,Per:'-4.05%',tag:'green'},
          ],
      }
    },
    components: {
      Hello
    }
  }
</script>
<style rel="stylesheet" scoped >
.content .top {
    width: 100%;
    overflow: hidden;
    display: block;
    margin: 0 auto;
}
.content .top .col-50 {
    float: left;
}
.red {
    color: red;
}
.green {
    color: green;
}
.top .col-50 p {
    width: 100%;
    height: 25px;
    display: block;
    text-align: center;
}
.content s {
    text-decoration: none;
}
.content ul.list {
    width: 98%;
    margin-top: 20px;
    display: block;
    overflow: hidden;
}
.content .list li {
    width: 100%;
    height: 40px;
    display: block;
    margin: 0 auto;
}
.list li .name {
    float: left;
}
.name s {
    width: 100%;
    font-size: 12px;
    color: #aaa;
    display: block;
    text-align: center;
}
.name em {
    width: 100%;
    display: block;
    overflow: hidden;
    text-align: center;
}
.list li .exponent {
    float: left;
    line-height: 25px;
}
.list li .cube {
    color: #fff;
    line-height: 25px;
    text-align: center;
}
.list li .cube.red {
    background-color: red;
}
.list li .cube.green {
    background-color: green;
}
#main {
    width: 300px;
    height: 400px;
    display: block;
    margin: 0 auto;
}
</style>
