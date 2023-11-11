import { useState } from "react"
import { data, images } from "../utils"


const Pets = () => {

  const [petDetails, setPetDetails] = useState(data.petsData[10])

  const [petIndex, setPetIndex] = useState(10)


  const getPetDetails = (id) => {
    const pet = data.petsData.find(pet => pet.id === id)
    setPetDetails(pet)
  } 

  return (
    <section className="bg-pets bg-center py-6 overflow-hidden ">
      <div className="flex flex-col lg:flex-row">
        <div className="hidden xl:flex xl:w-[30%] xl:pl-[160px]">
        <img 
    
        src={images.PetsBadge} 
        alt="badge" />
        </div>

        <div className="flex-1 flex flex-col lg:flex-row">
        
        <div className="lg:w-[30%] flex flex-col justify-center items-end pb-6
        lg:py-2 mx-auto lg:mx-0">
          <div className="text-center text-white">

            <div className="flex gap-x-4 mb-1 items-baseline justify-center">
            <p className="text-[2rem] capitalize">
              {petDetails.category}</p>

            <p className="uppercase text-[1.1rem] ">
              ({petDetails.name})</p>
              </div>

            <div className="w-[150px] h-[150px] mx-auto lg:mx-0 border-4 border-white
            rounded-full">
              <img 
              className="w-full h-full"
              src={petDetails.image} alt={petDetails.name} />
            </div>
          </div>
          </div>
        

        <div className="relative lg:w-[60%] flex-1 flex  items-center">
          <div className="flex flex-wrap gap-4 justify-center lg:justify-end lg:-mr-6">
            {
              data.petsData.map(({id, image, name}) => (
                <div 
                onClick={() => {
                  getPetDetails(id)
                  setPetIndex(id)
                }}
                key={id} className="relative cursor-pointer">
                  <div className={`h-full w-full absolute rounded-full
                  ${petIndex == id ? 'ring ring-white' : 'bg-black/40 '}`} />
                  <img
                  width={95}
                  height={96}
                  src={image}
                   alt={name} 
                   draggable='false'
                   />
                </div>
              ))
            }
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pets