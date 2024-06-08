import React from 'react'

import { TbUserCircle } from "react-icons/tb";

const Avatar = ({ user, name, imageUrl, width, heigth }) => {

   let avatarName = ""

   if(name) {
      const splitName = name?.split(" ")

      if(splitName.length > 1) {
         avatarName = splitName[0][0] + splitName[1][0]
      } else {
         avatarName = splitName[0][0]
      }
   }

   const bgColor = [
      'bg-slate-200',
      'bg-teal-200',
      'bg-red-200',
      'bg-blue-200',
      'bg-indigo-200',
      'bg-green-200',
      'bg-yellow-200',
      'bg-gray-200',
      'bg-amber-200',
      'bg-lime-200',
      'bg-emerald-200',
      'bg-cyan-200',
      'bg-sky-200'
   ]

   const randomNumber = Math.floor(Math.random() * 13)

   console.log(randomNumber)

  return (
    <div className={`text-slate-800 overflow-hidden rounded-full font-bold `} style={{width : width+"px", height : heigth+"px"}}  >
      {
         imageUrl ? (
            <img 
               src={imageUrl}
               width={width}
               height={heigth}
               alt={name}
               className='overflow-hidden rounded-full '
            />
         ) : (
            name ? (
               <div style={{width : width+"px", height : heigth+"px"}} className={`flex justify-center text-lg items-center overflow-hidden rounded-full ${bgColor[randomNumber]}`}>{avatarName}</div>
            ) : (
               <TbUserCircle size={width}/>
            )
         )
      }
    </div>
  )
}

export default Avatar
