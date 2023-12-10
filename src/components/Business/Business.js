import React from 'react';
import './Business.css'

const Business = ({business}) => {
    return (
        <div className = 'business_container'>
            <img 
                className='business_img'
                src = {business.imageSrc}
                alt = {business.name}
            
            />
            <div className = 'business_text'>
                <h2 className = 'business_name'>{business.name}</h2>
                <div className = 'business_description'>
                    <div className = 'business_description__left'>
                        <p>{business.address}</p>
                        <p>{business.city}</p>
                        <p>{business.zipcode}</p>
                    </div>
                    <div className = 'business_description__right'>
                        <h3 className = 'business_category'>{business.category}</h3>
                        <p className = 'business_rating'>{`${business.rating} stars`}</p>
                        <p>{business.reviewCount}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Business;