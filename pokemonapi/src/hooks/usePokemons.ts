import { useEffect, useState } from 'react';

export interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: string[];
  height: number;
  weight: number;
}

export function usePokemons() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const urls = Array.from({ length: 9 }, (_, i) => `https://pokeapi.co/api/v2/pokemon/${i + 1}`);

      const responses = await Promise.all(urls.map(url => fetch(url)));
      const data = await Promise.all(responses.map(res => res.json()));

      const parsed: Pokemon[] = data.map((poke: any) => ({
        id: poke.id,
        name: poke.name,
        image: poke.sprites.front_default,
        types: poke.types.map((t: any) => t.type.name),
        height: poke.height,
        weight: poke.weight,
      }));

      setPokemons(parsed);
    };

    fetchPokemons();
  }, []);

  return { pokemons };
}
