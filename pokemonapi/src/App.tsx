import { useState } from 'react';
import { usePokemons } from './hooks/usePokemons';
import { PokemonCard } from './components/PokemonCard';
import './global.css';

const tipos = ['all', 'fire', 'grass', 'water', 'flying'];

function App() {
  const { pokemons } = usePokemons();
  const [filtro, setFiltro] = useState('all');

  const pokemonsFiltrados = pokemons.filter(pokemon =>
    filtro === 'all' ? true : pokemon.types.includes(filtro)
  );

  return (
    <div>
      <h1>Pokedex API React</h1>

      <div className="filter-buttons">
        {tipos.map(tipo => (
          <button key={tipo} onClick={() => setFiltro(tipo)}>
            {tipo.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid">
        {pokemonsFiltrados.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default App;
