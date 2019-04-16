$(function () {
    //画一条线
    //var canvas = document.getElementById("canvas");
    //var ctx = canvas.getContext("2d");
    //ctx.moveTo(0.5, 10.5);
    //ctx.lineTo(200.5, 100.5);
    //ctx.lineTo(50.5, 100.5);
    //ctx.lineTo(0.5, 10.5);
    //ctx.stroke();
    /////////////////-----------------------------------
    //var canvas =document.getElementById("canvas");
    //var ctx = canvas.getContext("2d");
    //ctx.strokeRect(20.5, 20.5, 100, 100);
    //ctx.fillRect(20.5, 20.5, 100, 100);
    //ctx.fillText('你想说what', 50, 50);
    //ctx.font="italic bold 40px  Arial"
    //ctx.textBaseline = "hanging";
    //ctx.fillStyle = 'red';
    //ctx.textAlign = "left";
    //ctx.fillText('你想说what', 0, 10);
    //ctx.strokeStyle = 'green';
    //ctx.shadowOffsetX = 50;
    //ctx.shadowOffsetY = 50;
    //ctx.shadowBlur = 1;
    //ctx.shadowColor = '#900';
    //ctx.strokeText('哈哈哈', 0, 60);
    //var text='测试宽度文本';
    //var length = ctx.measureText(text).width;
    //ctx.fillText('宽度为：' + length, 20, 50);

    //var canvas = document.getElementById("canvas");
    //var ctx = canvas.getContext("2d");
    //ctx.beginPath();
    //ctx.strokeStyle = 'red';
    //ctx.moveTo(10, 10);
    //ctx.lineTo(100, 100);
    //ctx.lineTo(50, 150);
    //ctx.lineTo(10, 10);
    //ctx.closePath();
    //ctx.stroke();


    ////第二个三角
    //ctx.beginPath();
    //ctx.strokeStyle = 'green';
    //ctx.moveTo(150, 50);
    //ctx.lineTo(200, 100);
    //ctx.lineTo(150, 200);
    //ctx.lineTo(150, 50);
    //ctx.closePath();
    //ctx.stroke();


    //var timer = null;
    //var num = 1;
    //ctx.beginPath();
    //ctx.moveTo(150, 50);
    //ctx.storeStyle = 'gold';
    //setInterval(function () {
    //    if (num == 100) {
    //        clearInterval(timer);
    //        num = 1;
    //    } else {
    //        num++;
    //    }
    //    ctx.lineTo(150, 100 + num * 2);
    //    ctx.lineWidth = num;
    //    ctx.stroke();
    //    ctx.closePath();
    //}, 100);
    //var canvas = document.getElementById("canvas");
    //var ctx = canvas.getContext("2d");
    //ctx.beginPath();
    //ctx.moveTo(100, 20);
    ////ctx.lineTo(100, 20);
    //ctx.strokeStyle = 'red';
    //ctx.arcTo(200, 20, 200, 100, 30);
    //ctx.stroke();
    //ctx.beginPath();
    //ctx.strokeStyle = 'blue';//最左边的点
    //ctx.moveTo(100, 20);//最左边的点
    //ctx.lineTo(100, 22);//最左边的点
    //ctx.stroke();
    //ctx.beginPath();
    //ctx.strokeStyle = 'blue';
    //ctx.moveTo(200, 20);//最上面的点--圆弧起点
    //ctx.lineTo(200, 24);//最上面的点---圆弧起点
    //ctx.stroke();
    //ctx.beginPath();
    //ctx.strokeStyle = 'blue';
    //ctx.moveTo(200, 100);//最下面的点
    //ctx.lineTo(200, 104);//最下面的点
    //ctx.stroke();



    //ctx.beginPath();
    //ctx.strokeStyle = 'red';
    //ctx.arc(100, 160, 80, 90 * Math.PI / 180,180 * Math.PI / 180, false);
    //ctx.stroke();
    //ctx.beginPath();
    //ctx.moveTo(100, 160);//标注圆心大概位置
    //ctx.lineTo(100, 161);//标注圆心大概位置
    //ctx.lineWidth = 6;//标注圆心大概位置
    //ctx.strokeStyle = 'red';
    //ctx.stroke();
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    //ctx.moveTo(50, 50);
    //ctx.lineTo(60, 120);
    //ctx.lineTo(200, 80);
    //ctx.stroke();
    //ctx.beginPath();
    //ctx.moveTo(50, 50);
    //ctx.quadraticCurveTo(100, 120, 200, 80);
    //ctx.strokeStyle = "red";
    //ctx.stroke();
    //ctx.moveTo(20, 20);
    //ctx.bezierCurveTo(20, 100, 200, 10, 200, 20);
    //ctx.stroke();
    ctx.moveTo(20,150);;
    ctx.bezierCurveTo(20, 50, 150, 50, 150, 150);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle='red';
    ctx.arc(85, 150, 65, 0, 180 * Math.PI / 180, false);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.arc(85, 150, 65, 0, 180 * Math.PI / 180, true);
    ctx.stroke();
})