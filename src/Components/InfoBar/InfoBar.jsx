// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';


const InfoBar = () => {
  // const infoBarRef = useRef(null);

  // useEffect(() => {
  //   const elements = infoBarRef.current.children;
  //   gsap.from(elements, {
  //     opacity: 0,
  //     y: -50,
  //     stagger: 0.2,
  //     duration: 1,
  //     ease: "power3.out"
  //   });
  // }, []);

  return (

    <div className="bg-[#151515] rounded-md py-24 sm:py-32 mt-10">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base leading-7 text-white">7:00 am - 9:00 pm</dt>
        <dd className="order-first text-[15px] font-semibold tracking-tight text-white sm:text-xl">We are open Monday-Friday</dd>
      </div>
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base leading-7 text-white">+8801989449877</dt>
        <dd className="order-first text-[15px] font-semibold tracking-tight text-white sm:text-xl">Have a question?</dd>
      </div>
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base leading-7 text-white">213 Lane, East Basaboo, Dhaka-1214, Bangladesh </dt>
        <dd className="order-first text-[15px] font-semibold tracking-tight text-white sm:text-xl">Need a repair? our address</dd>
      </div>
    </div>
  </div>
</div>
   
  )
}

export default InfoBar
