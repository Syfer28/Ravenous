import React from 'react';
import './Business.css'

const pizzaLulu = {
    imageSrc: 'https://www.realsimple.com/thmb/61ujaJ613kgBxOazzX7ldbymL88=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/pizza-in-box-06ba7131a6584d0eb289d2fab1b62c88.jpg',
    name: 'Lulu Pizza',
    address: 'Somewhere 11 street',
    city: 'Riga',
    state: 'Riga',
    zipcode: 'LV-1011',
    category: 'Italian',
    rating: 4.7,
    reviewCount: 138
};

const Business = () => {
    return (
        <div className = 'business_container'>
            <img 
                className='business_img'
                src = {pizzaLulu.imageSrc}
                alt = {pizzaLulu.name}
            
            />
            <div className = 'business_text'>
                <h2 className = 'business_name'>{pizzaLulu.name}</h2>
                <div className = 'business_description'>
                    <div className = 'business_description__left'>
                        <p>{pizzaLulu.address}</p>
                        <p>{pizzaLulu.city}</p>
                        <p>{pizzaLulu.zipcode}</p>
                    </div>
                    <div className = 'business_description__right'>
                        <h3 className = 'business_category'>{pizzaLulu.category}</h3>
                        <p className = 'business_rating'>{`${pizzaLulu.rating} stars`}</p>
                        <p>{pizzaLulu.reviewCount}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Business;