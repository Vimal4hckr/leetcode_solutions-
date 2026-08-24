var longestPalindrome = function(s) {
    let start=0,maxLen=1;
    for(let i=0;i<s.length;i++){
        let left=i,right=i;
        while(left>=0&&right<s.length&&s[left]===s[right]){
            if(right-left+1>maxLen){
                start=left;
                maxLen=right-left+1;
            }
            left--;
            right++;
        }
        left=i;
        right=i+1;
        while(left>=0&&right<s.length&&s[left]===s[right]){
            if(right-left+1>maxLen){
                start=left;
                maxLen=right-left+1;
            }
            left--;
            right++;
        }
    }
    return s.substring(start,start+maxLen);
};