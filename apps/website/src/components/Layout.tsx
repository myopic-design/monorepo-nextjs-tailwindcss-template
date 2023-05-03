import type { FunctionComponent, PropsWithChildren } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
