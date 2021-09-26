// import necessary file
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Persion from '../Persion/Persion';
import './FullContent.css'

// Full Container Start 
const FullContent = () => {
    // useState 
    const [persions, setPersions] = useState([])
    const [cart, setCart] = useState([])
    // useEffect
    useEffect(() => {
        fetch('./shcolar.JSON')
            .then(res => res.json())
            .then(data => setPersions(data))
    }, [])
    // Add To Cart button function 
    const handleAddPersion = persion => {
        const newCart = [...cart, persion]
        setCart(newCart)
    }

    return (
        <div className='full-container row me-3 mb-5'>
            <div className="col-md-9 container-fluid">
                <div className='row row-cols-1 mx-2 border-end row-cols-md-3 g-4 mt-2'>
                    {
                        persions.map(persion => <Persion
                            key={persion.key}
                            persion={persion}
                            handleAddPersion={handleAddPersion}
                        ></Persion>)
                    }
                </div>
            </div>

            <div className="col-md-3">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default FullContent;

// Full Container End 