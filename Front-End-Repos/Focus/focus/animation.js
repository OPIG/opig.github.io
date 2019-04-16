var Animation = {
    i: 0,
    count: 0,
    flag: 0,
    Run: function () {
        Animation.Indexfocus(); //Ê×Ò³½¹µãÍ¼
        Animation.count = $("#Home_A_B .bigImg_Box li").length;
    },
    Indexfocus: function () {
        $(".pic-news .tab a").live("mouseover", function () {
            var index = $(this).index();
            $(this).addClass("e").siblings().removeClass("e");
            $(".bigImg_Box li").eq(index).attr("class", "active").siblings("li").attr("class", "noactive");
            $("#Home_A_B").siblings(".font").find("h3 a").html($(".bigImg_Box li").eq(index).attr("title"));
            $("#Home_A_B").siblings(".font").find("p").html($(".bigImg_Box li").eq(index).attr("h"));
        });

        var right = setInterval(function () { Animation.Roll(); }, 4000);
        $(".bigImg_Box li").live("mouseover", function () {
            clearInterval(right);
        });
        $(".bigImg_Box li").live("mouseleave", function () {
            right = setInterval(function () { Animation.Roll(); }, 4000);
        });
    },
    Roll: function () {
        if (Animation.flag == 0) {
            Animation.i++;
        }
        else {
            Animation.i--;
        }
        if (Animation.i == Animation.count || Animation.i > Animation.count) {
            Animation.i = Animation.count - 2;
            Animation.flag = 1;
        }
        if (Animation.i == 0 || Animation.i < 0) {
            Animation.i = 0;
            Animation.flag = 0;
        }
        $(".pic-news .tab a").eq(Animation.i).mouseover();
    }
}