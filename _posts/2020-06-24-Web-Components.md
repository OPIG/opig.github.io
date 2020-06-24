Web Components 入门实例教程[http://www.ruanyifeng.com/blog/2019/08/web_components.html]

Web Components Tutorial for Beginners[https://www.robinwieruch.de/web-components-tutorial]

Custom Elements v1: Reusable Web Components[https://developers.google.com/web/fundamentals/web-components/customelements]


```html
<!Doctype html>

<html>
<head>
	<meta name ="viewport" content="width=device-width">
	
</head>
<body>
	<user-card
  image="https://semantic-ui.com/images/avatar2/large/kristy.png"
  name="User Name"
  email="yourmail@some-email.com"
></user-card>

<template id="userCardTemplate">
  <style>
   :host {
     display: flex;
     align-items: center;
     width: 450px;
     height: 180px;
     background-color: #d4d4d4;
     border: 1px solid #d5d5d5;
     box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
     border-radius: 3px;
     overflow: hidden;
     padding: 10px;
     box-sizing: border-box;
     font-family: 'Poppins', sans-serif;
   }
   .image {
     flex: 0 0 auto;
     width: 160px;
     height: 160px;
     vertical-align: middle;
     border-radius: 5px;
   }
   .container {
     box-sizing: border-box;
     padding: 20px;
     height: 160px;
   }
   .container > .name {
     font-size: 20px;
     font-weight: 600;
     line-height: 1;
     margin: 0;
     margin-bottom: 5px;
   }
   .container > .email {
     font-size: 12px;
     opacity: 0.75;
     line-height: 1;
     margin: 0;
     margin-bottom: 15px;
   }
   .container > .button {
     padding: 10px 25px;
     font-size: 12px;
     border-radius: 5px;
     text-transform: uppercase;
   }
     </style>
  
  <img class="image">
  <div class="container">
    <p class="name"></p>
    <p class="email"></p>
    <button class="button">Follow John</button>
  </div>
</template>
   <script src="main.js" type="text/javascript"></script>
</body>

</html>


```javascript

class UserCard extends HTMLElement {
  constructor() {
    super();
    var shadow = this.attachShadow( { mode: 'closed' } );//使用shadow后页面通过document.querySelector("")获取不到该元素， 去掉则可以
    
    var templateElem = document.getElementById('userCardTemplate');
    var content = templateElem.content.cloneNode(true);
    content.querySelector('img').setAttribute('src', this.getAttribute('image'));
    content.querySelector('.container>.name').innerText = this.getAttribute('name');
    content.querySelector('.container>.email').innerText = this.getAttribute('email');

    shadow.appendChild(content);
	
  //给button添加点击事件
	this.$button = shadow.querySelector("button");
	this.$button.addEventListener('click',()=>{
		alert("follow John")
	})
  }
}
window.customElements.define('user-card', UserCard);

