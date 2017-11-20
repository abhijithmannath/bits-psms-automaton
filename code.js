//// filter out elements you wanna mov around. Here I am doing IT and Bangalore, you can just use IT and not execute the second part

ls=$(".ui-state-default:even").filter(function( index ) {
	expr = /\( IT \)/i;
	_str=$(this).children().eq(0).html()
	return expr.test(_str);
});

ls = ls.filter(function( index ) {
	expr = /Bangalore/i;
	_str=$(this).children().eq(0).html();
	return expr.test(_str);
});

console.log(ls.length, 'will be dragged')
////////////////////////////////// These elements will be moved around //////////////////////////////////////


/////////////// drag the given elements in the same order till the nth position ///////////////////////////
for(i=0;i<ls.length;i++){dragTill(i, 0)}  //0 means drag it to the very top, put any rank you desire