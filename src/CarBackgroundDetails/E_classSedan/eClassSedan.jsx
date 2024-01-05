import React, {useState} from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';

import E_sedan1 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/E_sedan1.webp'
import E_sedan2 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/E_sedan2.webp'
import irisBlack from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/irisBlack.png'
import irisWhite from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/irisWhite.png'
import irisBlue from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/irisBlue.png'
import irisSilver from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/irisSilver.png'
import irisGray from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/irisGray.png'
import irisDiamond from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/irisDiamond.png'
import irisRed from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/irisRed.png'

// Performance
import performance1 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/performance/performance1.webp'
import performance2 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/performance/performance2.webp'
import performance3 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/performance/performance3.webp'
import performance4 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/performance/performance4.webp'

// Design
import design1 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/design/design1.webp'
import design2 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/design/design2.webp'
import design3 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/design/design3.webp'
import design4 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/design/design4.webp'

// Luxury
import luxury1  from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/luxury/luxury1.webp'
import luxury2  from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/luxury/luxury2.webp'
import luxury3  from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/luxury/luxury3.webp'
import luxury4  from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/luxury/luxury4.webp'

// Multimedia
import multimedia1 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/multimedia/multimedia1.webp'
import multimedia2 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/multimedia/multimedia2.webp'
import multimedia3 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/multimedia/multimedia3.webp'
import multimedia4 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/multimedia/multimedia4.webp'

// Safety
import safety1 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/safety/safety1.webp'
import safety2 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/safety/safety2.webp'
import safety3 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/safety/safety3.webp'
import safety4 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/safety/safety4.webp'

// Accessories
import accessories1 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/accessories/accessory1.webp'
import accessories2 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/accessories/accessory2.webp'
import accessories3 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/accessories/accessory3.webp'
import accessories4 from '/src/CarBackgroundDetails/E_classSedan/ESedanImages/accessories/accessory4.webp'


