
import React from 'react'
import { Link } from 'react-router-dom'

export default function CharacterItem({ character }) {

   if (character.nickname === 'Holly') {
      return null
   }

   return (
      <div className="character__item">
         <div className="character__medi">
            <img
               src={character.img}
               alt={character.name}
               className="character__img"
               loading="lazy"
            />
         </div>
         <div className="character__body">
            <span className="character__name">
               {character.name}
            </span>
            <span className="character__portrayed">
               {character.portrayed}
            </span>
            {character.occupation.map(job => (
               <span className="character__job" key={job}>
                  {job}
               </span>
            ))}
            <Link className="character__link" to={`/character/${character.char_id}`}>
               Ver más
            </Link>
         </div>
      </div>
   )
}