import Head from "next/head";
import Container from "@material-ui/core/Container";

const Layout = ({ title, children }) => {
  return (
    <>
      {/* <Nav /> */}
      {title && (
        <Head>
          <title key={title}>{title}</title>
        </Head>
      )}
      <Container component="main" maxWidth="lg">
        {children}
      </Container>
    </>
  );
};
export default Layout;
