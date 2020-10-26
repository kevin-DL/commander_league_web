import Link from "next/link";
import DefaultLayout from "../components/defaultLayout";

const Example = (props) => {
  return (
    <DefaultLayout requiresAuth>
      <p>
        This page is static because it does not fetch any data or include the
        authed user info.
      </p>
      <Link href={"/"}>
        <a>Home</a>
      </Link>
    </DefaultLayout>
  );
};

export default Example;
