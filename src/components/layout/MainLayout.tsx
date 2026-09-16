import SiteHeader from "../header/SiteHeader";
import SiteFooter from "../site-footer/SiteFooter";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
};

export default MainLayout;
