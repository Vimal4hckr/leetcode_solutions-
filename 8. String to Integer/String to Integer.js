var myAtoi=function(s){
    let i=0,sign=1,result=0;
    while(i<s.length&&s[i]===' ')i++;
    if(i<s.length&&(s[i]==='+'||s[i]==='-')){
        if(s[i]==='-')sign=-1;
        i++;
    }
    while(i<s.length&&s[i]>='0'&&s[i]<='9'){
        result=result*10+(s.charCodeAt(i)-48);
        if(sign===1&&result>2147483647)return 2147483647;
        if(sign===-1&&result>2147483648)return -2147483648;
        i++;
    }
    return sign*result;
};