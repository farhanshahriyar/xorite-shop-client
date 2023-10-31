// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap';
import ServiceCard from './ServiceCard'

const Services = () => {
    // eslint-disable-next-line no-unused-vars
    const [services, setServices] = useState([]);
    const servicesCardsContainer = useRef(null); // gasp state 
    const [view , setView ] = useState(false);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))

            // // gasp animation calculation
            // gsap.fromTo(servicesCardsContainer.current.children, 
            //     { opacity: 0, y: 30 },
            //     { opacity: 1, y: 0, stagger: 0.2, delay: 1 },
            // );
    }, [])

    useEffect(() => {
        // GSAP animation code
        const div = servicesCardsContainer.current;
    
        // Use gsap animation to set initial state (if needed)
        gsap.set(div, { opacity: 0, y: 30 });
    
        // Create an IntersectionObserver
        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              // When the component is in view, trigger the animation
              gsap.to(div, { opacity: 1, y: 0, stagger: 0.2, delay: 1, ease: 'power3.out' });
    
              // Disconnect the observer once the animation has been triggered
              observer.disconnect();
            }
          },
          { root: null, rootMargin: '0px', threshold: 0 }
        );
    
        observer.observe(div);
    
        return () => {
          // Clean up the observer when the component unmounts
          observer.disconnect();
        };
      }, []);

  return (
    <div>
        <div className='text-center'>
            <p className='text-base text-teal-600 font-bold '>Service</p>
            <h1 className='text-3xl text-[#151515] font-bold '>Our Service Area</h1>
            <p className='text-base text-[#737373] font-normal py-5'>Offering comprehensive bike repairs across Dhaka, Bangladesh, we ensure every cycle rides smoothly and safely.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' ref={servicesCardsContainer}>
            {
                services.map(service => <ServiceCard key={service._id} service={service}/>)
            }
        </div>
    </div>
  )
}

export default Services
