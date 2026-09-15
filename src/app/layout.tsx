import { roboto, sansita_swashed } from "./fonts";
import "@/styles/css/bootstrap.min.css";
import "@/styles/css/fontawesome-all.min.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@/styles/scss/main.scss";
import { ToastContainer } from "react-toastify";
import { ContextProvider } from "@/context/context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${roboto.variable} ${sansita_swashed.variable}`}>
        <ContextProvider>{children}</ContextProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
