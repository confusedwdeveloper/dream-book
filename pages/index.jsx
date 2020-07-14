import Layout from "../src/components/Layout/Layout";
import { makeStyles } from "@material-ui/core";
import GoogleButton from "react-google-button";
import { signin, getSession } from "next-auth/client";
import Paper from "@material-ui/core/Paper";
import Router from "next/router";

const useStyles = makeStyles({
  button: {
    display: "block",
    marginTop: 20,
    marginRight: "auto",
    marginLeft: "auto",
  },
  paper: {
    padding: "2rem 0",
    width: 300,
    background: "rgba(0,0,0,0.4)",
  },
  background: {
    background: `url(drean.webp) no-repeat center center/cover`,
    width: "100vw",
    height: "100vh",
    padding: 0,
    margin: 0,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: -5,
    maxWidth: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -3,
  },
});

const Home = ({ session }) => {
  const classes = useStyles();

  //redirect
  React.useEffect(() => {
    if (session) {
      Router.push("/my-dreams");
    }
  }, [session]);

  return (
    <Layout className={classes.background}>
      <div className={classes.overlay} />
      <Paper className={classes.paper} elevation={4}>
        <GoogleButton
          className={classes.button}
          onClick={() => signin("google")}
        />
      </Paper>
    </Layout>
  );
};

export default Home;

export const getServerSideProps = async (ctx) => {
  return {
    props: {
      session: await getSession(ctx),
    },
  };
};
