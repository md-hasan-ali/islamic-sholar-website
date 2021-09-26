// import necessary file
import React, { useEffect, useState } from 'react';
import Persion from '../Persion/Persion';
import './FullContent.css'

// Full Container Start 
const FullContent = () => {
    // useState 
    const [persions, setPersions] = useState([])
    // useEffect
    useEffect(() => {
        fetch('./shcolar.JSON')
            .then(res => res.json())
            .then(data => setPersions(data))
    }, [])
    return (
        <div className='full-container row'>
            <div className="col-md-9 container-fluid">
                <div className='row row-cols-1 mx-2 border-end row-cols-md-3 g-4 mt-2'>
                    {
                        persions.map(persion => <Persion
                            key={persion.key}
                            persion={persion}
                        ></Persion>)
                    }
                </div>
            </div>
            <div className="col-md-3 cart">
                <h2>team details area here..</h2>
            </div>
        </div>
    );
};

export default FullContent;

// Full Container End 