import { getSession } from "next-auth/client";
import Layout from "../src/components/Layout/Layout";
import Router from "next/router";

const newDream = ({ session }) => {
  const user = session?.user;
  React.useEffect(() => {
    if (!session) {
      Router.push("/");
    }
  }, [Router]);

  return (
    <Layout title="Create New Dream">
      <img src={user?.image} alt="" />
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
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
