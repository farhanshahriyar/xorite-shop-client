// eslint-disable-next-line no-unused-vars
import React from 'react'

const TeamCard = ({team}) => {
    const { name, img, position } = team;
  return (
    <div className="flex justify-center items-center ">
    <div className="card w-96 bg-base-100 shadow-2xl overflow-hidden rounded-xl">
        <figure className="relative p-5">
        <img src={img} alt={`${name}'s image`} className="w-full h-56 object-cover rounded-t-xl" />
        </figure>
        <div className="card-body p-5 justify-center items-center">
            <h2 className="card-title text-[#444] font-bold text-lg">{name}</h2>
            <div className="flex justify-center items-center">
                <p className='text-teal-600 font-medium'>{position}</p>
                {/* <img src={rightArrow} alt="rightArrow" className='w-5 ml-2'/> */}
            </div>
        </div>
    </div>
</div>
  )
}

export default TeamCard
