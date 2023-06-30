
import hero from '../../../assets/images/hero.png'
import React from 'react'
import { Button, Typography } from '@material-tailwind/react'


const Hero = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center bg-gray-50 overflow-hidden">
      <div className="pt-10 sm:pt-20 lg:pt-40 w-full flex flex-col lg:flex-row">
        {/* :HERO MAIN */}
        <div className="w-full lg:w-1/2 flex flex-col items-center text-gray-600"> {/* Container */}
          {/* ::Hero Inner */}
          <div className="p-5 flex flex-col justify-center items-center lg:items-start text-start lg:text-left">
            {/* Hero Title */}
            <Typography
            as="h1"
                    className="mr-4 py-1.5 font-medium
                    text-3xl py-4 text-3xl sm:text-5xl tracking-wide leading-tight text-emerald-400"
                >
                      Covid ID
                </Typography>
            {/* Subtitle */}
            <Typography>
            <p className="text-lg font-semibold text-blue-400 tracking-wide">Monitoring Perkembangan Covid</p>
            </Typography>
            
            <Typography>
            <p className="text-lg mt-5 font-semibold text-gray w-96 tracking-wide text-justify md:max-md:mx-5 sm:max-sm:mx-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, non animi maxime commodi temporibus iusto aut laboriosam magni debitis rem.</p>
            </Typography>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center">
              <Button className="m-0.5 py-2.5 px-10 rounded-md bg-primary-color font-sans capitalize text-xl hover:bg-emerald-300" size='lg' >Vaccine</Button>
              
            </div>
          </div>
        </div>
        {/* :HERO ILLUSTRATION */}
        <div className="relative w-full lg:w-1/2 flex flex-col justify-center items-center overflow-hidden">
          <img src={ hero } alt="" className="w-2/3 lg:w-full" />
        </div>
      </div>

    </div>
  )
}

export default Hero
