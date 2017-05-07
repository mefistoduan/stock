/**
 * Created by wzx
 */

//根据身份证号码获取生日
function GetBirthdayByIdNo(iIdNo)
{
    var tmpStr = "";
    iIdNo = $.trim(iIdNo);
    if(iIdNo.length == 15){
        tmpStr = iIdNo.substring(6, 12);
        tmpStr = "19" + tmpStr;
        tmpStr = tmpStr.substring(0, 4) + "-" + tmpStr.substring(4, 6) + "-" + tmpStr.substring(6);
        //sexStr = parseInt(iIdNo.substring(14, 1),10) % 2 ? "男" : "女";
    }
    else if(iIdNo.length == 18){
        tmpStr = iIdNo.substring(6, 14);
        tmpStr = tmpStr.substring(0, 4) + "-" + tmpStr.substring(4, 6) + "-" + tmpStr.substring(6);
        //sexStr = parseInt(iIdNo.substring(17, 1),10) % 2 ? "男" : "女";
    }
    return tmpStr;
}

function fmtPlate(event)
{
    var character = String.fromCharCode(event.which);
    var txt = new RegExp("[ ,\\-,\\[,\\],\\_,\\`,\\~,\\!,\\@,\#,\\$,\\%,\\^,\\+,\\*,\\&,\\\\,\\/,\\ ,\\|,\\:,\\.,\\<,\\>,\\{,\\},\\(,\\),\\'',\\;,\\=,\"]");
    //特殊字符正则表达式
    if (txt.test(character)) {
        event.preventDefault();
    }
}

function checkPlate(val)
{
    //var re = /^[\u4e00-\u9fa5]{1}[a-zA-Z0]{1}[a-zA-Z0-9]{5}$/;
    var re = /^[\u4e00-\u9fa5]{1}[a-zA-Z0]{1}([a-zA-Z0-9]{5}|[a-zA-Z0-9]{4}[\u4e00-\u9fa5]{1})$/;

    if(val.search(re) == -1) {
        //alert("输入的车牌号格式不正确");
        return false;
    }
    else {
        return true;
    }
}

function checkMoney(val)
{
    var re = /^-?\d+[\.]{0,}\d{0,}$/;

    if(val.search(re) == -1) {
        //alert("输入的金额格式不正确");
        return false;
    }
    else {
        return true;
    }
}

function checkNumber(val)
{
    var re = /^-?\d+$/;

    if(val.search(re) == -1) {
        //alert("输入的数字格式不正确");
        return false;
    }
    else {
        return true;
    }
}

function checkPhone(val)
{
    var re = /^1[3|4|5|7|8][0-9]\d{8}$/;

    if(val.search(re) == -1) {
        //alert("输入的手机号码格式不正确");
        return false;
    }
    else {
        return true;
    }
}

function checkEmail(val)
{
    var re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/;

    if(val.search(re) == -1) {
        //alert("输入的邮箱格式不正确");
        return false;
    }
    else {
        return true;
    }
}

function checkDate(val)
{
    var re = /^\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2]\d|3[0-1])$/;

    if(val.search(re) == -1) {
        //alert("输入的日期格式不正确");
        return false;
    }
    else {
        return true;
    }
}

function checkTime(val)
{
    var re = /^([0-1]\d|2[0-3]):[0-5]\d:[0-5]\d$/;

    if(val.search(re) == -1) {
        //alert("输入的时间格式不正确");
        return false;
    }
    else {
        return true;
    }
}

function checkDateTime(val)
{
    var re = /^\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[1-2]\d|3[0-1]) ([0-1]\d|2[0-3]):[0-5]\d:[0-5]\d$/;

    if(val.search(re) == -1) {
        //alert("输入的日期时间格式不正确");
        return false;
    }
    else {
        return true;
    }
}

function dateDiff(dateS, dateE, t)
{
    if ((dateS === null) || (dateS.length < 1)) {
        return;
    }
    dateS = new Date(Date.parse(dateS.replace(/-/g, "/")));

    if ((dateE === null) || (dateE.length < 1)) {
        dateE = new Date(); //当前时间的时间戳
    }
    else {
        dateE = new Date(Date.parse(dateE.replace(/-/g, "/")));
    }

    if ((t === null) || (t.length < 1)) {
        t = 's';
    }

    var diff = dateE - dateS;

    switch(t) {
    case 's':   //秒
        diff = Math.round(diff / 1000);
        break;
    case 'm':   //分
        diff = Math.round(diff / 1000 / 60);
        break;
    case 'h':   //时
        diff = Math.round(diff / 1000 / 60 / 60);
        break;
    case 'd':   //天
        diff = Math.round(diff / 1000 / 60 / 60 / 24);
        break;
    default:
        return;
    }
    //alert(diff);
    return diff;
}

function round(value, num){
    return Math.round(value * Math.pow(10, num)) / Math.pow(10, num);
}

function clearRadioGroup(rdgrpName)
{
    $(rdgrpName).empty();
}

function initRadioGroup(rdgrpName, dataArr, sltvalue, src)
{
    var rd = '';
    var checked = '';
    var rdname = $(rdgrpName).data('rdname');
    if (src == 'ajax') {
        for (i = 0; i < dataArr.length; i++) {
            // console.log(dataArr[i]);
            if (optArr[i][0] == sltvalue)
                checked = 'checked';
            else
                checked = '';
            rd = '<label class="inputLabelStyleCtl"><input type="radio" name="' + rdname + '" value="'
                + dataArr[i][0] + '" id="' + rdname + '_' + dataArr[i][0] + '" ' + checked + '> ' + dataArr[i][1] + '</label> &nbsp;&nbsp;&nbsp;';
            $(rdgrpName).append(rd);
        }
    }
    else {
        for (var key in dataArr) {
            if (key == sltvalue)
                checked = 'checked';
            else
                checked = '';
            rd = '<label class="inputLabelStyleCtl"><input type="radio" name="' + rdname + '" value="'
                + key + '" id="' + rdname + '_' + key + '" ' + checked + '> ' + dataArr[key] + '</label> &nbsp;&nbsp;&nbsp;';
            $(rdgrpName).append(rd);
        }
    }
}

