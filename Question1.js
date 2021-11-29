let arr=[5,2,3,21,40];

function sum(arr){
	const a=arr.filter(elem=>elem>20).reduce((acumm,current)=>{
		sum+=current;
		return sum;
	});
	return a;
}

let x=sum(arr);
console.log(x);