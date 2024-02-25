import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  

  return (
    <HStack bg="white" borderRadius="18px" direction='row' >
      <VStack direction='row' alignItems="flex-start">
        <Image src={imageSrc} borderRadius="18px"/>
        <Box p={4} spacing={15}>
          <Heading color="black" size='md'>{title}</Heading>
          <Text color="#A2A4A0" mt={4}>{description}</Text>
          <Text color="#000000" mt={4}>See More <FontAwesomeIcon icon={faArrowRight} size="1x"/></Text>
        </Box>
    </VStack>
  </HStack>
  );
};

export default Card;
