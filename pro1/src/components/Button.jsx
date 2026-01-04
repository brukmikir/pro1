import React from 'react'

const Button = ({name,imgUrl,backgroundColor,borderColor,textColor,fullwidth, onClick}) => {
  return (
    <button onClick={onClick} className={`flex justify-center items-center
                      px-7 py-4 gap-2 text-lg border rounded-full
                      ${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}` :
                     ' bg-[#915eff] text-white'} ${fullwidth &&'w-full'}`}>
        {name}

        {imgUrl && <img src={imgUrl} alt="right" className='ml-2 rounded-full border h-5 w-5'/>}
    </button>
  )
}

export default Button