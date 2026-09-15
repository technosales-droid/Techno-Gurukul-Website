import { Roboto, Sansita_Swashed } from "next/font/google";

const roboto = Roboto({
  variable: "--roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});
const sansita_swashed = Sansita_Swashed({
  variable: "--sansita-swashed",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export { roboto, sansita_swashed };
