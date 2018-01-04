articlecontent = [
["“The Stage” Deluxe Edition Available Now!", "Dec 22nd, 2017"],
["M. Shadows On SiriusXM’s Octane.", "Dec 22nd, 2017"],
["“Hail To The King” Live Acoustic Video.", "Dec 20th, 2017"],
["Revolver Interviews M. Shadows.", "Dec 19th, 2017"],

]

window.onload = function() {
	var loop = 0;
	var articlecount = articlecontent.length;
	while( loop < articlecount) {
		var array = [] = articlecontent[loop]
		var text = "<div class = 'articlebody'> <div class = 'imagewrapping'> <div class = 'imagecontainer'>  <img src='assets/articleimage/article"+loop+".png'>  </div> <div class='overlay'></div> <div class='button' onclick='displayarticle("+loop+")'><a href='#'>Read More</a></div> </div>  <div class='textcontainer'> <h1>"+array[0]+"</h1> <p>"+array[1]+"</p> </div> </div>"     
		$("#article-containers").append(text);
 		 loop++;              		
	}
}
		
function articlesize(value){
     $('.articlebody').css('width',value + 'px');
	 
}

function articlefontsize(value){
     $('.articlebody p').css('font-size',value + 'px');	 
	 $('.articlebody h1').css('font-size',value + 'px');
}

function displayarticle(articlecount) {
	//Array which stores information about the article choosen
	var array = [] = articlecontent[articlecount]
	
	//Removes all articles	
		$('.articlebody').css('display','none');
	
	//Grabs Header 
		$('.innerarticleheader').css('display','inline-block');
		document.getElementById("section1").innerHTML = array[0];
		document.getElementById("section2").innerHTML = "Posted:"+array[1];
		console.log(array[0]);
	//Grabs the text 
		$('#innerarticletext').css('display','inline-block');	
	    $("#innerarticletext").load("Assets/articletext/article"+articlecount+".txt");
		console.log("Displaying Article");
	
	//Display Recent
		$('.recentarticle').css('display','inline-block');
		$('#innerarticlerecent').css('display','inline-block');
	
	//Display the back button 
		$('#textboxback').css('display','inline-block');
		
	//Remove top 
		$('#top').css('height','50px');
		
	       
	$('#article-containers').css('height','auto');
	
	
	
	
	
	var div = document.getElementById('innerarticletext');
	console.log(articlecount);
	
}

