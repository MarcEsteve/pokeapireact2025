import type { Pokemon } from '../hooks/usePokemons';
import './PokemonCard.css';

interface Props {
  pokemon: Pokemon;
}

export function PokemonCard({ pokemon }: Props) {
  return (
    <div className="card">
      <img src={pokemon.image} alt={pokemon.name} />

      <h2>{pokemon.name}</h2>

      <p><strong>Tipos:</strong> {pokemon.types.join(', ')}</p>
      <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
      <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
    </div>
  );
}
