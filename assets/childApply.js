function LTime(v, eleme, aid) {
    if (v == undefined || v == "")
        v = 300;

    editvfput(v, eleme, aid);



}


//讀秒
function editvfput(count, e, aid) {
    var down = setInterval(CountDown, 1000);//每秒執行一次，賦值
    function CountDown() {
        $('#' + e).html(count);//寫入
        if (count == 0) {
            clearInterval(down);//銷燬計時器
            alert("超過報名填寫時間，網頁將轉至等待頁面，請稍待再重新進入活動網站。");

            if (aid != null && aid != undefined) {
                aid = "?aid=" + aid;
            }
            var toUrl = "https://service.krtc.com.tw/page/loading.html" + aid;
            window.location.replace(toUrl);
            return;
        }

        count--;
    }
}



function FBox(ver) {
    $.fancybox({
        'padding': 0,
        'href': ver == 1 ? '/images/loading.gif' : "#message"
    });
}



function Vaildation() {
    $("#message_txt").html("");
    $("#MSG").html("");
    if (confirm("請確認您的欄位是否填寫正確。")) {
        clearStyle();
        $.fancybox.showLoading();
        if (isPassValidateCode()) {

            if ($("#agree01_cb").prop("checked")) {


                //$('#stBirth').val($('#stBirth').val().replace(/[^0-9]/g, ""));
                var ActCon = $('input:radio:checked[name="selectActCon"]').val(),
                    stName = $('#stName'),
                    stSex = $('input:radio:checked[name="Sex"]').val(),
                    stBirth = $('#stBirth'),
                    stNumType = $('input:radio:checked[name="NumType"]').val(),
                    stNumber = $('#stNumber'),

                    stSize = $('input:radio:checked[name="Size"]').val(),
                    cnote = $('#cnote'),
                    fName = $('#fName'),
                    fRelation = $('#fRelation'),
                    fPhone = $('#fPhone'),
                    fMail = $('#fMail');
                var lRelation = $('#lRelation'),
                    lName = $('#lName'),
                    lPhone = $('#lPhone'),
                    lNumid = $('#lNumid'),
                    lBirth = $('#lBirth');

                //fAddress = $('#fAddress');

                var sAge = $('#ageS').val(),
                    eAge = $('#ageE').val();

                var isOK = true;
                var strOther = "";
                var AGEisOK = agree_Age(stBirth.val(), sAge, eAge);
                if (!AGEisOK) {
                    isOK = false;
                    stBirth.addClass("needData");
                    strOther += "[年齡不符合規定。]";
                    //$("#MSG").html(strOther);
                    //$("#message_txt").html(strOther);
                    //FBox(0);
                    //return false;
                }
                if (!ActCon || ActCon == "") {
                    isOK = false;
                    $('#ActConDiv').addClass("needData");

                }
                if (!stName.val() || $.trim(stName.val()) == "") {
                    isOK = false;
                    stName.addClass("needData");
                }
                if (!stSex || stSex == "") {
                    isOK = false;
                    $('#stSexDiv').addClass("needData");
                }
                if (!stNumber.val() || $.trim(stNumber.val()) == "") {
                    isOK = false;
                    stNumber.addClass("needData");
                }

                if (!stNumber.val() || $.trim(stNumber.val()) == "") { //|| !(checkTwID($.trim(stNumber.val()).toUpperCase()))) {
                    isOK = false;
                    stNumber.addClass("needData");
                } else {
                    if (stNumType == "1") {
                        if (!(checkTwID($.trim(stNumber.val()).toUpperCase()))) {
                            isOK = false;
                            stNumber.addClass("needData");
                            //alert("身份證字號驗證失敗。");
                        }
                    } else if (stNumType == "2") {
                        //if (!(checkNoTwID($.trim(stNumber.val()).toUpperCase()))) {
                        //    isOK = false;
                        //    stNumber.addClass("needData");
                        //    //alert("身份證字號驗證失敗。");
                        //}
                    } else {
                        isOK = false;
                        $('#numDIV').addClass("needData");
                    }
                }
                if (!stBirth.val() || $.trim(stBirth.val()) == "" || checkdate(stBirth.val())) {
                    isOK = false;
                    stBirth.addClass("needData");
                }


                if (!stSize || stSize == "") {
                    isOK = false;
                    $('#SizeDiv').addClass("needData");
                }
                if (!fName.val() || $.trim(fName.val()) == "") {
                    isOK = false;
                    fName.addClass("needData");
                }
                if (!fRelation.val() || $.trim(fRelation.val()) == "") {
                    isOK = false;
                    fRelation.addClass("needData");
                }
                if (checkINT(fPhone.val()) || !fPhone.val() || $.trim(fPhone.val()) == "") {
                    isOK = false;
                    fPhone.addClass("needData");
                }
                //if (!fAddress.val() || $.trim(fAddress.val()) == "") {
                //    isOK = false;
                //    fAddress.addClass("needData");
                //}
                if (!fMail.val() || $.trim(fMail.val()) == "" || (checkmail($.trim(fMail.val())))) {
                    isOK = false;
                    fMail.addClass("needData");
                }
                if (!lRelation.val() || $.trim(lRelation.val()) == "") {
                    isOK = false;
                    lRelation.addClass("needData");
                }
                if (!lName.val() || $.trim(lName.val()) == "") {
                    isOK = false;
                    lName.addClass("needData");
                }
                if (!lBirth.val() || $.trim(lBirth.val()) == "" || checkdate(lBirth.val())) {
                    isOK = false;
                    lBirth.addClass("needData");
                }
                if (!lNumid.val() || $.trim(lNumid.val()) == "") { //|| !(checkTwID($.trim(stNumber.val()).toUpperCase()))) {
                    isOK = false;
                    lNumid.addClass("needData");
                }
                if (checkINT(lPhone.val()) || !lPhone.val() || $.trim(lPhone.val()) == "") {
                    isOK = false;
                    lPhone.addClass("needData");
                }

                if (isOK) {
                    CheckValuePage();
                    //$("#checkPB").val("1");
                    //$('#form1').submit();
                } else {
                    var str = "請確認欄位是否有填寫或格式錯誤。" + strOther;
                    $("#MSG").html(str)
                    $("#message_txt").html(str);
                    FBox(0);
                    return false;
                }

            } else {
                if (!$("#agree01_cb").prop("checked"))
                    $("#agree01_cb").parent().addClass("needData");
                //$.fancybox.close();
                $("#message_txt").html("須同意內容才可報名");
                FBox(0);
                return false;
            }
        } else {
            $("#txt_input").addClass("needData");
            $("#message_txt").html("驗證碼錯誤。");
            FBox(0);
            return false;
        }
    }
}

