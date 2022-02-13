const response = (i)=>{
    //comme il est divisible par 3 et 5 donc on peut en deduire il est divisble par 15
    if(i%15===0){
        return 'FIZZBUZZ';
    }else if (i%5===0){
        return 'BUZZ';
    }else if(i%3===0){
        return 'FIZZ';
    }
    return i;
}
export default response