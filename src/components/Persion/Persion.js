import React from 'react';
import './Persion.css'

// Single persion Start
const Persion = (props) => {
    console.log(props.persion)
    // Destructuring of persion
    const { img, name, designation, Born, country } = props.persion
    return (

        <div className="col single-card">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name : {name}</h5>
                    <p className="card-text">Country : {country}</p>
                    <p className="card-text">Designationa : {designation}</p>
                    <p className="card-text">Born : {Born}</p>
                </div>
                <div className='add-button'>
                    <button className='btn btn-danger'>Add Persion</button>
                </div>
            </div>
        </div>

    );
};

export default Persion;

// Single persion End