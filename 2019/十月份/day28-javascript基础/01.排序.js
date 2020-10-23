//需求：用函数实现任意数组从小到大的排序，不允许使用sort 
var arr=[2,7,9,0,4,6,8]
function xu(arr){
    for(var i=0;i<arr.length-1;i++){
        for (var j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                var tamp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=tamp
            }
        }
    }
    return arr
}
console.log(xu(arr))
