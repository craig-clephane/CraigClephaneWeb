window.onload = function () {
	pictures(21);	
}

function pictures(pics) {
	var tag = document.getElementById("content");
	var gal = document.getElementById("gallery");
	var galcon = document.getElementById("gallery-content");
	var count = 1;
	
	for (i = 1; i < pics; i++)
	{	
	
	var ran = Math.floor(Math.random() * 9) + 5;
		tag.innerHTML += '<div style="display: inline-block;" class="imgholder" onclick="openGallery(),showgallery('+i+')"><img src="Assets/photoimg/picture' + i + '.jpg"></div>';	 
		console.log(ran);   	
	}	
	for(i = 1; i < pics; i++)
	{
	text = '<div class="slide"><div class="number">'+count+'/'+pics+'</div><img src="Assets/photoimg/picture' + i + '.jpg"></div>'
	$("#gallerycontent").append(text);
	count++
	console.log(i);
	
	}
	
	backprev = ' <a class="prev" onclick="plusSlides(-1)">&#10094;</a> <a class="next" onclick="plusSlides(1)">&#10095;</a> <div class="caption-container"> <p id="caption"></p></div>'
	
	$("#gallerycontent").append(backprev);
	
	
}

function imagesize(value) {
	 $('.imgholder').css('width',value + '%');


	if(value == 33)
	{
		var i = document.getElementById("myRange");
		i.value = 33;
		
	}
}

function openGallery() {
  document.getElementById('gallery').style.display = "block";
  console.log("displaying image gallery");
}
function closeGallery() {
  document.getElementById('gallery').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function showgallery(n) {
  showSlides(slideIndex = n);
}


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 0) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

$(".imgholder").click(function() {
  // not gonna work
  $(this).removeClass("run-animation").addClass("run-animation");
});



AOS.init();