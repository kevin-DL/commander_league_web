import Link from "next/link";

const AuthRequired = (props) => {
  return (
    <>
      <p>Hi there!</p>
      <p>
        You are not signed in.{" "}
        <Link href={"/auth"}>
          <a>Sign in</a>
        </Link>
      </p>
    </>
  );
};

export default AuthRequired;
