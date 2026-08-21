class Solution:
    def myAtoi(self,s):
        i=0
        sign=1
        result=0
        while i<len(s) and s[i]==' ':
            i+=1
        if i<len(s) and s[i] in '+-':
            if s[i]=='-':
                sign=-1
            i+=1
        while i<len(s) and s[i].isdigit():
            result=result*10+int(s[i])
            if sign==1 and result>2**31-1:
                return 2**31-1
            if sign==-1 and -result<-(2**31):
                return -(2**31)
            i+=1
        return sign*result