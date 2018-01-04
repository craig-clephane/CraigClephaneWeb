//Log which identifys that the page was loaded.
console.log("Themes Page loaded");

//Arrays which are used to store the themed information in order. These are placed before the local storage because 
//the local storage will need to read these inorder to complete it's function.

//Theme array. This array stores each style each theme will have. This is stored in order to elementArray, and stylearray 
//because the information will go through a loop later on within the program.
ThemeArray = [
["Standard", 		"black",   "black",   "black"],
["Exist", 			"#330033", "#330033", "#4d004d"],
["City of Evil", 	"#660000", "#660000", "#4d0000"],
["Nightmare",        "#141e27", "#141e27", "#0f161d"],
]	

//elementArray stores all the id and class names in order to other arrays.
elementArray = 
[					'#navbar','.page-footer','.social-bar']

//Style Array stores all the style names which will be used in order to other arrays.
styleArray = 
[					'background','background','background']

	
//Local storage is loaded next to first to see whether the page can load an existing theme which the user picked on the previous page
// or last time they loaded it.
if(localStorage && localStorage.getItem('Theme'))
{
	var theme = localStorage.getItem('Theme');
	console.log("Local Stroage Detected theme : "+theme);	
	var elementArraycount = 0;
	var styleArraycount = 0;
	var themeArraycount = 1;
	var loops = 4;
	
	storageloop();
	function storageloop () {
	for(var i=0; i<loops; i++)
	{		
	console.log("theme changes "+i);
	themeArraypicked = [] = ThemeArray[theme];
	$(elementArray[elementArraycount]).css(styleArray[styleArraycount],themeArraypicked[themeArraycount]);
	console.log(elementArray[elementArraycount])
		
	elementArraycount++;
	styleArraycount++
	themeArraycount++	
	}
	}
	
}
		
	
function themechange(theme) {
	console.log("Theme Choicen is "+theme);	
	
//	var navbackground;
	//var pagefooterbackground;
	//var socialbarbackground;
	
	//if (theme == "Standard") {
	//	navbackground = "black";	
	//	pagefooterbackground = navbackground;
	//	socialbarbackground = "black";
	//}
	
	//if (theme == "Exist"){
	//	navbackground = "#330033";
	//	pagefooterbackground = navbackground;
//		socialbarbackground = "#4d004d";
	//}
//	if (theme == "City of Evil"){
	//
	//	pagefooterbackground = navbackground;
	//}
	//if (theme == "Nightmare"){
	//
	//	pagefooterbackground = navbackground;
	//}
	//localStorage.setItem("navbackground", navbackground);
	//Grabbing all the classes, IDs, and images which will be changed within the theme selector
	
	var elementArraycount = 0;
	var styleArraycount = 0;
	var themeArraycount = 1;
	var loop = 4;
	for(var i=0; i<loop; i++)
	{		
	console.log("theme changes "+i);
		themeArraypicked = [] = ThemeArray[theme];
		$(elementArray[elementArraycount]).css(styleArray[styleArraycount],themeArraypicked[themeArraycount]);
		//Setting local Storage
		console.log(elementArray[elementArraycount]); 
		elementArraycount++;
		styleArraycount++
		themeArraycount++	
	}
	localStorage.setItem("Theme", theme);
}