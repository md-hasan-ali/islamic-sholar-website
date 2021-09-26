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
        <div className='cart text-center'>
            <h3 className='mb-3'><i className="fas fa-user-plus text-success"></i> Add To Cart : {props.cart.length}</h3>
            <h4>Total Cost: ${total}</h4>
            <ul className='persion-name mt-4'>
                {
                    cart.map((persion, id) => <li
                        key={id}>
                        <strong>Name</strong> : {persion.name} <br />
                        <strong>Country</strong> : {persion.country}
                    </li>)
                }
            </ul>
            <button className='btn btn-success'>Buy Now</button>
        </div>
    );
};

export default Cart;
// Dispaly Cart Area End