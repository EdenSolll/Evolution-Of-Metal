// PageContainer component
import React from "react";
import { Container } from "reactstrap";
import NavBar from "../components/NavBar";

type Props = {
  children: React.ReactNode;
};

export const PageContainer: React.FC<Props> = ({ children }) => {
  return (
    <div style={{ paddingBottom: '90px', minHeight: '100vh' }}>
      <Container className="main">
        {children}
      </Container>
      <NavBar />
    </div>
  );
};

export default PageContainer;
