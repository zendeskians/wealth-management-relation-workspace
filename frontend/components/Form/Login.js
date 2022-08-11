import Head from "next/head";
import { Box, Button, Center, Stack } from "@chakra-ui/react";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Stack align="center">
        <Center h="100vh">
          <Button boxShadow="md">Sign in with google</Button>
        </Center>
      </Stack>
    </>
  );
}
