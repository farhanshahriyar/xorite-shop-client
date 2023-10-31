// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Expert from '../../assets/images/features/ExpertTeam.jpg'
import Support from '../../assets/images/features/Support.jpg'
import Wrench from '../../assets/images/features/Wrench.jpg'
import Guranty from '../../assets/images/features/Guranty.jpg'
import Timely from '../../assets/images/features/Timely.jpg'

const Features = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);

    useEffect(() => {
        // GSAP animation code
        const div1 = ref1.current;
        const div2 = ref2.current;
        const div3 = ref3.current;
        const div4 = ref4.current;
        const div5 = ref5.current;
      
        // Use gsap animation to set initial state 
        gsap.set(div1, { opacity: 0 });
        gsap.set(div2, { opacity: 0 });
        gsap.set(div3, { opacity: 0 });
        gsap.set(div4, { opacity: 0 });
        gsap.set(div5, { opacity: 0 });
      
        // Create an IntersectionObserver
        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              // When the component is in view, trigger the animation
              gsap.to(div1, { opacity: 1,  stagger: 0.2, delay: 0.5, ease: 'power3.out' });
              gsap.to(div2, { opacity: 1,  stagger: 0.2, delay: 1, ease: 'power3.out' });
              gsap.to(div3, { opacity: 1, stagger: 0.2, delay: 1.5, ease: 'power3.out' });
              gsap.to(div4, { opacity: 1,  stagger: 0.2, delay: 2, ease: 'power3.out' });
              gsap.to(div5, { opacity: 1, stagger: 0.2, delay: 2.5, ease: 'power3.out' });
      
              // Disconnect the observer once the animation has been triggered
              observer.disconnect();
            }
          },
          { root: null, rootMargin: '0px', threshold: 0 }
        );
      
        observer.observe(div1);
        observer.observe(div2);
        observer.observe(div3);
        observer.observe(div4);
        observer.observe(div5);
      
        return () => {
          // Clean up the observer when the component unmounts
          observer.disconnect();
        };
      }, []);


  return (
    <div className='text-center items-center mt-20'>
                <p className='text-base text-teal-600 font-bold '>Core Features</p>
                <h1 className='text-3xl text-[#151515] font-bold '>Why Choose Us</h1>
                <p className='text-base text-[#737373] font-normal py-5'>
                The majority have suffered alteration in some form, by injected humour, or randomised <br></br> words which don't look even slightly believable. 
                </p>
          
            <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-4">
                <div className="flex flex-col items-center" ref={ref1}>
                    <div className=" p-4 rounded-md mb-2">
                        <img src={Expert} alt="Expert Team" className="object-cover" />
                    </div>
                    <span>Expert Team</span>
                </div>
                <div className="flex flex-col items-center"  ref={ref2}>
                    <div className=" p-4 rounded-md mb-2">
                    <img src={Support} alt="Expert Team" className="object-cover" />
                    </div>
                    <span>24/7 Support</span>
                   
                </div>
                <div className="flex flex-col items-center" ref={ref3}>
                    <div className=" p-4 rounded-md mb-2">
                    <img src={Wrench} alt="Expert Team" className="object-cover" />
                    </div>
                    <span>Best Equipment</span>
                </div>
                <div className="flex flex-col items-center"  ref={ref4}>
                    <div className=" p-4 rounded-md mb-2">
                    <img src={Guranty} alt="Expert Team" className="object-cover" />
                    </div>
                    <span>100% Guranty</span>
                </div>
                <div className="flex flex-col items-center" ref={ref5}>
                    <div className=" p-4 rounded-md mb-2" >
                    <img src={Timely} alt="Expert Team" className="object-cover" />
                    </div>
                    <span>Timely Delivered</span>
                </div>
                {/* ... Repeat for other icons and labels ... */}
            </div>
        </div>
  )
}

export default Features
