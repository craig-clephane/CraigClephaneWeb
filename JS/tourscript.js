var lat = 0; // user's latitude
var lon = 0; // user's longitude
//This array holds all the information used to display diffrent concert dates within the html, it also stores lat and lon 
var concertpost =[
	["Jan", "12", "2018", "USA", "Bridgestone Arena", "Nashville, TN", "36.1592", "86.7785"],
	["Jan", "14", "2018", "USA", "Van Andel Arena",   "Grand Rapids, MI", "42.9624", "85.6716"],
	["Jan", "16", "2018", "USA", "Santander Arena",   "Reading, PA", "40.3348", "75.9230"],
	["Feb", "14", "2018", "Canada", "Saaktel Centre", "Saskatoon, SK", "52.1891", "106.6792"],
	["Jun", "08", "2018", "UK" , "Donington Park",    "Leicestershire", "52.8305", "1.3788"],
	["Jun", "09", "2018", "Finalnd","Hyvinkää Airport","Hyvinkää", "60.6544", "24.8812"]
]
var loop = 0;
var concertcount = concertpost.length;
window.onload = function() {
while( loop < concertcount)
{
	var array = [] = concertpost[loop];
  var text = "<div class = 'tour-content'><div class = 'tour-date'><p>"+array[0]+"<p><h1>"+array[1]+"</h1><p>"+array[2]+"</p></div><div class = 'tour-name'><p>"+array[3]+"</p><h1>"+array[4]+"</h1><p>"+array[5]+"</p> </div><button>Tickets</button></div>"
  $("#inner-body").append(text);
  console.log("hi");
  loop++;
}
}
//Function which removed the notice from the tour page. This does
//by adding a display of none to its style.
function removenotice(){
	var x = document.getElementById("tour-notice");
	x.style.display = "none";
}

var foundlocation = document.getElementById("foundlocation");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(UserLocation);
    } else { 
        foundlocation.innerHTML = "Geolocation is not supported by this browser, Try again on another browser";
    }
}

// Callback function for asynchronous call to HTML5 geolocation
function UserLocation(position) {
  NearestCity(position.coords.latitude, position.coords.longitude);
}


// Convert Degress to Radians
function Deg2Rad(deg) {
  return deg * Math.PI / 180;
}

function PythagorasEquirectangular(lat1, lon1, lat2, lon2) {
  lat1 = Deg2Rad(lat1);
  lat2 = Deg2Rad(lat2);
  lon1 = Deg2Rad(lon1);
  lon2 = Deg2Rad(lon2);
  var R = 6371; // km
  var x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
  var y = (lat2 - lat1);
  var d = Math.sqrt(x * x + y * y) * R;
  return d;
}

function NearestCity(latitude, longitude) {
  var mindif = 99999;
  var closest;
  for (index = 0; index < concertpost.length; ++index) {
    var dif = PythagorasEquirectangular(latitude, longitude, concertpost[index][6], concertpost[index][7]);
    if (dif < mindif) {
      closest = index;
      mindif = dif;
    }
  }
  console.log(closest);
  
  
  var array = [] = concertpost[closest];
  document.getElementById("geotext").innerHTML = "The closest concert to you is<br />"+array[4]+"<br />Purchase your tickets below.";
  var foundlocationtext = "<div class = 'tour-content'><div class = 'tour-date'><p>"+array[0]+"<p><h1>"+array[1]+"</h1><p>"+array[2]+"</p></div><div class = 'tour-name'><p>"+array[3]+"</p><h1>"+array[4]+"</h1><p>"+array[5]+"</p> </div><button>Tickets</button></div>"
  
  $("#foundlocation").append(foundlocationtext);
}