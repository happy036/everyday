// 1.找字符串里面的最长的单词和单词的长度
var str = "odpsospoaioaoaoaoaoao yuan yuan yuan jiang jiang yong aaaaaaaaaaaaa aaaaaaaaaaaaa"
var arr = str.split(" ")
var arr1 = arr[0].length
var arr2 = arr[0]
for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > arr1) {
        arr1 = arr[i].length
        arr2 = arr[i]
    }
}
console.log(arr1)
console.log(arr2)

// 2.用指定整数替换指定数组中的元素值，要求：
// 使用javasctipt实现如下要求完成：
// 1).定义一个数组arr，数组arr的值分别是1、2、3、4、5、6、7、8、9
// 2).用户输出一个新的的整数num
// 3).如果整数num为偶数，则用num替换数组arr中所有的偶数下标的元素值，
//   如果整数num为奇数，则用num替换数组arr中所有的奇数下标的元素值
// 4)	.在控制台上打印修改后的数组中的所有的元素值
// 3. 编写函数function getNumTimes(),函数中完成下面功能：
//  1)函数中定义长度是5的数组，数组元素为1-99(包含1和99)之间的随机数，打印出该数组的元素。
//  2)提示用户输入2-5之间的数字num,
//  3)遍历数组arr,
//  4)筛选出数组中元素是num整数倍的所有数组元素，存放进一个新的数组中，该新的数组作为该方法返回值返回

// 4.用户定义一个数字，数字的范围在 1-9999之间，
// 如果输入的数字是 1位数，则数字前面补全 3个0，使之成为”000x”
// 如果输入的数字是2位数，则数字前面补全2个0,  使之成为”00xx”
// 如果输入的数字是3位数，则数字前面补全1个0，使之成为”0xxx”
// 如果输入的数字是4位数，则不用补全。
// 最后将结果打印出来。

// 5.将字符串中所有的小写字母转成大写字母,统计替换了多少个小写字母，并将原来的大写字母转成小写字母，统计替换了多少个大写字母。
// 示例：“abCDefG”转换后的结果是“ABcdEFg”

// 6.如下二维数组中存放了员工信息，每一个一维数组表示一条员工信息，
// 每个一维数组中存放了一条员工信息：姓名、职位、管辖区域(信息无序)
// 员工的职位只有“经理”、“职员”两种，区域只有"华北区"、"西南区"、"华中区"3种；
// var staffinfo = [
//   { name: "刘备", post: "经理", district: "华北区" },
//   { name: "诸葛", post: "职员", district: "华北区" },
//   { name: "马谡", post: "职员", district: "华北区" },
//   { name: "袁绍", post: "经理", district: "西南区" },
//   { name: "曹操", post: "经理", district: "华中区" },
//   { name: "许褚", post: "职员", district: "华中区" },
//   { name: "张辽", post: "职员", district: "华中区" },
//   { name: "徐晃", post: "职员", district: "华中区" },
// ]
// 解释：{name:"刘备",post:"经理",district:"华北区"}表示刘备的信息：职位是经理，管辖华北区。
// 1. 定义函数getManager(staffinfo)，统计员工信息中"经理"的总人数。
// 2. 定义函数getAreaSum(staffinfo),计算员工信息中每个大区的总人数，并打印，打印格式要求如下：
// 华北区总人数：3人
// 西南区总人数：1人
// 华中区总人数：4人

var staffinfo = [
    { name: "刘备", post: "经理", district: "华北区" },
    { name: "诸葛", post: "职员", district: "华北区" },
    { name: "马谡", post: "职员", district: "华北区" },
    { name: "袁绍", post: "经理", district: "西南区" },
    { name: "曹操", post: "经理", district: "华中区" },
    { name: "许褚", post: "职员", district: "华中区" },
    { name: "张辽", post: "职员", district: "华中区" },
    { name: "徐晃", post: "职员", district: "华中区" },
]

function getManager(staffinfo) {
    var count = 0
    for (var i = 0; i < staffinfo.length; i++) {
        if (staffinfo[i].post == "经理")
            count++
    }
    return `员工信息中"经理"的总人数是${count}`
}
console.log(getManager(staffinfo))

function getAreaSum(staffinfo) {
    var count = 0
    var count1 = 0
    var count2 = 0
    for (var i = 0; i < staffinfo.length; i++) {
        if (staffinfo[i].district == "华北区") {
            count++
        } else if (staffinfo[i].district == "西南区") {
            count1++
        } else if (staffinfo[i].district == "华中区") {
            count2++
        }
    }
    console.log(`华北区总人数:${count}人`)
    console.log(`西南区总人数:${count1}人`)
    console.log(`华中区总人数:${count2}人`)
}
getAreaSum(staffinfo)