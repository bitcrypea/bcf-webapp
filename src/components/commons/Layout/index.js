import React, { Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { LayoutContainer, LayoutContent } from "./styled";

const Layout = props => {
  return (
    <Fragment>
      <Header />
      <LayoutContainer>
        <LayoutContent>{props.children}</LayoutContent>
      </LayoutContainer>
      <Footer />
    </Fragment>
  );
};

export default Layout;
