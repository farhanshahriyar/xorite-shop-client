// eslint-disable-next-line no-unused-vars
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import img1 from '../../assets/images/about_us/parts.jpg';
import img2 from '../../assets/images/about_us/person.jpg';

const About = () => {
    const imageSectionRef = useRef(null);
    const contentSectionRef = useRef(null);
    const myElement = useRef(null);

    // useEffect(() => {
    //     gsap.from(imageSectionRef.current, {
    //         duration: 1.5,
    //         opacity: 0,
    //         ease: 'power3.out'
    //     });
        
    //     gsap.to(imageSectionRef.current, {
    //         duration: 1.5,
    //         opacity: 1,
    //         ease: 'power3.out'
    //     });
        

    //     gsap.from(contentSectionRef.current, {
    //         duration: 1.5,
    //         opacity: 0,
    //         x: '100%',
    //         ease: 'power3.out',
    //         delay: 0.5
    //     });

    //     gsap.to(contentSectionRef.current, {
    //         duration: 1.5,
    //         opacity: 1,
    //         x: '0%',
    //         ease: 'power3.out',
    //         delay: 0.5
    //     });
    // }, []);

    // useEffect(() => {
    //     gsap.to (myElement.current, {
    //         duration: 1,
    //         opacity: 1,
    //         y: 20,
    //         ease: 'power3.out',
    //         delay: 0.5
    //     });
    //   }, []);

    useEffect(() => {
        // GSAP animation code
        const div1 = imageSectionRef.current;
        const div2 = contentSectionRef.current;
        const div3 = myElement.current;
      
        // Use gsap animation to set initial state (if needed)
        gsap.set(div1, { opacity: 0, y: 30 });
        gsap.set(div2, { opacity: 0, y: 30 });
        gsap.set(div3, { opacity: 0, y: 30 });
      
        // Create an IntersectionObserver
        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              // When the component is in view, trigger the animation
              gsap.to(div1, { opacity: 1, y: 0, stagger: 0.2, delay: 1, ease: 'power3.out' });
              gsap.to(div2, { opacity: 1, y: 0, stagger: 0.2, delay: 1, ease: 'power3.out' });
              gsap.to(div3, { opacity: 1, y: 0, stagger: 0.2, delay: 2, ease: 'power3.out' });
      
              // Disconnect the observer once the animation has been triggered
              observer.disconnect();
            }
          },
          { root: null, rootMargin: '0px', threshold: 0 }
        );
      
        observer.observe(div1);
        observer.observe(div2);
        observer.observe(div3);
      
        return () => {
          // Clean up the observer when the component unmounts
          observer.disconnect();
        };
      }, []);


    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex flex-col lg:flex-row">
              
                {/* Image Section */}
                <div className="lg:w-1/2 relative" ref={imageSectionRef}>
                    <img src={img2} alt="Person" className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={img1} alt="Parts" className="w-1/2 absolute right-5 top-1/2 rounded-lg shadow-2xl border-8 border-white" />
                </div>
                
                {/* Content Section */}
                <div className="lg:w-1/2 px-4 py-6" ref={contentSectionRef} >
                    <p className="py-5 text-base font-bold text-teal-600" ref={myElement}>About Us</p>
                    <h1 className="text-4xl font-bold text-[#151515]" ref={contentSectionRef}>Pedal to Perfection with Our Expert Touch.</h1>
                    <p className="py-2 text-[#737373] font-normal text-base" ref={contentSectionRef}>
                    At Xorite Shop, cycling runs in our veins. With a team of qualified professionals, we bring 7 years of hands-on experience to the workbench. Over the years, we've encountered every challenge a bike can present and mastered the art of reviving each ride. Our commitment goes beyond simple repairs; we breathe life back into every gear, chain, and pedal. 
                    </p>
                    <p className="py-2 text-[#737373] font-normal text-base" ref={contentSectionRef}>
                    Steer away from cookie-cutter solutions and choose genuine care. Choose Xorite Shop, where your bike's story is retold with precision and passion.
                    </p>
                    <button className="rounded-md px-5 py-2.5 text-sm font-medium text-teal-600 border-spacing-2 border border-teal-600 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;


