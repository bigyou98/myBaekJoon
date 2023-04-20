var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString();
inputs = Number(inputs);
var arr = [[0, 0], [0, 1], [1, 0]];
for(var i=3; i<=inputs; i++){
    arr[i] = [BigInt(arr[i-1][0])+BigInt(arr[i-1][1]), BigInt(arr[i-1][0])];
}
console.log((BigInt(arr[inputs][0])+ BigInt(arr[inputs][1])).toString());