import React from 'react';
import {Box, HStack, Skeleton} from 'native-base';

const LoadingCardAnime = () => {
  return (
    <HStack>
      <Box w="150" mr="2">
        <Skeleton w="full" h="200" rounded="md" startColor="gray.700" />
        <Skeleton.Text
          w="full"
          h="5"
          mt="2"
          rounded="md"
          startColor="gray.700"
        />
      </Box>
      <Box w="150" mr="2">
        <Skeleton w="full" h="200" rounded="md" startColor="gray.700" />
        <Skeleton.Text
          w="full"
          h="5"
          mt="2"
          rounded="md"
          startColor="gray.700"
        />
      </Box>
      <Box w="150" mr="2">
        <Skeleton w="full" h="200" rounded="md" startColor="gray.700" />
        <Skeleton.Text
          w="full"
          h="5"
          mt="2"
          rounded="md"
          startColor="gray.700"
        />
      </Box>
    </HStack>
  );
};

export default LoadingCardAnime;
