// 5.一张纸的厚度大约是0.08mm，对折多少次之后能达到珠穆朗玛峰的高度（8848.13米）？
var count=0
var i=0.08/1000
while(i<=8848.13){
    
    count++
    // i++
    i*=2
}
console.log(count)