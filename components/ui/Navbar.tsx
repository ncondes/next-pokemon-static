import NextLink from "next/link";
import { Link, Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";

export const Navbar = () => {
   const { theme } = useTheme();

   return (
      <div
         style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "0 20px",
            backgroundColor: theme?.colors.gray900.value,
         }}
      >
         <NextLink
            href="/"
            passHref
         >
            <Link>
            <div
               style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
               }}
            >
               <Image
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png"
                  alt="App icon"
                  width={50}
                  height={50}
               />
               <Text color="white" h2>P</Text>
               <Text color="white" h3>okemon</Text>
               </div>
            </Link>
         </NextLink>

         <Spacer css={{ flex: 1 }} />
         
         <NextLink href="/favorites">
            <Link>
               <Text color="white">Favorites</Text>
            </Link>
         </NextLink>
      </div>
   );
};
