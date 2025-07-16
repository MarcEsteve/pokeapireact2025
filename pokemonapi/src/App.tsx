import "./global.css";
import { usePokemons } from "./hooks/usePokemons";
import { PokemonCard } from "./components/PokemonCard";

export default function App() {
  const { pokemons, isLoading } = usePokemons();

  if (isLoading) return <p>Cargando pokemons...</p>;

  return (
    <>
      <h1>Pokemon API con React 2025</h1>
      <div className="grid">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