function isPassValidateCode() {
    $("#span_result").html("");
    var nowValCode = $.ajax({
        url: "../../control/readValidateCode.ashx",
        type: "post",
        async: false,
        data: {},
        success: function (htmlVal) { }
    }).responseText;

    var userInput = $("#txt_input").val();
    var validateResult = ((nowValCode == userInput) ? true : false);
    if (validateResult == false) {
        $("#span_result").html("*驗證碼輸入不正確");
    }

    //回傳true Or false
    return validateResult;
}
function CheckValuePage() {
    fancyConfirm('請確認以下資料是否正確，資料送出後將無法修改，確認後請點選送出。', function () {

        //do_something('yes');
        $("#checkPB").val("1");
        $('#form1').submit();

    }, function () {
        //do_something('no');
    });
}

function fancyConfirm(msg, callbackYes, callbackNo) {
    var ret;
    var DataValue = "";

    var sexValue = "";
    switch ($('input:radio:checked[name="Sex"]').val()) {
        case "M":
            sexValue = "小男生";
            break;
        case "F":
            sexValue = "小女生";
            break;
    }



    DataValue = "<ul style='color:#000;'>"
        + "<li>活動梯次：" + $("input[name='selectActCon']:checked").next('label').text() + "</li>"
        + "<li>小朋友姓名：" + $('#stName').val() + "</li>"
        + "<li>性別：" + sexValue + "</li>"
        + "<li>身份證字號：" + $('#stNumber').val() + "</li>"
        + "<li>出生年月日：" + $('#stBirth').val() + "</li>"
        + "<li>迷你制服尺寸：" + $('input:radio:checked[name="Size"]').val() + "</li>"
        + "<li>家長姓名：" + $('#fName').val() + "</li>"
        + "<li>關係：" + $("#fRelation").val() + "</li>"
        + "<li>家長聯絡電話：" + $("#fPhone").val() + "</li>"
        + "<li>家長聯絡電子郵件：" + $("#fMail").val() + "</li>"
        + "<li>法定代理人姓名：" + $("#lName").val() + "</li>"
        + "<li>法定代理人關係：" + $("#lRelation").val() + "</li>"
        + "<li>法定代理人電話：" + $("#lPhone").val() + "</li>"
        + "<li>法定代理人生日：" + $("#lBirth").val() + "</li>"
        + "<li>法定代理人身份證字號：" + $("#lNumid").val() + "</li>";
    //+ "<li>家長通訊地址：" + $("#fAddress").val() + "</li>";

    if ($("#cnote").val() != undefined) {
        DataValue += "<li>其他：" + $("#cnote").val() + "</li>";
    }

    jQuery.fancybox({
        'modal': true,
        'content': "<div style=\"margin:1px;width:600px;line-height:150%;\">" + msg + DataValue + "<div style=\"text-align:right;margin-top:10px;\">"
            + "<input id=\"fancyconfirm_cancel\" style=\"margin:3px;padding:0px;\" type=\"button\" value=\"取消\">&nbsp;&nbsp;&nbsp;"
            + "<input id=\"fancyConfirm_ok\" style=\"margin:3px;padding:0px;\" type=\"button\" value=\"送出\"></div></div>",
        'beforeShow': function () {
            jQuery("#fancyconfirm_cancel").click(function () {
                $.fancybox.close();
                callbackNo();
            });

            jQuery("#fancyConfirm_ok").click(function () {
                $.fancybox.close();
                callbackYes();
                var winWidth = ($(window).width()) / 2 - 160;
                $("#LoadingImage").show();

            });
        }
    });
}


