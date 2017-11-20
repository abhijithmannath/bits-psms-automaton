Open console with Ctrl + Shift + J
Copy all the contents of drag.js to the javscript console.
Change code.js as required and paste it in the console.

ls is an array contains all selected elements that will be dragged. Iterate through them in a loop and pass the index of element to scroll, ie. within the range of 0 to ls.length and also pass the position the first elment in the array must be dragged to as the second argument.

So if you have already filled all bangalore stations till 80th row and you want to select all hyderabad stations and put it right below.

ls=$(".ui-state-default:even").filter(function( index ) {
	expr = /Hyderabad/i;
	_str=$(this).children().eq(0).html()
	return expr.test(_str);
});

for(i=0;i<ls.length;i++){dragTill(i, 80)}

With that said this script may not run effectively when ordering multiple blocks, ie. It will wor like a charm for just bangalore and push all the relevant stations higher up but once you try dragging hyderabad right below it might just offset it by a bit more like take it to the 60th preference instead of the 80th. I have noticed it works best when you have scrolled all the way to offset + 20 positions when trying to drag an entire block to start from offset. So scroll you view all the way to say the 100th element before running the script if you want ot to land the the first element of the block on the 80th.