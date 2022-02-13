const response2 = (i)=>{
    //comme il est divisible par 3 et 5 donc on peut en deduire il est divisble par 15
    if(i%15===0 || (hasFive(i)&&hasThree(i))){
        return 'FIZZBUZZ';
    }else if (i % 5 === 0 || hasFive(i)){
        return 'BUZZ';
    }else if(i%3===0 || hasThree(i)){
        return 'FIZZ';
    }
    return i
}
//pour verifier si le nombre contient 3
const hasThree=(num)=>{
    let label = num.toString()
    let index =label.search('3');
    if(index>=0) {
        return true;
    }
    return false;
}
//pour verifier si le nombre contient 5
const  hasFive = (num) =>{
    let label = num.toString()
    let index =label.search('5');
    if(index>=0) {
        return true;
    }
    return false;
}
export default response2