const E_ClassSedan = () => {
  const [showPerformanceImages, setShowPerformanceImages] = useState(false);
  const [showDesignImages, setShowDesignImages] = useState(false);
  const [showLuxuryImages, setShowLuxuryImages] = useState(false);
  const [showMultimediaImages, setShowMultimediaImages] = useState(false);
  const [showSafetyImages, setShowSafetyImages] = useState(false);
  const [showAccessoriesImages, setShowAccessoriesImages] = useState(false);
  
  const togglePerformanceImages = () => setShowPerformanceImages(!showPerformanceImages)
  const toggleDesignImages = () => setShowDesignImages(!showDesignImages)
  const toggleLuxuryImages = () => setShowLuxuryImages(!showLuxuryImages)
  const toggleMultimediaImages = () => setShowMultimediaImages(!showMultimediaImages)
  const toggleSafetyImages = () =>  setShowSafetyImages(!showSafetyImages)
  const toggleAccessoriesImages = () =>  setShowAccessoriesImages(!showAccessoriesImages)



  return (
    <main className='flex flex-col h-full w-full items-center justify-center pb-20 p-3 overflow-hidden lg:mt-[-50px]'>
         <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
           <SwiperSlide><img src={irisBlack} alt="" /></SwiperSlide>
           <SwiperSlide><img src={irisWhite} alt="" /></SwiperSlide>
           <SwiperSlide><img src={irisBlue} alt="" /></SwiperSlide>
           <SwiperSlide><img src={irisSilver} alt="" /></SwiperSlide>
           <SwiperSlide><img src={irisGray} alt="" /></SwiperSlide>
           <SwiperSlide><img src={irisDiamond} alt="" /></SwiperSlide>
           <SwiperSlide><img src={irisRed} alt="" /></SwiperSlide>
      </Swiper>


     <div className='flex flex-col gap-2 lg:gap-40 lg:grid lg:grid-cols-2'>
          <div className='flex text-center text-2xl font-medium'>
            <h1>2023-</h1>
            <h1>AMG E 53 Sedan</h1>
          </div>
         <h1 className='text-center text-2xl font-light'>$81,300 * MSRP</h1>
      </div>
       <div className='flex mt-3 border-t max-w-[1200px] border w-full border-gray-300'></div>
      
       <div className='lg:grid-cols-2 lg:grid flex items-center flex-col w-full max-w-[1100px]'>
       <div className='md:max-w-[800px] lg:max-w-[500px] justify-center items-center'>
         <img  src={E_sedan1} alt="" />
         <img src={E_sedan2} alt="" />
       </div>
       <div className='flex flex-col md:max-w-[800px] lg:max-w-[460px] lg:mt-[70px] mt-[30px] rounded-md w-full bg-[#f3e6e6] pb-5 p-3'>
         <h1 className='text-center text-xl font-light font-mono'>Feature Highlights</h1>
          <div className='flex flex-col space-y-3 mt-2 p-2 '>
             <div className='flex justify-between'>
                <span className='font-light'>Passenger capacity</span>
                <span className='font-bold'>5</span>
             </div>
             <div className='border-b w-full border-black'></div>
             <div className='flex justify-between'>
                <span className='font-light'>Power</span>
                <span className='font-bold'>429 hp @ 6,100 rpm</span>
             </div>
             <div className='border-b w-full border-black'></div>
             <div className='flex justify-between'>
                <span className='font-light'>City fuel economy</span>
                <span className='font-bold'>21 mpg†</span>
             </div>
             <div className='border-b w-full border-black'></div>
             <div className='flex justify-between'>
                <span className='font-light'>Highway fuel economy</span>
                <span className='font-bold'>29 mpg†</span>
             </div>
             <div className='border-b w-full border-black'></div>
             <div className='flex justify-between'>
                <span className='font-light'>Cargo capacity</span>
                <span className='font-bold'>13.1 cu ft</span>
             </div>
             <div className='border-b w-full border-black'></div>
             <div className='flex justify-between'>
                <span className='font-light'>Engine</span>
                <span className='font-bold'>AMG 3.0L inline-6 turbo</span>
             </div>
             <div className='border-b w-full border-black'></div>
             <div className='flex justify-between'>
                <span className='font-light'>Transmission</span>
                <span className='font-bold'>AMG SPEEDSHIFT® 9-speed</span>
             </div>
             <div className='border-b w-full border-black'></div>
             <div className='flex justify-between'>
                <span className='font-light'>Acceleration</span>
                <span className='font-bold'>4.4 sec 0-60 mph **</span>
             </div>
             <div className='border-b w-full border-black'></div>
             <div className='flex justify-between'>
                <span className='font-light'>Curb weight</span>
                <span className='font-bold'>4,376 lbs</span>
             </div>
             <div className='border-b w-full border-black'></div>
             <div className='flex justify-between'>
                <span className='font-light'>Wheels</span>
                <span className='font-bold'>19-inch  AMG® twin 5-spoke </span>
             </div>
             <div className='border-b w-full border-black'></div>
            </div>
          </div>
         </div> 

         <div className='flex flex-col justify-center items-center space-y-4 w-full mt-20 max-w-[1200px]'>
          <h1 className='text-2xl'> Essential Characteristics✔️</h1>
          <div className='flex flex-col space-y-5 w-full mt-10 max-w-[1200px]' onClick={togglePerformanceImages}>
            <div className='border-b w-full border-black'></div>
            <div className='flex justify-between '>
              <h1 className=' font-serif'>Performance</h1>
              <button className='text-cyan-500 text-xl font-medium'>
                {showPerformanceImages ? <BsChevronUp  /> : <BsChevronDown/>}
              </button>
            </div>
            {showPerformanceImages && (
              <div className='grid gap-5  grid-cols-[repeat(auto-fill,minmax(250px,1fr))]'>
                <div className='space-y-2'>
                    <img className='rounded-md' src={performance1} alt="" />
                    <h1 className='text-center font-bold'>AMG-enhanced 3.0L inline-6 turbo engine with hybrid assist</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={performance2} alt="" />
                    <h1 className='text-center font-bold'>Hybrid Integrated Starter-Generator</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={performance3} alt="" />
                    <h1 className='text-center font-bold'>NANOSLIDE cylinder wall technology</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={performance4} alt="" />
                    <h1 className='text-center font-bold'>ECO Start/Stop system</h1>
                </div>
              </div>
            )}
            <div className='border-b w-full border-black'></div>
          </div>

          <div className='flex flex-col space-y-5 w-full mt-10 max-w-[1200px]' onClick={toggleDesignImages}>
            <div className='flex justify-between '>
              <h1 className=' font-serif'>Design</h1>
              <button className='text-cyan-500 text-xl font-medium'>
                {showDesignImages ? <BsChevronUp  /> : <BsChevronDown/>}
              </button>
            </div>
            {showDesignImages && (
              <div className='grid gap-5 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]'>
                <div className='space-y-2'>
                    <img className='rounded-md' src={design1} alt="" />
                    <h1 className='text-center font-bold'>The emotion of intelligence</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={design2} alt="" />
                    <h1 className='text-center font-bold'>Technology with a human touch</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={design3} alt="" />
                    <h1 className='text-center font-bold'>Deletion of decklid badges</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={design4} alt="" />
                    <h1 className='text-center font-bold'>Sensual, sculptural cabin design</h1>
                </div>
              </div>
            )}
            <div className='border-b w-full border-black'></div>
          </div>

          <div className='flex flex-col space-y-5 w-full mt-10 max-w-[1200px]' onClick={toggleLuxuryImages}>
            <div className='flex justify-between '>
              <h1 className=' font-serif'>Luxury</h1>
              <button className='text-cyan-500 text-xl font-medium'>
                {showLuxuryImages ? <BsChevronUp  /> : <BsChevronDown/>}
              </button>
            </div>
            {showLuxuryImages && (
              <div className='grid gap-5 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]'>
                <div className='space-y-2'>
                    <img className='rounded-md' src={luxury1} alt="" />
                    <h1 className='text-center font-bold'>Power front seats with memory</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={luxury2} alt="" />
                    <h1 className='text-center font-bold'>Active multicontour front seats with massage</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={luxury3} alt="" />
                    <h1 className='text-center font-bold'>Dual-zone automatic climate control</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={luxury4} alt="" />
                    <h1 className='text-center font-bold'>1 year of Mercedes me connect services</h1>
                </div>
              </div>
            )}
            <div className='border-b w-full border-black'></div>
          </div>

          <div className='flex flex-col space-y-5 w-full mt-10 max-w-[1200px]' onClick={toggleMultimediaImages}>
            <div className='flex justify-between '>
              <h1 className='font-serif'>Multimedia</h1>
              <button className='text-cyan-500 text-xl font-medium'>
                {showMultimediaImages ? <BsChevronUp  /> : <BsChevronDown/>}
              </button>
            </div>
            {showMultimediaImages && (
              <div className='grid gap-5 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]'>
                <div className='space-y-2'>
                    <img className='rounded-md' src={multimedia1} alt="" />
                    <h1 className='text-center font-bold'>12.3-inch touchscreen multimedia display</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={multimedia2} alt="" />
                    <h1 className='text-center font-bold'>12.3-inch digital instrument cluster</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={multimedia3} alt="" />
                    <h1 className='text-center font-bold'>Steering wheel with Touch Control Buttons</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={multimedia4} alt="" />
                    <h1 className='text-center font-bold'>Mercedes-Benz User Experience (MBUX)</h1>
                </div>
              </div>
            )}
            <div className='border-b w-full border-black'></div>
          </div>

          <div className='flex flex-col space-y-5 w-full mt-10 max-w-[1200px]' onClick={toggleSafetyImages}>
            <div className='flex justify-between '>
              <h1 className=' font-serif'>Safety</h1>
              <button className='text-cyan-500 text-xl font-medium'>
                {showSafetyImages ? <BsChevronUp  /> : <BsChevronDown/>}
              </button>
            </div>
            {showSafetyImages && (
              <div className='grid gap-5 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]'>
                <div className='space-y-2'>
                    <img className='rounded-md' src={safety1} alt="" />
                    <h1 className='text-center font-bold'>Car-to-X Communication</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={safety2} alt="" />
                    <h1 className='text-center font-bold'>Mercedes-Benz Emergency Call Service</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={safety3} alt="" />
                    <h1 className='text-center font-bold'>Active Brake Assist</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={safety4} alt="" />
                    <h1 className='text-center font-bold'>ATTENTION ASSIST</h1>
                </div>
              </div>
            )}
            <div className='border-b w-full border-black'></div>
          </div>
          
          <div className='flex flex-col space-y-5 w-full mt-10 max-w-[1200px]' onClick={toggleAccessoriesImages}>
            <div className='flex justify-between '>
              <h1 className=' font-serif'>Accessories</h1>
              <button className='text-cyan-500 text-xl font-medium'>
                {showAccessoriesImages ? <BsChevronUp  /> : <BsChevronDown/>}
              </button>
            </div>
            {showAccessoriesImages && (
              <div className='grid gap-5 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]'>
                <div className='space-y-2'>
                    <img className='rounded-md' src={accessories1} alt="" />
                    <h1 className='text-center font-bold'>Chrome door handle inserts</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={accessories2} alt="" />
                    <h1 className='text-center font-bold'>AMG Crest LED logo projectors</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={accessories3} alt="" />
                    <h1 className='text-center font-bold'>Wheel locking bolts</h1>
                </div>
                <div className='space-y-2'>
                    <img className='rounded-md' src={accessories4} alt="" />
                    <h1 className='text-center font-bold'>Comfort Box</h1>
                </div>
              </div>
            )}
            <div className='border-b w-full border-black'></div>
          </div>
        </div>

  </main>
  )
}



export default E_ClassSedan