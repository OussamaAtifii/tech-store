// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-cards'

import '../styles/slider.css'

import sliderImg1 from '../assets/auto-slider-1.webp'
import sliderImg2 from '../assets/auto-slider-2.jpeg'
import sliderImg3 from '../assets/auto-slider-3.jpeg'
import sliderImg4 from '../assets/auto-slider-4.webp'
import sliderImg5 from '../assets/auto-slider-5.jpeg'
import sliderImg6 from '../assets/auto-slider-6.jpeg'
// import required modules
import { EffectCards } from 'swiper/modules'

export default function SliderAutoResponsive () {
  return (
    <>
      <Swiper
        effect='cards'
        grabCursor
        modules={[EffectCards]}
        className='mySwiperResponsive'
      >
        <SwiperSlide className='swiper-slider-responsive'>
          <img src={sliderImg1} alt='primera imagen del slider de ordenadores' className='w-full h-full object-cover object-center' />
        </SwiperSlide>
        <SwiperSlide className='swiper-slider-responsive'>
          <img src={sliderImg2} alt='segundo imagen del slider de ordenadores' className='w-full h-full object-cover object-center' />
        </SwiperSlide>
        <SwiperSlide className='swiper-slider-responsive'>
          <img src={sliderImg3} alt='tercera imagen del slider de ordenadores' className='w-full h-full object-cover object-center' />
        </SwiperSlide>
        <SwiperSlide className='swiper-slider-responsive'>
          <img src={sliderImg4} alt='cuarta imagen del slider de ordenadores' className='w-full h-full object-cover object-center' />
        </SwiperSlide>
        <SwiperSlide className='swiper-slider-responsive'>
          <img src={sliderImg5} alt='primera imagen del slider de ordenadores' className='w-full h-full object-cover object-center' />
        </SwiperSlide>
        <SwiperSlide className='swiper-slider-responsive'>
          <img src={sliderImg6} alt='primera imagen del slider de ordenadores' className='w-full h-full object-cover object-center' />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
