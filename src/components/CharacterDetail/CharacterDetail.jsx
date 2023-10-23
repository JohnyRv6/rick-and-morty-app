import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import './CharacterDetail.scss'

const keysToExclude = ['id', 'origin', 'location', 'episode', 'url', 'created', 'image']

function CharacterDetail () {
  const [characterKeys, setCharacterKeys] = useState([])
  const selectedCharacter = useSelector(state => state.selectedCharacter.value)

  const { image, name, id } = selectedCharacter

  useEffect(() => {
    const keys = Object.keys(selectedCharacter)
    setCharacterKeys(keys)
  }, [selectedCharacter])

  return (
    <section id='character-detail-container'>
      <div className='character-detail-card'>
        <picture>
          <img src={image} alt={`${name}_details_image`} />
        </picture>
        <div className='character-detail-card-info'>
          {
          // eslint-disable-next-line array-callback-return
          characterKeys?.map(key => {
            if (!keysToExclude.includes(key)) {
              return (
                <div className='character-values-container' key={`title_${id}_${key}`}>
                  <div className='character-detail-card-info-title'>{key}:</div>
                  <div className='character-detail-card-info-value'>{selectedCharacter[key] || 'N/A'}</div>
                </div>
              )
            }
          })
          }
        </div>
      </div>
    </section>
  )
}

export default CharacterDetail
