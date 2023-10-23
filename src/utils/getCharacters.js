import axios from 'axios'

export default async function getCharacters ({ queryKey }) {
  const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${queryKey[1]}`)
  return response?.data?.results
}
