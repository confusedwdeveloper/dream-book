import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "../Link/Link";
import { Box } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { signin, signout, useSession } from "next-auth/client";
import dynamic from "next/dynamic";

const SideNav = dynamic(() => import("./SideNav"));
const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  // useSession
  const [session] = useSession();

  // drawer handling
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = (value) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(value);
  };

  // defining here to reuse in drawer
  const handleSignIn = (e) => signin("google");
  const handleSignOut = (e) => signout();

  // media query helper
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const center = matches ? "center" : "inherit";

  const loggedOutLinks = (
    <Button onClick={handleSignIn} color="inherit">
      Login
    </Button>
  );
  const loggedInLinks = (
    <>
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
    </>
  );

  return (
    <>
      <SideNav
        handleSignIn={handleSignIn}
        handleSignOut={handleSignOut}
        isOpen={isOpen}
        toggleDrawer={toggleDrawer}
        session={session}
      />
      <AppBar position="static">
        <Toolbar>
          <Hidden implementation="css" mdUp>
            <IconButton
              onClick={toggleDrawer(true)}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography align={center} variant="h5" className={classes.title}>
            <Link href="/" color="inherit" underline="none">
              DreamBook
            </Link>
          </Typography>
          <Hidden implementation="css" smDown>
            <Box>{!session ? loggedOutLinks : loggedInLinks}</Box>
          </Hidden>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
