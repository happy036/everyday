import React from 'react';
function CartTotal(props) {
    // 定义一个方法，计算总价
    const calcPrice = () => {
        let sum = 0;
        props.list.forEach(item => {
            sum += item.price * item.num
        });
        return sum
    }
    return (
        <div className="total">
            <span>总价：{calcPrice()}</span>
            <button>结算</button>
        </div>
    )
}
export default CartTotal