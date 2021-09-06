function draw() {
	 var canvas = document.getElementById("myCanvas"), 
                context = canvas.getContext("2d");
            context.beginPath();
            context.moveTo(30, 20);
            context.lineTo(150, 140);
            context.lineTo(250, 30);
            context.closePath();
            context.strokeStyle = "red";
            context.stroke();   
}
