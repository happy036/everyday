// 4.一个数如果恰好等于它的因子之和，这个数就称为 "完数 "。 例如6=1＋2＋3.编程 找出100以内的所有完数
for (let i = 1; i <= 100; i++) {
        let num = 0
        for (let j = 1; j < i; j++) {
            if (i % j == 0) {
                num += j
            }
    
        }
        if (num == i) {
            console.log(i)
        }
    }