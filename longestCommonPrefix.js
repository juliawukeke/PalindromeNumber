/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let ansStr = '';
    let standard = '';
    for(let i=0; i<strs[0].length; i++){
        standard += strs[0][i];
        const re = RegExp(`^${standard}`);
        const isMatched = (thisStr) => thisStr.match(re);
        if (strs.every(isMatched)){
            ansStr = standard;
        }else{
             break;
        }
    }
     return ansStr;   
};