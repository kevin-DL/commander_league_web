import Link from "next/link";
import Head from "next/head";
import { Container, CssBaseline, NoSsr } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MaterialLink from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useUser } from "../utils/auth/useUser";
import AuthRequired from "./authRequired";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

export default function DefaultLayout({
  children,
  title = "Commander League",
  requiresAuth = false,
}) {
  const classes = useStyles();
  const { user, logout } = useUser();

  const renderAuthButtons = () => {
    if (user) {
      return (
        <Button
          onClick={() => logout()}
          color="secondary"
          variant="contained"
          className={classes.link}
        >
          Logout
        </Button>
      );
    }

    return (
      <Link href="/auth">
        <Button color="primary" variant="outlined" className={classes.link}>
          Login
        </Button>
      </Link>
    );
  };

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <React.Fragment>
        <CssBaseline />
        <NoSsr>
          <AppBar
            position="static"
            color="default"
            elevation={0}
            className={classes.appBar}
          >
            <Toolbar className={classes.toolbar}>
              <Typography
                variant="h6"
                color="inherit"
                noWrap
                className={classes.toolbarTitle}
              >
                <Link href="/" passHref>
                  <MaterialLink>Commander League</MaterialLink>
                </Link>
              </Typography>
              <nav>
                <MaterialLink
                  variant="button"
                  color="textPrimary"
                  href="#"
                  className={classes.link}
                >
                  Features
                </MaterialLink>
                <MaterialLink
                  variant="button"
                  color="textPrimary"
                  href="#"
                  className={classes.link}
                >
                  Enterprise
                </MaterialLink>
                <MaterialLink
                  variant="button"
                  color="textPrimary"
                  href="#"
                  className={classes.link}
                >
                  Support
                </MaterialLink>
              </nav>
              {renderAuthButtons()}
            </Toolbar>
          </AppBar>
        </NoSsr>
        {/* <Container > */}
        {!user && requiresAuth ? <AuthRequired /> : children}
        {/* </Container>         */}
      </React.Fragment>
    </div>
  );
}
