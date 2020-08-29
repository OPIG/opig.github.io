```
.ANIMATION(showAndHide, 2s);//attention to the ;

             //mix function            
            .ANIMATION(@name,@time:.8s, @infinite:infinite){
                -moz-animation:@name @time  @infinite;
                -o-animation:@name @time  @infinite;
                -webkit-animation:@name @time  @infinite;
                -ms-animation:@name @time @infinite;
                animation:@name @time @infinite;
                .KEYFRAME(@name,{
                    0%{transform:scale(0);}
                    100%{transform:scale(1);}
                });//attention to the ;
            }

            .KEYFRAME(@name,@frames){
                @-webkit-keyframes @name {@frames();//attention to the ;}
                @-moz-keyframes @name {@frames();//attention to the ;}
                @-o-keyframes @name {@frames();//attention to the ;}
                @-ms-keyframes @name {@frames();//attention to the ;}
                @keyframes @name {@frames();//attention to the ;}
            }

```
