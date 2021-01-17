
import React from 'react'
import { useLocation } from 'react-router-dom'

export default function CharacterScreen() {

   const location = useLocation()
   console.log(location)

   return (
      <div>
         <h1>Character</h1>
      </div>
   )
}
