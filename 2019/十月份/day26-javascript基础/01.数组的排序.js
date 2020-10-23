//需求： 写一个函数，实现对数字数组的排序，var arr = [18, 45, 0, 58, 32,59]

function are(arr){
    for(var i=0;i<arr.length-1;i++){
        for(var j=0;j<arr.length-i-1;j++){
            if(arr[j]<arr[j+1]){
                var tamp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=tamp
            }
        }
    
    }
    return arr
}
var arr = [18, 45, 0, 58, 32,59]
console.log(are(arr))
