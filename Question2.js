function getNewarray(arr){
	let b=arr.filter((elem)=>{
		return (elem.length>=5) && (elem.includes('a'));
	});
	return b;
}
let s=["soqp","hiiihih","sallut","qqqqlaaa"];
console.log(getNewarray(s));