import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import { images } from '../utils'

const Newsletter = () => {
  return (
    <section>
      <div className="h-[800px] flex flex-1 flex-col lg:flex-row lg:h-[324px]">

        <div className='bg-newsletterOrange h-full bg-center bg-cover bg-no-repeat
        flex-1 flex flex-col justify-center items-center px-8 lg:px-0'>
          
          <div>
            <h2 className='h2 mb-12  lg:max-w-md'>
              Subscribe & Get Pet Updatesnews</h2>
            <div className='flex relative'>
              <input 
              className='bg-transparent border-b-2 placeholder:text-white
               text-white outline-none absolute w-full pr-12'
              type="text" 
              placeholder='Mail'
              />
              <HiOutlineArrowNarrowRight
               className='absolute top-0 right-0 text-white text-3xl cursor-pointer' />
            </div>
          </div>
          </div>

        <div className='bg-newsletterYellow bg-center bg-no-repeat bg-cover flex-1
        flex justify-center items-end h-full'>
          
          <img src={images.Dog} alt="dog" />
          </div>
      </div>
    </section>
  )
}

export default Newsletter