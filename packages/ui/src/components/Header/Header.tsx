import type { FunctionComponent } from "react";

import { Container } from "../Container";
import { Navigation, type NavigationProps } from "../Navigation";

export type HeaderProps = NavigationProps;

export const Header: FunctionComponent<HeaderProps> = (props) => {
  return (
    <header className="py-10">
      <Container>
        <Navigation {...props} />
      </Container>
    </header>
  );
};
