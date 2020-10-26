import {
  Avatar,
  Box,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
} from "@material-ui/core";
import useSWR from "swr";
import DefaultLayout from "../components/defaultLayout";
import { authorisedFetchGet } from "../services/authenticatedFetchService";
import { useUser } from "../utils/auth/useUser";
import styles from "./profile.module.css";

const Profile = () => {
  const { user } = useUser();
  const { data, error } = useSWR(
    user ? [`${process.env.NEXT_PUBLIC_API_URL}/profiles`, user.token] : null,
    authorisedFetchGet
  );

  if (!data && !error) {
    return (
      <DefaultLayout requiresAuth>
        <Box
          className={styles.loading}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress />
        </Box>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout requiresAuth>
      <Box className={styles.main}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <Card>
              <CardContent>
                <Avatar src={data.data.picture} alt={data.data.username} />
                <Typography variant="h5">{data.data.username}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </DefaultLayout>
  );
};

export default Profile;
