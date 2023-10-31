// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    // For multiple testimonials
    const testimonialsData = [
        {
            image: "https://i.pinimg.com/564x/d3/ea/77/d3ea770abc68e9853a9be966d9e14ed6.jpg",
            quote: "“Xorite team are very professonals and they know what they are doing. I am very happy with their service.”",
            name: "Robin Wieruch",
            position: "Engine Expert"
        },
        {
            image: "https://i.pinimg.com/564x/ab/7c/73/ab7c73bcb5ee98251daa48ccaaad9e24.jpg",
            quote: "“Xorite team are very professonals and they know what they are doing. I am very happy with their service.”",
            name: "Eden Hazard",
            position: "Engine Expert"
        },
        {
            image: "https://i.ibb.co/CPzYH1Z/2.jpg",
            quote: "“Xorite team are very professonals and they know what they are doing. I am very happy with their service.”",
            name: "Thomas Muller",
            position: "Engine Expert"
        }
    ];

    return (
        <Slider {...settings}>
            {testimonialsData.map((testimonial, index) => (
                <div key={index}>
                    <div className='text-center mt-20'>
                <p className='text-base text-teal-600 font-bold '>Testimonials</p>
                <h1 className='text-3xl text-[#151515] font-bold '>Meet Our Clients</h1>
                <p className='text-base text-[#737373] font-normal py-5'>
                    These clients trusted us and we never let them down.
                </p>
            </div>
                    <figure className="rounded-xl p-8">
                        <img className="w-24 h-24 rounded-full mx-auto object-cover" src={testimonial.image} alt={testimonial.name} width="384" height="512"/>
                        <div className="pt-6 text-center space-y-4">
                            <blockquote>
                                <p className="text-lg font-medium">
                                    {testimonial.quote}
                                </p>
                            </blockquote>
                            <figcaption className="font-medium">
                                <div className="text-teal-500  dark:text-teal-600">
                                    {testimonial.name}
                                </div>
                                <div className="text-slate-700 dark:text-slate-500">
                                    {testimonial.position}
                                </div>
                            </figcaption>
                        </div>
                    </figure>
                </div>
            ))}
        </Slider>
    );
}

export default Testimonials;
