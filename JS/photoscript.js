window.onload = function () {
	pictures(10);
	
}

function pictures(pics) {
	var newWidth = pics / 5;
	var tag = document.getElementById("main-container");
	//document.body.innerHTML += '<style> .imgholder { width: ' + newWidth + '%;}';
	for (i = 0; i < pics; i++)
	{	
		tag.innerHTML += '<div style="width: 250px; height: 250px; display:inline-block; margin: 0.5px; float: left; display: flex;" class="imgholder" ><img src="Assets/photoimg/picture' + i + '.jpg"></div>'		
	}	
}


