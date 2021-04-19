---

---

{% raw %}
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <!-- import Vue before Element -->
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <!-- import CSS -->
  <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
  <!-- import JavaScript -->
  <script src="https://unpkg.com/element-ui/lib/index.js"></script>

</head>

<body>
  <div id="app">
    <el-date-picker v-model="year" type="date" :picker-options="pickerOptions" placeholder="选择日期" format="yyyy-MM-dd"
      @change="chooseYear">
    </el-date-picker>

  </div>
  <script>
    new Vue({
      el: '#app',
      data: function () {
        return {
          year: '',
          pickerOptions: {
            disabledDate: function (time) {
              let yesterday = Date.now() - 24 * 60 * 60 * 1000
              return time.getTime() > yesterday
            }
          }
        }
      },
      methods: {
        chooseYear: function () { }
      }
    })
  </script>
</body>

</html>

{% endraw %}