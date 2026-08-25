var letterCombinations=function(digits){
	if(!digits.length)return [];
	let map=["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
	let result=[];
	function backtrack(index,current){
		if(index===digits.length){
			result.push(current);
			return;
		}
		for(let char of map[digits[index]]){
			backtrack(index+1,current+char);
		}
	}
	backtrack(0,"");
	return result;
};