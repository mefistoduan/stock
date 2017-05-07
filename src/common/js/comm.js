/**
 * @author: mefisto
 * @description:
 * @Date: 2017/2/24 0024 9:41
 */
$(function(){

    //后退
   $('.back_btn').click(function() {
       window.history.back();location.reload();
   });

    //关闭 close_btn
    $(".close_btn").click(function(){
            var link =  window.location.href;
            var text = parseInt(link.indexOf('washCar'));
            var used = link.substr(0 ,text);
            window.location.assign(used+"/");//返回上一层
    });
});

function valid(container,min,max,text)
{
    var thisVal = $(container).val();
    var thisLeng = thisVal.length;
    var min = parseInt(min);
    var max = parseInt(max);
    var dispalyMin = min+1;
    if(thisVal==''){
        $.alert(text+'不能为空！');
        return false
    }else {
        if(thisLeng <= min){
            $.alert(text+'最少'+dispalyMin+'字符！');
            return false
        }
        else
        {
            return true
        }
        if(thisLeng >= max){
            $.alert(text+'超出限制数量！');
            return false
        }
        else
        {
            return true
        }
    }
};

//向上取整数
function round(value, num){
    return Math.round(value * Math.pow(10, num)) / Math.pow(10, num);
};

//经纬度计算公式
function getFlatternDistance(lat1,lng1,lat2,lng2){
    var PI = Math.PI;
    var EARTH_RADIUS = 6378137.0;//单位M
    function getRad(d)
    {
        return d*PI/180.0;
    }
    var x1 = parseFloat(lat1);
    var x2 = parseFloat(lat2);
    var y1 = parseFloat(lng1);
    var y2 = parseFloat(lng2);
    var radLat1 = parseFloat(getRad(x1));
    var radLat2 = parseFloat(getRad(x2));
    var a = parseFloat(radLat1) - parseFloat(radLat2);
    var b = getRad(y1) - getRad(y2);
    var s = 2*Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2) + Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(b/2),2)));
    s = s*EARTH_RADIUS;
    s = Math.round(s)/1000;
    return s;
};

function checkShopState($button)
{
    var container = $button.closest('li');
    var ccorderstate = container.find('.ccorderstate').attr('ccorderstate');//商家状态
    var state = container.find('.state').attr('state');//汽车状态1启用，2暂停
    var todayRemain = container.find('.todayRemain').attr('todayRemain');//今日剩余
    if(ccorderstate == 2){
        $.alert('该商家预约已暂停');
        return false
    }
    if(state == 2){
        $.alert('该商家营业已暂停');
        return false
    }
    if(todayRemain == 0){
        $.alert('该商家营业预约已满');
        return false
    }
    return true
}