import React from 'react';
import Business from '../Business/Business';
import './BusinessList.css'

const BusinessList = ({businesses}) => {
    return (
        <div className = 'bussinessList_container'>
            {businesses.map((business) => {
                return <Business key={business.id} business = {business}/>;
            })}
        </div>
    )
}

export default BusinessList;