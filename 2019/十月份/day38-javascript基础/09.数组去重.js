var arr=[1,1,2,2,3,3,4,4]
var arr1=[]
//1.
for(var i=0;i<arr.length;i++){
    if(arr1.indexOf(arr[i])==-1){
        arr1.push(arr[i])
    }
}
console.log(arr1)
//2.
let set = new Set(arr)
console.log(set)