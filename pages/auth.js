import { Box, Typography } from "@material-ui/core";
import DefaultLayout from "../components/defaultLayout";
import FirebaseAuth from "../components/FirebaseAuth";
import styles from "./index.module.css";

const Auth = () => {
  return (
    <DefaultLayout requiresAuth={false}>
      <Box
        boxShadow={2}
        className={styles.index}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h4">Sign in</Typography>
        <div>
          <FirebaseAuth />
        </div>
      </Box>
    </DefaultLayout>
  );
};

export default Auth;
