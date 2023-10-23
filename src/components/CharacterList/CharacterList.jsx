import { useEffect } from 'react'
import CharacterCard from '../CharacterCard/CharacterCard'
import './CharacterList.scss'
import Pagination from '../Pagination/Pagination'
import useGetCharacters from '../../hooks/useGetCharacters'
import { useDispatch, useSelector } from 'react-redux'
import { setCharacter } from '../../store/selectedCharacter/SelectedCharacterSlice'

const CharacterList = () => {
  const page = useSelector(state => state.pagination.value)

  const dispatch = useDispatch()
  const { data } = useGetCharacters(page)

  const setFirstCharacter = () => {
    dispatch(setCharacter(data[0]))
  }

  useEffect(() => {
    if (data) {
      setFirstCharacter()
    }
  })

  return (
    <section id='character-list-container'>
      <h2>Character List</h2>
      <div className='character-cards-container'>
        {data?.map((character) => {
          return (
            <CharacterCard character={character} key={`${character.id}_${character.name}`} />
          )
        })}
      </div>
      {
        page &&
          <Pagination page={page} />
      }
    </section>
  )
}

export default CharacterList
