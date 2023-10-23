import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCharacter } from '../../store/selectedCharacter/SelectedCharacterSlice'
import './CharacterCard.scss'

const CharacterCard = ({ character }) => {
  const [isHover, setIsHover] = useState()
  const { image, name, status, type, gender } = character

  const dispatch = useDispatch()

  return (
    <button onClick={() => dispatch(setCharacter(character))} className={`card-container ${isHover ? 'hovered' : ''}`} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <h3 className={isHover ? 'hovered' : ''}>{name}</h3>
      <h4 className={isHover ? 'hovered' : ''}>STATUS: {status}</h4>
      <h4 className={isHover ? 'hovered' : ''}>TYPE: {type || 'unknown'}</h4>
      <h4 className={isHover ? 'hovered' : ''}>GENDER: {gender || 'unknown'}</h4>
      <img className={isHover ? 'hovered' : ''} src={image} alt={`${name}_image`} />
    </button>
  )
}

export default CharacterCard
