/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
     let sortedSentence=[]
    let b=s.split(' ')
    for(let i=0;i<b.length;i++){
      let index=  b[i].slice(b[i].length-1)
      sortedSentence[index]=b[i].slice(0,b[i].length-1)
    }
  
     return `${sortedSentence.slice(1).join(' ')}`
};
