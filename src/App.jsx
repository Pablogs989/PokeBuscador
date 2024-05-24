import { useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    .then((response) => {
      setData(response.data.results)
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })

  const filteredData = data.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1>Pokemon</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)
        }
      />
      <ul>
        {filteredData.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  )
}


export default App;
