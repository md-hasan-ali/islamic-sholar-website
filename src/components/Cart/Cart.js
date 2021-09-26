// import necessary file
import React from 'react';
import './cart.css'
// Dispaly Cart Area Start
const Cart = (props) => {
    const { cart } = props || {}
    let total = 0;
    for (const persion of cart) {
        total = total + parseFloat(persion.salary);
    }
    return (
        <div className='cart'>
            <h3><i className="fas fa-user-plus text-success"></i> Add Persion : {props.cart.length}</h3>
            <h4>total : {total}</h4>
            <ul>
                {
                    cart.map(persion => <li
                        key={persion.key}
                    >
                        Name : {persion.name}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Cart;
// Dispaly Cart Area End