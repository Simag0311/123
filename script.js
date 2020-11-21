let a = [1, 2, 3, 4, 5];
let r1 = a.map(function(elem) {
	return Math.sqrt(elem);
});
console.log(r1);

let b = ['abc', 'def', 'ghi'];
let r2 = b.map(function(elem){
	return elem + '!';
});
console.log(r2);

let c = ['ffdsf', 'tuytuy', 'sbvbcv']
let r3 = c.map(function(elem){
	return elem.split('').reverse().join('');
});
console.log(r3);

let d = ['123', '456', '789'];
let r4 = d.map(function(elem){
	return elem.split('');
});
console.log(r4);

let e = [1, 2, 3, 4, 5];
let r5 = e.map(function(elem,index){
	return elem*index;
});
console.log(r5);