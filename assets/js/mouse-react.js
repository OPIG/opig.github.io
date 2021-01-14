class MouseReact {
  constructor(options={}) {
    this.Toast = ['💞和平', '🎈明主', '🎮自由', '💰进取', '努力', '奋斗']
    this.Color = ['pink', 'seagreen', 'lightblue', '#4371a6']
    this.colorArr = [
      "red",
      "orange",
      "yellow",
      "green",
      "cyan",
      "blue",
      "purple"
    ]
  }

  getMousePos(event) {
    let e = event || window.event
    return {
      x: e.pageX,
      y: e.pageY
    }
  }

  onClick(e) {
    let {x,y} = this.getMousePos(e);
    let id = Math.floor(Math.random() * 99)
    $('body').append(
      `<div class="test test${id}" 
        style="color:${this.Color[Math.floor(Math.random() * this.Color.length)]}">
        ${this.Toast[Math.floor(Math.random() * this.Color.length)]}
      </div>`
      )
    $(`.test${id}`).css({ 'left': x - 80, 'top': y })
    .animate({ top: y - 100, opacity: 0, fontSize: 10 }, 1000);
    setTimeout(() => {
      $(`.test${id}`).remove()
    }, 1000)
  }

  onMouseMove(e) {
    // let mLeft = e.pageX;
    // let mTop = e.pageY;
    let {x:mLeft, y:mTop} = this.getMousePos(e)
    let nowColor = this.colorArr[Math.floor(Math.random() * 7)];
    let randomNum = Math.ceil(Math.random() * 2);
    let randomNums = Math.ceil(Math.random() * 500);
    let html = $(`<span style='color:${nowColor}'' class='start'>*</span>`);
    html.css({ left: mLeft - 40, top: mTop - 10 }).animate(
      {
        opacity: 0,
        left: randomNum === 1 ? mLeft + randomNums : mLeft - randomNums,
        top: mTop + 1000,
      },
      6000
    );
    $('body').append(html);
    setTimeout(() => {
      html.remove();
    }, 1000);
  }
}

export default MouseReact
