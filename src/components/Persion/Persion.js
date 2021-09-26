import React from 'react';
import './Persion.css'

// Single persion Start
const Persion = (props) => {
    // Destructuring of persion
    const { img, name, designation, Born, country, salary } = props.persion
    return (
        <div className="col">
            <div className="card h-100  single-card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name : {name}</h5>
                    <p className="card-text"><strong>Country</strong> : {country}</p>
                    <p className="card-text"><strong>Designation</strong> : {designation}</p>
                    <p className="card-text"><strong>Born</strong> : {Born}</p>
                    <p className="card-text"><strong>Salary</strong> : ${salary}</p>
                </div>
                <div className='add-button'>
                    <button onClick={() => props.handleAddPersion(props.persion)} className='btn btn-success'><i className="fas fa-cart-plus"></i> Add Persion</button>

                    <div className="social-icon">
                        <a href="/"><i className="fab fa-twitter"></i></a>
                        <a href="/"><i className="fab fa-youtube"></i></a>
                        <a href="/"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Persion;

// Single persion End