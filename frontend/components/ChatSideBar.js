import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/react";

const Chat = () => {
  return (
    <Flex p={3} align="center" _hover={{ bg: "gray.100", cursor: "pointer" }}>
      <Avatar src="" marginEnd={3} />
      <Text>User@gmail.com</Text>
    </Flex>
  );
};

export default function Sidebar() {
  return (
    <Flex
      //   bg="blue.100"
      w="300px"
      borderEnd="1px solid"
      borderColor="gray.200"
      direction="column"
    >
      <Flex
        // bg="red.100"
        h="81px"
        w="100%"
        align="center"
        justifyContent="space-between"
        borderBottom="1px solid"
        borderColor="gray.200"
        p={3}
      >
        <Flex align="center">
          <Avatar marginEnd={3} src="" />
          <Text>Albert Einstein</Text>
        </Flex>

        <IconButton size="sm" icon={<ArrowLeftIcon />}></IconButton>
      </Flex>
      <Button m={5} p={4}>
        New Chat
      </Button>

      <Flex
        overFlowX="scroll"
        direction="column"
        sx={{ scrollbarWidth: "none" }}
        flex={1}
      >
        <Chat />
      </Flex>
    </Flex>
  );
}
