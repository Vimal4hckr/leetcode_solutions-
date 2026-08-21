var convert = function(s,numRows) {
    if(numRows===1||numRows>=s.length) return s;
    let rows=Array(numRows).fill("");
    let row=0,down=true;
    for(let c of s){
        rows[row]+=c;
        if(row===0) down=true;
        else if(row===numRows-1) down=false;
        row+=down?1:-1;
    }
    return rows.join("");
};