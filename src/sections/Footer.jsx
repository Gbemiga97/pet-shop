import {BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'
import { data, images } from '../utils'


const Footer = () => {
  return (
    <footer className='bg-footer bg-cover bg-center bg-no-repeat min-h-[263px]
    flex items-center py-8'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row justify-between'>

          <h1 className='flex-1 text-orange lg:text-6xl text-4xl text-center lg:text-left flex
          items-center justify-center lg:justify-start mb-6'>
            Pet-First
          </h1>

          <div className='text-white flex-1'>
            <ul className='flex flex-col gap-y-6 lg:flex-row items-center lg:gap-x-4
            text-base font-semibold mb-8 '>
             {
              data.navData.map(({href, name}, i) => (
                <li key={i}>
                  <a href={href}>{name}</a>
                </li>
              ))
             }
            </ul>

            <div className='flex justify-center lg:justify-start'>
              <h5 className='mr-6'>Flow</h5>
              <ul className='flex - gap-x-4' >
                <li>
                  <a href="#"><BsFacebook /></a>
                </li>
                <li>
                  <a href="#"><BsInstagram /></a>
                </li><li>
                  <a href="#"><BsTwitter /></a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer