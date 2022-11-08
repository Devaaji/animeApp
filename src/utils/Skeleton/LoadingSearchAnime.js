import {Box, Flex, Skeleton, VStack} from 'native-base';
import React from 'react';

const LoadingSearchAnime = () => {
  return (
    <VStack space={1}>
      <Box bg="gray.800" p="2">
        <Flex direction="row">
          <Skeleton w="95" h="120" rounded="md" mr="2" />
          <Box flex={1}>
            <Skeleton.Text />
          </Box>
        </Flex>
      </Box>
      <Box bg="gray.800" p="2">
        <Flex direction="row">
          <Skeleton w="95" h="120" rounded="md" mr="2" />
          <Box flex={1}>
            <Skeleton.Text />
          </Box>
        </Flex>
      </Box>
      <Box bg="gray.800" p="2">
        <Flex direction="row">
          <Skeleton w="95" h="120" rounded="md" mr="2" />
          <Box flex={1}>
            <Skeleton.Text />
          </Box>
        </Flex>
      </Box>
    </VStack>
  );
};

export default LoadingSearchAnime;
