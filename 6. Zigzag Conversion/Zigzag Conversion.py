class Solution:
    def convert(self,s,numRows):
        if numRows==1 or numRows>=len(s):
            return s
        rows=[""]*numRows
        row=0
        down=True
        for c in s:
            rows[row]+=c
            if row==0:
                down=True
            elif row==numRows-1:
                down=False
            row+=1 if down else -1
        return "".join(rows)