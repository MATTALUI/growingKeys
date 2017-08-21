function growingKeys(num, str){
  if (str === '') return new Error('only strings, please');
  if (typeof str != 'string') return new Error('how dare you.');
	let obj ={};
	for ( let i = 1; i<=num;i++){
		obj[`${str.repeat(i)}`] = true;
	}
	return obj;
}

console.log(growingKeys(2,''));
console.log(growingKeys(2,[]));
console.log(growingKeys(2,'d'));
console.log(growingKeys(4,'sun'));
// console.log(growingKeys(100,'2'));
