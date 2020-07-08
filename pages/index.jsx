import Layout from "../src/components/Layout/Layout";
import { Button } from "@material-ui/core";
import Link from "../src/components/Link/Link";

const Home = () => {
  return (
    <Layout>
      <Button color="primary" variant="contained">
        Hello World
      </Button>
      <Link href="/about">About</Link>
    </Layout>
  );
};

export default Home;
