const toggleFavorite = (id: number) => {
   let favorites: number[] = JSON.parse(localStorage.getItem("Favorites") || "[]");

   if (favorites.includes(id)) {
      favorites = favorites.filter((pokemonId) => pokemonId !== id);
   } else {
      favorites.push(id);
   }
   
   localStorage.setItem("Favorites", JSON.stringify(favorites));
};

const existPokemonInFavorites = (id: number): boolean => {
   // If function is being executed by the server side => return false
   if (typeof window === "undefined") return false;

   const favorites: number[] = JSON.parse(localStorage.getItem("Favorites") || "[]");
   return favorites.includes(id);
}

const pokemons = (): number[] => {
   return JSON.parse(localStorage.getItem("Favorites") || "[]");
}

export default {
   toggleFavorite,
   existPokemonInFavorites,
   pokemons,
}