import React from 'react';
import img from '../Assets/details_example.jpg';
import './css/style.css';

export const Details_Card = () => {
    return (
        <>
            <div className="card details">
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={img} className="img rounded details_image" alt="..."/>
                    </div>
                    <div className="col-md-18">
                        <div className="card-body details_body">
                            <h5 className="details-title">Men wear collection</h5>
                            <h3 className="details-title-1">Cotton Shirt</h3>
                            <h6 className='details-title-1'>VIMAL</h6>
                            <p className='details-price'> Rs 900 </p>
                            <br/>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <br/>
                            <br/>
                            <button className='rounded-pill details-button'>Add To My Wishlist</button>
                            <br/>
                            <button className='rounded-pill details-button-1'>Add To My Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}