function getSizeNum() {
    if ($('#TXTcActID').val() != null
        && $('input:radio:checked[name="selectActCon"]').val() != null
        && $('input:radio:checked[name="Sex"]').val() != null) {
        var stdata = {
            "cActID": $('#TXTcActID').val(),
            "cActConID": $('input:radio:checked[name="selectActCon"]').val(),
            "sex": $('input:radio:checked[name="Sex"]').val()
        };
        $.ajax({
            async: false,
            contentType: "application/json",
            url: '../../page/childactapply/applypage.aspx/getSizeNum',
            type: 'POST',
            data: JSON.stringify({ value: stdata }),
            error: function (xhr) {
                //debugger
                //alert('Ajax request 發生錯誤--' + xhr.responseText);
                //$('#ContentPlaceHolder2_MSG').html('讀取發生錯誤。');
                //$('#ContentPlaceHolder2_MSG').fadeIn();

                $('input:radio[name="Size"][value="S"]').next('label').html("S (額滿)");
                $('input:radio[name="Size"][value="S"]').attr('disabled', 'disabled');
                $('input:radio[name="Size"][value="M"]').next('label').html("M (額滿)");
                $('input:radio[name="Size"][value="M"]').attr('disabled', 'disabled');
                $('input:radio[name="Size"][value="L"]').next('label').html("L (額滿)");
                $('input:radio[name="Size"][value="L"]').attr('disabled', 'disabled');
            },
            success: function (response, item) {
                $('input:radio:checked[name="Size"]').attr("checked", false);
                var myData = JSON.parse(response.d);
                if (myData.Success) {
                    var S = myData.S,
                        M = myData.M,
                        L = myData.L;

                    if (S == 0) {
                        $('input:radio[name="Size"][value="S"]').next('label').html("S (額滿)");
                        $('input:radio[name="Size"][value="S"]').attr('disabled', 'disabled');
                    }
                    else {
                        $('input:radio[name="Size"][value="S"]').next('label').html("S");
                        $('input:radio[name="Size"][value="S"]').removeAttr('disabled');
                    }
                    if (M == 0) {
                        $('input:radio[name="Size"][value="M"]').next('label').html("M (額滿)");
                        $('input:radio[name="Size"][value="M"]').attr('disabled', 'disabled');
                    }
                    else {
                        $('input:radio[name="Size"][value="M"]').next('label').html("M");
                        $('input:radio[name="Size"][value="M"]').removeAttr('disabled');
                    }
                    if (L == 0) {
                        $('input:radio[name="Size"][value="L"]').next('label').html("L (額滿)");
                        $('input:radio[name="Size"][value="L"]').attr('disabled', 'disabled');
                    }
                    else {
                        $('input:radio[name="Size"][value="L"]').next('label').html("L");
                        $('input:radio[name="Size"][value="L"]').removeAttr('disabled');
                    }

                } else {
                    //msg = "執行失敗!" + myData;
                    msg = "資料庫錯誤!";// + Res.Message;
                    //$('#ContentPlaceHolder2_MSG').html(msg);
                    //$('#ContentPlaceHolder2_MSG').fadeIn();
                }
            }
        });
    }
}

function clearStyle() {
    //var all_InputsText = $("#applyfrom input[type=text]");
    //all_InputsText.removeClass("needData");
    $('.needData').removeClass("needData");
}

