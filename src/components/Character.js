
import React, { useEffect, useState } from 'react'
import CharacterItem from './CharacterItem'

export default function Character() {

   const [characters, setCharacters] = useState([])

   useEffect(() => {
      (async () => {
         const result = await fetch(`https://www.breakingbadapi.com/api/characters`)
         const data = await result.json()
         setCharacters(data)
         console.log(data)
      })()
   }, [characters])

   return (

      <div className="character container">
         <h1>Breaking Bad Characters</h1>

         <div className="character__grid">
            {characters.map(character => (
               <CharacterItem
                  key={character.char_id}
                  character={character}
               />
            ))}
         </div>
      </div>
   )
}
