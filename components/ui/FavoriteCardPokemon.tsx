import { FC } from "react";
import { Card, Grid } from "@nextui-org/react"
import { useRouter } from "next/router";

interface Props {
   pokemonId: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {
   const router = useRouter();

   const onFavoriteClicked = () => {
      router.push(`/pokemon/${pokemonId}`)
   }

   return (
      <Grid key={pokemonId} xs={6} sm={3} md={2} onClick={onFavoriteClicked}>
         <Card hoverable clickable css={{ p: "10px" }}>
            <Card.Image
               src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
               width={"100%"}
               height={140}
            />
         </Card>
      </Grid>
   )
}
