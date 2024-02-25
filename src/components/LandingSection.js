import React from "react";
import { Avatar, Heading, VStack, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >


    <VStack spacing={6}>
      <Box>
        <Avatar src="https://i.pravatar.cc/150?img=7" boxSize="100px"/>
        <Heading as='h5' size='1xl'>{greeting}</Heading>
      </Box>
      <Box>
        <Heading as='h2' size='2xl'>{bio1}</Heading>
        <Heading as='h2' size='2xl'>{bio2}</Heading>
      </Box>
        
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
