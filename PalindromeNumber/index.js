/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let checkWord = x.toString();
    let checkLen = Math.floor(checkWord.length / 2);
    let isRemainder = checkWord.length % 2;

    // 是 0
    if(checkWord.length == 1){
        return true;
    }else{
        let ans = null;
        for(let i=0; i<checkLen; i++){
            if(checkWord[i] !== checkWord[checkWord.length-i-1]){
                ans = false;
                break;
            }else{
                ans =  true;
            }
        }
        return ans;
    }
};