function allclear() {
    var all_InputsText = $("#applyfrom input[type=text]");
    all_InputsText.val("");
}


function GetAge(strBirthday) {
    var yTime = 365 * 24 * 60 * 60 * 1000,
        bTime = new Date(strBirthday).getTime(),
        nTime = new Date().getTime();
    return Math.floor((nTime - bTime) / yTime);
}

function agree_Age(strBirthday, sAge, eAge) {
    if (checkINT(sAge) || checkINT(eAge))
        return false;	//不符合

    //算出範圍 
    var todayYear = new Date().getFullYear();   //依當下的時間
    //var todayMonth = new Date().getMonth() + 1;

    var startYear = todayYear - eAge,   //8-2010
        endYear = todayYear - sAge; //4-2014
    //ex: 4-8歲 2018-8=2010  2018-4=2014  2010~2014年

    //var startMon = todayMonth - 3,
    //    endMon = todayMonth + 3;

    var aa = strBirthday.split("/");
    //strBirthday 轉西元年
    var realBYear = (parseInt(aa[0]) + 1911);

    //var realDate = (parseInt(aa[0])+1911)+"/"+aa[1]+"/"+aa[2];
    //var StartDate=new Date(startYear+"/"+startMon+"/01"),
    //	endDate = new Date(endYear+"/"+(endMon+1)+"/01"),
    //  birthDate = new Date(realDate);

    //if(birthDate<endDate && birthDate>=StartDate)
    if (realBYear <= endYear && realBYear >= startYear)
        return true;	//符合
    else return false;	//不符合
}
function checkINT(str) {
    var reg = /[^0-9]/;
    if (reg.test(str)) {
        return true;   //不符合
    }
}
// EMAIL
function checkmail(str) {
    var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    //判断
    if (reg.test(str)) {
        return false;   //符合
    }
    return true;	//不符合
}

// 台灣身份證驗證
function checkTwID(id) {
    tab = "ABCDEFGHJKLMNPQRSTUVXYWZIO"
    A1 = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3);
    A2 = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5);
    Mx = new Array(9, 8, 7, 6, 5, 4, 3, 2, 1, 1);

    if (id.length != 10) return false;
    i = tab.indexOf(id.charAt(0));
    if (i == -1) return false;
    sum = A1[i] + A2[i] * 9;

    for (i = 1; i < 10; i++) {
        v = parseInt(id.charAt(i));
        if (isNaN(v)) return false;
        sum = sum + v * Mx[i];
    }
    if (sum % 10 != 0) return false;
    return true;
}

// 居留證驗證
function checkNoTwID(id) {
    if (id.length !== 10) return false;

    if (isNaN(id.substr(2, 8)) || (id.substr(0, 1) < "A" || id.substr(0, 1) > "Z") || (id.substr(1, 1) < "A" || id.substr(1, 1) > "Z")) {
        return false;
    }

    return true;
}
//日期
function checkdate(str) {
    if (str.length >= 10 || str.length < 8) {
        return true;    //不符合
    }
    var aa = str.split("/");
    str = (parseInt(aa[0]) + 1911) + "/" + aa[1] + "/" + aa[2];

    str = str.replace(/[^0-9]/g, "");//  2016/02/02 ->20160202
    if (str.length == 8) {     //  20160202
        var _year = str.substr(0, 4);
        var _month = str.substr(4, 2);
        var _day = str.substr(6, 2);

        //var Day = new Date(_year + '-' + _month + '-' + _day);
        var Day = new Date(_year, _month - 1, _day);
        var chk = new Date(Day.valueOf());
        return !(chk.getFullYear() == _year && (chk.getMonth() + 1) == _month && chk.getDate() == _day);    //不符合
    } else
        return true;    //不符合

}


function intoData() {

    $("input[name=selectActCon][value='2']").attr('checked', true);
    $('#stName').val("羅寶寶");
    $("input[name=Sex][value='M']").attr('checked', true);
    $('#stBirth').val("110/10/10");
    $('#stNumber').val("A3");

    $("input[name=Size][value='M']").attr('checked', true);
    $('#cnote').val("NONONO");
    $('#fName').val("羅爸爸");
    $('#fRelation').val("父子");
    $('#fPhone').val("0987654321");
    $('#fMail').val("eddali@krtco.com.tw");
    $('#fAddress').val("777");

    $('#lName').val("羅爸爸");
    $('#lRelation').val("父子");
    $('#lPhone').val("0987654321");
    $('#lNumid').val("A3");
    $('#lBirth').val("80/03/31");



}