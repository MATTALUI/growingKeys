function growingKeys(num, str){
	let obj ={};
	for ( let i = 1; i<=num;i++){
		obj[`${str.repeat(i)}`] = true;
	}
	return obj;
}

console.log(growingKeys(2,'d'));
console.log(growingKeys(4,'sun'));
