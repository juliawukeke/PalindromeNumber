/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    // 1 將字母變成陣列
    let sToArr = s.split('');

    // 2 將字母拆出來變成數字
    function transferStrToNum(arr){
        let newNumArr = [];
        arr.map((roman)=> {
            switch (roman){
                case 'I':
                newNumArr.push(Number(1)) ;
                break;   
                    
                case 'V':
                newNumArr.push(Number(5)) ;
                break;   

                case 'X':
                newNumArr.push(Number(10)) ;
                break;   
                    
                case 'L':
                newNumArr.push(Number(50)) ;
                break;   
                    
                case 'C':
                newNumArr.push(Number(100)) ;
                break;  
                    
                case 'D':
                newNumArr.push(Number(500)) ;
                break;   
                    
                case 'M':
                newNumArr.push(Number(1000)) ;
                break;   
            } 
        })
        return newNumArr;
    }

    // 3 處理前後字母關係
    function countNumbers(numArr){
        let sum = 0;
        for(let i=0; i<numArr.length; i++){
            sum += numArr[i];
        }
        for(let j=0; j<numArr.length; j++){
            if(numArr[j]-numArr[j+1] < 0){
                sum = sum - (numArr[j])*2;
            }
        }
        return sum;
    }
    return countNumbers(transferStrToNum(sToArr)); 
};