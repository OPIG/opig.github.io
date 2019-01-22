new Vue({
	el:"#app",
	data:{
		healthStatus: 100,
		hurtData: 10,
		ended:  false
	},
	methods:{
		reduceHealth:function(){
			this.healthStatus -= this.hurtData;
			if(this.healthStatus<=0){
				this.ended = true;
			}
		},
		restart: function(){
			this.healthStatus = 100;
			this.ended = false;
		}
	}
})