function loadRadioGroup(rdgrpName, postData, sltvalue)
{
    var rs = $(rdgrpName).data("rs");
    // console.log(rs);
    if (rs == '' || rs == undefined)
        return;

    if (rs.length > 5 && rs.substr(0,5) == 'ajax:') {
        var url = rs.substr(5);
        if (url == '')
            return;

        $.post(url, postData, function(result){
            result = eval(result);
            // console.log(result);
            var dataArr = result;
            var count = $(rdgrpName).length;
            for (var i=0; i<count; i++) {
                clearRadioGroup($(rdgrpName)[i]);
                initRadioGroup($(rdgrpName)[i], dataArr, sltvalue, 'ajax');
            }
        });
    }
    else {
        rs = JSON.parse(Base64.decode(rs));
        var dataArr = eval(rs);
        // console.log(optArr);
        var count = $(rdgrpName).length;
        for (var i=0; i<count; i++) {
            clearRadioGroup($(rdgrpName)[i]);
            initRadioGroup($(rdgrpName)[i], dataArr, sltvalue);
        }
    }
}

function clearSelect(sltName)
{
    $(sltName).empty();
}

function initSelect(sltName, optArr, sltvalue, src)
{
    var opt = '';
    var selected = '';
    var initopt = $(sltName).data("init");
    // console.log(initopt);
    if (initopt != '' && initopt != undefined) {
        initopt = eval(initopt);
        opt = "<option value='" + initopt[0] + "'>" + initopt[1] + "</option>";
        $(sltName).append(opt);
    }
    if (src == 'ajax') {
        for (i = 0; i < optArr.length; i++) {
            // console.log(optArr[i]);
            if (optArr[i][0] == sltvalue)
                selected = 'selected';
            else
                selected = '';
            opt = "<option value='" + optArr[i][0] + "' " + selected + ">" + optArr[i][1] + "</option>";
            $(sltName).append(opt);
        }
    }
    else {
        for (var key in optArr) {
            if (key == sltvalue)
                selected = 'selected';
            else
                selected = '';
            opt = "<option value='" + key + "' " + selected + ">" + optArr[key] + "</option>";
            $(sltName).append(opt);
        }
    }
}

function loadSelectOption(sltName, postData, sltvalue, rtnResult)
{
    var rs = $(sltName).data("rs");
    // console.log(rs);
    if (rs == '' || rs == undefined)
        return;

    if (rs.length > 5 && rs.substr(0,5) == 'ajax:') {
        var url = rs.substr(5);
        if (url == '')
            return;

        $.post(url, postData, function(result){
            result = eval(result);
            // console.log(result);
            if (rtnResult != '' && rtnResult != undefined)
                eval(rtnResult + " = " + result);
            var optArr = result;
            var count = $(sltName).length;
            for (var i=0; i<count; i++) {
                clearSelect($(sltName)[i]);
                initSelect($(sltName)[i], optArr, sltvalue, 'ajax');
            }
            $(sltName).change();
        });
    }
    else {
        rs = JSON.parse(Base64.decode(rs));
        var optArr = eval(rs);
        // console.log(optArr);
        var count = $(sltName).length;
        for (var i=0; i<count; i++) {
            clearSelect($(sltName)[i]);
            initSelect($(sltName)[i], optArr, sltvalue);
        }
        $(sltName).change();
    }
}

function getChkValueList(chkObj, obj)
{
    var list = obj.val();
    var value = chkObj.val();
    if (chkObj.get(0).checked) {
        list = list + ',' + value;
    }
    else {
        list = list.replace(',' + value, '');
    }
    // alert(list);
    obj.val(list);
}

function getFormJson(form) {
    var o = {};
    var a = $(form).serializeArray();
    $.each(a, function () {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
}

function repeat(target, n) {
    return (new Array(n + 1)).join(target);
}

function getUrlParam(url, name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = url.substr(1).match(reg); //匹配目标参数
    if (r!=null) return decodeURI(r[2]); return null; //返回参数值
}

function fmtDate(datetime,length)
{
    if ((datetime == '') || (datetime == undefined))
        return '';

    if ((datetime == '1900-01-01') || (datetime == '1900-01-01 00:00:00.000'))
        return '';

    if(length == null){
        return (datetime != null) ? datetime.substr(0,10) : '';
    }
    else
    {
        return (datetime != null) ? datetime.substr(0,length) : '';
    }

}

function fmtFieldValue(fvalue)
{
    if ((fvalue == '') || (fvalue == undefined))
        return '';

    if ((fvalue == '1900-01-01') || (fvalue == '1900-01-01 00:00:00.000'))
        return '';

    var pos = fvalue.indexOf(" 00:00:00.000");
    if (pos >= 0) {
        return fvalue.substr(0, pos);
    }

    return fvalue;
}

//datatable: Remove the formatting to get integer data for summation
function intVal(i) {
    return typeof i === 'string' ?
    i.replace(/[\$,]/g, '')*1 :
        typeof i === 'number' ?
            i : 0;
}