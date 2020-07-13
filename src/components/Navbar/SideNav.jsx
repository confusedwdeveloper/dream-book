import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Link from "../Link/Link";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 150,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing(8),
  },
  paper: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

const SideNav = ({
  toggleDrawer,
  isOpen,
  session,
  handleSignIn,
  handleSignOut,
}) => {
  const classes = useStyles();
  const loggedOutLinks = (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Button onClick={handleSignIn} color="inherit">
        Login
      </Button>
    </div>
  );
  const loggedInLinks = (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Button underline="none" component={Link} href="/dreams" color="inherit">
        Dreams
      </Button>
      <Button
        underline="none"
        component={Link}
        href="/my-dreams"
        color="inherit"
      >
        My Dreams
      </Button>
      <Button
        underline="none"
        component={Link}
        href="/new-dream"
        color="inherit"
      >
        New Dream
      </Button>
      <Button onClick={handleSignOut} underline="none" color="inherit">
        Logout
      </Button>
    </div>
  );

  return (
    <Drawer
      classes={{ paper: classes.paper }}
      open={isOpen}
      onClose={toggleDrawer(false)}
    >
      {!session ? loggedOutLinks : loggedInLinks}
    </Drawer>
  );
};

export default SideNav;
