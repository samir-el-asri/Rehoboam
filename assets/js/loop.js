$(function(){
    var i = 24;
    var wh = 20;
    var whI = 10;
    var mtl = wh/2;
    var color = "black";
    var animationDelay = 0;
    while(i > 0){
        // Adds new circle
        var div = $("<div>");
        $(div).addClass("loading-circle");
        $(div).addClass("circle-"+color);
        $(div).css({"width":wh+"px", "height":wh+"px", "margin":"-"+mtl+"px auto auto -"+mtl+"px", "animation-delay":animationDelay+"ms"});
        $("#loading-screen").append(div);
        
        // Handles loop parameters' incrementation
        i--;
        wh += whI;
        animationDelay += 60;
        mtl = wh/2;
        if(i%2==0)
            color = "red";
        else
            color = "black";
    }
});