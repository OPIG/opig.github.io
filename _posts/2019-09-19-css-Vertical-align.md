<!Doctype html>
<html>

<head>
    <title>Verticle align demo</title>
    <meta charset="utf-8" />
    <style type="text/css">
        .wrap {
            width: 1000px;
            margin: 80px auto;
            position: relative;
            zoom: 1;
        }

        .operate-box {
            position: absolute;
            width: 25%;
            left: 0;
            border-right: 1px dashed #a0b3d6;
        }

        .show-box {
            background-color: pink;
            width: 70%;
            margin-left: calc(25% + 10px);
            line-height: 200px;
            padding: 20px;
        }

        .text-dot {
            width: 4px;
            height: 4px;
            display: inline-block;
            background: red;
        }
    </style>
</head>

<body>
    <div class="wrap">
        <div class="operate-box">
            <p><strong>修改默认参数：</strong></p>
            <p>最外框背景色：<select id="outBoxColor">
                    <option value="blue">蓝色&nbsp;</option>
                    <option value="red">红色</option>
                    <option value="gray">灰色</option>
                    <option value="green">绿色</option>
                    <option value="yellow">黄色</option>
                    <option value="orange">橙色</option>
                    <option value="pink" selected="selected">粉色</option>
                </select>
            </p>
            <p>内容的行高为：<input id="lineHeight" type="text" value="200" size="4"> px</p>
            <p>图片垂直对齐：<select id="imgVerAlign">
                    <option value="middle" selected="selected">middle</option>
                    <option value="bottom">bottom</option>
                    <option value="text-bottom">text-bottom</option>
                    <option value="top">top</option>
                    <option value="text-top">text-top</option>
                    <option value="baseline">baseline</option>
                </select></p>
            <p>小方点背景色：<select id="dotBgColor">
                    <option value="black">黑色&nbsp;</option>
                    <option value="red" selected="selected">红色</option>
                    <option value="gray">灰色</option>
                    <option value="green">绿色</option>
                    <option value="yellow">黄色</option>
                    <option value="orange">橙色</option>
                    <option value="pink">粉色</option>
                </select>
            </p>
            <p>方点垂直对齐：<select id="dotVerAlign">
                    <option value="middle">middle</option>
                    <option value="bottom" selected="selected">bottom</option>
                    <option value="text-bottom">text-bottom</option>
                    <option value="top">top</option>
                    <option value="text-top">text-top</option>
                    <option value="baseline">baseline</option>
                </select></p>
                <p>文字垂直对齐：<select id="textVerAlign">
                        <option value="middle">middle</option>
                        <option value="bottom" selected="selected">bottom</option>
                        <option value="text-bottom">text-bottom</option>
                        <option value="top">top</option>
                        <option value="text-top">text-top</option>
                        <option value="baseline">baseline</option>
                    </select></p>
            <p>文字框背景色：<select id="textBoxBg">
                    <option value="black">黑色&nbsp;</option>
                    <option value="red">红色</option>
                    <option value="gray">灰色</option>
                    <option value="green">绿色</option>
                    <option value="yellow">黄色</option>
                    <option value="orange">橙色</option>
                    <option value="pink">粉色</option>
                </select>
            </p>
            <p>文字大小修改：<input id="fontSize" type="text" value="20" size="4"> px</p>
        </div>
        <div class="show-box" id="showBox">
            <span id="lineBox" class="line-box">
                <img id="testImage" src="https://image.zhangxinxu.com/image/study/s/s128/mm10.jpg">
                <span id="testDot" class="text-dot"></span>
                <span id="testText">this is my words!</span>
                <span style="vertical-align:bottom;">relative words!</span>
                this is static workd!
            </span>
        </div>
    </div>
    <script type="text/javascript">

        var $ = function (id) {
            return document.getElementById(id);
        }
        var fn = {
            fnBgChange: function (o, target) {
                o.onchange = function () {
                    target.style.backgroundColor = o.value;
                }
            },
            fnFontChange: function (o, target) {
                o.onkeyup = function () {
                    var v = parseInt(o.value, 10).toString();
                    target.style.fontSize = v + "px";
                }
            },
            fnLineHChange: function (o, target) {
                o.onkeyup = function () {
                    var v = parseInt(o.value, 10).toString();
                    target.style.lineHeight = v + "px";
                }
            },
            fnVerChange: function (o, target) {
                o.onchange = function () {
                    target.style.verticalAlign = o.value;
                }
            }
        }
        fn.fnBgChange($("outBoxColor"), $("showBox"));
        fn.fnBgChange($("dotBgColor"), $("testDot"));
        fn.fnBgChange($("textBoxBg"), $("lineBox"));
        fn.fnLineHChange($("lineHeight"), $("showBox"));
        fn.fnFontChange($("fontSize"), $("testText"));
        fn.fnVerChange($("dotVerAlign"), $("testDot"));
        fn.fnVerChange($("imgVerAlign"), $("testImage"));
        fn.fnVerChange($("textVerAlign"),$("testText"));
    </script>
</body>

</html>
