# Proceed at your own risk

Open console with **Ctrl + Shift + J**
Copy all the contents of drag.js to the javascript console.Change code.js as required and paste it in the console.

ls is an array containing all the selected elements that will be dragged. Iterate through them in a loop and pass the index of element to scroll, ie. within the range of 0 to ls.length and also pass the position the first elment in the array must be dragged to as the second argument.

So if you have already filled all Bangalore stations till the 80th row and say you want to select all Hyderabad stations and drag it to right below Bangalore do the following.

>ls=$(".ui-state-default:even").filter(function( index ) {
	expr = /Hyderabad/i;
	_str=$(this).children().eq(0).html()
	return expr.test(_str);
});
>
>for(i=0;i<ls.length;i++){dragTill(i, 80)}

## Tips

With that said this script may not run effectively when ordering multiple blocks, ie. It will work like a charm for just Bangalore and push all the relevant stations higher up but once you try dragging Hyderabad to right below, it might just offset it by a bit more. Like take it to the 60th preference instead of the 80th. _I have noticed it works best when you have scrolled all the way to offset + 20 positions when trying to drag an entire block to start from offset. So scroll your view all the way to the 100th row before running the script if you want it to drag the the first element of the block to the 80th_.