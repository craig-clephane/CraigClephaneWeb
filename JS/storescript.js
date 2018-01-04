//Global Variables 
var data = {"total":0,"rows":[]};
var totalCost = 0;

//Shopping drag and drop
$(function(){
	//Checking if there is loca Storage, with the cart.
	if(localStorage && localStorage.getItem('cart'))
		{
		//Grabbing items from localstorage.
		var items = localStorage.getItem('cart');
		//JSON parse turns into a js array.
		data = JSON.parse(items);
		//Displaying to console.
	    console.log("This is your stored shopping cart\n"+items);
		//Grabbing the total from localstorage.
		var total = localStorage.getItem('total');
		//Passes the infomation to the global variable.
		totalCost = JSON.parse(total);	
		console.log("This is your stored shopping cart total\n"+totalCost);	
		}	
		
	$('#cartcontent').datagrid({
		singleSelect:true
	});
					
	$('.item').draggable({
		revert:true,
		proxy:'clone',
		onStartDrag:function(){
		$(this).draggable('options').cursor = 'not-allowed';
		$(this).draggable('proxy').css('z-index',10);
		console.log("Dragged item");
		},
		onStopDrag:function(){
		$(this).draggable('options').cursor='move';
		}
		});
			
			
	$('.cart').droppable({
		onDragEnter:function(e,source){
		$(source).draggable('options').cursor='auto';
		},
		onDragLeave:function(e,source){
		$(source).draggable('options').cursor='not-allowed';
		},
			onDrop:function(e,source){
				var name = $(source).data("name");
				var price = $(source).data("price");
				var colour = $(source).data("colour");
				console.log(name, price, colour);
				addProduct(name, price,colour);
				}	
				});
		});
		
	function addProduct(name,price,colour){
		function add(){
			for(var i=0; i<data.total; i++){
				var row = data.rows[i];
				if (row.name == name){
					row.quantity += 1;
					return;
					}
				}
				data.total += 1;
				data.rows.push({
					name:name,
					quantity:1,
					price:price,
					colour:colour,
				});
			}
			add();
			totalCost += price;
			$('#cartcontent').datagrid('loadData', data);
			$('div.cart .total').html('Total: £'+totalCost); //storafe
			//add local
			//data 	
			localStorage.setItem("total", totalCost);
			localStorage.setItem("cart", JSON.stringify(data))
			
			
		}
	//This functions removed local storage and existing items from shopping cart.	
	function removestorage() {	
		data = {"total":0,"rows":[]};
		totalCost = 0;
		localStorage.clear();
		$('#cartcontent').datagrid('loadData', data);
		$('div.cart .total').html('Total: £'+totalCost);
		}
		
		
window.onscroll = function() {stickyCart()};
function stickyCart() {
	var cart = document.getElementById("show-cart");
	
	var sticky = cart.offsetTop;
	
	if ( window.pageYOffset >= sticky) {
		cart.classList.add("sticky");
		console.log("added sticky");
	}
	else {
		cart.classList.remove("sticky");
		console.log("removed sticky");
	}

}

function showCart() {
	var x = document.getElementById("carthidden");
	if (x.style.display === "none") {
		x.style.display = "block";
	}
	else {
		x.style.display = "none"; 
	}
	$('#cartcontent').datagrid('loadData', data);
	$('div.cart .total').html('Total: £'+totalCost);
}

function marginfix() {
	var x = 0
	
	x = x - 20;
	
	var y =document.getElementsByClassName("datagrid-view2");
	y.style.margin-top == x;
}


function colorchange(x, y) {
	document.getElementById(""+ y +"").src=x;
	
	console.log("hello");
}
		
		