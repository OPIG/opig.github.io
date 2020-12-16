class MouseReact {
  constructor(options) {
    this.Toast = ['💞和平', '🎈明主', '🎮自由', '💰进取']
    this.Color = ['pink', 'seagreen', 'lightblue', '#4371a6']
    this.colorArr = [
      "red",
      "orange",
      "yellow",
      "green",
      "cyan",
      "blue",
      "purple",
    ]
  }

  getMousePos(e) {
    const e = event || window.event

    return {
      x: e.pageX,
      y: e.pageY
    }
  }

  onClick(el = "body") {
    let location = this.getMousePos();
    let id = Math.floor(Math.random() * 99)
    $(el).append(`<div class="test test${id}" style="color:${Color[Math.floor(Math.random() * Color.length)]}">${Toast[Math.floor(Math.random() * Color.length)]}</div>`)
    $(`.test${id}`).css({ 'left': location.x - 20, 'top': location.y }).animate({ top: location.y - 100, opacity: 0, fontSize: 10 }, 1000);
    setTimeout(() => {
      $(`.test${id}`).remove()
    }, 1000)
  }

  onMouseMove(el = "body") {
    let mLeft = e.pageX;
    let mTop = e.pageY;
    let nowColor = this.colorArr[Math.floor(Math.random() * 7)];
    let randomNum = Math.ceil(Math.random() * 2);
    let randomNums = Math.ceil(Math.random() * 500);
    let html = $(`<span style='color:${nowColor}'' class='start'>*</span>`);
    html.css({ left: mLeft - 10, top: mTop - 10 }).animate(
      {
        opacity: 0,
        left: randomNum === 1 ? mLeft + randomNums : mLeft - randomNums,
        top: mTop + 1000,
      },
      6000
    );
    $(el).append(html);
    setTimeout(() => {
      html.remove();
    }, 1000);
  }
}

export default MouseReact
