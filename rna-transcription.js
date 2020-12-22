//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (s) => {
  let result =[];
  let res = s.split('');
  for(let i of res){
    if(i==='G'){
      result.push('C');
    }else if(i==='C'){
      result.push('G');
    }else if(i==='T'){
      result.push('A');
    }else if(i==='A'){
      result.push('U');
    }else {
      result.push('');
    }
  }

  return result.join('');

};
