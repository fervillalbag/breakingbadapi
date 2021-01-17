
import React from 'react'
import { useHistory } from 'react-router-dom'

export default function CharacterItemScreen({ item }) {

   const { replace } = useHistory()

   const handleBack = () => replace('/')

   return (
      <>
         <div className="character-view__grid">
            <div className="character-view__media animate__animated animate__fadeInDown">
               <img
                  key={item.char_id}
                  src={item.img}
                  alt={item.name}
                  className="character-view__image"
               />
            </div>
            <div className="character-view__info animate__animated animate__fadeIn">
               <h4 className="character-view__title">{item.name}</h4>
               <p className="character-view__description">Birthday: <span>{item.birthday}</span></p>
               <p className="character-view__description">Portrayed: <span>{item.portrayed}</span></p>
               <p className="character-view__description">Status: <span>{item.status}</span></p>
               {
                  item.nickname.length > 0
                  && <p className="character-view__description">Nickname: <span>{item.nickname}</span></p>
               }
            </div>
         </div>

         <div className="character__action">
            <button
               className="character__button"
               onClick={handleBack}
            >
               Volver atrás
            </button>
         </div>
      </>
   )
}
