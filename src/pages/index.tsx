import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen bg-black text-white">
        <p>Works</p>
      </div>
    </>
  );
};

export default Home;

//import { signIn, signOut, useSession } from "next-auth/react";
// const { data: sessionData } = useSession();

// const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//   undefined, // no input
//   { enabled: sessionData?.user !== undefined }
// );