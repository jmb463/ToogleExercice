var colorTeal = "rgb(57, 204, 204)";
var boxCounter = 4;

$(document).ready(function() {

	$("#button_add_box").click(function(){
		addBox();
	});

	$("#button_toggle_colors").click(function(){
		addColor();
	});

	$("#button_toggle_roundedges").click(function(){
		addRoundedBorders();
	});

});

function addBox(){

	var box = document.createElement("div");
	var attr = document.createAttribute("id");
	var outline = document.createAttribute("class");


	attr.value = "box" + boxCounter;
	outline.value = "box outlined";

	box.setAttributeNode(attr);
	box.setAttributeNode(outline);


	boxCounter++;

	document.getElementById("boxes").appendChild(box);
}

function addColor(){
	$(".outlined").each(function () {
  
		if ($(this).css('background-color') == colorTeal) {
    		$(this).css('background-color', '');
		}

		else {
    		$(this).css('background-color', colorTeal);
		}

	  });
}

function addRoundedBorders(){
	for(let i = 1; i <boxCounter; i++){

			if($("#box" + i).hasClass("round-edge")){
				$("#box" + i).removeClass("round-edge");
			}

			else{
				$("#box" + i).addClass("round-edge");
			
			}
		
	}
	
}

