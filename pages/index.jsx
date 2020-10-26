import useSWR from "swr";
import Link from "next/link";
import { useUser } from "../utils/auth/useUser";
import DefaultLayout from "../components/defaultLayout";
import styles from "./index.module.css";
import { Box, Button, Container, Typography } from "@material-ui/core";

const fetcher = (url, token) =>
  fetch(url, {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json", token }),
    credentials: "same-origin",
  }).then((res) => res.json());

const Index = () => {
  const { user, logout } = useUser();
  const { data, error } = useSWR(
    user ? ["/api/getFood", user.token] : null,
    fetcher
  );

  return (
    <DefaultLayout>
      <Box
        boxShadow={2}
        className={styles.index}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h1">Start creating your leagues</Typography>
        <Link href="/auth">
          <Button
            color="primary"
            classes={{ root: styles["main-button"] }}
            variant="contained"
          >
            {" "}
            Get Started{" "}
          </Button>
        </Link>
      </Box>
    </DefaultLayout>
  );
};

export default Index;
