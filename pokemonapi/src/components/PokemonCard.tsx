import type { FC } from 'react';

interface Pokemon {
  name: string;
  image: string;
}

interface Props {
  pokemon: Pokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  return (
    <div className="card">
      <img src={pokemon.image} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
    </div>
  );
};
