import { useState, useEffect } from 'react';
import { api } from '../Services/api';
import { Card } from '../Components/Card';

var plist = [];

export function Home() {
  const [search, setSearch] = useState('');
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(60);

  useEffect(() => {
    api.get(`?limit=${limit}`).then((list) => {
      plist = list.data.results;
      setPokemons(list.data.results);
      setSearch('');
    })
  }, [limit]);

  useEffect(() => {
    setPokemons(plist.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase())));
  }, [search]);
  
  return (
    <div className="main">
      <div className="container-search">
        <form onSubmit={(e) => e.preventDefault()} className="search">
          <input
            type="text"
            placeholder="Search Pokemon"
            value={search}
            onChange={e => setSearch(e.target.value)}
            />
        </form>
        <form onSubmit={(e) => e.preventDefault()} className="limit">
          <input
            type="text"
            placeholder="Qtd"
            value={limit}
            onChange={e => setLimit(e.target.value)}
          />
        </form>
      </div>
      <div className="container-cards">
        {pokemons.map(pokemon => {
          return <Card key={pokemon.name} pokemon={pokemon} />
        })}
      </div>
    </div>
  )
}
