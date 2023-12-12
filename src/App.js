//사용
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import React from "react";

function App() {
  return (
    <HStack>
      <Box w="300px" h="300px" bgColor="salmon">
        <Text fontSize="50px" color="white">
          챠크라 UI
        </Text>
        <Button colorScheme="blue">버튼</Button>
      </Box>
      <Box w="300px" h="300px" bgColor="salmon">
        <Text fontSize="50px" color="white">
          챠크라 UI
        </Text>
      </Box>
      <Box w="300px" h="300px" bgColor="salmon">
        <Text fontSize="50px" color="white">
          챠크라 UI
        </Text>
      </Box>
    </HStack>
  );
}

export default App;
