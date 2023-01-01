function solution(numbers) {
    
    return numbers.reduce((acc,cur)=>{
        return acc + cur;
    },0)/numbers.length
}