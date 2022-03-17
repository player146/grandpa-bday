var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
fabric.Image.fromURL('https://drive.google.com/file/d/1wbsntPL2RRd7ksMXm7gMNNnRBkDLRDzp/view?usp=sharing' , function(Img) {
    block_image_object = Img ;

    block_image_object.scaleToWidth(700) ;
    block_image_object.scaleToHeight(510) ;
    block_image_object.set({top:0,left:0 })
});
//canvas.add(block_image_object)	;
};

function playSound(){
	x.play() ;
}
