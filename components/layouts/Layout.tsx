import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
   title?: string;
}

const origin = (typeof window === "undefined") ? "" : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
   return (
      <>
         <Head>
            <title>{title || "Pokemon App"}</title>
            <meta name="author" content="Nicolas Conde " />
            <meta name="description" content={`Information about pokemon ${title}`} />
            <meta name="keywords" content={`${title}, pokemon, pokedex`} />

            <meta property="og:title" content={`Information about ${title}`} />
            <meta property="og:description" content={`This is the screen about ${title}`} />
            <meta property="og:image" content={`${origin}/img/pokemon.png`} />
         </Head>
         <Navbar />
         <main style={{
            padding: "0 20px",
         }}>
            {children}
         </main>
      </>
   );
};
