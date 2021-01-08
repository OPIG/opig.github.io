```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="https://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
</head>
<style>
  body{
    width: 100%;
    min-height: 800px;
    height: 100%;
    position: relative;
    cursor: pointer;
  }
  .test{
    position: absolute;
  }
  .start{
    position: absolute;
  }

</style>
<body>
  
  
</body>
<script type="text/javascript">
  const Toast = ['💞和平', '🎈明主', '🎮自由', '💰进取']
    const Color = ['pink', 'seagreen', 'lightblue', '#4371a6']
    function getMousePos(event) {
      var e = event || window.event;
      return {
        x: e.pageX,
        y: e.pageY
      }
    }
    $("body").on('click', function (e) {
      var location = getMousePos();
      let id = Math.floor(Math.random() * 99)
      $(this).append(`<div class="test test${id}" style="color:${Color[Math.floor(Math.random() * Color.length)]}">${Toast[Math.floor(Math.random() * Color.length)]}</div>`)
      $(`.test${id}`).css({ 'left': location.x - 20, 'top': location.y }).animate({ top: location.y - 100, opacity: 0, fontSize: 10 }, 1000);
      setTimeout(() => {
        $(`.test${id}`).remove()
      }, 1000)
    })
    
    // 鼠标动画
    $("body").on("mousemove", function (e) {
      var mLeft = e.pageX;
      var mTop = e.pageY;
      var colorArr = [
        "red",
        "orange",
        "yellow",
        "green",
        "cyan",
        "blue",
        "purple",
      ];
      var nowColor = colorArr[Math.floor(Math.random() * 7)];
      var randomNum = Math.ceil(Math.random() * 2);
      var randomNums = Math.ceil(Math.random() * 500);
      var html = $(`<span style='color:${nowColor}'' class='start'>*</span>`);
      html.css({ left: mLeft - 10, top: mTop - 10 }).animate(
        {
          opacity: 0,
          left: randomNum === 1 ? mLeft + randomNums : mLeft - randomNums,
          top: mTop + 1000,
        },
        6000
      );
       $("body").append(html);
      setTimeout(() => {
        html.remove();
      }, 1000);
      })
  </script>
</html>

```
