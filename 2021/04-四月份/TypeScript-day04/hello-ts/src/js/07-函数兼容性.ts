// 类型兼容性用于确定一个类型是否能赋值给其他类型。
// 参数个数
// let fn1 = (x: number, y: number): void => { }
// let fn2 = (x: number): void => { }
// let fn3 = (x: string, y: string): void => { }
// fn1 = fn2// 参数多的可以接收参数少的函数的赋值
// fn2 = fn1// 参数少的不能接受参数多的
// fn3 = fn1// 参数类型不同 不可以相互赋值

// 参数类型


// 返回值类型
// let fn1 = (x: number, y: number): number => 123
// let fn2 = (x: number): number => 456
// let fn3 = (x: string, y: string): string => 'haha'
// fn1 = fn2;
// fn1 = fn3; // 返回值类型必须一模一样，不一样就类型不兼容

// 函数双向协变
// 参数的双向协变
// 或: 要么是number 要么是string
// let fn1 = (x: (number | string)): void => { }
// let fn2 = (y: number): void => { }
// fn1 = fn2
// fn2 = fn1

// 返回值的双向协变(注意版本，版本不同结果也有可能不同)
// let fn1 = (x: boolean): (string | number) => x ? 'aaa' : 123
// let fn2 = (y: string): string => 'aaa'
// fn1 = fn2 // 单一数据类型可以赋值联合类型
// fn2 = fn1 // 联合类型不能赋值给单一类型



// 函数重载
// 重写 相当于重新实现
// 重载就是根据参数的类型不同，个数不同，能自动调用不同的函数