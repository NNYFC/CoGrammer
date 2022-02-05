let num = 3,counter=0;

function testGrNum(testNum,numVar,counter) {
    var numGr = ["Hundred", "Thousand","Thousand","Hundred Thousand", "Million","Billion","Trillion","Quadrillion"];
    let con;
    con = testNum / numVar;
    if(con >9){
        counter++;
        return testGrNum(con,numVar,counter);
    }else{
        console.log("Counter * ",counter);
        console.log(numGr[counter-1],""); 
        return con;
    }
} 

function testTensNum(testNum,numVar,counter) {
    var numTn = ["Twenty", "Thirty", "Fourty","Fifty","Sixty","Seventy","Eighty","Ninety"];
    let con;
    con = testNum - numVar;
    if(con >9){
        counter++;
        return testTensNum(testNum,numVar+10,counter);
    }else{
    console.log("Counter ",counter);
        console.log(numTn[counter],"");
        return con;
    }
}

function sayNumber(num) {
    var numTnLs = ["Eleven", "Twelve", "Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"];
    var numLs = ["Zero","One", "Two", "Three","Four","Five","Six","Seven","Eight","Nine","Ten"];

    let testNum;

    if (num<0) {
        console.log("Insert numbers greater than or equal to 0");
    }else{
        if (num>=0 && num<11) {
            console.log(numLs[num],".");
        }
        if (num>=11 && num<20) {
            console.log(numTnLs[num-11],".");
        }
        if (num>=20 && num<100) {
            testNum=testTensNum(num,20,counter);
            if(testNum>0){
                sayNumber(testNum);
            }
        }
        if (num>=100 && num<Math.pow(10,15)) {
            console.log(Math.pow(10,15));
            testNum=testGrNum(num,10,counter);
            /* if(testNum>0){
                sayNumber(testNum);
            } */
        } 
    }

    console.log(".");
}