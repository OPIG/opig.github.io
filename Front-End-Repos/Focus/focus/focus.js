// JavaScript source code
$(function () {
    $("#Home_A_B").siblings(".font").find("a").html($("#Home_A_B li").eq(0).attr("title"));
    $("#Home_A_B").siblings(".font").find("p").html($("#Home_A_B li").eq(0).attr("h"));
    var count = $("#Home_A_B .bigImg_Box li").length;
    var html = "";
    for (var i = 1; i < count + 1; i++) {
        html += '<a href="javascript://">' + i + '</a>';
    }
    $(".pic-news .tab").html(html);
    $(".pic-news .tab").find("a").eq(0).addClass("e").siblings().removeClass("e");
    $(".bigImg_Box li:eq(0)").attr("class", "active");
    Animation.Run();

})
