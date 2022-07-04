import { GetServerSideProps, NextPage } from "next";

import { useRouter } from "next/router";

interface UserPageProps {
  username: string;
}

const UserPage: NextPage = () => {
  const router = useRouter();
  const { username } = router.query;
  return <div>{username}</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const username = context.query.username;

  return {
    props: {
      username: username,
    },
  };
};

export default UserPage;
