var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL('bablu23456.jpg', function(Img) {
    block_image_object = Img;

    block_image_object.scaleToWidth(700);
    block_image_object.scaleToHeight(510);
    block_image_object.set({
    top:0,
    left:0
    });
    canvas.add(block_image_object);
    });
	
}

function playVideo()
<iframe width="900" height="506"
 src="https://www.youtube.com/embed/_z-1fTlSDF0" 
 title="YouTube video player" 
 frameborder="0"
  allow="accelerometer; 
autoplay; 
clipboard-write; 
encrypted-media; 
gyroscope; 
picture-in-picture"
 allowfullscreen></iframe>
