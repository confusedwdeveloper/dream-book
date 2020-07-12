import Layout from "../src/components/Layout/Layout";
import { Button, Typography, makeStyles } from "@material-ui/core";
import GoogleButton from "react-google-button";
import { signin, signout, useSession } from "next-auth/client";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: 20,
    marginRight: "auto",
    marginLeft: "auto",
  },
  paper: {
    padding: "3rem 0",
    margin: "auto",
    width: 320,
    marginTop: "10%",
  },
}));

const Home = () => {
  const classes = useStyles();
  const [session, loading] = useSession();

  return (
    <Layout>
      <Paper className={classes.paper} elevation={4}>
        {loading ? (
          <CircularProgress classes={{ root: classes.button }} />
        ) : (
          <>
            <Typography align="center" color="primary" variant="h3">
              Sign {session ? "Out" : "In"}
            </Typography>
            {session ? (
              <Button
                classes={{ root: classes.button }}
                onClick={signout}
                variant="contained"
                color="primary"
              >
                Sign Out
              </Button>
            ) : (
              <GoogleButton
                className={classes.button}
                onClick={() => signin("google")}
              />
            )}
          </>
        )}
      </Paper>
    </Layout>
  );
};

export default Home;
