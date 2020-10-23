## js编程题
1. 使用一个for循环按顺序打印出：`10，8，6，4，2，0，-2`

    ```js
    for (var i = 10; i >= -2; i--) {
    if (i % 2 == 0) {
        console.log(i)
    }
    }
    ```

2. 使用一个while循环按顺序打印出：`2，0，-2，-4，-6，-8，-10`

    ```js
    var num = 2
    while (num >= -10) {
    if (num % 2 == 0) {
        console.log(num)
    }
    num--
    }
    ```

3. 使用一个do...while循环打印出：`100`

    ```js
    var num = 100;
    do {
    console.log(num);
    }
    while (
    false
    )
    ```

4. 使用一个for循环实现：1-100之间所有偶数的打印
    要求：使用两种方式实现（其中一个方式必须使用 `continue` 关键字）

    ```js
        1.
    for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
    }
    2.
    for (var i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
        continue        
    } else {
        console.log(i)
    }
    }
    ```

5. 找出1-1000中能被6整除的偶数，且个位数不能为0

    ```js
    for (var i = 1; i <= 1000; i++) {
    if (i % 6 == 0 && i % 10 != 0) {
        console.log(i)
    }
    }
    ```