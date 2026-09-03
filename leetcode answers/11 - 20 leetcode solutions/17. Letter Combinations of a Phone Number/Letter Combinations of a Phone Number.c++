class Solution{
public:
	vector<string> letterCombinations(string digits){
		if(digits.empty())return {};
		vector<string>result;
		vector<string>map={"","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"};
		function<void(int,string)>backtrack=[&](int index,string current){
			if(index==digits.size()){
				result.push_back(current);
				return;
			}
			for(char c:map[digits[index]-'0'])
				backtrack(index+1,current+c);
		};
		backtrack(0,"");
		return result;
	}
};