var btnText1 = $.trim($('#btn1').html()), btnText2 = $.trim($('#btn2').html()), layerIndex;

function loading() {
    layerIndex = layer.open({ type: 2, shadeClose: false, content: '加载中' });
}

function sysAlert(msg) {
    $.alertMsg(1, msg);
}

function postSecondData() {
    $('#btn2').html(btnText2);
    window.location.href = "http://d.95jr.com/zhdk/wap/comm/result/result.aspx";

    /*
    var options = {
        data: { a: $('#a').val(),
            b: $('#b').val(),
            c: $('#c').val(),
            d: $('#d').val(),
            z: $('#z').val(),
            name: $('#name').val(),
            phone: $('#phone').val(),
            src: $('#src').val(),
            isusedwld: $('[name="isUsedWld"]:checked').val(),
            NewRecentCredit: $('[name="recentCredit"]:visible').length > 0 ? $('[name="recentCredit"]:checked').val() : 0,
            loanamountString: $('[name="loanamountString"]').val(),
            IsNeedYwx: $('#ywxReceiveState').val(),
            ResultRenderType: "page"
        },
        success: function (result) {
            if (result.Ret == 0) {
                window.location.href = "/zhdk/wap/comm/result/result.aspx?z=" + $('#z').val();
            } else {
                sysAlert(result.Msg);
            }
            $('#btn2').html(btnText2);
        }
    };
    $("#form2").ajaxSubmit(options);
    */
}


$(document).ready(function () {
    
    //移动端菜单切换
    $(document).ready(function(){

        $(".navHam").bind("click",
        function(){
            $(".nav").slideToggle(200)
        })

    });

    $("#btn1").bind("click",
        function(){
            $("#regist").addClass("hide");
            $("#regist2").removeClass("hide")
        }
    )

    $('.label_radio input:checked,.label_radio-2 input:checked').parent().addClass('r_on'); //默认选中初始化
    $('.label_radio input,.label_radio-2 input').click(function () {
        $(this).parent().parent().parent().find('label').removeClass('r_on');
        $(this).parent().addClass('r_on');
    });

    function checkPhone() {
        var mobile = $('#phone').val();
        if ($.isEmpty(mobile) || mobile == "请输入您的手机号") {
            sysAlert('请输入手机号码！');
            return false;
        }
        if (!$.isMobile(mobile)) {
            sysAlert('手机号码格式不正确，请输入正确的11位号码！');
            return false;
        }
        return true;
    }

    //单选
    //复选
    $('.label_check input:checked').parent().addClass('c_on'); //默认选中初始化
    $('.label_check input').click(function () {
        if ($(this).prop('checked')) {
            $(this).parent().addClass('c_on');
        } else {
            $(this).parent().removeClass('c_on');
        }
    });

    //职业控制不同的详细表单
    $('input[name="careerType"]').click(function (e) {
        var clickVal = parseInt($(this).val());
        var array = new Array(new Array(0, 1, 2, 3), new Array(1, 4), new Array(1, 3)); //KEY代表职业的VALUE值，VALUE代表LI的的索引集合

        //控制箭头位置
        $('#careerBox>.up>b').attr("class", 'b' + clickVal);
        //控制显示的Li
        $('.box2 li').hide();
        for (x in array[clickVal]) {
            $('.box2 li').eq(array[clickVal][x]).show();
        }
        $('#careerBox').show();
    });

    //信用控制不同的详细表单
    $('#isWld label').click(function (e) {
        var radioVal = $(this).children("input").val()
        if (radioVal=="N") {
            $('#liJb').show()
        }
            else{
                $('#liJb').hide()
                $('#creditBox2').hide()
            }
        ;
    });
    //信用控制不同的详细表单
    $('#liJb label').click(function (e) {
        var radioVal = $(this).children("input").val()
        if (radioVal=="N") {
            $('#creditBox2').show()
        }
            else{
                $('#creditBox2').hide()
            }
        ;
    });



}); 
