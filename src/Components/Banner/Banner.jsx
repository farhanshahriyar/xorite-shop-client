// eslint-disable-next-line no-unused-vars
import React from 'react'
import img1 from '../../assets/images/homeCarousel/1.jpg'
import img2 from '../../assets/images/homeCarousel/2.jpg'
import img3 from '../../assets/images/homeCarousel/3.jpg'
import img4 from '../../assets/images/homeCarousel/4.jpg'

const Banner = () => {
  return (
    <div>
        <div className="carousel w-full h-[800px] sm:h-[600px] ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full rounded-xl object-cover" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='space-y-7 md:w-1/2 w-full pl-12'>
                    <h2 className='md:text-6xl text-2xl text-white font-bold'>Gear Up for Greatness. We Fix, You Ride. </h2>
                    <p className='text-white text-[18px]'>Reviving every ride with precision and passion. At Xorite, we ensure you pedal away with confidence.</p>
                    <div>
                    <a className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow mr-5" href="/">
                    Discover More
                    </a>
                    <a className="rounded-md px-5 py-2.5 text-sm font-medium text-white border-spacing-2 border border-white hover:bg-teal-600 hover:text-white hover:border-teal-600 transition"
                        href="/">
                        Latest Project
                        </a>
                    </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5 hover:bg-teal-600 hover:text-white hover:border-teal-600">❮</a> 
                    <a href="#slide2" className="btn btn-circle hover:bg-teal-600 hover:text-white hover:border-teal-600">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl object-cover" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='space-y-4 sm:space-y-7 w-full sm:w-1/2 pl-4 sm:pl-12'>

                    <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold '>Where Every Spoke Speaks Volumes.</h2>

                    <p className='text-white text-[18px]'>Reviving every ride with precision and passion. At Xorite, we ensure you pedal away with confidence.</p>
                    <div>
                    <a className="rounded-md bg-teal-600 px-3 sm:px-5 py-2 text-sm font-medium text-white shadow mr-5" href="/">Discover More</a>

                    <a className="rounded-md px-5 py-2.5 text-sm font-medium text-white border-spacing-2 border border-white hover:bg-teal-600 hover:text-white hover:border-teal-600 transition"
                        href="/">
                        Latest Project
                        </a>
                    </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5 hover:bg-teal-600 hover:text-white hover:border-teal-600">❮</a> 
                    <a href="#slide3" className="btn btn-circle  hover:bg-teal-600 hover:text-white hover:border-teal-600">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl object-cover" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='space-y-7 md:w-1/2 pl-12 w-full'>
                    <h2 className=' text-white font-bold md:text-6xl text-2xl'>Where Your Ride Gets Revived!</h2>
                    <p className='text-white text-[18px]'>Reviving every ride with precision and passion. At Xorite, we ensure you pedal away with confidence.</p>
                    <div>
                    <a className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow mr-5" href="/">
                    Discover More
                    </a>
                    <a className="rounded-md px-5 py-2.5 text-sm font-medium text-white border-spacing-2 border border-white hover:bg-teal-600 hover:text-white hover:border-teal-600 transition"
                        href="/">
                        Latest Project
                        </a>
                    </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5 hover:bg-teal-600 hover:text-white hover:border-teal-600">❮</a> 
                    <a href="#slide4" className="btn btn-circle  hover:bg-teal-600 hover:text-white hover:border-teal-600">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl object-cover" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='space-y-7 pl-12 md:w-1/2  w-full'>
                    <h2 className=' text-white font-bold md:text-6xl text-2xl'>Bringing Bikes Back to Life! </h2>
                    <p className='text-white text-[18px]'>Reviving every ride with precision and passion. At Xorite, we ensure you pedal away with confidence.</p>
                    <div>
                    <a className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow mr-5" href="/">
                    Discover More
                    </a>
                    <a className="rounded-md px-5 py-2.5 text-sm font-medium text-white border-spacing-2 border border-white hover:bg-teal-600 hover:text-white hover:border-teal-600 transition"
                        href="/">
                        Latest Project
                        </a>
                    </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5  hover:bg-teal-600 hover:text-white hover:border-teal-600">❮</a> 
                    <a href="#slide1" className="btn btn-circle  hover:bg-teal-600 hover:text-white hover:border-teal-600">❯</a>
                    </div>
                </div>
                </div>
    </div>
  )
}

export default Banner


