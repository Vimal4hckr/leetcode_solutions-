var isPalindrome=function(x){
    if(x<0)return false;
    let original=x,reverse=0;
    while(x){
        reverse=reverse*10+x%10;
        x=Math.floor(x/10);
    }
    return original===reverse;
};