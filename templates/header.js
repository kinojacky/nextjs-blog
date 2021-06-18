import Head from "next/head";

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function header() {
  return (
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href={prefix + "/favicon.ico"} />
    </Head>
  );
}