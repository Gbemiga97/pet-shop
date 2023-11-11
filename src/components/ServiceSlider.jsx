import {SwiperSlide, Swiper} from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css'
import { data } from '../utils'


const ServiceSlider = () => {
  return (
    <Swiper 
    slidesPerView={1}
    spaceBetween={30}
    navigation={true}
    modules={[Navigation]}
    breakpoints={{
      768: {
        slidesPerView: 2,
      },
    }}
    className='serviceSlider min-h-[680px]'
    >
      {
        data.servicesData.map(({image, name, desc}, i) => (
          <SwiperSlide
          className=' border  border-primary/20 bg-cream min-h-[560px] rounded-[66px]
          py-16 px-8'
          key={`service-${i}`}>
            <div className='flex flex-col items-start  min-h-[460px]'>
            <img 
            className='mb-9'
            src={image} 
            alt={name} />
            <p className='text-[26px] font-medium mb-4'>
              {name}</p>
            <p className='text-[20px]'>
              {desc}</p>
              <div className='mt-auto'>
              <button className='btn btn-primary'>
              Explore</button>
              </div>
          
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default ServiceSlider