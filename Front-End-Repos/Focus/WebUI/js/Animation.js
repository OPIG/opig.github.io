$(function () {
    $(".slimImg_Box a").live("mouseover", function () {
        var index = $(this).parent("li").index();//获取鼠标悬浮标签的序号
        $(".checkBox").stop(true, false).animate({ "top": ($(this).height() + 12) * index + "px" });
        $(".bigImg_Box li").eq(index).attr("class", "active").siblings("li").attr("class", "noactive");//配合css添加上一些效果
        $("#Home_A_B").siblings(".font").find("h3 a").html($(".bigImg_Box li").eq(index).attr("title"));//拿到当前图片的标题
        $("#Home_A_B").siblings(".font").find("p").html($(".bigImg_Box li").eq(index).attr("h"));//拿到当前图片的描述
    });
})
