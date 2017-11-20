Open console with Ctrl + Shift + J
Copy all the contents of drag.js to the javscript console.
Change code.js as required and paste it in the console.

ls is an array contains all selected elements that will be dragged. Iterate through them in a loop and pass the index of element to scroll, ie. within the range of 0 to ls.length and also pass the position the first elment in the array must be dragged to as the second argument.

So if you have already filled all bangalore stations till 80th row and you want to select all hyderabad stations and put it right below.

ls=$(".ui-state-default:even").filter(function( index ) {
	expr = /Bangalore/i;
	_str=$(this).children().eq(0).html()
	return expr.test(_str);
});

for(i=0;i<ls.length;i++){dragTill(i, 80)}