// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';



// eslint-disable-next-line react/prop-types
const Productbiked = ({ imageSrc, title, price }) => (
  <div className="product-biked flex flex-col items-center space-y-4 p-4">
    <img src={imageSrc} alt={title} className="w-24 h-24 object-cover" />
    <h3 className="font-medium text-gray-700">{title}</h3>
    <p className="text-yellow-400">★★★★★</p>
    <p className="font-bold">${price}</p>
  </div>
);

const ProductGrid = () => {
  const bikedContainer = useRef(null);

  const allProducts = [
    { imageSrc: "https://i.ibb.co/y5LRtFs/6.png", title: 'Bike Engine Plug', price: '30.00' },
    { imageSrc: "https://i.ibb.co/F6s8LgH/3.png", title: 'Bike Air Filter', price: '30.00' },
    { imageSrc: "https://i.ibb.co/rvCy9Mv/2.png", title: 'Cools Led Light', price: '20.00' },
    { imageSrc: "https://i.ibb.co/zFt2Njh/1.png", title: 'Cools Led Light', price: '20.00' },
    { imageSrc: "https://i.ibb.co/b5fh9B0/5.png", title: 'Cools Led Light', price: '20.00' },
    { imageSrc: "https://i.ibb.co/12nPth2/4.png", title: 'Cools Led Light', price: '20.00' },
  ];

  const [displayedProducts, setDisplayedProducts] = useState(allProducts.slice(0, 3));

  const handleMoreProducts = () => {
     // next product pawar jonne
     const nextProducts = allProducts.slice(displayedProducts.length, displayedProducts.length + 3);
    
     // display korbe products array er sathe next products array
     setDisplayedProducts(displayedProducts.concat(nextProducts));
  };

//   useEffect(() => {
//     gsap.from(".product-biked", {
//         opacity: 0,
//         y: 50,
//         stagger: 0.2,
//         duration: 0.5,
//     });
//     }, [displayedProducts]);


useEffect(() => {
  // GSAP animation code
  const div = bikedContainer.current;

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
    <div className="p-8 text-center mt-5 ">
       <p className='text-base text-teal-600 font-bold '>Popular Products</p>
                <h1 className='text-3xl text-[#151515] font-bold '>Browse Our Products</h1>
                <p className='text-base text-[#737373] font-normal py-5'>
                The majority have suffered alteration in some form, by injected humour, or randomised <br></br> words which dont look even slightly believable. 
                </p>
          
                <div className="grid md:grid-cols-3 gap-8 grid-cols-1" ref={bikedContainer}>
                    {displayedProducts.map((product) => (
                    <Productbiked key={product.title} {...product} />
                    ))}
                </div>
                {
                    displayedProducts.length < allProducts.length && (
                    <button className="rounded-md px-5 py-2.5 text-sm font-medium text-teal-600 border-spacing-2 border border-teal-600 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition ,t-8" onClick={handleMoreProducts}>More Products</button>
                    )
                }
     
    </div>
  );
};

export default ProductGrid;
