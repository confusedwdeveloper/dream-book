import Head from "next/head";
import Container from "@material-ui/core/Container";
import Navbar from "../Navbar/Navbar";

const Layout = ({ title, children }) => {
  return (
    <>
      {title && (
        <Head>
          <title key={title}>{title}</title>
        </Head>
      )}
      <Navbar />
      <Container component="main" maxWidth="lg">
        {children}
      </Container>
    </>
  );
};
export default Layout;
