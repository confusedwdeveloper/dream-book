import { getSession } from "next-auth/client";
import Layout from "../src/components/Layout/Layout";
import Router from "next/router";
import { Box } from "@material-ui/core";

const newDream = ({ session }) => {
  const user = session?.user;

  //redirect
  React.useEffect(() => {
    if (!session) {
      Router.push("/");
    }
  }, [Router]);

  return (
    <Layout title="Create New Dream">
      <Box component="article">
        <img src={user?.image} alt="" />
        <h1>{user?.name}</h1>
        <p>{user?.email}</p>
      </Box>
    </Layout>
  );
};

export default newDream;

export const getServerSideProps = async (context) => {
  return {
    props: {
      session: await getSession(context),
    },
  };
};
