import {Box, Flex, HStack, Skeleton, Spacer, VStack} from 'native-base';
import React from 'react';

const LoadingDetailAnime = () => {
  return (
    <Box>
      <Box bg="gray.600" w="full" h="200" px="3" py="3">
        <Skeleton
          bg="gray.800"
          w="130"
          h="full"
          startColor="gray.600"
          rounded="md"
        />
      </Box>
      <VStack bg="gray.800" p="3">
        <Skeleton.Text />
      </VStack>
      <VStack bg="gray.800" p="3">
        <Flex direction="row" justify="space-between">
          <Skeleton w="50" rounded="full" />
          <Skeleton w="50" left="-20" rounded="full" />
          <Skeleton w="50" left="-40" rounded="full" />
          <Spacer />
          <Skeleton w="150" rounded="md" />
        </Flex>
      </VStack>
      <HStack bg="gray.800" p="3" space="3">
        <Skeleton w="30%" h="120" rounded="md" />
        <Skeleton w="30%" h="120" rounded="md" />
        <Skeleton w="30%" h="120" rounded="md" />
      </HStack>
      <Box bg="gray.800" h="100" p="3">
        <Skeleton.Text />
      </Box>
      <VStack p="3" bg="gray.800" space="2">
        <Skeleton w="full" h="50" rounded="md" />
        <Skeleton w="full" h="50" rounded="md" />
        <Skeleton w="full" h="50" rounded="md" />
        <Skeleton w="full" h="50" rounded="md" />
      </VStack>
    </Box>
  );
};

export default LoadingDetailAnime;
