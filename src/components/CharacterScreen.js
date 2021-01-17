
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import CharacterItemScreen from './CharacterItemScreen'

const CharacterScreen = React.memo(() => {

   const { pathname } = useLocation()

   const [character, setCharacter] = useState([])
   const characterId = pathname.split('/')[2];

   useEffect(() => {
      (async () => {
         const result = await fetch(`https://www.breakingbadapi.com/api/characters/${parseInt(characterId)}`)
         const data = await result.json()
         setCharacter(data)
      })()
   }, [characterId])

   return (
      <div className="container">
         {character.map(item => (
            <CharacterItemScreen
               key={item.char_id}
               item={item}
            />
         ))}
      </div>
   )
})

export default CharacterScreen