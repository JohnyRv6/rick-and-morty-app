import { useQuery } from 'react-query'
import getCharacters from '../utils/getCharacters'

const useGetCharacters = (page) => {
  return useQuery(['characters', page], getCharacters)
}

export default useGetCharacters
