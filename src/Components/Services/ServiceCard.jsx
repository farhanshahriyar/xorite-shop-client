// eslint-disable-next-line no-unused-vars
import React from 'react';
import rightArrow from '../../assets/Frame.svg';

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ service }) => {
    // eslint-disable-next-line react/prop-types
    const { title, img, price } = service;
    return (
        <div className="flex justify-center items-center ">
            <div className="card w-96 bg-base-100 shadow-2xl overflow-hidden rounded-xl">
                <figure className="relative p-5">
                    <img src={img} alt="Service Image" className="w-full h-56 object-cover rounded-t-xl" />
                </figure>
                <div className="card-body p-6">
                    <h2 className="card-title text-[#444] font-bold text-lg mb-4">{title}</h2>
                    <div className="flex justify-between items-center">
                        <p className='text-teal-600 font-medium'>Price: ${price}</p>
                        <img src={rightArrow} alt="rightArrow" className='w-5 ml-2'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;

