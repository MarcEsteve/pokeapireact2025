import { useEffect, useState } from 'react';

interface Pokemon {
  name: string;
  url: string;
  image: string;
}

export const usePokemons = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      setIsLoading(true);

      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=9');
      const data = await res.json();

      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon: { name: string; url: string }) => {
          const res = await fetch(pokemon.url);
          const detail = await res.json();

          return {
            name: pokemon.name,
            url: pokemon.url,
            image: detail.sprites.front_default,
          };
        })
      );

      setPokemons(pokemonDetails);
      setIsLoading(false);
    };

    fetchPokemons();
  }, []);

  return { pokemons, isLoading };
};
