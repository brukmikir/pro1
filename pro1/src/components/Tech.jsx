import React from 'react'
import { BallCanvas } from './canvas'
import { technologies } from '../constants'
import SectionWrap from '../Hoc/SectionWrap'


const Tech = () => {
  return (
    <>
      <h2 className="text-center font-bold text-3xl text-white mb-10">Tools & Technologys</h2>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology)=>(
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon}/>
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrap(Tech,"")